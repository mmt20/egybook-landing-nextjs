"use client";

import { Box, Container, Heading, Text, Flex, Button, HStack, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from "react-icons/fa";
import Image from "next/image";
import heroImg from "../../../public/HeroBG.png";

export default function Hero() {
  return (
    <Box
      position="relative"
      h={{ base: "fit", sm: "95vh", md: "600px" }}
      w="full"
      overflow="hidden"
      mt={{ base: "-20px", md: 0 }} // Reduce space at top on mobile
    >
      {/* Background Image */}
      <Box position="absolute" inset={0}>
        <Image src={heroImg} alt="Pyramids view" fill style={{ objectFit: "cover" }} quality={100} priority />
        <Box bg="blackAlpha.700" position="absolute" inset={0} />
      </Box>

      {/* Foreground Content */}
      <Container maxW="container.xl" h="full" position="relative" zIndex={2}>
        <Flex
          direction="column"
          justify={{ base: "flex-start", md: "center" }}
          h="full"
          px={{ base: 3, sm: 5, md: 8, lg: 16 }}
          py={{ base: 4, md: 10 }}
          pt={{ base: "70px", md: "auto" }} // Adjusted top padding on mobile
        >
          <HStack p={{ base: 1, md: 2 }} mb={{ base: 1, md: 3 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.600098 11.2L23.4001 0.399994L12.6001 23.2L10.2001 13.6L0.600098 11.2Z" fill="white" />
            </svg>

            <Text color="white" fontWeight="medium" fontSize={{ base: "xs", md: "md" }}>
              Egypt
            </Text>
          </HStack>

          <Heading
            as="h1"
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
            fontWeight="bold"
            color="white"
            fontFamily={"Montserrat"}
            mb={{ base: 1, md: 4 }}
            mt={{ base: 2, md: 0 }}
          >
            Hey!
          </Heading>
          <Heading
            as="h1"
            fontSize={{ base: "lg", sm: "xl", md: "3xl", lg: "4xl" }}
            fontFamily={"Montserrat"}
            fontWeight="bold"
            color="white"
            mb={{ base: 1, md: 4 }}
          >
            Tell us where you want to stay
          </Heading>
          <Text color="white" fontSize={{ base: "sm", md: "lg" }} mb={{ base: 4, md: 8 }}>
            Book 450+ Curated Egyptian Hotels
          </Text>

          {/* Search Bar */}
          <Flex
            direction={{ base: "column", md: "row" }}
            bg="whiteAlpha.300"
            backdropFilter="blur(10px)"
            borderRadius={{ base: "xl", md: "full" }}
            overflow="hidden"
            borderWidth="1px"
            mx={{ base: 0, sm: 2, md: 4 }}
          >
            <Flex
              px={{ base: 3, md: 4 }}
              py={{ base: 2, md: 4 }}
              align="center"
              flex={{ md: 1.5 }}
              borderBottom={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
            >
              <Icon as={FaMapMarkerAlt} color="brand.500" me={2} />
              <Text color="white" fontSize={{ base: "xs", md: "md" }} lineClamp={1}>
                Cairo, Egypt
              </Text>
            </Flex>
            {/* Vertical Divider */}
            <Box
              display={{ base: "none", md: "block" }}
              height="32px"
              borderRight="1px solid rgba(0, 0, 0, 0.21)"
              alignSelf="center"
            />
            {/* Dates */}
            <Flex
              px={{ base: 3, md: 4 }}
              py={{ base: 2, md: 4 }}
              align="center"
              flex={{ md: 2 }}
              borderBottom={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
            >
              <Icon as={FaCalendarAlt} color="brand.500" me={2} />
              <Text color="white" fontSize={{ base: "xs", md: "md" }} lineClamp={1}>
                19 March 2025 - 27 March 2025
              </Text>
            </Flex>
            {/* Vertical Divider */}
            <Box
              display={{ base: "none", md: "block" }}
              height="32px"
              borderRight="1px solid rgba(0, 0, 0, 0.21)"
              alignSelf="center"
            />
            <Flex
              px={{ base: 3, md: 4 }}
              py={{ base: 2, md: 4 }}
              align="center"
              flex={{ md: 1.5 }}
              borderBottom={{ base: "1px solid", md: "none" }}
              borderColor="whiteAlpha.300"
            >
              <Icon as={FaUsers} color="brand.500" me={2} />
              <Text color="white" fontSize={{ base: "xs", md: "md" }} lineClamp={1}>
                2 Adults, 1 Child, 1 Infant
              </Text>
            </Flex>

            <Flex
              justify="center"
              align="center"
              p={{ base: 2, md: 2 }}
              bg={{ base: "transparent", md: "transparent" }}
            >
              <Button
                bg="#346D52"
                color="white"
                size={{ base: "sm", md: "lg" }}
                borderRadius="full"
                w={{ base: "full", md: "auto" }}
                px={{ base: 4, md: 6 }}
                py={{ base: 1, md: 3 }}
                fontSize={{ base: "xs", md: "md" }}
                _hover={{ bg: "teal.700" }}
              >
                Explore Stays
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
