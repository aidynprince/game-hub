import { useData } from "./useData";

export interface GamesObject {
    id: number;
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
}

export const useGames = () => {
    const { games, error, loading } = useData();

    return { games, error, loading };
};
