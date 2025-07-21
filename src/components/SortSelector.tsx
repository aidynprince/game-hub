import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
    setSelectedSort: (selectedSort: string) => void;
    selectedSort?: string | null;
}

const SortSelector = ({ setSelectedSort, selectedSort }: Props) => {
    const sortArray = [
        "release-date",
        "popularity",
        "alphabetical",
        "relevance",
    ];
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    order By {selectedSort || ""}
                    <FaChevronDown />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.ItemGroup>
                            {sortArray.map((sort) => (
                                <Menu.Item
                                    key={sort}
                                    onClick={() => setSelectedSort(sort)}
                                    value={sort}
                                >
                                    {sort}
                                </Menu.Item>
                            ))}
                        </Menu.ItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default SortSelector;
