import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail name="Will" post="I just joined" />
      <CommentDetail name="Sam" post="I just joined too" />
      <CommentDetail name="Amanda" post="Glad to be here" />
      <CommentDetail name="Raj" post="Wow!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
