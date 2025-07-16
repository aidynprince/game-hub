import {
    Badge,
    Card,
    HStack,
    Skeleton,
    SkeletonText,
    Stack,
} from "@chakra-ui/react";
import Platform from "./Platform";

const GameCardSkeleton = () => {
    return (
        <Card.Root maxW="sm" width={300} overflow="hidden">
            <Skeleton height="200px" width={300} />
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
