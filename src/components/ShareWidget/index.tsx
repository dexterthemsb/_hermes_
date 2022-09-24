import { Button, ButtonProps, Popover, PopoverTrigger } from "@chakra-ui/react";
import { forwardRef, ReactNode, useRef } from "react";
import { Share2 as ShareIcon } from "react-feather";
import ShareWidgetContextProvider from "../../contexts/ShareWidgetContext";
import PopupWidget from "./PopupWidget";

export interface ShareProps {
  users: Array<any>;
  groups: Array<any>;
  onSubmit?: Function;
  onSearch?: Function;
  buttonProps?: ButtonProps;
  children?: ReactNode;
}

const ShareWidget = forwardRef<HTMLButtonElement, ShareProps>(
  (
    {
      users,
      groups,
      onSubmit = () => {},
      onSearch = () => {},
      buttonProps = {},
      children = "Share"
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <ShareWidgetContextProvider>
        <Popover initialFocusRef={inputRef}>
          <PopoverTrigger>
            <Button
              ref={ref}
              rightIcon={<ShareIcon size={16} />}
              colorScheme="purple"
              fontWeight="medium"
              {...buttonProps}
            >
              {children}
            </Button>
          </PopoverTrigger>

          <PopupWidget users={users} groups={groups} />
        </Popover>
      </ShareWidgetContextProvider>
    );
  }
);

export default ShareWidget;
