import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon
} from "@chakra-ui/react";
import { FC, KeyboardEvent, useState } from "react";
import { ArrowLeft as ArrowLeftIcon } from "react-feather";
import useShareWidget from "../../../hooks/useShareWidget";
import { AccessLevels } from "../../../types/misc";
import SelectAccessLevel from "../SelectAccessLevel";
import SearchContent from "./SearchContent";

const Search: FC = () => {
  const {
    users,
    groups,
    filteredUsers,
    filteredGroups,
    hover,
    setHover,
    setFilteredUsers,
    setFilteredGroups,
    setShowSearch
  } = useShareWidget();

  const [value, setValue] = useState<AccessLevels>(0);

  const handleEsc = (e: KeyboardEvent<HTMLInputElement> | null) => {
    if (!!e) e.preventDefault();

    setShowSearch(false);
    setFilteredUsers([]);
    setFilteredGroups([]);
  };

  const handleValue: Function = (value: AccessLevels) => setValue(value);

  const handleSearch: Function = (q: string) => {
    setHover(0);

    if (q.length < 3) {
      setFilteredUsers([]);
      setFilteredGroups([]);
      return;
    } else {
      const query = q.toLowerCase();

      const ua = users.filter(
        u =>
          u.email.toLowerCase().includes(query) ||
          u.name.toLowerCase().includes(query)
      );

      const ga = groups.filter(g => g.name.toLowerCase().includes(query));

      setFilteredUsers(ua);
      setFilteredGroups(ga);
    }
  };

  const handleNavigation = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") handleEsc(e);

    const navArr = [...filteredUsers, ...filteredGroups];

    if (!navArr.length) {
      setHover(0);
      return;
    }

    if (e.key === "Enter") console.log(navArr[hover]);

    if (e.key === "ArrowDown" && hover !== navArr.length - 1)
      setHover(hover + 1);
    if (e.key === "ArrowUp" && hover !== 0) setHover(hover - 1);
  };

  return (
    <>
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
              onClick={() => handleEsc(null)}
            >
              <ArrowLeftIcon size={16} />
            </Button>
          </Box>
        </InputLeftAddon>
        <Input
          autoFocus
          bgColor="transparent"
          placeholder="Search emails, names or groups"
          onChange={e => handleSearch(e.target.value)}
          onKeyDown={e => handleNavigation(e)}
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

      <SearchContent />
    </>
  );
};

export default Search;
