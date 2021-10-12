import { AxiosError } from 'axios';
import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
// files
import { User } from '../types/user';
import { getUsers } from '../services/users';

export default function useGetUsers<TData = User[]>(
  options?: UseQueryOptions<User[], AxiosError, TData>,
): UseQueryResult<TData, AxiosError> {
  return useQuery('getUsers', getUsers, options);
}
