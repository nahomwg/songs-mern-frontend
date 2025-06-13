import { Button, Box, SimpleGrid, Heading } from "@chakra-ui/react";
import useSongs from "../hooks/useSongs";
import SongCard from "./SongsCard";
import SongModal from "./SongModal";
import { useState } from "react";
import type { Song } from "../hooks/useSongs";
import SongsCardSkeleton from "./SongsCardSkeleton";

const SongsList = () => {
  const { songs, createSong, editSong, deleteSong, isLoading } = useSongs();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<Song | undefined>(undefined);
  const skeletons = [1, 2, 3, 4, 5, 6];
  
  const openAddModal = () => {
    setSelectedSong(undefined);
    setModalOpen(true);
  };

  const openEditModal = (song: Song) => {
    setSelectedSong(song);
    setModalOpen(true);
  };

  const handleSubmit = (songData: Omit<Song, '_id'>) => {
    if (selectedSong) {
      editSong(selectedSong._id, songData);
    } else {
      createSong(songData);
    }
  };

  return (
    <Box p={8}>
      <Heading mb={4} textAlign="center">🎵 My Songs Collection 🎵</Heading>
      <Button colorScheme="teal" mb={6} onClick={openAddModal}>+ Add New Song</Button>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {isLoading && skeletons.map(s => (<SongsCardSkeleton key={s}/>))}
        {songs.map((song) => (
          <SongCard
            key={song._id}
            song={song}
            onEdit={() => openEditModal(song)}
            onDelete={() => deleteSong(song._id)}
          />
        ))}
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
