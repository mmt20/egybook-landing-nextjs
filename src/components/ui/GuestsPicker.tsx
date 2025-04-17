"use client";

import { Box, Text, Flex, IconButton, HStack, VStack } from "@chakra-ui/react";
import { Popover } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface GuestsPickerProps {
  guests: { adults: number; children: number; rooms: number };
  onUpdateGuests: (newGuests: { adults: number; children: number; rooms: number }) => void;
}

const GuestsPicker: React.FC<GuestsPickerProps> = ({ guests, onUpdateGuests }) => {
  const updateGuestCount = (type: keyof typeof guests, increment: boolean) => {
    const newGuests = { ...guests };
    const max = type === "rooms" ? 10 : 20;
    const min = type === "adults" ? 1 : 0;

    if (increment && (newGuests[type] ?? 0) < max) newGuests[type] = (newGuests[type] ?? 0) + 1;
    else if (!increment && (newGuests[type] ?? 0) > min) newGuests[type] = (newGuests[type] ?? 0) - 1;

    onUpdateGuests(newGuests);
  };

  return (
    <Popover.Root positioning={{ placement: "bottom-start" }}>
      <Popover.Trigger as={Box} height="100%" width="100%" />

      <Popover.Content bg={"whiteAlpha.400"} backdropFilter="blur(5px)" rounded={"4xl"} width="300px" boxShadow="2xl">
        <Popover.Body>
          <VStack p={4} align="stretch">
            {/* Adults */}
            <Flex justify="space-between" align="center">
              <Text>Adults</Text>
              <HStack>
                <IconButton
                  rounded={"full"}
                  aria-label="Decrease adults"
                  size="sm"
                  onClick={() => updateGuestCount("adults", false)}
                  disabled={guests.adults <= 1}
                >
                  <FaMinus fill="#D2AC71" />
                </IconButton>
                <Text width="30px" textAlign="center">
                  {guests.adults}
                </Text>
                <IconButton
                  rounded={"full"}
                  aria-label="Increase adults"
                  size="sm"
                  onClick={() => updateGuestCount("adults", true)}
                >
                  <FaPlus fill="#D2AC71" />
                </IconButton>
              </HStack>
            </Flex>

            {/* Children */}
            <Flex justify="space-between" align="center">
              <Text>Children</Text>
              <HStack>
                <IconButton
                  rounded={"full"}
                  aria-label="Decrease children"
                  size="sm"
                  onClick={() => updateGuestCount("children", false)}
                  disabled={guests.children <= 0}
                >
                  <FaMinus fill="#D2AC71" />
                </IconButton>
                <Text width="30px" textAlign="center">
                  {guests.children}
                </Text>
                <IconButton
                  rounded={"full"}
                  aria-label="Increase children"
                  size="sm"
                  onClick={() => updateGuestCount("children", true)}
                >
                  <FaPlus fill="#D2AC71" />
                </IconButton>
              </HStack>
            </Flex>

            {/* Rooms */}
            <Flex mb={4} justify="space-between" align="center">
              <Text>Rooms</Text>
              <HStack>
                <IconButton
                  rounded={"full"}
                  aria-label="Decrease rooms"
                  size="sm"
                  onClick={() => updateGuestCount("rooms", false)}
                  disabled={guests.rooms <= 1}
                >
                  <FaMinus fill="#D2AC71" />
                </IconButton>
                <Text width="30px" textAlign="center">
                  {guests.rooms}
                </Text>
                <IconButton
                  rounded={"full"}
                  aria-label="Increase rooms"
                  size="sm"
                  onClick={() => updateGuestCount("rooms", true)}
                >
                  <FaPlus fill="#D2AC71" />
                </IconButton>
              </HStack>
            </Flex>

            <Text fontSize="xs" color="whiteAlpha.900" textAlign="center">
              You can search for up to 16 travelers
            </Text>
          </VStack>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  );
};

export default GuestsPicker;
