"use client";
import { Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PlaceCard from "./PlaceCard";
import { placeData } from "@/data";
import { useRef, useState, useEffect } from "react";

export default function PlaceSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);

      checkScrollPosition();
      return () => scrollElement.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -220 : 220; // Card width + gap
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box py="8" px={{ base: 4, md: 6 }}>
      <Heading color="white" mb="5" fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" pl={{ base: 0, md: 2 }}>
        Discover New Places
      </Heading>

      <Flex position="relative">
        {/* Left Control */}
        {showLeftArrow && (
          <IconButton
            aria-label="Scroll Left"
            onClick={() => scroll("left")}
            bg="white"
            size="sm"
            rounded="full"
            shadow="md"
            position="absolute"
            left="-4"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            _hover={{ bg: "gray.200" }}
            color="var(--chakra-colors-brand-500)"
          >
            <FaChevronLeft />
          </IconButton>
        )}

        {/* Scrollable Place Cards */}
        <Flex
          ref={scrollRef}
          overflowX="auto"
          gap="4"
          px="4"
          py="2"
          scrollSnapType="x mandatory"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {placeData.map((place, index) => (
            <Box key={index} scrollSnapAlign="start" flexShrink={0}>
              <PlaceCard {...place} />
            </Box>
          ))}
        </Flex>

        {/* Right Control */}
        {showRightArrow && (
          <IconButton
            aria-label="Scroll Right"
            onClick={() => scroll("right")}
            bg="white"
            size="sm"
            rounded="full"
            shadow="md"
            position="absolute"
            right="-4"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            _hover={{ bg: "gray.200" }}
            color="var(--chakra-colors-brand-500)"
          >
            <FaChevronRight />
          </IconButton>
        )}
      </Flex>
    </Box>
  );
}
