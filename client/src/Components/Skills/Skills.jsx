import { Box, Center, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transiton: { delay: 0.05 * index },
  }),
};

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "React JS",
    "Redux",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Computer Network",
    "Operating System",
    "REST api",
    "mongoose",
    "c++",
    "Chakra UI",
    "Framer Motion",
  ];
  return (
    <Box
      sx={{
        margin: "10px 100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box>
        <Text sx={{ fontSize: "40px", color: "orange", fontWeight: "700" }}>
          Skills
        </Text>
      </Box>
      <Wrap>
        {skills.map((skill, index) => {
          return (
            <WrapItem
              key={index}
              as={motion.div}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              sx={{
                border: "1px solid white",
                padding: "5px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                margin: "3px 5px",
              }}
            >
              <Center bg="red.200">{skill}</Center>
            </WrapItem>
          );
        })}{" "}
      </Wrap>
    </Box>
  );
};

export default Skills;
