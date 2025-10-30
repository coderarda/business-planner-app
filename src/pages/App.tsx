import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import {
    Box,
    Container,
    VStack,
    Text,
    Link as ChakraLink,
    HStack,
} from "@chakra-ui/react";
import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";

function App() {
    return (
        <Box
            height="100%"
            p={20}
            display="flex"
            flexDirection="row"
            alignItems="start"
        >
            <HStack
                className="navbar"
                h="100%"
                p={20}
                boxShadow="6px 5px 8px 4px rgba(0,0,0,0.5)"
                borderRadius={15}
            >
                <VStack
                    spacing={15}
                    h="100%"
                    display="inline-flex"
                    alignItems="start"
                    flexDirection="column"
                >
                    <Text fontWeight="bold" color="white">
                        The Organizer
                    </Text>
                    <ChakraLink
                        display="flex"
                        className="nav-link"
                        alignItems="center"
                        borderRadius="8px"
                        bg="#4E4E4E"
                        _activeLink={{ bg: "#65C3BB", color: "black" }}
                        p="3px"
                        w={180}
                        as={NavLink}
                        to="/"
                    >
                        <CheckIcon m={7} />
                        <Text fontSize="14" textAlign="start" marginRight="3px">
                            Home
                        </Text>
                    </ChakraLink>
                    <ChakraLink
                        display="flex"
                        className="nav-link"
                        alignItems="center"
                        borderRadius="8px"
                        bg="#4E4E4E"
                        _activeLink={{ bg: "#65C3BB", color: "black" }}
                        p="3px"
                        w={180}
                        as={NavLink}
                        to="/calendar"
                    >
                        <CalendarIcon m={7} />
                        <Text fontSize={14} textAlign="start" marginRight="3px">
                            Calendar
                        </Text>
                    </ChakraLink>
                </VStack>
            </HStack>
            <Container w="100%">
                <Outlet />
            </Container>
        </Box>
    );
}

export default App;
