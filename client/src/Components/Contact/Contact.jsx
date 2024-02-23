import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px 100px",
        gap: "30px",
        border: "1px solid white",
        padding: "20px",
        background: "white.100",
        borderRadius: "10px",
      }}
    >
      <Box>
        <Text fontSize={"40px"} fontWeight={"700"} color={"orange"}>
          {" "}
          CONTACT US{" "}
        </Text>
      </Box>
      <Box
        className="contact-details"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <Box
          className="contact-left"
          flex={"50%"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px",
            gap: "30px",
          }}
        >
          <Input
            type="text"
            placeholder="Your Name *"
            sx={{
              width: "100%",
              height: "65px",
              fontSize: "20px",
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            }}
          />
          <Input
            type="email"
            placeholder="Your Email *"
            sx={{
              width: "100%",
              height: "65px",
              fontSize: "20px",
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            }}
          />
          <Input
            type="tel"
            placeholder="Your Phone * "
            sx={{
              width: "100%",
              height: "65px",
              fontSize: "20px",
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          className="contact-right"
          flex={"50%"}
          height={"250px"}
          sx={{
            padding: "10px",
          }}
        >
          <Textarea
            placeholder="Your message *"
            sx={{
              width: "100%",
              height: "100%",
              fontSize: "20px",
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
      <Box>
        <Button
          as={motion.div}
          whileHover={{ scale: 1.2 }}
          transition={{ delay: 0.02 }}
          sx={{
            padding: "10px",
            background: "orange",
            color: "white",
            border: "none",
            outline: "none",
            fontSize: "20px",
            fontWeight: "500",
            borderRadius: "10px",
          }}
        >
          SEND MESSAGE
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
