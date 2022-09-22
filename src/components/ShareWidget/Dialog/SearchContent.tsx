import { Box, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";

const SearchContent: FC = () => {
  return (
    <>
      <Divider />

      <Box m="4">
        <Text my="8" textAlign="center" color="gray.400">
          Search emails, names or groups
        </Text>
      </Box>

      <Divider />
    </>
  );
};

export default SearchContent;
