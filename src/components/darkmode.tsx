("use client");

import { useColorMode, useColorModeValue } from "./ui/color-mode";

import { Switch } from "@chakra-ui/react";

// const Btn = () => {
//     const { toggleColorMode } = useColorMode();
//     return (
//         <Button variant="outline" bg="red" onClick={toggleColorMode}>
//             Toggle Mode
//         </Button>
//     );
// };

const Toggle = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const bg = useColorModeValue("white", "black");
    const hoverBg = useColorModeValue("black", "white");
    const color = useColorModeValue("black", "white");
    const hoverColor = useColorModeValue("white", "black");

    const SwitchButton = (
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
    return { SwitchButton, bg, hoverBg, color, hoverColor };
};
export { Toggle };
