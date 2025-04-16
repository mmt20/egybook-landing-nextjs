"use client";

import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const CallToAction = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <Box
        height={{ base: "auto", md: "400px" }}
        borderRadius="2xl"
        overflow="hidden"
        bg="#BFDBC9"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
      >
        {/* Left Content Section */}
        <Flex direction="column" justify="center" p={{ base: 6, md: 10 }} flex={{ base: "1", md: ".55" }}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            fontWeight="700"
            fontFamily={"Montserrat"}
            color="#0F1F18"
            mb={4}
            lineHeight="1.2"
          >
            Ready to Book Your Next Adventure?
          </Heading>
          <Flex maxW={"508px"}>
            <Text lineClamp="3" color="#0F1F18" fontSize={{ base: "md", md: "lg" }} mb={6}>
              Get exclusive deals and immersive previews with our smart booking platform.
            </Text>
          </Flex>
          <Button
            bg="#30A46C"
            color="white"
            size="lg"
            borderRadius="lg"
            px={6}
            py={0}
            _hover={{ bg: "#278559" }}
            maxW="310px"
            rounded={"full"}
          >
            Book now
          </Button>
        </Flex>

        {/* Right Image Section */}
        <Box position="relative" flex={{ base: "1", md: "auto" }} height={{ base: "240px", md: "auto" }}>
          <Image
            src="/images/hotel.png"
            alt="Hotel View"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </Box>
      </Box>
    </Container>
  );
};

export default CallToAction;
