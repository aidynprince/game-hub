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
    selectedPlatform?: string | null,
    selectedSort?: string | null
) => {
    let endpoint4;
    if (selectedGenre && selectedPlatform) {
        endpoint4 = selectedSort
            ? `/filter?tag=${selectedGenre}&platform=${selectedPlatform}`
            : "./games";
    }
    const endpoint1 = selectedGenre
        ? `./games?category=${selectedGenre}`
        : "./games";
    const endpoint2 = selectedPlatform
        ? `/games?platform=${selectedPlatform}`
        : "./games";
    const endpoint3 = selectedSort
        ? `./games?sort-by=${selectedSort}`
        : "./games";

    const deps1 = [selectedGenre || null];
    const deps2 = [selectedPlatform || null];
    const deps3 = [selectedSort || null];
    const deps4 = [selectedSort, selectedPlatform || null];

    console.log(deps1, deps2, deps3);

    const { games, error, loading } = useData(
        endpoint1,
        endpoint4,
        endpoint2,
        endpoint3,
        deps1,
        deps4,
        deps2,
        deps3
    );

    return { games, error, loading };
};
