import { Box, Button, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link as LinkIcon, HelpCircle as HelpCircleIcon } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";

const DialogFooter: FC = () => {
  const { showSearch } = useShareWidget();

  return (
    <Box
      py="2"
      px="4"
      bgColor="gray.50"
      rounded="md"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        cursor="pointer"
        color="gray.500"
        display="flex"
        flexDir="row"
        alignItems="center"
      >
        <HelpCircleIcon size={16} />
        <Text fontSize="sm" ml="2">Learn about sharing</Text>
      </Box>

      <Box opacity={showSearch ? 0 : 1}>
        <Button
          pointerEvents={showSearch ? "none" : "auto"}
          disabled={showSearch}
          leftIcon={<LinkIcon size={16} />}
          variant="ghost"
          size="sm"
          fontWeight="medium"
        >
          Copy Link
        </Button>
      </Box>
    </Box>
  );
};

export default DialogFooter;
