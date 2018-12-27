import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Will"
          post="I just joined"
          timeAgo="Today at 4:45PM"
        />
      </ApprovalCard>
      <CommentDetail
        name="Sam"
        post="I just joined too"
        timeAgo="Today at 2:00PM"
      />
      <ApprovalCard>
        <CommentDetail
          name="Amanda"
          post="Glad to be here"
          timeAgo="Today at 7:15PM"
        />
      </ApprovalCard>
      <CommentDetail name="Raj" post="Wow!" timeAgo="Yesterday at 12:05PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
