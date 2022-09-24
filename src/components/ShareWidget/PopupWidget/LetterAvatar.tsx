import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

interface LetterAvatarProps {
  val: string;
  type: "group" | "user";
}

const LetterAvatar: FC<LetterAvatarProps> = ({ val, type }) => {
  return (
    <Box
      mr="2"
      w={6}
      h={6}
      fontSize="xs"
      fontWeight="medium"
      color="white"
      bgColor="gray.500"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      rounded={type === "user" ? "full" : "lg"}
    >
      <Text>{val[0].toUpperCase()}</Text>
    </Box>
  );
};

export default LetterAvatar;
