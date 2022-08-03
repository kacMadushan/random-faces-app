import baseApi from '../config/config';

export const allUsers = (url) => {
  if (url) {
    return baseApi.get(`/?results=66&${url}`)
  }
  return baseApi.get(`/?results=66`)
};
