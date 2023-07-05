import { getAllPostByIdAPI, getAllPostsAPI } from "@/app/libs/posts";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

// create a metadata for this page using next js 13 version ssr
import { Metadata } from "next";

export async function generateMetadata(props: PostParams): Promise<Metadata> {
 
  // fetch data
  const individualPost: Post = await getAllPostByIdAPI(props.params.postId);
  if(!individualPost){
    return {
      title: "POST NOT FOUND"
    };
  }

  return {
    title: individualPost.title,
    description: individualPost.body,
  };
}
export async function generateStaticParams() {
  const allPosts: AllPosts = await getAllPostsAPI();
  return allPosts.map((post) => {
    return {
      params: {
        postId: post.id.toString(),
      },
    };
  }); 
}

export default async function post(props: PostParams) {
  // db fetching
  const individualPost: Post = await getAllPostByIdAPI(props.params.postId);
  if(!individualPost){
    notFound();
  }
  return (
    <div className="flex h-full">
      <div className="m-auto">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {individualPost.title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {individualPost.body}
          </p>
          <Link
            href="/post"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Explore other Posts
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
