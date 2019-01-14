import { combineReducers } from "redux";
import { tabs } from "../constants";
import * as actionTypes from "../constants/action-types";
import { IAction, INews } from "../interfaces";
import { sortProperty } from "../types";

const data = (state: INews[] | null = null, action: IAction) => {
  if (action.type === actionTypes.GET_NEWS) {
    return action.payload || [];
  }

  if (action.type === actionTypes.SORT_NEWS) {
    return action.payload;
  }

  return state;
};

const activeTab = (state: string = tabs[0], action: IAction) => {
  if (action.type === actionTypes.SET_ACTIVE_TAB) {
    return action.payload;
  } else {
    return state;
  }
};

const isSearchForm = (state: boolean = false, action: IAction) => {
  if (action.type === actionTypes.SHOW_SEARCH_FORM || action.type === actionTypes.HIDE_SEARCH_FORM) {
    return action.payload;
  } else {
    return state;
  }
};

const sortBy = (state: sortProperty = "title", action: IAction) => {
  if (action.type === actionTypes.SORT_BY) {
    return action.payload;
  }

  return state;
};

const sorting = (state: string = "AZ", action: IAction) => {
  if (action.type === actionTypes.SORT_AZ) {
    return action.payload;
  }

  if (action.type === actionTypes.SORT_ZA) {
    return action.payload;
  }

  return state;
};

export const rootReducer = combineReducers({
  activeTab,
  data,
  isSearchForm,
  sortBy,
  sorting,
});

export default rootReducer;
