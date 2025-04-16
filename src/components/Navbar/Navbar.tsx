"use client";

import { Box, Flex, IconButton, Button, HStack, Link, useDisclosure, Text, Image } from "@chakra-ui/react";
import { FiMenu, FiGlobe, FiSearch } from "react-icons/fi";
import NextLink from "next/link";
import { NavDrawer } from "./NavDrawer";

const navItems = [
  { label: "EgyBook", href: "/#" },
  { label: "EgyExplore", href: "/#explore" },
  { label: "EgyTales", href: "/#tales" },
  { label: "EgyTreasure", href: "/#treasure" },
];

export const Navbar = () => {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="background" color="white" px={{ base: 4, sm: 6, md: 8 }} shadow="md" zIndex={10}>
      <Flex align="center" py={{ base: 2, md: 3 }} justifyContent="space-between" wrap="wrap">
        {/* Left Section - Logo */}
        <Flex align="center">
          <HStack>
            <Flex align="center" direction="column" ml={{ base: 0, md: 2, lg: 20 }}>
              <Image src="/LOGO.png" alt="GOE Logo" height={{ base: "20px", md: "32px" }} />
              <Text fontSize={{ base: "16px", md: "22px" }} whiteSpace="nowrap">
                <Text as="span" color="brand.400">
                  Egy
                </Text>
                Book
              </Text>
            </Flex>
          </HStack>
        </Flex>

        {/* Center Section - Search & Links */}
        <Flex
          justify="center"
          flex="1"
          maxW="100%"
          display={{ base: "none", md: "flex" }}
          wrap="wrap"
          gap={{ base: 2, md: 3, lg: 6 }}
        >
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
          <Link
            color="brand.400"
            fontWeight="bold"
            _hover={{ color: "brand.600", textDecoration: "none" }}
            as={NextLink}
            href="/"
            display={{ md: "none", lg: "inline-flex" }}
          >
            GOE
          </Link>
          {navItems.map(item => (
            <Link
              key={item.href}
              as={NextLink}
              href={item.href}
              fontWeight="medium"
              color="white"
              whiteSpace="nowrap"
              fontSize={{ md: "15px", lg: "18px" }}
              transition="all 0.2s"
              _hover={{ color: "brand.400", textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
              _focusVisible={{ boxShadow: "none" }}
              display={{ md: "none", lg: "inline-flex" }}
            >
              <Text as="span" fontWeight="400" fontSize={"18px"}>
                <Text as="span" color="brand.400">
                  {item.label.slice(0, 3)}
                </Text>
                {item.label.slice(3)}
              </Text>
            </Link>
          ))}
        </Flex>

        {/* Right Section - Auth & Language */}
        <Flex align="center">
          <HStack
            display={{ base: "none", md: "flex" }}
            flexWrap="wrap"
            justifyContent="flex-end"
            p={{ base: 1, md: 2 }}
          >
            <HStack p={1} mr={{ md: 1, lg: 2 }}>
              <FiGlobe />
              <Text>EN</Text>
            </HStack>
            <Button
              bg="brand.400"
              _hover={{ bg: "brand.600", transform: "scale(1.05)" }}
              color="white"
              rounded="xl"
              size={{ md: "sm", lg: "md" }}
              px={{ md: 4, lg: 6 }}
            >
              Login
            </Button>
            <Button
              bg="brand.400"
              _hover={{ bg: "brand.600", transform: "scale(1.05)" }}
              color="white"
              rounded="xl"
              size={{ md: "sm", lg: "md" }}
              px={{ md: 4, lg: 6 }}
            >
              Sign up
            </Button>
          </HStack>

          {/* Mobile Hamburger */}
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            color="white"
            display={{ base: "inline-flex", md: "none" }}
            onClick={onOpen}
          >
            <FiMenu />
          </IconButton>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <NavDrawer isOpen={open} onClose={onClose} />
    </Box>
  );
};
