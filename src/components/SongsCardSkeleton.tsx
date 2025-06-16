import { Card, CardHeader, CardBody, CardFooter, Skeleton, Box, HStack } from '@chakra-ui/react';

const SongsCardSkeleton = () => {
  return (
    <Card
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
    >
      <CardHeader>
        <Skeleton height="20px" width="80%" /> {/* Title Skeleton */}
      </CardHeader>

      <CardBody>
        <Box mb={4}>
          <Skeleton height="15px" width="60px" mb={2} /> {/* Artist Label */}
          <Skeleton height="15px" width="80%" />
        </Box>
        <Box mb={4}>
          <Skeleton height="15px" width="60px" mb={2} /> {/* Album Label */}
          <Skeleton height="15px" width="80%" />
        </Box>
        <Box>
          <Skeleton height="15px" width="60px" mb={2} /> {/* Genre Label */}
          <Skeleton height="15px" width="80%" />
        </Box>
      </CardBody>

      <CardFooter>
        <HStack spacing={4}>
          <Skeleton height="30px" width="60px" /> {/* Edit button */}
          <Skeleton height="30px" width="60px" /> {/* Delete button */}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default SongsCardSkeleton;
