import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/aidynlogo.png";
import { Toggle } from "./darkmode";
const NavBar = () => {
    return (
        <HStack justifyContent="space-between" padding={3}>
            <Image src={logo} boxSize="60px"></Image>

            <Toggle></Toggle>
        </HStack>
    );
};

export default NavBar;
