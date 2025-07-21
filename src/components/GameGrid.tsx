import { SimpleGrid } from "@chakra-ui/react";
import { useGames } from "./hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Props {
    selectedGenre?: string | null | undefined;
    selectedPlatform?: string | null | undefined;
    selectedSort?: string | null | undefined;
}

const GameGrid = ({ selectedGenre, selectedPlatform, selectedSort }: Props) => {
    const { error, games, loading } = useGames(
        selectedGenre,
        selectedPlatform,
        selectedSort
    );
    let count = 0;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (error) {
        console.log(error, games);

        return <div> cannot find this category Reloading page</div>;
    }

    return (
        <>
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
                            <GameCardContainer key={el}>
                                <GameCardSkeleton></GameCardSkeleton>
                            </GameCardContainer>
                        ))}
                    {games.map((g) => {
                        if (count > 21) return;
                        count++;

                        return (
                            <GameCardContainer key={g.id}>
                                <GameCard game={g}></GameCard>
                            </GameCardContainer>
                        );
                    })}
                </SimpleGrid>
            }
        </>
    );
};

export default GameGrid;
