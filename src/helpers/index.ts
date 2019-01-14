import { INews } from "../interfaces";
import { sortProperty } from "../types";

export const compareNumbers = (a: any, b: any) => {
  return a - b;
};

// export const compare = (property: string) => (a: string, b: string) => {
//   if (a[property] < b[property]) {
//     return -1;
//   }

//   if (a[property] > b[property]) {
//     return 1;
//   }

//   return 0;
// };

export const compare = (val: sortProperty) => (a: INews, b: INews) => {
  return a[val].localeCompare(b[val]);
};
