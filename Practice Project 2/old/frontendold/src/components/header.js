import React from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  }
  return (
    <div>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box
          className="bastard"
          bg="red"
          w="15%"
          h="60px"
          p={4}
          color="white"
          overflow="hidden"
          borderRadius="200px"
        >
          <Text fontSize="lg">Workout Assistant</Text>
        </Box>
        <Box className="dropdown-menu">
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="red"
                >
                  {isOpen ? "Close" : "Open"}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/signup">Signup</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/login">Login</Link>
                  </MenuItem>
                  <MenuItem>
                    <IconButton
                      colorScheme="red"
                      icon={<CloseIcon />}
                      isRound={true}
                      fontSize={"20px"}
                      onClick={handleClick}
                    />
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};

export default Header;
