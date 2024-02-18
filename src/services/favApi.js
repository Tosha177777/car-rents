import { instance } from './api';

export const requestId = async id => {
  const { data } = await instance.get(`adverts/${id}`);
  return data;
};
