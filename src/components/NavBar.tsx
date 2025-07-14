import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/aidynlogo.png";

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize="60px"></Image>
            <Text>Nav Bar</Text>
        </HStack>
    );
};

export default NavBar;
