import React from "react";
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Hide,
  Input,
  ListItem,
  Show,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Container
        as={motion.div}
        initial={{ y: 10 }}
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 100, duration: 5 }}
        sx={{
          border: "1px solid white",
          margin: "0px 100px",
          marginTop: "20px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-around",
          borderRadius: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "orange",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Saurbh Kumar
        </Box>
        <Show breakpoint="(min-width: 1000px)">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: " 0 20px",
            }}
          >
            <UnorderedList
              sx={{
                listStyle: "none",
                display: "flex",
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <ListItem
                as={motion.div}
                whileHover={{ scale: 1.1, color: "orange" }}
              >
                Home
              </ListItem>
              <ListItem
                as={motion.div}
                whileHover={{ scale: 1.1, color: "orange" }}
              >
                About
              </ListItem>
              <ListItem
                as={motion.div}
                whileHover={{ scale: 1.1, color: "orange" }}
              >
                Skills
              </ListItem>
              <ListItem
                as={motion.div}
                whileHover={{ scale: 1.1, color: "orange" }}
              >
                Projects
              </ListItem>
              <ListItem
                as={motion.div}
                whileHover={{ scale: 1.1, color: "orange" }}
              >
                Contact
              </ListItem>
            </UnorderedList>
          </Box>
        </Show>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Show breakpoint="(max-width: 1000px)">
            <span
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HamburgerIcon
                boxSize={"25px"}
                ref={btnRef}
                colorScheme="white"
                onClick={onOpen}
                sx={{ display: { xs: "block", sm: "none" } }}
              />
            </span>
          </Show>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
