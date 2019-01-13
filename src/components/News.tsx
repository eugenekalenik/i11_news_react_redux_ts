import React from "react";
import NewsList from "./NewsList";
import SearchButton from "./SearchButton";
import SearchForm from "./SearchForm";
import Tabs from "./Tabs";

const News = () => (
  <>
    <Tabs />
    <NewsList />
    <SearchForm />
    <SearchButton />
  </>
);

export default News;

