import axios, { AxiosError } from 'axios';
// files
import { User, ApiResponseUser } from '../types/user';

const usersApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await usersApi.get<ApiResponseUser[]>('/users');

    return res.data;
  } catch (err: unknown) {
    throw new Error((err as AxiosError).message);
  }
};

export const getUser = async (userId: number): Promise<User> => {
  try {
    const res = await usersApi.get<ApiResponseUser>(`/user/${userId}`);

    return res.data;
  } catch (err: unknown) {
    throw new Error((err as AxiosError).message);
  }
};
