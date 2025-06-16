import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongsState {
  songs: Song[];
  loading: boolean;
  error?: string;
}

const initialState: SongsState = {
  songs: [],
  loading: false,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongs: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex((s) => s._id === action.payload._id);
      if (index !== -1) state.songs[index] = action.payload;
    },
    deleteSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  updateSong,
  deleteSong,
} = songsSlice.actions;
export default songsSlice.reducer;
