import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      if (data.total === 0) {
        throw Error("Không tìm thấy thông tin!");
      }

      const result = data.objects.map((item: any) => item.package.name);

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: result,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPO_ERROR,
        payload: error.message,
      });
    }
  };
};

export { searchRepositories };
