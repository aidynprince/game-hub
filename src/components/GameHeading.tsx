import { Heading } from "@chakra-ui/react";
interface Props {
    selectedSort?: string | null;
    selectedPlatform?: string | null;
    selectedGenere?: string | null;
}

const GameHeading = ({
    selectedSort,
    selectedPlatform,
    selectedGenere,
}: Props) => {
    return (
        <Heading>
            {" "}
            {selectedGenere ? selectedGenere + " " : ""}{" "}
            {selectedPlatform ? selectedPlatform + " " : ""}
            {selectedSort ? selectedSort + " " : ""}
            Games
        </Heading>
    );
};

export default GameHeading;
