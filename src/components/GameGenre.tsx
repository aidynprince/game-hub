import { Button, Link, List, Spinner } from "@chakra-ui/react";
import { useGenres } from "./hooks/useGenres";
import { Toggle } from "./darkmode";

interface Props {
    onSelectCategory: (category: string) => void;
    selectedGenre: string | null;
}

const GameGenre = ({ selectedGenre, onSelectCategory }: Props) => {
    const { genreArray, loading, error } = useGenres();
    const { bg, hoverBg, color, hoverColor } = Toggle();
    if (loading) return <Spinner></Spinner>;
    console.log(error);

    if (error) {
        return <div> cannot find this category</div>;
    }

    function modifyGenreArray(genre: string) {
        if (genreArray.includes(genre)) {
            genreArray.map((gen) => {
                if (gen === genre) {
                    let newGenre = gen.trim().split(" ").join("-");
                    onSelectCategory(newGenre);
                }
            });
        }
    }

    return (
        <List.Root>
            {genreArray.map((genre) => (
                <List.Item key={genre} paddingY={2} listStyle="none">
                    <Link href="#">
                        {" "}
                        <Button
                            onClick={() => {
                                modifyGenreArray(genre);
                            }}
                            bg={bg}
                            fontWeight={
                                genre === selectedGenre ? "bolder" : "normal"
                            }
                            color={color}
                            _hover={{
                                bg: hoverBg,
                                color: hoverColor,
                            }}
                            transition="background 0.2s ease-in-out"
                        >
                            {" "}
                            {genre}
                        </Button>
                    </Link>
                </List.Item>
            ))}
        </List.Root>
    );
};

export default GameGenre;
