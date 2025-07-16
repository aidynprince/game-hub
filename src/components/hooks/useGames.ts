import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface GamesObject {
    id: number;
    title: string;
    thumbnail: string;
    platform: string;
    genre: string;
}

export const useGames = () => {
    const [games, setGames] = useState<GamesObject[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        apiClient
            .get<GamesObject[]>("/games", { signal: controller.signal })
            .then((res) => {
                setGames(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, []);

    return { games, error, loading };
};
