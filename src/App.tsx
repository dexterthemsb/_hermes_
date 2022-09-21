import { ChakraProvider } from "@chakra-ui/react";
import MainContent from "./components/MainContent";
import { theme } from "./config/chakra.config";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainContent />
    </ChakraProvider>
  );
}

export default App;
