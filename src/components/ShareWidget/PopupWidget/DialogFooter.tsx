import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link as LinkIcon, HelpCircle as HelpCircleIcon } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";
import { IResponse } from "../../../types/misc";
import { getDetailsFromEmail } from "../../../utils/shareWidgetUtils";

interface DialogFooterProps {
  onSubmit?: (res: IResponse) => void;
}

const DialogFooter: FC<DialogFooterProps> = ({ onSubmit }) => {
  const { users, groups, isPublic, webAccess, showSearch, selected } =
    useShareWidget();

  const handleSubmit = () => {
    if (!!onSubmit) {
      let arr: Array<any> = [];
      const publicAccess = !!isPublic ? webAccess : null;

      const keys = Object.keys(selected);

      keys.forEach(key => {
        const obj = getDetailsFromEmail(key, [...users, ...groups]);
        arr.push({ ...obj, access: selected[key] });
      });

      onSubmit({ publicAccess, selected: arr });
    }
  };

  return (
    <>
      <Divider />

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
          <Text fontSize="sm" ml="2">
            Learn about sharing
          </Text>
        </Box>

        <Box opacity={showSearch ? 0 : 1}>
          <Button
            pointerEvents={showSearch ? "none" : "auto"}
            disabled={showSearch}
            leftIcon={<LinkIcon size={16} />}
            variant="ghost"
            size="sm"
            fontWeight="medium"
            onClick={() => handleSubmit()}
          >
            Copy Link
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DialogFooter;
