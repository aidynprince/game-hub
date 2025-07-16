import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";

interface GamesObject {
    id: number;
    title: string;
}

interface GamesRes {
    count: number;
    data: GamesObject[];
}

const GameGrid = () => {
    const [games, setGames] = useState<GamesObject[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<GamesObject[]>("/games")
            .then((res) => {
                console.log(res.data);
                return setGames(res.data);
            })
            .catch((err) => setError(err.message));
    }, []);

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((g) =>
                    g.id === 0.1 ? (
                        <li key={g.id}>{g.title}</li>
                    ) : (
                        <li key={g.id}>{g.title}</li>
                    )
                )}
            </ul>
        </>
    );
};

export default GameGrid;
