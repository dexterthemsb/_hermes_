import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { ArrowLeft as ArrowLeftIcon } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";
import { AccessLevels } from "../../../types/misc";
import SelectAccessLevel from "../SelectAccessLevel";

const SearchHeader: FC = () => {
  const { setShowSearch } = useShareWidget();

  const [value, setValue] = useState<AccessLevels>(0);

  const handleValue: Function = (value: AccessLevels) => setValue(value);

  return (
    <InputGroup
      size="sm"
      variant="ghost"
      colorScheme="purple"
      p="4"
      rounded="md"
      bgColor="gray.50"
    >
      <InputLeftAddon px="0">
        <Box display="flex" flexDir="row" alignItems="center">
          <Button
            size="sm"
            p="2"
            w="fit-content"
            h="max-content"
            color="gray.600"
            fontWeight="medium"
            rounded="full"
            onClick={() => setShowSearch(false)}
          >
            <ArrowLeftIcon size={16} />
          </Button>
        </Box>
      </InputLeftAddon>

      <Input
        autoFocus
        bgColor="transparent"
        placeholder="Search emails, names or groups"
      />
      <InputRightAddon px="0">
        <SelectAccessLevel
          value={value}
          onChange={value => handleValue(value)}
        />
        <Button
          ml="4"
          variant="outline"
          bgColor="white"
          color="gray.600"
          fontWeight="medium"
          size="sm"
        >
          Invite
        </Button>
      </InputRightAddon>
    </InputGroup>
  );
};

export default SearchHeader;
