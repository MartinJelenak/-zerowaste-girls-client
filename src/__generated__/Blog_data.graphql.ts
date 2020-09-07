/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Blog_data = {
    readonly notes: ReadonlyArray<{
        readonly _id: string | null;
        readonly title: string | null;
        readonly prolog: string | null;
        readonly article: string | null;
    } | null> | null;
    readonly " $refType": "Blog_data";
};
export type Blog_data$data = Blog_data;
export type Blog_data$key = {
    readonly " $data"?: Blog_data$data;
    readonly " $fragmentRefs": FragmentRefs<"Blog_data">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Blog_data",
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
(node as any).hash = 'a5b722e1fed5990febf76c8bf42698a9';
export default node;
