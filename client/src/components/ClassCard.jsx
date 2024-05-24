import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Button } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";

const ClassCard = () => {
  return (
    <Flex
      boxShadow="dark-lg"
      p="3"
      rounded="md"
      bg="white"
      direction="column"
      className="ClassCard max-w-xs"
    >
      <Flex className="h-24" justify-between>
        <Box className="w-full">
          <h1 className="text-2xl font-bold mt-3 ml-3">Class Name</h1>
          <h1 className="text-sm font-bold ml-3">number of students</h1>
        </Box>
        <Box className="ClassMenu w-full pt-1 pr-1" >
          <Menu>
            <MenuButton as={Button}>
              <MenuIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Download Notes</MenuItem>
              <MenuItem>Edit</MenuItem> 
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Box className="h-32">
        <h1 className="text-l font-semibold mt-3 ml-3">
          UPCOMPING ASSIGNMENTS
        </h1>
        <h1 className="text-sm font-semibold ml-3">No assignments</h1>
      </Box>
    </Flex>
  );
};

export default ClassCard;
