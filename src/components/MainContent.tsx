import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import ShareWidget from "./ShareWidget";
import data from "../data/Workspace.json";
import { IResponse } from "../types/misc";

const MainContent: FC = () => {
  const handleOnSubmit = (res: IResponse) => {
    console.log("Submitted");
    console.log(res);
  };

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
          onSubmit={selected => handleOnSubmit(selected)}
          buttonProps={{ mt: "16" }}
        />
      </Box>
      <Text color="gray.500">Made by Manmohan Singh</Text>
    </Container>
  );
};

export default MainContent;
