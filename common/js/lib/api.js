import isomorphicFetch from 'isomorphic-fetch';

const apiUrl = 'http://localhost:15111';
//const userId = '5af61777396666c67abc4707'; // user1
const userId = '5afc549d2904cc717e1090a4'; // user2


// Overrides the fetch() method to add the base API url to the front.
export const fetch = (url, params, ...rest) => {
  return isomorphicFetch( apiUrl + url, {mode: 'cors', ...params}, ...rest);
};

export const getGameInstance = (...params) => {
  const url = '/gameInstances/current?userId='+userId;
  return fetch(url, ...params);
};

export const postPlayerPick = (pick) => {
  const url = `/gameInstances/currentTurn/${pick}?userId=`+userId;
  return fetch(url, {method: 'POST'});
};

export const createNewGame = () => {
  const url = '/gameInstances/current?userId='+userId;
  return fetch(url, {method: 'POST'});
};


export const getBestScores = (...params) => {
  const url = '/players/bestScores?userId='+userId;
  return fetch(url, ...params);
};

