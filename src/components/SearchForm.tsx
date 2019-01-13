import { debounce } from "debounce";
import React from "react";
import { connect } from "react-redux";
import { getNews, hideSearchForm, setActiveTab, } from "../actions";
import { INews, IState } from "../interfaces";

interface IProps {
  data: INews[];
  isSearchForm: boolean;
  hideSearchForm: () => void;
  getNews: (activeTab: string) => void;
  setActiveTab: (activeTab: string) => void;
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

  // public doDelayedSearch(val: string) {
  //   if (this.state.timeout) {
  //     this.setState({ timeout: null });
  //   }

  //   this.setState({
  //     timeout: setTimeout(() => {
  //       this.doSearch(val);
  //     }, 800),
  //   });
  // }

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    this.debouncedLoad(e.currentTarget.value);
  }

  public render() {
    const { data, isSearchForm } = this.props;

    if (isSearchForm === true) {
      return (
        <form className="search-form" onSubmit={ this.handleSubmit }>
          <div>
            {/* <label htmlFor="sf">Search</label> */}
            <input type="text" id="sf" placeholder="Search" onChange={ this.handleChange } />
            <button disabled>Sort A-Z</button>
            <button disabled>Sort by Author</button>
            <button type="submit">Close</button>
            {/* <hr />
            { data.map((item: INews, index: number) => {
              return (
                <div key={ index }>{ item.title }</div>
              );
            }) } */}
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
  }),
  {
    getNews,
    hideSearchForm,
    setActiveTab,
  },
)(SearchForm);
