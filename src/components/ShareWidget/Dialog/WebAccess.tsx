import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link as LinkIcon } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";
import SelectAccessLevel from "../SelectAccessLevel";

const WebAccess: FC = () => {
  const { webAccess, setWebAccess } = useShareWidget();

  return (
    <Box
      mt="2"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Box
          p="4"
          mr="4"
          bgColor="purple.100"
          color="purple.500"
          rounded="full"
        >
          <LinkIcon size={16} />
        </Box>

        <Box fontSize="sm">
          <Text fontWeight="medium" color="gray.700">
            Public Link
          </Text>
          <Text color="gray.500">Anyone with the link</Text>
        </Box>
      </Box>
      <SelectAccessLevel
        value={webAccess}
        onChange={value => setWebAccess(value)}
      />
    </Box>
  );
};

export default WebAccess;
