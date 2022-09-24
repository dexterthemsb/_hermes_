import { Box, Switch, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Globe as GlobeIcon } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";
import DialogContent from "./DialogContent";

const Dialog: FC = () => {
  const { isPublic, setIsPublic, setWebAccess } = useShareWidget();

  const handleSwitch = () => {
    if (isPublic) setWebAccess(0);
    setIsPublic(!isPublic);
  };

  return (
    <>
      <Box
        p="4"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" flexDir="row" alignItems="center">
          <Box
            p="3.5"
            mr="4"
            bgColor="gray.100"
            color="gray.600"
            rounded="full"
          >
            <GlobeIcon size={20} />
          </Box>

          <Box>
            <Text>Share to Web</Text>
            <Text fontSize="sm" color="gray.500">
              Publish and share link with anyone
            </Text>
          </Box>
        </Box>

        <Switch
          isChecked={isPublic}
          colorScheme="purple"
          onChange={() => handleSwitch()}
        />
      </Box>

      <DialogContent />
    </>
  );
};

export default Dialog;
