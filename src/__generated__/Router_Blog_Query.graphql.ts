/* tslint:disable */
/* eslint-disable */
/* @relayHash 33f31f3e8048889605866a51ca8be47a */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Router_Blog_QueryVariables = {};
export type Router_Blog_QueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"Blog_data">;
};
export type Router_Blog_Query = {
    readonly response: Router_Blog_QueryResponse;
    readonly variables: Router_Blog_QueryVariables;
};



/*
query Router_Blog_Query {
  ...Blog_data
}

fragment Blog_data on Query {
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
    "name": "Router_Blog_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Blog_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Router_Blog_Query",
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
    "name": "Router_Blog_Query",
    "id": null,
    "text": "query Router_Blog_Query {\n  ...Blog_data\n}\n\nfragment Blog_data on Query {\n  notes {\n    _id\n    title\n    prolog\n    article\n  }\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '82e4c37d43675adb885eac95961e6bf2';
export default node;
