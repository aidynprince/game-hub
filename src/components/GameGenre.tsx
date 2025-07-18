import { List, Spinner } from "@chakra-ui/react";
import { useGenres } from "./hooks/useGenres";

const GameGenre = () => {
    const { genreArray, loading, error } = useGenres();

    if (loading) return <Spinner></Spinner>;
    if (error) return null;
    return (
        <List.Root>
            {genreArray.map((genre) => (
                <List.Item key={genre} listStyle="none">
                    {genre}
                </List.Item>
            ))}
        </List.Root>
    );
};

export default GameGenre;
