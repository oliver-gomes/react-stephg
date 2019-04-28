import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song, id) => (
      <div className="item" key={id}>
        <div className="right floated content">
          <button
            className="ui button primary"
            onClick={() => this.props.selectSong(song)}
          >
            select
          </button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    songs: state.songs,
    selectedSong: state.selectedSong
  };
};

export default connect(
  mapStateToProps,
  {
    selectSong: selectSong
  }
)(SongList);
