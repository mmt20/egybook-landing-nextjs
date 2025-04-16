import CallToAction from "@/components/cta/CallToAction";
import DestinationCarousel from "@/components/destination/DestinationCarousel";
import Hero from "@/components/hero/Hero";
import HotelSlider from "@/components/hotel/HotelSlider";
import PlaceSlider from "@/components/place/PlaceSlider";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseSection";
import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box as="main" w="full" overflow="hidden">
      <Hero />

      <Container maxW="1280px" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 6, md: 10 }}>
        <HotelSlider />
        <PlaceSlider />
        <WhyChooseUs />
        <DestinationCarousel />
        <CallToAction />
      </Container>
    </Box>
  );
}
