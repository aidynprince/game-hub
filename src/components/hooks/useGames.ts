import { useData } from "./useData";

export interface GamesObject {
    id: number;
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
}

export const useGames = (
    selectedGenre?: string | null,
    selectedPlatform?: string | null
) => {
    const endpoint2 = selectedPlatform
        ? `/games?platform=${selectedPlatform}`
        : "./games";

    const endpoint1 = selectedGenre
        ? `./games?category=${selectedGenre}`
        : "./games";

    const deps1 = [selectedGenre || null];
    const deps2 = [selectedPlatform || null];
    console.log(deps1, deps2);

    const { games, error, loading } = useData(
        endpoint1,
        endpoint2,
        deps1,
        deps2
    );

    return { games, error, loading };
};
