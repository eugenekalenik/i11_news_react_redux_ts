import React from "react";
import { connect } from "react-redux";
import { showSearchForm } from "../actions";
import { IState } from "../interfaces";

interface IProps {
  ssf: () => void;
}

const SearchButton = (props: IProps) => {
  const { ssf } = props;

  const handleClick = () => {
    ssf();
  };

  return (
    <button className="search-button" onClick={ handleClick }>
      Search
    </button>
  );
};

export default connect(
  (state: IState) => ({}),
  {
    ssf: showSearchForm,
  },
)(SearchButton);


