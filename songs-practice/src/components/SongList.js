import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return (
      <div>
        <h1>Songlist</h1>
        {this.props.songs.map((song, id) => (
          <h2 key={id}>{song.title}</h2>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);
