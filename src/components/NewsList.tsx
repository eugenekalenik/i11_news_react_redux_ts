import React from "react";
import { connect } from "react-redux";
import { INews, IState } from "../interfaces";
import { sortProperty } from "../types";

interface IProps {
  activeTab: string;
  data: INews[];
  sortBy: sortProperty;
  sorting: string;
}

class NewsList extends React.Component<IProps> {
  public render() {
    if (!this.props.data) {
      return (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      );
    }

    if (!this.props.data.length) {
      return (
        <div className="no-news">
          <h1>There are no items.</h1>
        </div>
      );
    }

    return (
      <div className="news-list">
        {this.props.data.map((item: INews, index: number) => {
          return <div key={index} className="news-item" style={{
            backgroundImage: `url(${item.urlToImage})`
          }}>
            <div className="filter">
              <div className="date">{new Date(item.publishedAt).toDateString()}</div>
              <div className="title">{item.title}</div>
              <div className="author"><span>Author:</span> {item.author}</div>
              <a className="source" href={item.url}>{item.source.name}</a>
            </div>
          </div>;
        })}
      </div>
    );
  }
}

export default connect(
  (state: IState) => ({
    activeTab: state.activeTab,
    data: state.data,
    sortBy: state.sortBy,
    sorting: state.sorting,
  }),
  {},
)(NewsList);
