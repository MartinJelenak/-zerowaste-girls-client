import {
  createFarceRouter,
  createRender,
  hotRouteConfig,
  makeRouteConfig,
  RenderErrorArgs,
  Route,
  Redirect,
} from "found";
import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { BrowserProtocol, queryMiddleware } from "farce";
// import { Resolver } from "found-relay";
import App from "./App";
import TestComponent from "./TestComponent";
import SecondComponent from "./components/SecondComponent";
import Blog from "./Blog";
// import { spawn } from "child_process";

export const routes = makeRouteConfig(
  <Route path="/" component={App}>
    <Route
      Component={Blog}
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
    <Route path="progress" Component={SecondComponent} />
  </Route>
);

export default createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: hotRouteConfig(routes),
  render: createRender({
    // eslint-disable-next-line react/display-name
    renderError: (args: RenderErrorArgs) => <span>Page not found</span>,
  }),
});
