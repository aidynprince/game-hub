import { Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaWindows, FaGlobe } from "react-icons/fa";

interface Props {
    platform: string;
}

const Platform = ({ platform }: Props) => {
    const IconMap: { [key: string]: IconType } = {
        "PC (Windows)": FaWindows,
        "Web Browser": FaGlobe,
    };

    return <Icon as={IconMap[platform]}></Icon>;
};

export default Platform;
