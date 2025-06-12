import { useEffect, useState } from "react";
import { getAllSongs, addSong, updateSong, deleteSong as apiDeleteSong } from "../services/api";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const useSongs = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const fetchSongs = () => {
    setLoading(true);
    getAllSongs()
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const createSong = (song: Omit<Song, '_id'>) => {
    addSong(song)
      .then((newSong) => setSongs((prev) => [...prev, newSong]))
      .catch((err) => setError(err.message));
  };

  const editSong = (id: string, song: Omit<Song, '_id'>) => {
    updateSong(id, song)
      .then((updatedSong) => {
        setSongs((prev) =>
          prev.map((s) => (s._id === id ? updatedSong : s))
        );
      })
      .catch((err) => setError(err.message));
  };

  const deleteSong = (id: string) => {
    apiDeleteSong(id)
      .then(() => setSongs((prev) => prev.filter((s) => s._id !== id)))
      .catch((err) => setError(err.message));
  };

  return { songs, error, isLoading, createSong, editSong, deleteSong };
};

export default useSongs;
