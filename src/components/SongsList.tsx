import { Input, Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { fetchSongs, type Song } from "../app/features/songs/songsSlice";
import SongCard from "./SongsCard";
import SongModal from "./SongModal";
import SongsCardSkeleton from "./SongsCardSkeleton";
//import { Song } from "../features/songs/songsSlice";

const SongsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { songs, loading } = useSelector((state: RootState) => state.songs);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | undefined>(undefined);
  const [filter, setFilter] = useState(""); // state for filter

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const openAddModal = () => {
    setSelectedSong(undefined);
    setModalOpen(true);
  };

  const openEditModal = (song: Song) => {
    setSelectedSong(song);
    setModalOpen(true);
  };

  const handleSubmit = (songData: Omit<Song, "_id">) => {
    if (selectedSong) {
      dispatch({ type: "songs/updateSongRequest", payload: { id: selectedSong._id, data: songData } });
    } else {
      dispatch({ type: "songs/addSongRequest", payload: songData });
    }
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "songs/deleteSongRequest", payload: id });
  };

  const skeletons = [1, 2, 3, 4, 5, 6];

  // filter logic (search by title, artist, album, genre)
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(filter.toLowerCase()) ||
    song.artist.toLowerCase().includes(filter.toLowerCase()) ||
    song.album.toLowerCase().includes(filter.toLowerCase()) ||
    song.genre.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box p={8}>
      <Button colorScheme="teal" mb={6} onClick={openAddModal}>+ Add Song</Button>

      {/* Filter Input */}
      <Input
        placeholder="Filter by title, artist, album, genre..."
        mb={6}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {loading
          ? skeletons.map((skeleton) => <SongsCardSkeleton key={skeleton} />)
          : filteredSongs.map((song) => (
              <SongCard
                key={song._id}
                song={song}
                onEdit={() => openEditModal(song)}
                onDelete={() => handleDelete(song._id)}
              />
            ))
        }
      </SimpleGrid>

      <SongModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        initialData={selectedSong}
      />
    </Box>
  );
};

export default SongsList;
