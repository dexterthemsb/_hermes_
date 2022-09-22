import {
  Box,
  Divider,
  Input,
  InputGroup,
  InputRightAddon
} from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import WebAccess from "./WebAccess";

const DialogContent: FC = () => {
  const { isPublic, selectedUsers, selectedGroups, setShowSearch } =
    useShareWidget();

  return (
    <>
      <Divider />

      <Box m="4">
        <InputGroup
          size="sm"
          colorScheme="purple"
          cursor="pointer"
          onClick={() => setShowSearch(true)}
        >
          <Input
            h="max-content"
            py="2"
            readOnly
            placeholder="People, emails, groups"
          />
          <InputRightAddon h="max-content" py="2" children="Invite" />
        </InputGroup>

        {(isPublic || !!selectedUsers.length || !!selectedGroups.length) && (
          <Box mt="4">
            <WebAccess />
          </Box>
        )}
      </Box>

      <Divider />
    </>
  );
};

export default DialogContent;
