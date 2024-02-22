import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
const Skills = () => {
  const skills = [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 80 },
    { name: "Javascript", value: 80 },
    { name: "Node JS", value: 80 },
    { name: "Express Js", value: 60 },
    { name: "MongoDB", value: 80 },
    { name: "Bootstrap", value: 80 },
    { name: "React JS", value: 80 },
    { name: "Redux", value: 80 },
    { name: "Operating System", value: 80 },
    { name: "Computer Network", value: 80 },
    { name: "C++", value: 80 },
    { name: "OOPs", value: 80 },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "10px 100px",
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
          Skills
        </Text>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {skills.map((skill, i) => {
            return (
              <Box className="container" key={i}>
                <Box className="skill-box">
                  <Box className="skill-bar">
                    <span className="skill-per html">
                      <span className="tooltip">{skill.value}%</span>
                    </span>
                  </Box>
                  <h3>{skill.name}</h3>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Skills;
