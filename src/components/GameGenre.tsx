import { useGenres } from "./hooks/useGenres";

const GameGenre = () => {
    const { genreArray } = useGenres();
    return (
        <ul>
            {genreArray.map((genre) => (
                <li key={genre}>{genre}</li>
            ))}
        </ul>
    );
};

export default GameGenre;
