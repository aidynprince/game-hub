import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card.Root>
            <Skeleton height="200px" />
            <Card.Body gap="2">
                <HStack justifyContent={"space-between"}>
                    <SkeletonText noOfLines={1} />
                    <SkeletonText noOfLines={1} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
};

export default GameCardSkeleton;
