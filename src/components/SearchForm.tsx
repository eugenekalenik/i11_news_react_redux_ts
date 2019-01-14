import { debounce } from "debounce";
import React from "react";
import { connect } from "react-redux";
import { getNews, hideSearchForm, setActiveTab, setSortingAZ, setSortingBy, setSortingZA } from "../actions";
import { scrollTop } from "../helpers";
import { INews, IState } from "../interfaces";
import { sortProperty } from "../types";

interface IProps {
  data: INews[];
  isSearchForm: boolean;
  sorting: string;
  sortBy: sortProperty;
  hideSearchForm: () => void;
  getNews: (activeTab: string) => void;
  setActiveTab: (activeTab: string) => void;
  setSortingAZ: (val: sortProperty) => void;
  setSortingBy: (val: sortProperty) => void;
  setSortingZA: (val: sortProperty) => void;
}

class SearchForm extends React.Component<IProps, { searchString: string, timeout: any }> {
  public debouncedLoad = debounce((val: string) => {
    this.doSearch(val);
  }, 800);

  public state = {
    searchString: "",
    timeout: null,
  };

  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.hideSearchForm();
  }

  public doSearch = (val: string) => {
    this.props.setActiveTab(val);
    this.props.getNews(val);
    scrollTop();
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.debouncedLoad(e.currentTarget.value);
  }

  public handleSortAZ = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.setSortingAZ(this.props.sortBy);
    scrollTop();
  }

  public handleSortZA = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.setSortingZA(this.props.sortBy);
    scrollTop();
  }

  public handleSortByTitle = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.setSortingBy("title");
    scrollTop();
  }

  public handleSortByAuthor = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.setSortingBy("author");
    scrollTop();
  }

  public render() {
    const { isSearchForm, sortBy, sorting } = this.props;

    if (isSearchForm === true) {
      return (
        <form className="search-form" onSubmit={ this.handleSubmit }>
          <div>
            {/* <label htmlFor="sf">Search</label> */ }
            <input type="text" id="sf" placeholder="Search" onChange={ this.handleChange } />
            <span>Sort by</span>
            <button
              onClick={ this.handleSortByTitle }
              className={ sortBy === "title" ? "active" : "" }>Title</button>
            <button
              onClick={ this.handleSortByAuthor }
              className={ sortBy === "author" ? "active" : "" }>Author</button>
            { sorting === "AZ" && <button onClick={ this.handleSortZA }>Z-A</button> }
            { sorting === "ZA" && <button onClick={ this.handleSortAZ }>A-Z</button> }
            <button type="submit">Close</button>
          </div>
        </form>
      );
    }

    return null;
  }
}

export default connect(
  (state: IState) => ({
    data: state.data,
    isSearchForm: state.isSearchForm,
    sortBy: state.sortBy,
    sorting: state.sorting,
  }),
  {
    getNews,
    hideSearchForm,
    setActiveTab,
    setSortingAZ,
    setSortingBy,
    setSortingZA,
  },
)(SearchForm);
