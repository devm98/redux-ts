import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/action-creators";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

export { useActions };
