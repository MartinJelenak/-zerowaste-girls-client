/// <reference types="react-scripts" />
declare module "babel-plugin-relay/macro" {
  export { graphql, QueryRenderer } from "react-relay";
}
declare module "found-relay" {
  const Resolver: any;
  export { Resolver };
}

declare module "farce" {
  const BrowserProtocol;
  const HashProtocol;
  const queryMiddleware;
  export { BrowserProtocol, HashProtocol, queryMiddleware };
}
