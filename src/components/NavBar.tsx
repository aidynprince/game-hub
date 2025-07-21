import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/aidynlogo.png";
import { Toggle } from "./darkmode";
const NavBar = () => {
    const { SwitchButton } = Toggle();
    return (
        <HStack justifyContent="space-between" padding={3}>
            <Image
                src={logo}
                boxSize="60px"
                borderRadius="5px"
                bg="white"
                alt="aidyn logo"
            ></Image>

            {SwitchButton}
        </HStack>
    );
};

export default NavBar;
