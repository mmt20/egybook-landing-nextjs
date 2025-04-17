"use client";

import { useState, useRef } from "react";
import { Text, Flex, VStack, Input, Box } from "@chakra-ui/react";
import { Popover } from "@chakra-ui/react";
import MapIcon from "./icons/MapIcon";

const locations = [
  { name: "Cairo", region: "Egypt Capital" },
  { name: "Hurghada", region: "Red Sea" },
  { name: "Sharm El-Sheikh", region: "South Sinai" },
];

interface LocationPickerProps {
  selectedLocation: string;
  onLocationSelect: (loc: { name: string; region: string }) => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({ selectedLocation, onLocationSelect }) => {
  const [searchInput, setSearchInput] = useState(selectedLocation);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const filteredLocations = locations.filter(loc => loc.name.toLowerCase().includes(searchInput.toLowerCase()));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchInput = e.target.value;
    setSearchInput(newSearchInput);
    setIsPopoverOpen(newSearchInput.length >= 3);
  };

  const handleLocationClick = (location: { name: string; region: string }) => {
    onLocationSelect(location);
    setSearchInput(`${location.name}, Egypt`);
    setIsPopoverOpen(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleInputFocus = () => {
    // By leaving this function empty, the popover will not open on focus.
    // It will only open when the user types 3 or more characters.
  };

  const handleOpenChange = (details: { open: boolean }) => {
    setIsPopoverOpen(details.open);
  };

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger asChild>
        <Box height="100%" width="100%">
          <Flex as="div" height="100%" width="100%" align="center" px={4} cursor="pointer">
            <MapIcon />
            <Input
              ref={inputRef}
              value={searchInput}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Where are you going?"
              border="none"
              color="white"
              _placeholder={{ color: "whiteAlpha.700" }}
              _focus={{ outline: "none" }}
            />
          </Flex>
        </Box>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content width="300px" boxShadow="xl">
          <Popover.Arrow />
          <Popover.Body>
            <VStack align="stretch" p={0}>
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location, index) => (
                  <Flex
                    key={index}
                    p={3}
                    cursor="pointer"
                    onClick={() => handleLocationClick(location)}
                    _hover={{ bg: "gray.100" }}
                    borderBottom={index < filteredLocations.length - 1 ? "1px solid" : "none"}
                    borderColor="gray.200"
                  >
                    <VStack align="start" p={1}>
                      <Text fontWeight="bold">{location.name}</Text>
                      <Text fontSize="sm" color="gray.600">
                        {location.region}
                      </Text>
                    </VStack>
                  </Flex>
                ))
              ) : (
                <Text p={3} color="gray.500">
                  No locations found
                </Text>
              )}
            </VStack>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};

export default LocationPicker;
