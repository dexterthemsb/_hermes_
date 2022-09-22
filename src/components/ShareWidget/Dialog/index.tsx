import { PopoverContent } from "@chakra-ui/react";
import { FC } from "react";
import useShareWidget from "../../../hooks/useShareWidget";
import DialogContent from "./DialogContent";
import DialogFooter from "./DialogFooter";
import DialogHeader from "./DialogHeader";
import SearchContent from "./SearchContent";
import SearchHeader from "./SearchHeader";

const Dialog: FC = () => {
  const { showSearch } = useShareWidget();

  return (
    <PopoverContent w="lg" shadow="md">
      {showSearch ? (
        <>
          <SearchHeader />
          <SearchContent />
        </>
      ) : (
        <>
          <DialogHeader />
          <DialogContent />
        </>
      )}

      <DialogFooter />
    </PopoverContent>
  );
};

export default Dialog;
