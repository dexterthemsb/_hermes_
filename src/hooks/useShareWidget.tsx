import { useContext } from "react";
import {
  IShareWidgetContext,
  ShareWidgetContext
} from "../contexts/ShareWidgetContext";

const useShareWidget = (): IShareWidgetContext =>
  useContext(ShareWidgetContext);

export default useShareWidget;
