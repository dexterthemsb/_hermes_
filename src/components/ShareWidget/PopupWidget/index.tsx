import { PopoverContent } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import DialogFooter from "./DialogFooter";
import Dialog from "./Dialog";
import Search from "./Search";
import { IResponse } from "../../../types/misc";

interface PopupWidgetProps {
  users: Array<any>;
  groups: Array<any>;
  onSubmit?: (res: IResponse) => void;
}

const PopupWidget: FC<PopupWidgetProps> = ({ users, groups, onSubmit }) => {
  const { initData, showSearch } = useShareWidget();

  useEffect(() => initData(users, groups), [users, groups, initData]);

  return (
    <PopoverContent w="lg" shadow="md">
      {showSearch ? <Search /> : <Dialog />}
      <DialogFooter onSubmit={onSubmit} />
    </PopoverContent>
  );
};

export default PopupWidget;
