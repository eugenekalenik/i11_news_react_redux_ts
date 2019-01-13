import { Dispatch } from "redux";
import { GET_NEWS, SET_ACTIVE_TAB } from "../constants/action-types";
import { fetchNews } from "../requests";

export const setActiveTab = (activeTab: string) => (dispatch: Dispatch) => {
  dispatch({ type: SET_ACTIVE_TAB, payload: activeTab });
};

export const getNews = (activeTab: string) => async (dispatch: Dispatch) => {
  const data = await fetchNews(activeTab);
  dispatch({ type: GET_NEWS, payload: data });
  return data;
};

export const showSearchForm = () => (dispatch: Dispatch) => {
  dispatch({ type: "SHOW_SEARCH_FORM", payload: true });
};

export const hideSearchForm = () => (dispatch: Dispatch) => {
  dispatch({ type: "HIDE_SEARCH_FORM", payload: false });
};
