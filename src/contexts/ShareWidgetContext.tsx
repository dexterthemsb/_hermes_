import { createContext, FC, ReactNode, useState } from "react";
import { AccessLevels } from "../types/misc";

export interface IShareWidgetContext {
  users: Array<any>;
  groups: Array<any>;
  initData: Function;
  isPublic: boolean;
  webAccess: AccessLevels;
  setWebAccess: Function;
  selectedUsers: Array<any>;
  selectedGroups: Array<any>;
  setIsPublic: Function;
  hover: number;
  setHover: Function;
  setSelectedUsers: Function;
  setSelectedGroups: Function;
  showSearch: boolean;
  setShowSearch: Function;
}

const init: IShareWidgetContext = {
  users: [],
  groups: [],
  initData: () => {},
  isPublic: false,
  webAccess: 0,
  setWebAccess: () => {},
  selectedUsers: [],
  selectedGroups: [],
  setIsPublic: () => {},
  hover: 0,
  setHover: () => {},
  setSelectedUsers: () => {},
  setSelectedGroups: () => {},
  showSearch: false,
  setShowSearch: () => {}
};

export const ShareWidgetContext = createContext<IShareWidgetContext>(init);

const ShareWidgetContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [users, setUsers] = useState<Array<any>>(init.users);
  const [groups, setGroups] = useState<Array<any>>(init.groups);
  const [isPublic, setIsPublic] = useState<boolean>(init.isPublic);
  const [hover, setHover] = useState<number>(init.hover);
  const [webAccess, setWebAccess] = useState<AccessLevels>(init.webAccess);
  const [selectedUsers, setSelectedUsers] = useState<Array<any>>(
    init.selectedUsers
  );
  const [selectedGroups, setSelectedGroups] = useState<Array<any>>(
    init.selectedGroups
  );
  const [showSearch, setShowSearch] = useState<boolean>(init.showSearch);

  const handleInitData = (users: Array<any>, groups: Array<any>) => {
    setUsers(users);
    setGroups(groups);
  };

  return (
    <ShareWidgetContext.Provider
      value={{
        users,
        groups,
        initData: handleInitData,
        isPublic,
        setIsPublic,
        hover,
        setHover,
        webAccess,
        setWebAccess,
        selectedUsers,
        setSelectedUsers,
        selectedGroups,
        setSelectedGroups,
        showSearch,
        setShowSearch
      }}
    >
      {children}
    </ShareWidgetContext.Provider>
  );
};

export default ShareWidgetContextProvider;
