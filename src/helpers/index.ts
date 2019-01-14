import { INews } from "../interfaces";
import { sortProperty } from "../types";

export const compareNumbers = (a: any, b: any) => {
  return a - b;
};

export const compare = (val: sortProperty) => (a: INews, b: INews) => {
  return (a[val] || "z").localeCompare(b[val] || "z");
};

export const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
