import { useQuery } from "@tanstack/react-query";
import { getData } from "../apiClient";

export function useGetPodcasts(page = 1, per_page = 15) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["podcasts", page, per_page],
    queryFn: () =>
      getData(`/podcasts/1/episodes?page=${page}&per_page=${per_page}`),
  });

  return { data, isLoading, error };
}
