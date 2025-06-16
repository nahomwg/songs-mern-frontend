import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
  ModalCloseButton, ModalFooter, Button, Input, Stack
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import type { Song } from '../app/features/songs/songsSlice';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Song, '_id'>) => void;
  initialData?: Song; // for Edit
}

const SongModal = ({ isOpen, onClose, onSubmit, initialData }: Props) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
  if (initialData) {
    // Editing existing song
    setTitle(initialData.title);
    setArtist(initialData.artist);
    setAlbum(initialData.album);
    setGenre(initialData.genre);
  } else {
    // Adding new song: reset all fields
    setTitle('');
    setArtist('');
    setAlbum('');
    setGenre('');
  }
}, [initialData, isOpen]);


  const handleSubmit = () => {
    onSubmit({ title, artist, album, genre });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{initialData ? 'Edit Song' : 'Add New Song'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={3}>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
            <Input placeholder="Album" value={album} onChange={(e) => setAlbum(e.target.value)} />
            <Input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            {initialData ? 'Update' : 'Add'}
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SongModal;
