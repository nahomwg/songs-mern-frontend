import { Card, CardHeader, CardBody, Skeleton, Box } from "@chakra-ui/react";

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
          <Skeleton height="15px" width="60px" mb={2} />
          <Skeleton height="15px" width="80%" />
        </Box>
        <Box mb={4}>
          <Skeleton height="15px" width="60px" mb={2} />
          <Skeleton height="15px" width="80%" />
        </Box>
        <Box>
          <Skeleton height="15px" width="60px" mb={2} />
          <Skeleton height="15px" width="80%" />
        </Box>
      </CardBody>
    </Card>
  );
};

export default SongsCardSkeleton;
