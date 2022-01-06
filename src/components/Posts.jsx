/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from 'react-query';
import { getPosts } from "../api/posts";

export default function Posts({ setPostId }) {
 
  const qc =  useQueryClient()
 //Queries
 const {data: posts,error, isLoading, isFetching/*, isIdle, refetch*/} = useQuery('posts',getPosts,{
   //refetchOnWindowFocus:false, //this property refresh the data example if we move for other tabs and return react-query refresh our data.
   //staleTime: <time>|infinity// exist other properties to handle this kind of situation.
   //enabled:false, //this property is for no load the data automatically

 });

  // if(isIdle) return <button onClick={refetch}>Fetch Posts</button>
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
      <h2>Posts:{isFetching && <span className="spinner-border"></span>}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a className={qc.getQueryData(['posts',post.id]) && 'link-success'} onClick={() => setPostId(post.id)} href="#">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
