"use client";

import { Card, Box, Text, IconButton, Flex, Icon, Tag, Image as ChakraImage } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import NextImage from "next/image";

interface HotelCardProps {
  image: string;
  location: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

export default function HotelCard({ image, location, name, price, rating, reviews }: HotelCardProps) {
  return (
    <Card.Root
      width={{ base: "240px", md: "400px", lg: "450px" }}
      minW={{ base: "240px", md: "400px", lg: "450px" }}
      bg="white"
      borderRadius="4xl"
      shadow="lg"
      overflow="hidden"
      position="relative"
    >
      <Card.Body p="0">
        {/* Image Box */}
        <Box position="relative" w="full" h="274px">
          <ChakraImage asChild borderTopRadius="4xl" roundedBottom={"10%"}>
            <NextImage
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 240px, (max-width: 1024px) 400px, 450px"
              style={{ objectFit: "cover", borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
            />
          </ChakraImage>

          {/* Location Tag */}
          <Tag.Root
            position="absolute"
            top="4"
            left="4"
            bg="white"
            fontSize="xs"
            fontWeight="medium"
            color="#346D52"
            px="2.5"
            py="1"
            borderRadius="full"
            variant="subtle"
          >
            <Tag.Label>{location}</Tag.Label>
          </Tag.Root>

          {/* Like Button */}
          <IconButton
            aria-label="Save"
            size="sm"
            rounded="full"
            variant="solid"
            position="absolute"
            top="4"
            right="4"
            bg="white"
            color="gray.600"
            _hover={{ color: "red.500", bg: "white" }}
          >
            <FaHeart />
          </IconButton>
        </Box>

        {/* Content */}
        <Box px="4" py="3">
          <Flex justify="space-between" align="center" mb="1">
            <Text fontWeight="semibold" fontSize="lg" lineClamp={1} color="gray.900">
              {name}
            </Text>
            <Flex align="center" gap="1">
              <Icon as={FaStar} color="#D2AC71" boxSize="3" />
              <Text fontSize="sm" fontWeight="medium" color="gray.700">
                <Text as="span" color="gray.900">
                  {rating.toFixed(1)}
                </Text>{" "}
                ({reviews.toLocaleString()})
              </Text>
            </Flex>
          </Flex>

          <Text fontSize="sm" color="gray.800">
            From {price} per person
          </Text>
        </Box>
      </Card.Body>
    </Card.Root>
  );
}
