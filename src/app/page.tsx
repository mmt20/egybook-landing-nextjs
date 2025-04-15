import { Box, Button, HStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <HStack>
      <Button>Click me</Button>
      <Button>Click me</Button>
      <Box color="brand.500">Hello World</Box>
    </HStack>
  );
}
