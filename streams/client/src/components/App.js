import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo <button>Click me</button>
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
