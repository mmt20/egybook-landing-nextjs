"use client";

import { Box, Text, Flex, IconButton, HStack, VStack } from "@chakra-ui/react";
import { Popover } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface IProps {
  guests: {
    adults: number;
    children: number;
    rooms: number;
  };
  onUpdateGuests: (newGuests: { adults: number; children: number; rooms: number }) => void;
}

const GuestsPicker = ({ guests, onUpdateGuests }: IProps) => {
  const updateGuestCount = (type: keyof typeof guests, increment: boolean) => {
    const newGuests = { ...guests };
    const max = type === "rooms" ? 10 : 20;
    const min = type === "adults" ? 1 : 0;

    if (increment && newGuests[type] < max) newGuests[type]++;
    else if (!increment && newGuests[type] > min) newGuests[type]--;

    onUpdateGuests(newGuests);
  };

  const renderControlRow = (label: string, type: keyof typeof guests, min: number) => (
    <Flex justify="space-between" align="center">
      <Text>{label}</Text>
      <HStack>
        <IconButton
          rounded="full"
          aria-label={`Decrease ${label}`}
          size="sm"
          onClick={() => updateGuestCount(type, false)}
          disabled={guests[type] <= min}
          bg="transparent"
          border="2px solid #FFFFFF4D"
          _hover={{ bg: "whiteAlpha.300" }}
          _active={{ bg: "whiteAlpha.300" }}
        >
          <FaMinus fill="#D2AC71" />
        </IconButton>
        <Text width="30px" textAlign="center">
          {guests[type]}
        </Text>
        <IconButton
          rounded="full"
          aria-label={`Increase ${label}`}
          size="sm"
          onClick={() => updateGuestCount(type, true)}
          bg="transparent"
          border="2px solid #FFFFFF4D"
          _hover={{ bg: "whiteAlpha.300" }}
          _active={{ bg: "whiteAlpha.300" }}
        >
          <FaPlus fill="#D2AC71" />
        </IconButton>
      </HStack>
    </Flex>
  );

  return (
    <Popover.Root positioning={{ placement: "bottom-start" }}>
      <Popover.Trigger as={Box} height="100%" width="100%" />

      <Popover.Content bg="whiteAlpha.400" backdropFilter="blur(5px)" rounded="4xl" width="300px" boxShadow="2xl">
        <Popover.Body>
          <VStack p={4} align="stretch">
            {renderControlRow("Adults", "adults", 1)}
            {renderControlRow("Children", "children", 0)}
            {renderControlRow("Rooms", "rooms", 1)}

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
