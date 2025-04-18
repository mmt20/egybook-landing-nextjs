"use client";

import { Box, Container, Heading, Text, Flex, Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import heroImg from "../../../public/HeroBG.png";
import GuestsPicker from "../ui/GuestsPicker";
import DatePicker from "../ui/DatePicker";
import LocationPicker from "../ui/LocationPicker";
import { useState } from "react";
import CalendarIcon from "../ui/icons/CalendarIcon";
import GroupPepoleIcon from "../ui/icons/GroupPepoleIcon";

export default function Hero() {
  const [selectedLocation, setSelectedLocation] = useState("Cairo, Egypt");
  const [dateRange, setDateRange] = useState("19 March 2025 - 27 March 2025");
  const [guests, setGuests] = useState<{
    adults: number;
    children: number;
    rooms: number;
  }>({
    adults: 2,
    children: 1,
    rooms: 1,
  });

  const formatGuests = () => {
    const parts = [];
    if (guests.adults) parts.push(`${guests.adults} Adult${guests.adults !== 1 ? "s" : ""}`);
    if (guests.children) parts.push(`${guests.children} Child${guests.children !== 1 ? "ren" : ""}`);
    if (guests.rooms) parts.push(`${guests.rooms} Room${guests.rooms !== 1 ? "s" : ""}`);
    return parts.join(", ");
  };

  return (
    <Box position="relative" height="600px">
      {/* Background */}
      <Box position="absolute" inset="0" zIndex="0">
        <Image src={heroImg} alt="Egypt landscape" fill style={{ objectFit: "cover" }} priority />
        <Box position="absolute" inset="0" bg="blackAlpha.700" />
      </Box>

      {/* Foreground Content */}
      <Container maxW="container.xl" height="100%" position="relative" zIndex="1">
        <Flex
          direction="column"
          justify="center"
          align={{ base: "flex-start", md: "flex-start" }}
          height="100%"
          color="white"
          textAlign={{ base: "center", md: "left" }}
          pl={{ base: 0, md: 10 }}
        >
          <HStack p={{ base: 1, md: 2 }} mb={{ base: 1, md: 3 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.600098 11.2L23.4001 0.399994L12.6001 23.2L10.2001 13.6L0.600098 11.2Z" fill="white" />
            </svg>
            <Text fontWeight="medium" fontSize={{ base: "xs", md: "md" }}>
              Egypt
            </Text>
          </HStack>

          <Heading
            as="h1"
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            fontFamily="Montserrat"
            mb={{ base: 1, md: 4 }}
            mt={{ base: 2, md: 0 }}
          >
            Hey!
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            fontFamily="Montserrat"
            mb={{ base: 1, md: 4 }}
          >
            Tell us where you want to stay
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} mb={{ base: 4, md: 8 }}>
            Book 450+ Curated Egyptian Hotels
          </Text>

          {/* Search Bar */}
          <Flex
            display={{ base: "block", md: "flex" }}
            direction={{ base: "column", md: "row" }}
            width="100%"
            maxW="980px"
            bg="rgba(64, 64, 64, 0.5)"
            backdropFilter="blur(5px)"
            borderRadius={{ base: "4xl", md: "full" }}
            gap={{ base: 2, md: 0 }}
          >
            {/* Location Picker */}
            <Box
              flex="1"
              borderRight={{ base: "none", md: "1px solid" }}
              borderBottom={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
              position="relative"
              height="60px"
              width="100%"
            >
              <Box position="absolute" inset="0" zIndex="2">
                <LocationPicker
                  selectedLocation={selectedLocation}
                  onLocationSelect={loc => setSelectedLocation(`${loc.name}, Egypt`)}
                />
              </Box>
            </Box>

            {/* Date Picker */}
            <Box
              px={{ base: 2, md: 6 }}
              flex="1"
              borderRight={{ base: "none", md: "1px solid" }}
              borderBottom={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
              position="relative"
              height="60px"
              width="100%"
              cursor={"pointer"}
            >
              <Box
                pointerEvents="none"
                display="flex"
                alignItems="center"
                px={4}
                height="100%"
                position="absolute"
                inset="0"
                zIndex="1"
              >
                <CalendarIcon />
                <Text truncate ml={2}>
                  {dateRange}
                </Text>
              </Box>
              <Box position="absolute" inset="0" zIndex="2">
                <DatePicker onDateChange={setDateRange} />
              </Box>
            </Box>

            {/* Guests Picker */}
            <Box
              flex="1"
              position="relative"
              height="60px"
              width="100%"
              borderBottom={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
              cursor={"pointer"}
            >
              <Box
                pointerEvents="none"
                display="flex"
                alignItems="center"
                px={4}
                height="100%"
                position="absolute"
                inset="0"
                zIndex="1"
              >
                <GroupPepoleIcon />
                <Text ml={2} truncate>
                  {formatGuests()}
                </Text>
              </Box>
              <Box position="absolute" inset="0" zIndex="2">
                <GuestsPicker guests={guests} onUpdateGuests={setGuests} />
              </Box>
            </Box>

            {/* Button */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="60px"
              px={2}
              py={{ base: 2, md: 0 }}
              width={{ base: "100%", md: "auto" }}
            >
              <Button
                bg="#346D52"
                color="white"
                w="100%"
                borderRadius="full"
                size="lg"
                fontSize="md"
                _hover={{ bg: "teal.700" }}
              >
                Explore Stays
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
