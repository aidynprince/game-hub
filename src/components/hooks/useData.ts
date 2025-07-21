import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { type GamesObject } from "./useGames";
import axios from "axios";

export const useData = (
    endpoint1: string,
    endpoint2?: string,
    deps1: any[] = [],
    deps2: any[] = []
) => {
    const [games, setGames] = useState<GamesObject[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        const requestone = apiClient.get<GamesObject[]>(endpoint1, {
            signal: controller.signal,
        });
        let requesttwo = requestone;

        if (endpoint2) {
            requesttwo = apiClient.get<GamesObject[]>(endpoint2, {
                signal: controller.signal,
            });
        }
        axios
            .all([requestone, requesttwo])
            .then(
                axios.spread((responseone, responsetwo) => {
                    setGames(responseone.data);
                    setGames(responsetwo.data);
                    setLoading(false);
                })
            )
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, [...deps1, ...deps2]);
    if (error == "Request faied with status code 404") {
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    }

    return { games, error, loading };
};
