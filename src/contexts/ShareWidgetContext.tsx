import { createContext, FC, ReactNode, useState } from "react";
import { AccessLevels } from "../types/misc";

export interface IShareWidgetContext {
  isPublic: boolean;
  webAccess: AccessLevels;
  setWebAccess: Function;
  selectedUsers: Array<any>;
  selectedGroups: Array<any>;
  setIsPublic: Function;
  setSelectedUsers: Function;
  setSelectedGroups: Function;
  showSearch: boolean;
  setShowSearch: Function;
}

const init: IShareWidgetContext = {
  isPublic: false,
  webAccess: 0,
  setWebAccess: () => {},
  selectedUsers: [],
  selectedGroups: [],
  setIsPublic: () => {},
  setSelectedUsers: () => {},
  setSelectedGroups: () => {},
  showSearch: false,
  setShowSearch: () => {}
};

export const ShareWidgetContext = createContext<IShareWidgetContext>(init);

const ShareWidgetContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isPublic, setIsPublic] = useState<boolean>(init.isPublic);
  const [webAccess, setWebAccess] = useState<AccessLevels>(init.webAccess);
  const [selectedUsers, setSelectedUsers] = useState<Array<any>>(init.selectedUsers);
  const [selectedGroups, setSelectedGroups] = useState<Array<any>>(init.selectedGroups);
  const [showSearch, setShowSearch] = useState<boolean>(init.showSearch);

  return (
    <ShareWidgetContext.Provider
      value={{
        isPublic,
        setIsPublic,
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
