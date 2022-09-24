import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import ShareWidget from "./ShareWidget";
import data from "../data/Workspace.json";

const MainContent: FC = () => {
  return (
    <Container
      py="16"
      minH="100vh"
      maxW="container.xl"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDir="column" alignItems="center">
        <Heading>Share Widget</Heading>
        <ShareWidget
          users={data.users}
          groups={data.groups}
          buttonProps={{ mt: "16" }}
        />
      </Box>
      <Text color="gray.500">Made by Manmohan Singh</Text>
    </Container>
  );
};

export default MainContent;
