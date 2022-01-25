import { useMutation, useQuery, useQueryClient } from "react-query";
import { createNewPost, getPostById, getPosts } from "../api/posts";

const key = "posts";

export function useMutatePost() {
  const queryClient = useQueryClient();

  return useMutation(createNewPost, {
    onSuccess: (post) => {
      queryClient.setQueryData([key], (prevPosts) => prevPosts.concat(post));
      queryClient.invalidateQueries([key]);
    },
  });
}

export function usePosts() {
  return useQuery([key], getPosts);
}

export function usePost(postId) {
  return useQuery([key, postId], () => getPostById(postId));
}
