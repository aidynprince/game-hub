import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { usePlatform } from "./hooks/usePlatform";

const SortSelector = () => {
    // if (error) return null;
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    order By
                    <FaChevronDown />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.ItemGroup>
                            <Menu.ItemGroupLabel>Order by:</Menu.ItemGroupLabel>
                            <Menu.Item value="relevance">relevance</Menu.Item>
                            <Menu.Item value="alphabetical">
                                alphabetical
                            </Menu.Item>
                            <Menu.Item value="popularity">popularity</Menu.Item>
                            <Menu.Item value="Released-date">
                                Released Date
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;
