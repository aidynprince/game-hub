import { SimpleGrid, Text } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const { error, games, loading } = useGames();
    let count = 0;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <>
            {console.log(loading)}
            {error && <Text>{error}</Text>}

            {
                <SimpleGrid
                    columns={{ sm: 1, md: 2, lg: 3 }}
                    padding={5}
                    alignItems="center"
                    justifyContent="center"
                    gap="40px"
                >
                    {loading &&
                        arr.map((el) => (
                            <GameCardContainer>
                                <GameCardSkeleton key={el}></GameCardSkeleton>
                            </GameCardContainer>
                        ))}
                    {games.map((g) => {
                        if (count > 21) return;
                        count++;

                        return (
                            <GameCardContainer>
                                <GameCard key={g.id} game={g}></GameCard>
                            </GameCardContainer>
                        );
                    })}
                </SimpleGrid>
            }
        </>
    );
};

export default GameGrid;
