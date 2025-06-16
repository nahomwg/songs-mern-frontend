import { Card, CardHeader, CardBody, CardFooter, Heading, Text, HStack, IconButton, VStack, useColorModeValue, Tooltip, useToast } from '@chakra-ui/react';
import { Edit, Trash2, Music } from 'lucide-react';
import type { Song } from '../app/features/songs/songsSlice';

interface Props {
  song: Song;
  onEdit: () => void;
  onDelete: () => void;
}

const SongsCard = ({ song, onEdit, onDelete }: Props) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const toast = useToast();

  const handleDelete = () => {
    onDelete();
    toast({
      title: 'Song deleted.',
      description: `${song.title} has been removed from your list.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Card
      bg={cardBg}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ boxShadow: 'xl', transform: 'scale(1.02)' }}
      position="relative"
      overflow="hidden"
    >
      <CardHeader>
        <HStack justify="space-between">
          <HStack>
            <Music size={18} />
            <Heading size="md" noOfLines={1}>{song.title}</Heading>
          </HStack>
          <HStack spacing={1}>
            <Tooltip label="Edit">
              <IconButton
                aria-label="Edit Song"
                icon={<Edit size={16} />}
                size="sm"
                variant="ghost"
                colorScheme="purple"
                onClick={onEdit}
              />
            </Tooltip>
            <Tooltip label="Delete">
              <IconButton
                aria-label="Delete Song"
                icon={<Trash2 size={16} />}
                size="sm"
                variant="ghost"
                colorScheme="red"
                onClick={handleDelete}
              />
            </Tooltip>
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack align="start" spacing={2} color={textColor}>
          <Text><strong>Artist:</strong> {song.artist}</Text>
          <Text><strong>Album:</strong> {song.album}</Text>
          <Text><strong>Genre:</strong> {song.genre}</Text>
        </VStack>
      </CardBody>
      <CardFooter justifyContent="center">
        <Text fontSize="xs" color={textColor}>Enjoy your music 🎵</Text>
      </CardFooter>
    </Card>
  );
};

export default SongsCard;
