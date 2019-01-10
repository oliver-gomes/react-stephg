import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

//API = 50ce2fdc20d5d8824690275faa8a56ba37c56b2247aba8ad6dcd2c0f021cb90c

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      header: {
        Authorization:
          "Client-ID 50ce2fdc20d5d8824690275faa8a56ba37c56b2247aba8ad6dcd2c0f021cb90c"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
