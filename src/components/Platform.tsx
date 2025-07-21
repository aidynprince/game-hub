import { Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaWindows, FaGlobe, FaNotEqual } from "react-icons/fa";

interface Props {
    platform: string;
}

const Platform = ({ platform }: Props) => {
    const IconMap: { [key: string]: IconType } = {
        "PC (Windows)": FaWindows,
        "Web Browser": FaGlobe,
    };

    return <Icon as={IconMap[platform] ?? FaNotEqual}></Icon>;
};

export default Platform;
