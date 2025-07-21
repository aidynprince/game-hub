import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";

function App() {
    const [selectedGenere, setSelectedgenre] = useState<string | null>();
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>();
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar></NavBar>
            </GridItem>

            <GridItem
                position="sticky"
                overflowY="auto"
                maxHeight="90vh"
                padding={5}
                area="aside"
                hideBelow="lg"
                scrollBehavior="smooth"
                // scrollMarginY="2"
            >
                {" "}
                <GameGenre
                    selectedGenre={selectedGenere || null}
                    onSelectCategory={(genre) => setSelectedgenre(genre)}
                ></GameGenre>
            </GridItem>
            <GridItem padding={5} area="main">
                <PlatformSelector
                    selectedPlatform={selectedPlatform}
                    setSelectedPlatform={setSelectedPlatform}
                ></PlatformSelector>
                <GameGrid
                    selectedPlatform={selectedPlatform}
                    selectedGenre={selectedGenere}
                ></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
