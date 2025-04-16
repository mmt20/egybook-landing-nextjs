import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface PlaceCardProps {
  image: string;
  name: string;
}

export default function PlaceCard({ image, name }: PlaceCardProps) {
  return (
    <Box width="200px" minW="200px" height="280px" position="relative" borderRadius="3xl" overflow="hidden">
      <Image
        src={image}
        alt={name}
        fill
        sizes="200px"
        style={{
          objectFit: "cover",
          borderRadius: "24px",
        }}
      />
      <Box position="absolute" inset={0} bg="blackAlpha.400" />

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p="4"
        pb="3"
        bg="linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))"
        borderBottomRadius="3xl"
      >
        <Text fontWeight="semibold" fontSize="lg" color="white">
          {name}
        </Text>
      </Box>
    </Box>
  );
}
