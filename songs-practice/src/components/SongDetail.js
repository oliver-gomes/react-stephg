import React from "react";
import { connect } from "react-redux";

function SongDetail({ song }) {
  if (!song) {
    return <div>Select a song</div>;
  } else {
    return (
      <div>
        Title: {song.title} <br /> Duration: {song.duration}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
