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
  dispatch({ type: actionTypes.GET_NEWS, payload: data });
  return data;
};

export const showSearchForm = () => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.SHOW_SEARCH_FORM, payload: true });
};

export const hideSearchForm = () => (dispatch: Dispatch) => {
  dispatch({ type: actionTypes.HIDE_SEARCH_FORM, payload: false });
};

export const toggleSortBy = (property: sortProperty) => (dispatch: Dispatch, getState: () => IState) => {
  const sortBy = getState().sortBy;

  if (sortBy === property) {
    dispatch({ type: actionTypes.SORT_BY, payload: getState().data.sort(compare(property)) });
  }

  dispatch({ type: actionTypes.SORT_BY, payload: getState().data.reverse() });
};

export const toggleSorting = (sortingValue: string) => (dispatch: Dispatch, getState: () => IState) => {
  const sorting = getState().sorting;

  if (sorting === sortingValue) {
    dispatch({ type: actionTypes.AZA, payload: sortingValue });
  }

  dispatch({ type: actionTypes.AZA, payload: sortingValue });
};
