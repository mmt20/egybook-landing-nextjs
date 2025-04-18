"use client";

import { useState } from "react";
import { Box, Text, IconButton, Flex, Popover, useBreakpointValue } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CalendarMonth from "./CalendarMonth";
import { monthNames } from "@/data";

interface DateRangePickerProps {
  onDateChange: (rangeText: string) => void;
}

const DatePicker = ({ onDateChange }: DateRangePickerProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleMonthChange = (dir: -1 | 1) => {
    let newMonth = currentMonth + dir;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleSelect = (day: number, month: number, year: number) => {
    const selected = new Date(year, month, day);

    if (!range.start || (range.start && range.end)) {
      setRange({ start: selected, end: null });
    } else if (selected < range.start) {
      setRange({ start: selected, end: null });
    } else {
      setRange(prev => ({ ...prev, end: selected }));
      onDateChange(
        `${range.start?.getDate()} ${monthNames[range.start?.getMonth() ?? 0]} - ${selected.getDate()} ${
          monthNames[selected.getMonth()]
        }`
      );
    }
  };

  const nextMonth = (currentMonth + 1) % 12;
  const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  // Use breakpoint to determine layout direction
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const popoverWidth = useBreakpointValue({ base: "90vw", sm: "450px", md: "620px" });

  return (
    <Popover.Root>
      <Popover.Trigger as={Box} height="100%" width="100%" />

      <Popover.Content width={popoverWidth} bg="#FFFFFF11" borderRadius="2xl" backdropFilter="blur(14px)" mx={2}>
        <Popover.Body p={{ base: 2, sm: 3, md: 4 }}>
          <Flex justify="space-between" align="center" mb={4} px={{ base: 2, md: 4 }}>
            <IconButton variant="ghost" size="sm" aria-label="prev" onClick={() => handleMonthChange(-1)}>
              <FaChevronLeft />
            </IconButton>
            <Text fontWeight="bold" fontSize={{ base: "sm", md: "md" }} textAlign="center">
              {monthNames[currentMonth]} - {monthNames[nextMonth]} {currentYear}
            </Text>
            <IconButton variant="ghost" size="sm" aria-label="next" onClick={() => handleMonthChange(1)}>
              <FaChevronRight />
            </IconButton>
          </Flex>

          <Flex gap={{ base: 2, md: 4 }} flexDirection={direction} pb={4}>
            <CalendarMonth year={currentYear} month={currentMonth} range={range} onSelect={handleSelect} />
            <CalendarMonth year={nextMonthYear} month={nextMonth} range={range} onSelect={handleSelect} />
          </Flex>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  );
};

export default DatePicker;
