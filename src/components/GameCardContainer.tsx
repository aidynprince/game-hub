import { Box } from "@chakra-ui/react";
import React, { type ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
    return (
        <Box maxW="sm" width={300} overflow="hidden">
            {children}
        </Box>
    );
};

export default GameCardContainer;
