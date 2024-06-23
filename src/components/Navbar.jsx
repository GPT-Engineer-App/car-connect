import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" px={4}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">ShiftHappens</Link>
      </Box>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/connect" color="white" mx={2}>Connect</Link>
        <Link as={RouterLink} to="/events" color="white" mx={2}>Events</Link>
        <Link as={RouterLink} to="/clubs" color="white" mx={2}>Clubs</Link>
        <Link as={RouterLink} to="/share" color="white" mx={2}>Share</Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;