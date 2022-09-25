import { createContext, FC, ReactNode, useState } from "react";
import { AccessLevels } from "../types/misc";

export interface IShareWidgetContext {
  users: Array<any>;
  groups: Array<any>;
  initData: Function;
  isPublic: boolean;
  webAccess: AccessLevels;
  setWebAccess: Function;
  filteredUsers: Array<any>;
  filteredGroups: Array<any>;
  setIsPublic: Function;
  hover: number;
  setHover: Function;
  setFilteredUsers: Function;
  setFilteredGroups: Function;
  showSearch: boolean;
  setShowSearch: Function;
  selected: {[key: string]: AccessLevels};
  setSelected: Function;
}

const init: IShareWidgetContext = {
  users: [],
  groups: [],
  initData: () => {},
  isPublic: false,
  webAccess: 0,
  setWebAccess: () => {},
  filteredUsers: [],
  filteredGroups: [],
  setIsPublic: () => {},
  hover: 0,
  setHover: () => {},
  setFilteredUsers: () => {},
  setFilteredGroups: () => {},
  showSearch: false,
  setShowSearch: () => {},
  selected: {},
  setSelected: () => {}
};

export const ShareWidgetContext = createContext<IShareWidgetContext>(init);

const ShareWidgetContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<Array<any>>(init.users);
  const [groups, setGroups] = useState<Array<any>>(init.groups);
  const [isPublic, setIsPublic] = useState<boolean>(init.isPublic);
  const [hover, setHover] = useState<number>(init.hover);
  const [webAccess, setWebAccess] = useState<AccessLevels>(init.webAccess);
  const [filteredUsers, setFilteredUsers] = useState<Array<any>>(init.filteredUsers);
  const [filteredGroups, setFilteredGroups] = useState<Array<any>>(init.filteredGroups);
  const [showSearch, setShowSearch] = useState<boolean>(init.showSearch);
  const [selected, setSelected] = useState<{[key: string]: AccessLevels}>(init.selected);

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
        filteredUsers,
        setFilteredUsers,
        filteredGroups,
        setFilteredGroups,
        showSearch,
        setShowSearch,
        selected,
        setSelected
      }}
    >
      {children}
    </ShareWidgetContext.Provider>
  );
};

export default ShareWidgetContextProvider;
