"use client";

import {
  Link as ChakraLink,
  Portal,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerTitle,
  VStack,
  HStack,
  Text,
  Box,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavDrawer = ({ isOpen, onClose }: NavDrawerProps) => {
  return (
    <DrawerRoot size={"full"} open={isOpen} onOpenChange={e => !e.open && onClose()}>
      <Portal>
        <DrawerBackdrop />
        <DrawerPositioner>
          <DrawerContent bg="background" color="white" px={6} py={4}>
            <DrawerHeader>
              <DrawerTitle>
                <Text fontSize="32px" fontWeight={"600"}>
                  <Text as="span" color="brand.400">
                    Egy
                  </Text>
                  Book
                </Text>
              </DrawerTitle>
            </DrawerHeader>

            <DrawerBody>
              <VStack align="start" fontWeight={"400"} fontSize={"32px"} p={4} mt={4} gap={"8"}>
                <HStack>
                  <FiGlobe />
                  <Text>EN</Text>
                </HStack>
                <ChakraLink color="white">Login</ChakraLink>
                <ChakraLink color="white">Sign up</ChakraLink>
              </VStack>
            </DrawerBody>

            <DrawerFooter alignSelf="center">
              <Box>
                <Image src="/LOGO.png" alt="GOE Logo" height="60px" />
              </Box>
              <DrawerCloseTrigger asChild>
                <CloseButton position="absolute" top={4} right={4} />
              </DrawerCloseTrigger>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPositioner>
      </Portal>
    </DrawerRoot>
  );
};
