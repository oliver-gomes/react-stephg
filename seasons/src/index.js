import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = {
    latitude: null
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude
        }),
      err => console.log(err)
    );
  }
  render() {
    return <div>Latitude: {this.state.latitude}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
