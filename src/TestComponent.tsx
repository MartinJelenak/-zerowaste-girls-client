import React from "react";
import * as _ from "lodash";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { TestComponent_data } from "./__generated__/TestComponent_data.graphql";

interface TestComponentProps {
  node: TestComponent_data;
}

function TestComponent(props: TestComponentProps) {
  console.log(props.node);

  return (
    <div>
      <div>OLAHEJ</div>
      {_.map(props.node, (row: any) => (
        <div>{row._id}</div>
      ))}
    </div>
  );
}

export default createFragmentContainer(TestComponent, {
  data: graphql`
    fragment TestComponent_data on Query {
      notes {
        _id
        title
      }
    }
  `,
});
