import { useQuery } from "@tanstack/react-query";
import { getData } from "../apiClient";

export function useGetLatest(page = 1, per_page = 15) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["podcasts", page, per_page],
    queryFn: () =>
      getData(`/episodes/latest?page=${page}&per_page=${per_page}`),
  });

  const latestData = data; // 👈 Rename here
  const isLoadingLatest = isLoading;

  return { latestData, isLoadingLatest, error };
}
