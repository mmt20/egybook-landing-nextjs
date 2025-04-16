import Hero from "@/components/hero/Hero";
import HotelSlider from "@/components/hotel/HotelSlider";
import PlaceSlider from "@/components/place/PlaceSlider";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" w="full" overflow="hidden">
      <Hero />

      <Container maxW="1280px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 6, md: 10 }}>
        <HotelSlider />
        <PlaceSlider />
      </Container>
    </Box>
  );
}
