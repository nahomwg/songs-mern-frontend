import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Stats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}

interface StatsState {
  stats: Stats | null;
  loading: boolean;
  error?: string;
}

const initialState: StatsState = {
  stats: null,
  loading: false,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    fetchStats: (state) => {
      state.loading = true;
    },
    fetchStatsSuccess: (state, action: PayloadAction<Stats>) => {
      state.stats = action.payload;
      state.loading = false;
    },
    fetchStatsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchStats, fetchStatsSuccess, fetchStatsFailure } =
  statsSlice.actions;
export default statsSlice.reducer;
