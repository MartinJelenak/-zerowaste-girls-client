/* tslint:disable */
/* eslint-disable */
/* @relayHash b224ca3403c7b79c7128740a9750e197 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Router_TestComponent_QueryVariables = {};
export type Router_TestComponent_QueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TestComponent_data">;
};
export type Router_TestComponent_Query = {
    readonly response: Router_TestComponent_QueryResponse;
    readonly variables: Router_TestComponent_QueryVariables;
};



/*
query Router_TestComponent_Query {
  ...TestComponent_data
}

fragment TestComponent_data on Query {
  notes {
    _id
    title
    prolog
    article
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Router_TestComponent_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "TestComponent_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Router_TestComponent_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "notes",
        "storageKey": null,
        "args": null,
        "concreteType": "Note",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "prolog",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "article",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "Router_TestComponent_Query",
    "id": null,
    "text": "query Router_TestComponent_Query {\n  ...TestComponent_data\n}\n\nfragment TestComponent_data on Query {\n  notes {\n    _id\n    title\n    prolog\n    article\n  }\n}\n",
    "metadata": {}
  }
};
(node as any).hash = 'd31363b9bcb904d00d8497420c272a84';
export default node;
