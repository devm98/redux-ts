import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  data: string[];
  loading: boolean;
  error: string | null;
}

const initState: RepositoriesState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPO:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPO_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
