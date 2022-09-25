import { Box, BoxProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import { AccessLevels } from "../../../types/misc";
import { handleAddition } from "../../../utils/shareWidgetUtils";
import ImageAvatar from "./ImageAvatar";
import LetterAvatar from "./LetterAvatar";

interface SelectItemProps extends BoxProps {
  obj: any;
  index: number;
  type: "user" | "group";
  selected: { [key: string]: AccessLevels };
  setSelected: Function;
  access: AccessLevels;
}

const SelectItem: FC<SelectItemProps> = ({
  obj,
  index,
  type,
  selected,
  setSelected,
  access
}) => {
  const { hover, setHover, filteredUsers, filteredGroups } = useShareWidget();

  const navArr = [...filteredUsers, ...filteredGroups];
  const hoverObj = !!navArr.length ? navArr[hover] : null;

  const getColor = () => {
    return hoverObj.name === obj.name ? "gray.100" : "transparent";
  };

  return (
    <Box
      cursor="pointer"
      py="2"
      px="2"
      my="1"
      mx="-2"
      display="flex"
      flexDir="row"
      alignItems="center"
      rounded="md"
      bgColor={getColor()}
      key={obj.email}
      onClick={() => handleAddition(selected, setSelected, obj.email, access)}
      onMouseEnter={() => setHover(index)}
    >
      {!!obj.avatar ? (
        <ImageAvatar img={obj.avatar} />
      ) : (
        <LetterAvatar val={obj.name as string} type={type} />
      )}

      <Text>{obj.name}</Text>
    </Box>
  );
};

export default SelectItem;
