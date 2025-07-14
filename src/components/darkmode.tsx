("use client");

import { useColorMode } from "./ui/color-mode";

import { Switch } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Btn = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <Button variant="outline" bg="red" onClick={toggleColorMode}>
            Toggle Mode
        </Button>
    );
};

const Toggle = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <Switch.Root
            checked={colorMode === "dark"}
            colorPalette="green"
            onChange={toggleColorMode}
        >
            <Switch.HiddenInput />
            <Switch.Control>
                <Switch.Thumb />
            </Switch.Control>
            <Switch.Label />
        </Switch.Root>
    );
};
export { Btn, Toggle };
