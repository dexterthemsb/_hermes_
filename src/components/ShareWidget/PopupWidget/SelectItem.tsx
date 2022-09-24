import { Box, BoxProps, Text } from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import ImageAvatar from "./ImageAvatar";
import LetterAvatar from "./LetterAvatar";

interface SelectItemProps extends BoxProps {
  obj: any;
  index: number;
  type: "user" | "group";
}

const SelectItem: FC<SelectItemProps> = ({ obj, index, type }) => {
  const { hover, setHover, selectedUsers, selectedGroups } = useShareWidget();

  const navArr = [...selectedUsers, ...selectedGroups];
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
