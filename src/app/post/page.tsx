import Link from "next/link";
import React from "react";
import { getAllPostsAPI } from "../libs/posts";

export default async function post() {
  const getAllPosts: AllPosts = await getAllPostsAPI();
  return (
    <div>
        {getAllPosts.map((post) => (
          <div key={post.id}>
            <Link href={'/post/'+post.id}>{post.title}</Link>
          </div>
        ))}
    </div>
  );
}
