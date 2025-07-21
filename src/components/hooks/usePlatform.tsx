import { useData } from "./useData";

export const usePlatform = () => {
    const { games, error, loading } = useData("./games", "", "");

    const genreSet = new Set<string>();

    games.map((item) => genreSet.add(item.platform));
    let platformArray = Array.from(genreSet);

    return { platformArray, error, loading };
};
