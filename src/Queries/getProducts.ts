import { QueryKeys, StaleTime } from "../Config";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../Hooks/useProducts";

export const usePosts = (enabled = false) => {
  return useQuery({
    queryKey: [QueryKeys.Item_Post],
    queryFn: fetchPosts,
    staleTime: StaleTime.Item_Post,
    enabled: enabled,
    refetchOnWindowFocus: false,
  });
};
