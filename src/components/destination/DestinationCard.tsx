"use client";
import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

interface DestinationCardProps {
  image: string;
  name: string;
  description: string;
  gradient: string;
}

export default function DestinationCard({ image, name, description, gradient }: DestinationCardProps) {
  return (
    <Box width={{ base: "280px", md: "420px" }} height="280px" position="relative" borderRadius="3xl" overflow="hidden">
      <Image
        src={image}
        alt={name}
        fill
        sizes="1140px"
        style={{
          objectFit: "cover",
          borderRadius: "24px",
        }}
      />
      <Box position="absolute" inset={0} bg={gradient} opacity="0.6" /> {/* Modified Line */}
      <Box p="4" pb="3" borderBottomRadius="3xl">
        <Box ml={{ base: "1", md: "3" }} position={"absolute"} top="0" left="0" right="0" p="4" pt="3">
          <Text fontWeight="600" fontSize={{ base: "28px", md: "48px" }} color="white">
            {name}
          </Text>
          <Text fontWeight="400" lineClamp={2} fontSize="26px" color="white" mb="4">
            {description}
          </Text>
        </Box>
        <Box position="absolute" bottom="0" left="0" right="0">
          <Button
            fontWeight={"600"}
            bg="white"
            color="black"
            _hover={{ bg: "gray.200" }}
            borderRadius="full"
            px="4"
            py="2"
            fontSize="20px"
            mt="4"
            bottom="4"
            left="6"
            right="0"
          >
            See Hotels
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
