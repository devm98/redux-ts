import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RooState } from "../state";

export const useTypedSelector: TypedUseSelectorHook<RooState> = useSelector;
