import { Box, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import SelectItem from "./SelectItem";

const SearchContent: FC = () => {
  const { selectedUsers, selectedGroups } = useShareWidget();

  return (
    <>
      <Divider />

      <Box maxH="64" overflowY="auto">
        <Box m="4">
          {!selectedUsers.length && !selectedGroups.length && (
            <Text my="8" textAlign="center" color="gray.400">
              No results to show.
            </Text>
          )}

          {!!selectedUsers?.length && (
            <Box>
              <Text mb="2" fontSize="sm" color="gray.500">
                Select a Person
              </Text>

              {selectedUsers.map((obj, i) => (
                <SelectItem index={i} key={obj.email} obj={obj} type="user" />
              ))}
            </Box>
          )}

          {!!selectedGroups.length && (
            <Box mt={!!selectedUsers.length ? "4" : "0"}>
              <Text mb="2" fontSize="sm" color="gray.500">
                Select a Group
              </Text>

              {selectedGroups.map((obj, i) => (
                <SelectItem
                  index={selectedUsers.length + i}
                  key={obj.name}
                  obj={obj}
                  type="user"
                />
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default SearchContent;
