import { Box, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import SelectItem from "./SelectItem";
import ShowChips from "./ShowChips";

const SearchContent: FC = () => {
  const { filteredUsers, filteredGroups } = useShareWidget();

  return (
    <>
      <Divider />

      <ShowChips />

      <Box maxH="64" overflowY="auto">
        <Box m="4">
          {!filteredUsers.length && !filteredGroups.length && (
            <Text my="8" textAlign="center" color="gray.400">
              No results to show.
            </Text>
          )}

          {!!filteredUsers?.length && (
            <Box>
              <Text mb="2" fontSize="sm" color="gray.500">
                Select a Person
              </Text>

              {filteredUsers.map((obj, i) => (
                <SelectItem index={i} key={obj.email} obj={obj} type="user" />
              ))}
            </Box>
          )}

          {!!filteredGroups.length && (
            <Box mt={!!filteredUsers.length ? "4" : "0"}>
              <Text mb="2" fontSize="sm" color="gray.500">
                Select a Group
              </Text>

              {filteredGroups.map((obj, i) => (
                <SelectItem
                  index={filteredUsers.length + i}
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
