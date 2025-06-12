import apiClient from './api-client';
import type { Song } from '../hooks/useSongs';

export const getAllSongs = async () => {
  const res = await apiClient.get<Song[]>('/songs');
  return res.data;
};

export const addSong = async (song: Omit<Song, '_id'>) => {
  const res = await apiClient.post<Song>('/songs', song);
  return res.data;
};

export const updateSong = async (id: string, song: Omit<Song, '_id'>) => {
  const res = await apiClient.put<Song>(`/songs/${id}`, { id, ...song });
  return res.data;
};

export const deleteSong = async (id: string) => {
  await apiClient.delete(`/songs/${id}`);
};
export const getStatsOverview = async () => {
  const res = await apiClient.get('/stats/overview');
  return res.data;
};
