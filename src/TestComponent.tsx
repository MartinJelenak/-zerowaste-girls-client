import React from "react";
import * as _ from "lodash";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer, Environment, RelayProp } from "react-relay";
import { TestComponent_data } from "./__generated__/TestComponent_data.graphql";
import { Link } from "found";

interface TestComponentProps {
  data: TestComponent_data;
  relay?: RelayProp;
}

function TestComponent(props: TestComponentProps) {
  console.log(props);

  return (
    <div>
      <Link to="/secondcomp" activeClassName="active">
        <button>test</button>
      </Link>
      <div>OLAHEJ</div>
      {_.map(props.data.notes, (row: any) => (
        <div key={row._id}>{row._id}</div>
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
        prolog
        article
      }
    }
  `,
});
