import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Smells like Teen Spirit",
      duration: "4:05"
    },
    {
      title: "Enter Sandman",
      duration: "3:15"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
