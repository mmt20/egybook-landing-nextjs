"use client";

import { Box, Text, Flex, VStack, HStack, Input, IconButton, Portal } from "@chakra-ui/react";
import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  PopoverBody,
  PopoverArrow,
  PopoverCloseTrigger,
  PopoverPositioner,
} from "@chakra-ui/react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { useState } from "react";

// Type for locations
interface Location {
  name: string;
  description: string;
}

const popularLocations: Location[] = [
  { name: "Cairo", description: "City in Egypt" },
  { name: "Alexandria", description: "City in Egypt" },
  { name: "Hurghada", description: "City in Egypt" },
];

export const SearchPopover = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Location[]>([]);

  // Filter locations based on the search term
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      setSearchResults(popularLocations.filter(location => location.name.toLowerCase().includes(value.toLowerCase())));
    }
  };

  // Render location item
  const renderLocationItem = (location: Location) => (
    <HStack key={location.name} p={2} rounded="md" _hover={{ bg: "#2D2D2D", cursor: "pointer" }}>
      <Flex bg="whiteAlpha.200" rounded="full" p={2} justify="center" align="center" width="40px" height="40px">
        <FiMapPin color="white" />
      </Flex>
      <Box>
        <Text fontSize="sm">{location.name}</Text>
        <Text fontSize="xs" color="whiteAlpha.700">
          {location.description}
        </Text>
      </Box>
    </HStack>
  );

  return (
    <PopoverRoot>
      <PopoverTrigger asChild>
        <IconButton
          aria-label="Search"
          variant="solid"
          color="brand.400"
          rounded="full"
          bg="whiteAlpha.100"
          _hover={{ bg: "whiteAlpha.400" }}
          size={{ md: "sm", lg: "md" }}
          mr={{ base: 0, md: "60", lg: 20 }}
        >
          <FiSearch />
        </IconButton>
      </PopoverTrigger>

      <Portal>
        <PopoverPositioner>
          <PopoverContent bg="#1E1E1E" color="white" border="none" shadow="xl" width="350px">
            <PopoverArrow bg="#1E1E1E" />
            <PopoverCloseTrigger />
            <PopoverBody p={4}>
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
                bg="#2D2D2D"
                border="none"
                _focus={{ boxShadow: "none" }}
                _hover={{ bg: "#3A3A3A" }}
                rounded="md"
                mb={4}
              />
              {searchTerm.trim() === "" ? (
                <>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="whiteAlpha.700">
                    Most popular
                  </Text>
                  <VStack align="stretch" p={2}>
                    {popularLocations.map(renderLocationItem)}
                  </VStack>
                </>
              ) : searchResults.length > 0 ? (
                <>
                  <Text fontSize="sm" fontWeight="medium" mb={2} color="whiteAlpha.700">
                    Search Results
                  </Text>
                  <VStack align="stretch" p={2}>
                    {searchResults.map(renderLocationItem)}
                  </VStack>
                </>
              ) : (
                <Box textAlign="center" py={6}>
                  <Text>No results found for {`"${searchTerm}"`}</Text>
                </Box>
              )}
            </PopoverBody>
          </PopoverContent>
        </PopoverPositioner>
      </Portal>
    </PopoverRoot>
  );
};
