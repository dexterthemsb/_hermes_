import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import {
  getDetailsFromEmail,
  handleDeletion,
  handlePermissionUpdate
} from "../../../utils/shareWidgetUtils";
import SelectAccessLevel from "../SelectAccessLevel";

const SelectionListItem: FC<{ email: string }> = ({ email }) => {
  const { users, groups, selected, setSelected } = useShareWidget();

  const obj = getDetailsFromEmail(email, [...users, ...groups]);

  return (
    <Box
      mt="4"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDir="row" alignItems="center">
        <Box mr="4" w={12} h={12} rounded="full" overflow="hidden">
          {obj.type === "users" && (
            <Image w="full" h="full" objectFit="cover" src={obj.avatar} />
          )}

          {obj.type === "groups" && (
            <Box
              w="full"
              h="full"
              bgColor="gray.500"
              color="white"
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="center"
            >
              <Text>{obj.name[0].toUpperCase()}</Text>
            </Box>
          )}
        </Box>

        <Box fontSize="sm">
          <Text fontWeight="medium" color="gray.700">
            {obj.name}
          </Text>
          <Text color="gray.500">
            {obj.type === "users" ? obj.email : `${obj.users.length} members`}
          </Text>
        </Box>
      </Box>

      <Box display="flex" flexDir="row" alignItems="center">
        <SelectAccessLevel
          value={selected[email]}
          onChange={value =>
            handlePermissionUpdate(selected, setSelected, [email], value)
          }
        />

        <Button
          variant="ghost"
          ml="4"
          px="2"
          fontWeight="medium"
          colorScheme="red"
          size="sm"
          onClick={() => handleDeletion(selected, setSelected, email)}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

const SelectionList = () => {
  const { selected } = useShareWidget();

  const keys = Object.keys(selected);

  return (
    <Box>
      {keys.map(key => (
        <SelectionListItem key={key} email={key} />
      ))}
    </Box>
  );
};

export default SelectionList;
