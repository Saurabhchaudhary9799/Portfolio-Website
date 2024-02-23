import { Box, Button, Container, Image, Stack } from "@chakra-ui/react";
import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container
      className="hero-container"
      height={"90vh"}
      sx={{
        margin: "0  100px ",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between",
        // flexWrap: "wrap",
      }}
    >
      <Box
        as={motion.div}
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duraton: "5" }}
        className="hero-description"
        flex={"50%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <p>
          Hii , It's <span>Saurbh Kumar</span>
        </p>
        <ul className="dynamic-text">
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Programmer</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
        </ul>
        <Stack
          direction="row"
          spacing={10}
          align="center"
          marginTop={"30px"}
          gap={"30px"}
        >
          <Button
            bgColor={"orange"}
            variant="solid"
            sx={{
              padding: "10px",
              color: "white",
              fontSize: "18px",
              border: "none",
              fontWeight: "600",
              outline: "none",
            }}
          >
            My Resume
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            sx={{
              padding: "10px",
              color: "white",
              fontSize: "18px",
              border: "1px solid white",
              fontWeight: "600",
              background: "transparent",
            }}
          >
            Contact Me
          </Button>
        </Stack>
        <Box
          width={"400px"}
          height={"72px"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginTop: "40px",
          }}
        >
          <Box
            as={motion.div}
            whileHover={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "50%",
            }}
            width={"20%"}
            height={"100%"}
            className="hero-social-icon"
          >
            <img src="/src/assets/github.png" alt="" />
          </Box>
          <Box
            as={motion.div}
            whileHover={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "50%",
            }}
            width={"20%"}
            height={"100%"}
            className="hero-social-icon"
          >
            <img src="/src/assets/instagram.png" alt="" />
          </Box>
          <Box
            as={motion.div}
            whileHover={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "50%",
            }}
            width={"20%"}
            height={"100%"}
            className="hero-social-icon"
          >
            <img src="/src/assets/linkedin.png" alt="" />
          </Box>
          <Box
            as={motion.div}
            whileHover={{
              border: "1px solid white",
              padding: "20px",
              borderRadius: "50%",
            }}
            width={"20%"}
            height={"100%"}
            className="hero-social-icon"
          >
            <img src="/src/assets/twitter.png" alt="" />
          </Box>
        </Box>
      </Box>
      <Box
        as={motion.div}
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="hero-right"
        flex={"50%"}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image
          className="profile-picture"
          borderRadius="50%"
          boxSize="300px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </Box>
    </Container>
  );
};

export default Hero;
