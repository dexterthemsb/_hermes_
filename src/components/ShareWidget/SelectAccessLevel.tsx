import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { ChevronDown as ChevronDownIcon } from "react-feather";
import { AccessLevels } from "../../types/misc";
import {
  ACCESS_LEVEL_MAPPING_ARR,
  ACCESS_LEVEL_MAPPING_OBJ
} from "../../constants/misc";

interface SelectAccessLevelProps {
  value: AccessLevels;
  onChange: (value: AccessLevels) => void | {};
}

const SelectAccessLevel: FC<SelectAccessLevelProps> = ({ value, onChange }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        px="2"
        mx="-2"
        fontWeight="medium"
        color="gray.600"
        size="sm"
        rightIcon={<ChevronDownIcon size={16} />}
      >
        {ACCESS_LEVEL_MAPPING_OBJ[value]}
      </MenuButton>

      <MenuList px="2">
        {ACCESS_LEVEL_MAPPING_ARR.map(access => (
          <MenuItem
            rounded="md"
            fontSize="sm"
            key={access.value}
            onClick={() => onChange(access.value)}
          >
            {access.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectAccessLevel;
