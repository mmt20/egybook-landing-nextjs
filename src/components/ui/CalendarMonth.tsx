"use client";

import { Box, Text, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { generateCalendarDays } from "@/utils/functions";
import SelectedIcon from "./icons/SelectedIcon";
import { dayNames, monthNames } from "@/data";

const isSameDay = (d1: Date, d2: Date) =>
  d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

const isInRange = (date: Date, start: Date | null, end: Date | null) => {
  return start !== null && end !== null && date > start && date < end;
};

const isLastRange = (date: Date, range: { start: Date | null; end: Date | null }) => {
  return date && range.end && isSameDay(date, range.end);
};

interface CalendarMonthProps {
  year: number;
  month: number;
  range: { start: Date | null; end: Date | null };
  onSelect: (day: number, month: number, year: number) => void;
}

const CalendarMonth = ({ year, month, range, onSelect }: CalendarMonthProps) => {
  const days = generateCalendarDays(year, month);

  const fontSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" });
  const dayFontSize = useBreakpointValue({ base: "2xs", sm: "xs", md: "sm" });
  const cellPadding = useBreakpointValue({ base: 1, sm: 1.5, md: 2 });

  return (
    <Box
      bg="whiteAlpha.300"
      borderRadius="2xl"
      p={{ base: 1, sm: 2, md: 3 }}
      flex="1"
      minWidth={{ base: "280px", md: "280px" }}
    >
      <Text fontWeight="bold" textAlign="center" mb={2} fontSize={fontSize}>
        {monthNames[month]} {year}
      </Text>
      <Grid templateColumns="repeat(7, 1fr)" gap={{ base: 0.5, sm: 1 }}>
        {dayNames.map(day => (
          <Text key={day} textAlign="center" fontSize={dayFontSize} fontWeight="bold">
            {day}
          </Text>
        ))}
        {days.map((day, i) => {
          const date = day ? new Date(year, month, day) : null;
          const selected =
            date && ((range.start && isSameDay(date, range.start)) || (range.end && isSameDay(date, range.end)));
          const inRange = date && isInRange(date, range.start, range.end);
          const lastRange = date && isLastRange(date, range);

          return (
            <GridItem key={i} textAlign="center">
              {day && (
                <Box
                  overflow="hidden"
                  onClick={() => onSelect(day, month, year)}
                  cursor="pointer"
                  borderRadius="md"
                  p={cellPadding}
                  bg={selected ? "brand.200" : inRange ? "brand.200" : "transparent"}
                  color={selected ? "#DAD2CA" : "#969696"}
                  border={selected ? "none" : inRange ? "none" : "1px solid #969696"}
                  position="relative"
                  height={{ base: "24px", sm: "28px", md: "32px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {selected && (
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      transform={lastRange ? "rotate(180deg)" : "none"}
                      zIndex={0}
                    >
                      <SelectedIcon />
                    </Box>
                  )}

                  <Text
                    position="relative"
                    zIndex={1}
                    color={selected ? "white" : inRange ? "brand.500" : "gray.300"}
                    fontSize={dayFontSize}
                  >
                    {day}
                  </Text>
                </Box>
              )}
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default CalendarMonth;
