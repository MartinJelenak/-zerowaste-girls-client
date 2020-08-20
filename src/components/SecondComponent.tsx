import React from "react";
import { Link } from "found";

export default function SecondComponent() {
  return (
    <>
      <div>
        <h1>SECOND COMPONENT</h1>
      </div>
      <div>
        <Link to="/">
          <button>back</button>
        </Link>
      </div>
    </>
  );
}
