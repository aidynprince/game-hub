import { Card, Image, Text } from "@chakra-ui/react";
import type { GamesObject } from "./hooks/useGames";

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
                    {/* <Text
                        textStyle="2xl"
                        fontWeight="medium"
                        letterSpacing="tight"
                        mt="2"
                    >
                        $450
                    </Text> */}
                </Card.Body>
            </Card.Root>
        </>
    );
};

export default GameCard;
