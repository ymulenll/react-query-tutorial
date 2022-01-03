/* eslint-disable jsx-a11y/anchor-is-valid */
import { useQueryClient } from "react-query";
import { usePosts } from "../hooks/posts";

export default function Posts({ setPostId }) {
  const queryClient = useQueryClient();
  const {
    data: posts,
    error,
    isLoading,
    isFetching,
    // isIdle,
    // refetch,
  } = usePosts();

  // if (isIdle) {
  //   return <button onClick={refetch}>Fetch Posts</button>;
  // }

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Posts...
      </div>
    );
  }

  if (error) {
    return (
      <section className="alert alert-danger">
        Error fetching posts: {error.message}
      </section>
    );
  }

  return (
    <section>
      <h2>Posts: {isFetching && <span className="spinner-border"></span>}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a
              className={
                queryClient.getQueryData(["posts", post.id]) && "link-success"
              }
              onClick={() => setPostId(post.id)}
              href="#"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
