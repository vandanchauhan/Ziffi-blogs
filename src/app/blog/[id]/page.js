// pages/blogs/[id].js
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";

const BlogDetails = ({ params }) => {
  const id = params.id;
  const [blog, setBlog] = useState({});

  // useEffect(() => {
  //   if (id) {
  //     fetch(`http://localhost:5001/api/blogs/${id}`)
  //       .then((response) => response.json())
  //       .then((data) => setBlog(data));
  //   }
  // }, [id]);

  return (
    <div>
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-sky-50 min-h-screen text-black p-10">
        <h1 className={`text-3xl font-bold text-sky-950 mb-6`}>{blogData.title}</h1>
        <p className="mb-6">{blogData.content}</p>
        <p className="text-right">By {blogData.author}</p>
      </main>
    </div>
  );
};

export default BlogDetails;

const blogData = {
  id: "1",
  title: "10 Tips for Better Time Management",
  author: "Jane Smith",
  content:
    "Managing your time effectively is crucial for productivity and success. Here are 10 tips to help you improve your time management skills...",
};
