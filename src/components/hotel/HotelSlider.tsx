"use client";

import { Box, Heading, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import HotelCard from "./HotelCard";
import { hotelData } from "@/data";

export default function HotelSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = useBreakpointValue({ base: 270, md: 400, lg: 450 });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardWidth) {
      const scrollAmount = direction === "left" ? -cardWidth - 20 : cardWidth + 20;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box bg="black" py="8" px={{ base: 4, md: 6 }}>
      <Heading color="white" mb="5" fontSize="3xl">
        The Most Relevant
      </Heading>

      <Flex position="relative">
        {/* Left Control */}
        <IconButton
          aria-label="Scroll Left"
          onClick={() => scroll("left")}
          bg="white"
          size="sm"
          rounded="full"
          shadow="md"
          position="absolute"
          left="-5"
          top={"30%"}
          zIndex="1"
          _hover={{ bg: "gray.200" }}
        >
          <FaChevronLeft color="var(--chakra-colors-brand-500)" />
        </IconButton>

        {/* Scrollable Hotel Cards */}
        <Flex
          ref={scrollRef}
          overflowX="auto"
          gap="5"
          px="10" // Ensure room for controls
          scrollSnapType="x mandatory"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {hotelData.map((hotel, index) => (
            <Box key={index} scrollSnapAlign="start">
              <HotelCard {...hotel} />
            </Box>
          ))}
        </Flex>

        {/* Right Control */}
        <IconButton
          aria-label="Scroll Right"
          onClick={() => scroll("right")}
          bg="white"
          size="sm"
          rounded="full"
          shadow="md"
          position="absolute"
          right="-5"
          top={"30%"}
          zIndex="1"
          _hover={{ bg: "gray.200" }}
        >
          <FaChevronRight color="var(--chakra-colors-brand-500)" />
        </IconButton>
      </Flex>
    </Box>
  );
}
