import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Heading, Spinner, Alert } from "@chakra-ui/react";
import useStats from "../hooks/useStat";

const StatsPage = () => {
  const { stats, error, isLoading } = useStats();

  if (isLoading) return <Spinner size="xl" />;
  if (error) return <Alert status="error">{error}</Alert>;

  return (
    <Box p={4}>
      <Heading mb={6}>📊 Song Statistics Overview</Heading>
      {stats && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          <StatCard label="Total Songs" value={stats.totalSongs} />
          <StatCard label="Total Artists" value={stats.totalArtists} />
          <StatCard label="Total Albums" value={stats.totalAlbums} />
          <StatCard label="Total Genres" value={stats.totalGenres} />
        </SimpleGrid>
      )}
    </Box>
  );
};

interface StatCardProps {
  label: string;
  value: number;
}

const StatCard = ({ label, value }: StatCardProps) => (
  <Stat
    p={4}
    border="1px solid"
    borderColor="gray.200"
    borderRadius="md"
    boxShadow="md"
    textAlign="center"
    _hover={{ transform: 'scale(1.05)', boxShadow: 'lg' }}
    transition="0.3s"
  >
    <StatLabel fontSize="lg">{label}</StatLabel>
    <StatNumber fontSize="3xl" color="teal.500">{value}</StatNumber>
  </Stat>
);

export default StatsPage;
