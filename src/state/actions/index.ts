import { ActionType } from "../action-types";

interface SearchRepo {
  type: ActionType.SEARCH_REPO;
}
interface SearchRepoSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS;
  payload: string[];
}
interface SearchRepoError {
  type: ActionType.SEARCH_REPO_ERROR;
  payload: string | null;
}

export type Action = SearchRepo | SearchRepoSuccess | SearchRepoError;
