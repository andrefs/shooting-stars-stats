import isomorphicFetch from "isomorphic-fetch";

const apiUrl = "http://localhost:15111";
//const apiUrl = 'https://stars-api.andrefs.com';
//const userId = '5af61777396666c67abc4707'; // user1
//const userId = "5afc549d2904cc717e1090a4"; // user2

// Overrides the fetch() method to add the base API url to the front.
export const fetch = (url, params, ...rest) => {
  return isomorphicFetch(apiUrl + url, { mode: "cors", ...params }, ...rest);
};

export const getStats = (...params) => {
  const url = "/stats?token=ichbintherealOG";
  return fetch(url, ...params);
};

export const getUsers = (...params) => {
  const url = "/users?token=ichbintherealOG";
  return fetch(url, ...params);
};

export const getOrderedPairs = (...params) => {
  const url =
    "/pairs?limit=100&orderedOnly=true&includeItems=true&token=ichbintherealOG";
  return fetch(url, ...params);
};
