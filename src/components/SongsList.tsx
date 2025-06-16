import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { fetchSongs, type Song} from "../app/features/songs/songsSlice";
import SongCard from "./SongsCard";
import SongModal from "./SongModal";
import SongsCardSkeleton from "./SongsCardSkeleton";
//import { Song } from "../app/features/songs/songsSlice";

const SongsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { songs, loading } = useSelector((state: RootState) => state.songs);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | undefined>(undefined);

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

  const skeletons = [1, 2, 3, 4, 5, 6]; // show 6 skeleton cards while loading

  return (
    <Box p={8}>
      <Button colorScheme="teal" mb={6} onClick={openAddModal}>+ Add Song</Button>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {loading
          ? skeletons.map((skeleton) => <SongsCardSkeleton key={skeleton} />)
          : songs.map((song) => (
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
