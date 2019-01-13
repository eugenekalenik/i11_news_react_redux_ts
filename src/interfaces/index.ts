export interface INews {
  source: {
    id: string,
    name: string,
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  isSearchForm: boolean;
  activeTab: string;
  data: INews[];
}
