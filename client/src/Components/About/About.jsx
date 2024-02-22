import { Box, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transiton: { delay: 1 },
  },
};

const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 100px",
          gap: "20px",
        }}
      >
        <Text
          as={motion.div}
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          fontSize={"40px"}
          color={"orange"}
          fontWeight={"700"}
        >
          About
        </Text>
        <Box
          as={motion.div}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          fontSize={"20px"}
        >
          Hello , My name is Saurbh Kumar , i have learned wnd worked with React
          , Node JS(Express) , CSS , Frontend Libraries , Javascript , SQL ,
          MongoDB ,Redux , git , REST API , Google Firebase , Linux Operating
          System . My ambition is to become a successful javascript developer ,
          I am pursuing a Bachelor degree in computer science & engineering . I
          have worked on a variety of projects , both Frontend and Backend . I
          love to practice DSA problems in C++ languages , i always try to find
          the solution of every problem by putting any amount of efforts it
          requires .
        </Box>
      </Box>
    </>
  );
};

export default About;
