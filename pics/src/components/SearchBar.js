import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form ">
          <div className="field ">
            <label>
              <h3>
                <i class="search icon" />
                Image Search
              </h3>
            </label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Search here"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
