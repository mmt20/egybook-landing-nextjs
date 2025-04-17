"use client";

import { useState } from "react";
import { Text, Flex, Grid, GridItem, IconButton, Box } from "@chakra-ui/react";
import { Popover } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { generateCalendarDays } from "@/utils/functions";

interface DatePickerProps {
  onDateChange: (range: string) => void;
}

const DatePicker = ({ onDateChange }: DatePickerProps) => {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(2);

  const [startDate, setStartDate] = useState<number | null>(19); // Initialize to match Hero state
  const [endDate, setEndDate] = useState<number | null>(27); // Initialize to match Hero state

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = generateCalendarDays(year, month);

  const handleMonthNav = (dir: -1 | 1) => {
    let newMonth = month + dir;
    let newYear = year;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setMonth(newMonth);
    setYear(newYear);
  };

  const handleDayClick = (day: number) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(day);
      setEndDate(null);
    } else if (day < startDate) {
      setStartDate(day);
    } else {
      setEndDate(day);
      // propagate
      const start = new Date(year, month, startDate!);
      const end = new Date(year, month, day);
      onDateChange(`${start.getDate()} ${monthNames[month]} ${year} - ${end.getDate()} ${monthNames[month]} ${year}`);
    }
  };

  const isInRange = (d: number) => startDate != null && endDate != null && d >= startDate && d <= endDate;

  return (
    <Popover.Root positioning={{ placement: "bottom-start" }}>
      <Popover.Trigger as={Box} height="100%" width="100%" />

      <Popover.Content width="300px" boxShadow="xl">
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>

        <Popover.Body>
          <Flex justify="space-between" align="center" mb={2}>
            <IconButton aria-label="Previous month" size="sm" onClick={() => handleMonthNav(-1)}>
              <FaChevronLeft />
            </IconButton>
            <Text fontWeight="bold">{`${monthNames[month]} ${year}`}</Text>
            <IconButton aria-label="Next month" size="sm" onClick={() => handleMonthNav(1)}>
              <FaChevronRight />
            </IconButton>
          </Flex>

          <Grid templateColumns="repeat(7, 1fr)" gap={1}>
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
              <GridItem key={day} textAlign="center">
                <Text fontSize="xs" fontWeight="bold">
                  {day}
                </Text>
              </GridItem>
            ))}
            {days.map((d, i) => (
              <GridItem key={i} textAlign="center">
                {d && (
                  <Box
                    onClick={() => d && handleDayClick(d)}
                    cursor={d ? "pointer" : "default"}
                    borderRadius="md"
                    p={1}
                    bg={d === startDate || d === endDate ? "blue.500" : isInRange(d!) ? "blue.100" : "transparent"}
                    color={d === startDate || d === endDate ? "white" : "inherit"}
                  >
                    <Text>{d}</Text>
                  </Box>
                )}
              </GridItem>
            ))}
          </Grid>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  );
};

export default DatePicker;
