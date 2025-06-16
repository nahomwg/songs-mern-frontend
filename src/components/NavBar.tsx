import {
  HStack,
  Image,
  Text,
  Box,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="teal.500" p={4} boxShadow="md" mb={4}>
      <HStack justifyContent="space-between">
        <HStack spacing={3}>
          <Image src={logo} boxSize="50px" borderRadius="full" />
          <Text fontSize="xl" fontWeight="bold" color="white">
            Music Hub 🎵
          </Text>
        </HStack>
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          colorScheme="teal"
        />
      </HStack>
    </Box>
  );
};

export default NavBar;
