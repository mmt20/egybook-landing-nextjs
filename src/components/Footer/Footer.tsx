"use client";

import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { Box, Button, Container, Flex, IconButton, Link, Text, VStack, HStack } from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const navItems = [
    { label: "Home", href: "#", highlight: false },
    { label: "Book", href: "#", highlight: true },
    { label: "Explore", href: "#", highlight: true },
    { label: "Tales", href: "#", highlight: true },
    { label: "Treasure", href: "#", highlight: true },
  ];

  const socialLinks = [
    { icon: FaSquareInstagram, label: "Instagram" },
    { icon: FaFacebookF, label: "Facebook" },
    { icon: AiFillTikTok, label: "TikTok" },
    { icon: FaXTwitter, label: "X" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
    <Box as="footer" color="white" bgGradient={"linear-gradient(to bottom ,#121212 ,#D28E7133 80%)"} py={4}>
      <Container>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
        >
          {/* Left Section */}
          <VStack p={6} align={{ base: "center", md: "flex-start" }} textAlign={{ base: "center", md: "left" }}>
            {/* Logo */}
            <Box pos="relative" mb={4} width={{ base: "160px", md: "184px" }} height={{ base: "60px", md: "60px" }}>
              <Image width={184} height={60} src="/LOGO.png" alt="Gates of Egypt Logo" />
            </Box>

            <Text fontSize="3xl" fontWeight={600} lineClamp="2" maxW="md" lineHeight="1.9" mb={4}>
              Lorem, Ipsum Lorem, Ipsum Lorem, Ipsum or less.
            </Text>

            {/* CTA Button */}
            <Button
              borderRadius="full"
              px={8}
              py={5}
              mb={4}
              fontSize="xl"
              fontWeight={600}
              bg={"brand.500"}
              color="white"
              transition="all 0.2s"
              _hover={{
                bg: "brand.600",
                transform: "scale(1.01)",
              }}
            >
              Discover More
            </Button>

            {/* Navigation Links */}
            <Flex
              p={4}
              gap={{ base: 4, md: 8 }}
              justify={{ base: "center", md: "flex" }}
              direction={{ base: "column", md: "row" }}
            >
              {navItems.map(({ label, href, highlight }) => (
                <Link
                  key={label}
                  as={NextLink}
                  href={href}
                  fontSize="sm"
                  fontWeight="medium"
                  transition="all 0.2s"
                  _hover={{ color: "brand.400", textDecoration: "none" }}
                >
                  {highlight ? (
                    <Text fontSize={"lg"}>
                      <Text as="span" color={"brand.400"}>
                        Egy
                      </Text>
                      <Text as="span" color="white" _hover={{ color: "brand.400", textDecoration: "none" }}>
                        {label}
                      </Text>
                    </Text>
                  ) : (
                    <Text fontSize={"lg"}>{label}</Text>
                  )}
                </Link>
              ))}
            </Flex>
          </VStack>

          {/* Right Section */}
          <VStack p={8} align={{ base: "center", md: "flex-end" }} mt={{ base: 0, md: "auto" }}>
            {/* Social Icons */}
            <HStack p={2}>
              {socialLinks.map(({ icon, label }, idx) => (
                <IconButton
                  size={"lg"}
                  key={idx}
                  aria-label={label}
                  bg="brand.500"
                  color="white"
                  borderRadius="xl"
                  boxSize="50px"
                  transition="all 0.2s"
                  _hover={{
                    bg: "brand.600",
                    transform: "scale(1.05)",
                  }}
                >
                  <Box as={icon} boxSize={9} />
                </IconButton>
              ))}
            </HStack>

            {/* Legal Info */}
            <Text fontSize="lg" fontWeight="medium" textAlign="right" lineClamp={2} maxW="220px">
              © 2024 Gates of Egypt. All rights reserved.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
