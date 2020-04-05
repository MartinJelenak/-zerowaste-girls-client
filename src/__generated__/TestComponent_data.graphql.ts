/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TestComponent_data = {
    readonly notes: ReadonlyArray<{
        readonly _id: string | null;
        readonly title: string | null;
        readonly prolog: string | null;
        readonly article: string | null;
    } | null> | null;
    readonly " $refType": "TestComponent_data";
};
export type TestComponent_data$data = TestComponent_data;
export type TestComponent_data$key = {
    readonly " $data"?: TestComponent_data$data;
    readonly " $fragmentRefs": FragmentRefs<"TestComponent_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TestComponent_data",
  "type": "Query",
  "metadata": null,
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
};
(node as any).hash = '6757aac7b0a370a0ec0a79f7c754366b';
export default node;
