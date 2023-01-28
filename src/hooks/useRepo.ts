import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useRepo = (username: string) => {
  const {
    data: repos,
    error,
    isLoading,
  } = useSWR(`${import.meta.env.VITE_API_URL}users/${username}/repos`, fetcher);

  return { repos, error, isLoading };
};
