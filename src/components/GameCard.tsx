import { Card, Image, Text } from "@chakra-ui/react";
import type { GamesObject } from "./hooks/useGames";
import Platform from "./Platform";

interface Props {
    game: GamesObject;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card.Root maxW="sm" overflow="hidden">
                <Image
                    src={game.thumbnail}
                    alt="Green double couch with wooden legs"
                />
                <Card.Body gap="2">
                    <Card.Title>{game.title}</Card.Title>

                    {/* <Card.Description>
         
        </Card.Description> */}
                    <Text
                        textStyle="sm"
                        fontWeight="lighter"
                        letterSpacing="tight"
                        mt="2"
                        color="gray.500"
                    >
                        <Platform platform={game.platform}></Platform>
                    </Text>
                </Card.Body>
            </Card.Root>
        </>
    );
};

export default GameCard;
