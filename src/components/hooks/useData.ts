import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { type GamesObject } from "./useGames";
import axios from "axios";

export const useData = (
    endpoint1: string,
    endpoint4?: string,
    endpoint2?: string,
    endpoint3?: string,
    deps1: any[] = [],
    deps2: any[] = [],
    deps3: any[] = [],
    deps4: any[] = []
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
        let requestThree = requestone;
        if (endpoint3) {
            requestThree = apiClient.get<GamesObject[]>(endpoint3, {
                signal: controller.signal,
            });
        }
        let requestFour = requestone;
        if (endpoint4) {
            requestFour = apiClient.get<GamesObject[]>(endpoint4, {
                signal: controller.signal,
            });
        }
        axios
            .all([requestone, requesttwo, requestThree, requestFour])
            .then(
                axios.spread(
                    (responseone, responsetwo, responsethree, responseFour) => {
                        setGames(responseFour.data);
                        setGames(responseone.data);
                        setGames(responsetwo.data);
                        setGames(responsethree.data);
                        setLoading(false);
                    }
                )
            )
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        return () => controller.abort();
    }, [...deps1, ...deps4, ...deps2, ...deps3]);
    if (error == "Request faied with status code 404") {
        setTimeout(() => {
            window.location.reload();
        }, 4000);
    }

    return { games, error, loading };
};
