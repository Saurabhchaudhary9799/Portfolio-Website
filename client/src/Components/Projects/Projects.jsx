import {
  Box,
  Button,
  Heading,
  //   Button,
  //   ButtonGroup,
  //   Card,
  //   CardBody,
  //   CardFooter,
  //   Divider,
  //   Heading,
  //   Image,
  //   Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <Box
      className="project-box"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        margin: "20px 100px",
      }}
    >
      <Box className="project-header">
        <Text>Projects</Text>
      </Box>
      <Box className="projects" sx={{ padding: "10px", width: "80%" }}>
        <Slider {...settings}>
          <Box
            className="project-1"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0 20px",
            }}
          >
            <Box
              className="project-image"
              sx={{ width: "100%", height: "40%" }}
            >
              <img
                width={"100%"}
                height={"100%"}
                src="/src/assets/project.jpg"
              />
            </Box>
            <Box
              className="project-description"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Heading className="project-title">Project-name</Heading>
              <Text className="project-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                praesentium adipisci animi ea aliquid quisquam quaerat
                aspernatur nulla consequatur fuga.
              </Text>
              <Button className="read-more">Read More</Button>
            </Box>
          </Box>
          <Box
            className="project-1"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0 20px",
            }}
          >
            <Box
              className="project-image"
              sx={{ width: "100%", height: "40%" }}
            >
              <img
                width={"100%"}
                height={"100%"}
                src="/src/assets/project.jpg"
              />
            </Box>
            <Box
              className="project-description"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Heading className="project-title">Project-name</Heading>
              <Text className="project-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                praesentium adipisci animi ea aliquid quisquam quaerat
                aspernatur nulla consequatur fuga.
              </Text>
              <Button className="read-more">Read More</Button>
            </Box>
          </Box>
          <Box
            className="project-1"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0 20px",
            }}
          >
            <Box
              className="project-image"
              sx={{ width: "100%", height: "40%" }}
            >
              <img
                width={"100%"}
                height={"100%"}
                src="/src/assets/project.jpg"
              />
            </Box>
            <Box
              className="project-description"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Heading className="project-title">Project-name</Heading>
              <Text className="project-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                praesentium adipisci animi ea aliquid quisquam quaerat
                aspernatur nulla consequatur fuga.
              </Text>
              <Button className="read-more">Read More</Button>
            </Box>
          </Box>
        </Slider>
      </Box>
    </Box>
  );
};

export default Projects;
