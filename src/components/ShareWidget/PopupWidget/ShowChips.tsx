import { Box, Divider, Text } from "@chakra-ui/react";
import { FC } from "react";
import { X } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";
import { AccessLevels } from "../../../types/misc";
import {
  getDetailsFromEmail,
  handleDeletion
} from "../../../utils/shareWidgetUtils";

interface ShowChipsProps {
  selected: { [key: string]: AccessLevels };
  setSelected: Function;
}

const ShowChips: FC<ShowChipsProps> = ({ selected, setSelected }) => {
  const { users, groups } = useShareWidget();

  const keys = Object.keys(selected);

  return !!keys.length ? (
    <>
      <Box p="4" pb="2" w="full">
        {keys.map(key => (
          <Box
            key={key}
            px="1"
            py="0.5"
            mr="2"
            mb="2"
            w="fit-content"
            fontSize="sm"
            display="inline-flex"
            flexDir="row"
            alignItems="center"
            bgColor="gray.100"
            rounded="md"
            borderColor="gray.300"
            borderStyle="solid"
            borderWidth="thin"
          >
            <Text ml="0.5" mr="1.5">
              {getDetailsFromEmail(key, [...users, ...groups]).name}
            </Text>

            <Box cursor="pointer">
              <X
                size={14}
                onClick={() => handleDeletion(selected, setSelected, key)}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Divider />
    </>
  ) : null;
};

export default ShowChips;
