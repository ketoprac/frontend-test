import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useUser = (query: string) => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR(
    `${import.meta.env.VITE_API_URL}search/users?q=${query}&per_page=5`,
    fetcher
  );

  return { users, error, isLoading };
};
