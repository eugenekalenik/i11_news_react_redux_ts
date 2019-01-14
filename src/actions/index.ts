import { Dispatch } from "redux";
import * as actionTypes from "../constants/action-types";
import { compare } from "../helpers";
import { IState } from "../interfaces";
import { fetchNews } from "../requests";
import { sortProperty } from "../types";

export const setActiveTab = (activeTab: string) => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.SET_ACTIVE_TAB, payload: activeTab });
};

export const getNews = (activeTab: string) => async (dispatch: Dispatch) => {
  const data = await fetchNews(activeTab);
  dispatch({ type: actionTypes.GET_NEWS, payload: data.sort(compare("title")) });
  return data;
};

export const showSearchForm = () => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.SHOW_SEARCH_FORM, payload: true });
};

export const hideSearchForm = () => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.HIDE_SEARCH_FORM, payload: false });
};

export const setSortingAZ = (val: sortProperty) => (dispatch: Dispatch, getState: () => IState) => {
  dispatch({ type: actionTypes.SORT_AZ, payload: "AZ" });
  dispatch({ type: actionTypes.SORT_NEWS, payload: getState().data.sort(compare(val)) });
};

export const setSortingZA = (val: sortProperty) => (dispatch: Dispatch, getState: () => IState) => {
  dispatch({ type: actionTypes.SORT_ZA, payload: "ZA" });
  dispatch({ type: actionTypes.SORT_NEWS, payload: getState().data.reverse() });
};

export const setSortingBy = (val: sortProperty) => (dispatch: Dispatch, getState: () => IState) => {
  dispatch({ type: actionTypes.SORT_AZ, payload: "AZ" });
  dispatch({ type: actionTypes.SORT_BY, payload: val });
  dispatch({ type: actionTypes.SORT_NEWS, payload: getState().data.sort(compare(val)) });
};
