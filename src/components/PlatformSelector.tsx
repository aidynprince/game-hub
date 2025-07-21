import { Button, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { usePlatform } from "./hooks/usePlatform";
import Platform from "./Platform";

interface Props {
    setSelectedPlatform: (selectedPlatform: string) => void;
    selectedPlatform?: string | null;
}

const PlatformSelector = ({ setSelectedPlatform, selectedPlatform }: Props) => {
    const { platformArray, error } = usePlatform();
    if (error) return null;
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    {selectedPlatform == "pc"
                        ? "PC (Windows)"
                        : selectedPlatform == "browser"
                        ? "Web Browser"
                        : "Platform"}{" "}
                    <FaChevronDown />
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.ItemGroup>
                            <Menu.ItemGroupLabel>Platforms</Menu.ItemGroupLabel>
                            {platformArray.map((plat) => (
                                <Menu.Item
                                    key={plat}
                                    value={plat}
                                    onClick={() => {
                                        if (plat == "PC (Windows)") {
                                            setSelectedPlatform("pc");
                                        } else if (plat == "Web Browser") {
                                            setSelectedPlatform("browser");
                                        } else {
                                            setSelectedPlatform("all");
                                        }
                                    }}
                                >
                                    {plat}
                                </Menu.Item>
                            ))}
                        </Menu.ItemGroup>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    );
};

export default PlatformSelector;
