import axios from "axios";
import type { Song } from "../app/features/songs/songsSlice";
import type { Stats } from "../app/features/stats/statsSlice";

const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export const getAllSongsAPI = async (): Promise<Song[]> => {
  const res = await axios.get(`${BASE_URL}/songs`);
  return res.data;
};

export const addSongAPI = async (song: Omit<Song, "_id">): Promise<Song> => {
  const res = await axios.post(`${BASE_URL}/songs`, song);
  return res.data;
};

export const updateSongAPI = async (
  id: string,
  data: Omit<Song, "_id">
): Promise<Song> => {
  const res = await axios.put(`${BASE_URL}/songs/${id}`, { id, ...data });
  return res.data;
};

export const deleteSongAPI = async (id: string) => {
  await axios.delete(`${BASE_URL}/songs/${id}`);
};
export const getStatsOverview = async (): Promise<Stats> => {
  const res = await axios.get(`${BASE_URL}/stats/overview`);
  return res.data;
};
