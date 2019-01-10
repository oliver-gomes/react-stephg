import React from "react";
import unsplash from "../api/unsplash.js";
import SearchBar from "./SearchBar";

//API = 50ce2fdc20d5d8824690275faa8a56ba37c56b2247aba8ad6dcd2c0f021cb90c

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({
      images: response.data.results
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images
      </div>
    );
  }
}

export default App;
