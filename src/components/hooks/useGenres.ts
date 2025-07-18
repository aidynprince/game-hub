import { useData } from "./useData";

export const useGenres = () => {
    const { games, error, loading } = useData();

    const genreSet = new Set<string>();

    games.map((item) => genreSet.add(item.genre));
    let genreArray = Array.from(genreSet);

    return { genreArray, error, loading };
};
