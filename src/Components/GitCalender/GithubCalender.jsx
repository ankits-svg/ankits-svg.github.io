import { Box, Flex, Text } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

export const GithubCalender = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <Box
      w="100%"
      h="auto"
      // bg="#070640"
      bg={"#101920"}
      zIndex={3}
    >
      <Box py="50px" color="#FFE715" w="100%" maxWidth="1100px" m="auto">
        <Text textAlign="center" fontWeight="medium" fontSize={30} mb={30}>
          Git Hub Calendar
        </Text>
        <Flex
          px="30px"
          alignItems="center"
          justifyContent="center"
          _hover={{
            transform: "scale(1.1)",
            transition: "1s",
            // color: "#fe3e57",
            border: "2px solid #FFE715",
          }}
        >
          <GitHubCalendar
            username="ankits-svg"
            // transformData={selectLastHalfYear}
          />
        </Flex>
      </Box>
    </Box>
  );
};
