"use client";

import { Box, Heading, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import HotelCard from "./HotelCard";
import { hotelData } from "@/data";

export default function HotelSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = useBreakpointValue({ base: 270, md: 300, lg: 340 });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current && cardWidth) {
      const scrollAmount = direction === "left" ? -cardWidth - 20 : cardWidth + 20;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box bg="black" py="8" px={{ base: 4, md: 10 }} position="relative">
      <Heading size="5xl" color="white" mb="5">
        The Most Relevant
      </Heading>

      {/* Carousel Controls */}
      <IconButton
        aria-label="Scroll Left"
        position="absolute"
        left="2"
        top="50%"
        zIndex="1"
        onClick={() => scroll("left")}
        bg="white"
        size="sm"
        rounded="full"
        shadow="md"
        _hover={{ bg: "gray.100" }}
      >
        <FaChevronLeft color="var(--chakra-colors-brand-500)" />
      </IconButton>
      <IconButton
        aria-label="Scroll Right"
        position="absolute"
        right="2"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        onClick={() => scroll("right")}
        bg="white"
        size="sm"
        rounded="full"
        shadow="md"
        _hover={{ bg: "gray.100" }}
      >
        <FaChevronRight color="var(--chakra-colors-brand-500)" />
      </IconButton>

      <Flex
        ref={scrollRef}
        gap="5"
        overflowX="auto"
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
    </Box>
  );
}
