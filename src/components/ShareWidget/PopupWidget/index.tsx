import { PopoverContent } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import DialogFooter from "./DialogFooter";
import Dialog from "./Dialog";
import Search from "./Search";

const PopupWidget: FC<{ users: Array<any>; groups: Array<any> }> = ({
  users,
  groups
}) => {
  const { initData, showSearch } = useShareWidget();

  useEffect(() => initData(users, groups), [users, groups, initData]);

  return (
    <PopoverContent w="lg" shadow="md">
      {showSearch ? <Search /> : <Dialog />}
      <DialogFooter />
    </PopoverContent>
  );
};

export default PopupWidget;
