import React from "react";
import { connect } from "react-redux";
import { getNews, setActiveTab } from "../actions";
import { tabs } from "../constants";
import { IState } from "../interfaces";

interface IProps {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
  getNews: (activeTab: string) => void;
}

class Tabs extends React.Component<IProps> {
  public componentDidMount() {
    this.props.setActiveTab(this.props.activeTab);
    this.props.getNews(this.props.activeTab);
  }

  public isTabActive = (tab: string) => {
    if (this.props.activeTab === tab) {
      return "active";
    }

    return "";
  }

  public handleClick = (tab: string) => () => {
    this.props.setActiveTab(tab);
    this.props.getNews(tab);
  }

  public render() {
    return (
      <div className="tabs">
        {
          tabs.map((tab) =>
            <div
              key={ tab }
              className={ `tab ${this.isTabActive(tab)}` }
              onClick={ this.handleClick(tab) }
            >
              { tab.toUpperCase() }
            </div>,
          )
        }
      </div>
    );
  }
}

export default connect(
  (state: IState) => ({
    activeTab: state.activeTab,
    data: state.data,
  }),
  {
    getNews,
    setActiveTab,
  },
)(Tabs);

