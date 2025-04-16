"use client";
import { Box, Container, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { featuresData } from "@/data";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <Box py={12} px={4}>
      <Container maxW="container.xl">
        <Heading mr={2} fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb={12} color="white">
          <Text as="span">Why choose</Text>
          <Text ml={2} as="span" color="#D2AC71">
            Egy
          </Text>
          <Text as="span" fontWeight={"medium"} color="white">
            Book?
          </Text>
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={{ base: 8, md: 6 }}>
          {featuresData.map((feature, index) => (
            <GridItem key={index}>
              <FeatureCard {...feature} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
