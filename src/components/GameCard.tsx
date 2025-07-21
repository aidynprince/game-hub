import { Badge, Box, Card, HStack, Image } from "@chakra-ui/react";
import type { GamesObject } from "./hooks/useGames";
import Platform from "./Platform";

interface Props {
    game: GamesObject;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card.Root>
                <Image
                    overflow="hidden"
                    src={game.thumbnail}
                    alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                    <Box>
                        <Card.Title>{game.title}</Card.Title>

                        {/* <Card.Description>
         
        </Card.Description> */}

                        <HStack
                            justifyContent={"space-between"}
                            textStyle="sm"
                            fontWeight="lighter"
                            letterSpacing="tight"
                            mt="2"
                            color="gray.500"
                        >
                            {" "}
                            <Platform platform={game.platform}></Platform>
                            <Badge>{game.genre}</Badge>
                        </HStack>
                    </Box>
                </Card.Body>
            </Card.Root>
        </>
    );
};

export default GameCard;
