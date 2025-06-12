import { Button, Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react';
import type { Song } from '../hooks/useSongs';

interface Props {
  song: Song;
  onEdit: () => void;
  onDelete: () => void;
}

const SongsCard = ({ song, onEdit, onDelete }: Props) => {
  return (
    <Card
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ boxShadow: 'xl', transform: 'scale(1.02)' }}
    >
      <CardHeader>
        <Heading size="md" noOfLines={1}>{song.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text fontWeight="bold">Artist:</Text>
        <Text mb={2}>{song.artist}</Text>

        <Text fontWeight="bold">Album:</Text>
        <Text mb={2}>{song.album}</Text>

        <Text fontWeight="bold">Genre:</Text>
        <Text mb={2}>{song.genre}</Text>
      </CardBody>
      <CardFooter display="flex" justifyContent="space-between">
        <Button colorScheme="yellow" onClick={onEdit}>Edit</Button>
        <Button colorScheme="red" onClick={onDelete}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default SongsCard;
