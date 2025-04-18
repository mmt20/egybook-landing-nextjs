"use client";

import { useState, useRef } from "react";
import { Text, Flex, VStack, Input, Box } from "@chakra-ui/react";
import { Popover } from "@chakra-ui/react";
import MapIcon from "./icons/MapIcon";

const locations = [
  { name: "Cairo", region: "City in Egypt" },
  { name: "Hurghada", region: "City in Egypt" },
  { name: "Sharm El-Sheikh", region: "City in Egypt" },
  { name: "Luxor & Aswan", region: "City in Egypt" },
];

interface IProps {
  selectedLocation: string;
  onLocationSelect: (loc: { name: string; region: string }) => void;
}

const LocationPicker = ({ selectedLocation, onLocationSelect }: IProps) => {
  const [searchInput, setSearchInput] = useState(selectedLocation);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const filterValue = searchInput.split(",")[0].trim().toLowerCase();

  const filteredLocations = locations.filter(loc => loc.name.toLowerCase().includes(filterValue.toLowerCase()));
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleLocationClick = (location: { name: string; region: string }) => {
    onLocationSelect(location);
    setSearchInput(`${location.name}, Egypt`);
    setIsPopoverOpen(false);
    inputRef.current?.blur();
  };

  const handleOpenChange = (details: { open: boolean }) => {
    setIsPopoverOpen(details.open);
  };

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <Box height="100%" width="100%">
          <Flex height="100%" width="100%" align="center" px={4} py={2} gap={2} cursor="pointer">
            <MapIcon />
            <Input
              ref={inputRef}
              value={searchInput}
              onChange={handleInputChange}
              placeholder="Where are you going?"
              color="white"
              fontWeight="medium"
              px={2}
            />
          </Flex>
        </Box>
      </Popover.Trigger>

      <Popover.Positioner>
        <Popover.Content bg="#FFFFFF40" backdropFilter="blur(12px)" borderRadius="2xl" width="250px">
          <Popover.Body>
            <VStack p={1} align="stretch">
              {filteredLocations.map((location, index) => (
                <Flex
                  key={index}
                  px={4}
                  py={3}
                  bg="transparent"
                  borderRadius="2xl"
                  align="center"
                  gap={4}
                  cursor="pointer"
                  transition="background 0.2s"
                  _hover={{ bg: "whiteAlpha.400" }}
                  onClick={() => handleLocationClick(location)}
                >
                  <Flex
                    w="40px"
                    h="40px"
                    bg="#F6EEE5"
                    borderRadius="4xl"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <MapIcon />
                  </Flex>
                  <Box>
                    <Text fontWeight="medium" color="white">
                      {location.name}
                    </Text>
                    <Text fontSize="sm" color="whiteAlpha.800">
                      {location.region}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

export default LocationPicker;
