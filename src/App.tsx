import "./App.css";
import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GameGenre from "./components/GameGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
    const [selectedGenere, setSelectedgenre] = useState<string | null>();
    const [selectedPlatform, setSelectedPlatform] = useState<string | null>();
    const [selectedSort, setSelectedSort] = useState<string | null>();
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
                <Box paddingLeft="20%" margin={2}>
                    <GameHeading
                        selectedGenere={selectedGenere}
                        selectedPlatform={selectedPlatform}
                        selectedSort={selectedSort}
                    ></GameHeading>
                </Box>
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
            <GridItem area="main">
                <HStack marginBottom={3} marginLeft={5} gap={3}>
                    <PlatformSelector
                        selectedPlatform={selectedPlatform}
                        setSelectedPlatform={setSelectedPlatform}
                    ></PlatformSelector>

                    <SortSelector
                        selectedSort={selectedSort}
                        setSelectedSort={setSelectedSort}
                    ></SortSelector>
                </HStack>
                <GameGrid
                    selectedPlatform={selectedPlatform}
                    selectedGenre={selectedGenere}
                    selectedSort={selectedSort}
                ></GameGrid>
            </GridItem>
        </Grid>
    );
}

export default App;
