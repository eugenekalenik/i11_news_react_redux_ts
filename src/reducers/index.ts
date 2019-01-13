import { combineReducers } from "redux";
import { tabs } from "../constants";
import { GET_NEWS, SET_ACTIVE_TAB } from "../constants/action-types";
import { IAction, INews } from "../interfaces";

const data = (state: INews[] = [], action: IAction) => {
  if (action.type === GET_NEWS) {
    return action.payload || [];
  } else {
    return state;
  }
};

const activeTab = (state: string = tabs[0], action: IAction) => {
  if (action.type === SET_ACTIVE_TAB) {
    return action.payload;
  } else {
    return state;
  }
};

const isSearchForm = (state: boolean = false, action: IAction) => {
  if (action.type === "SHOW_SEARCH_FORM" || action.type === "HIDE_SEARCH_FORM") {
    return action.payload;
  } else {
    return state;
  }
};

export const rootReducer = combineReducers({
  activeTab,
  data,
  isSearchForm,
});


export default rootReducer;
