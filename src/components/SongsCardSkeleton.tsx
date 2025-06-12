import { Card, CardBody, CardFooter, CardHeader, Skeleton, SkeletonText } from '@chakra-ui/react'

const SongsCardSkeleton = () => {
  return (
    <Card>
         <CardHeader>
            <Skeleton/>
         </CardHeader>
        <CardBody>
            <SkeletonText/>           
        </CardBody>
        <CardFooter>
            <SkeletonText/>   
        </CardFooter>
    </Card>
  )
}

export default SongsCardSkeleton