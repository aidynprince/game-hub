import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./GameCard";
import { useState } from "react";

const GameGrid = () => {
    const { error, games } = useGames();
    let count = 0;
    let arr;
    return (
        <>
            {error && <Text>{error}</Text>}

            {
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3 }}
                    padding={5}
                    alignItems="center"
                    justifyContent="center"
                    gap="40px"
                >
                    {
                        (arr = games.map((g) => {
                            if (count > 21) return;
                            count++;
                            console.log(count);
                            return <GameCard game={g}></GameCard>;
                        }))
                    }
                </SimpleGrid>
            }
            {console.log(arr)}
        </>
    );
};

export default GameGrid;
