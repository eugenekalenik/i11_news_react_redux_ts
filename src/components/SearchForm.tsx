import { debounce } from "debounce";
import React from "react";
import { connect } from "react-redux";
import { getNews, hideSearchForm, setActiveTab, toggleSortBy, toggleSorting } from "../actions";
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
  toggleSortBy: (val: sortProperty) => void;
  toggleSorting: (sortingValue: string) => void;
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
  }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.debouncedLoad(e.currentTarget.value);
  }

  public handleSortBy = (property: sortProperty) => (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.toggleSortBy(property);
  }

  public handleSorting = (val: string) => (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.toggleSorting(val);
  }

  public setActiveClass = () => {
    return this.props.sortBy === "author" ? "active" : "";
  }

  public render() {
    const { isSearchForm } = this.props;

    if (isSearchForm === true) {
      return (
        <form className="search-form" onSubmit={this.handleSubmit}>
          <div>
            {/* <label htmlFor="sf">Search</label> */}
            <input type="text" id="sf" placeholder="Search" onChange={this.handleChange} />
            <span>Sort by</span>
            <button onClick={this.handleSortBy("title")} className={this.setActiveClass()}>Title</button>
            <button onClick={this.handleSortBy("author")} className={this.setActiveClass()}>Author</button>
            <button
              onClick={this.handleSorting(this.props.sorting)}
              className={this.setActiveClass()}>{this.props.sorting === "ZA" ? "AZ" : "ZA"}</button>
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
    toggleSortBy,
    toggleSorting,
  },
)(SearchForm);
