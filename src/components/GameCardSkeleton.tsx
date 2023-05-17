import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card width="300px" borderRadius={10} overflow="hidden">
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton
