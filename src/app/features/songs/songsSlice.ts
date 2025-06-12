import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Song {
  id: string;
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
  name: 'songs',
  initialState,
  reducers: {
    // Saga triggers this
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

    // Local actions (optional for adding/removing manually)
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    removeSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
    },
  },
});

// ✅ Correctly export ALL actions
export const { 
  fetchSongs, 
  fetchSongsSuccess, 
  fetchSongsFailure, 
  addSong, 
  removeSong 
} = songsSlice.actions;

export default songsSlice.reducer;
