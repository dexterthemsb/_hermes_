import { Container, Heading, Text } from "@chakra-ui/react";

const MainContent = () => {
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
      <Heading>Share Widget</Heading>
      <Text color="gray.500">Made by Manmohan Singh</Text>
    </Container>
  );
};

export default MainContent;
