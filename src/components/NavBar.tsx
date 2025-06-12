import { HStack, Image, Text, Box } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <Box bg="teal.500" p={4} boxShadow="md" mb={4}>
      <HStack justifyContent="space-between">
        <HStack spacing={3}>
          <Image src={logo} boxSize="50px" borderRadius="full" />
          <Text fontSize="xl" fontWeight="bold" color="white">
            Music Hub 🎵
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
