import { useState, useEffect } from "react";
import { getStatsOverview } from "../services/api";

export interface Stats {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}

const useStats = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStatsOverview()
      .then((data) => setStats(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { stats, error, isLoading };
};

export default useStats;
