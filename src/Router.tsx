import {
  createFarceRouter,
  createRender,
  hotRouteConfig,
  makeRouteConfig,
  RenderErrorArgs,
  Route,
} from "found";
import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { BrowserProtocol, queryMiddleware } from "farce";
import { Resolver } from "found-relay";
import App from "./App";
import TestComponent from "./TestComponent";
import { spawn } from "child_process";

export const historyMiddlewares = [queryMiddleware];

export const routes = makeRouteConfig(
  <Route
    path="/"
    Component={TestComponent}
    query={graphql`
      query Router_TestComponent_Query {
        ...TestComponent_data
      }
    `}
    render={(args: any) => {
      const { Component, props, error } = args;

      if (error) {
        return <>error</>;
      }

      if (!Component || !props) {
        return <>Loading</>;
      }

      return <Component data={props as any} />;
    }}
  ></Route>
);

export default createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: hotRouteConfig(routes),
  render: createRender({
    // eslint-disable-next-line react/display-name
    renderError: (args: RenderErrorArgs) => <span>error</span>,
  }),
});
