import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        margin: "20px 100px",
        padding: "20px",
      }}
    >
      <Box>
        <Text>Copyright @2024</Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box
          as={motion.div}
          whileHover={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "50%",
          }}
        >
          <Image
            borderRadius="full"
            boxSize="50px"
            src="/src/assets/instagram.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box
          as={motion.div}
          whileHover={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "50%",
          }}
        >
          <Image
            borderRadius="full"
            boxSize="50px"
            src="/src/assets/linkedin.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box
          as={motion.div}
          whileHover={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "50%",
          }}
        >
          <Image
            borderRadius="full"
            boxSize="50px"
            src="/src/assets/github.png"
            alt="Dan Abramov"
          />
        </Box>
        <Box
          as={motion.div}
          whileHover={{
            border: "1px solid white",
            padding: "20px",
            borderRadius: "50%",
          }}
        >
          <Image
            borderRadius="full"
            boxSize="50px"
            src="/src/assets/twitter.png"
            alt="Dan Abramov"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
