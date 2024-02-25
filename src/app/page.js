// pages/index.js
"use client";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import BlogForm from "./components/BlogForm";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleNewBlog = async (newBlog) => {
    const response = await fetch("http://localhost:5001/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    });

    if (response.ok) {
      const blog = await response.json();
      setBlogs([...blogs, blog]);
      setShowModal(false); // Close the modal after adding a new blog
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white">
      <Head className="font-black">
        <title>My Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10">
        <div className="flex flex-row justify-between p-4 py-8">
          <p className={`text-3xl font-bold text-sky-950`}>Ziffi Blogs</p>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center bg-zinc-400/60 justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-11/12 md:w-2/3 max-w-3xl mx-auto my-6">
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl text-sky-950 font-semibold">Add New Blog</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={closeModal}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <BlogForm onSubmit={handleNewBlog} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

            <div
              onClick={openModal}
              className="w-[100px] h-[100px] z-50 p-4 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer m-4 bg-white rounded-full border-sky-950 border-2 text-center flex flex-col justify-center items-center hover:bg-sky-50 hover:pointer fixed bottom-10 right-10"
            >
              <div className={`text-5xl font-bold text-sky-950`}>+</div>
            </div>

        <div className="flex flex-wrap">
          {data.map((blog, index) => (
            <div
              className="w-full sm:w-[45%] md:w-[28%] p-4 m-4 bg-sky-300/50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded hover:bg-sky-500/65"
              key={blog.id}
            >
              <Link href={`/blog/${blog.id}`}>
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className={`text-lg font-bold text-sky-950`}>
                      {blog.title}  
                    </h2>
                    <p className={`text-sm text-black`}>
                      {blog.content.substring(0, 100)}...
                    </p>
                  </div>
                  <p className={`text-sm mt-4 text-black`}>By {blog.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

const data = [
  {
    id: "1",
    title: "10 Tips for Better Time Management",
    author: "Jane Smith",
    content:
      "Managing your time effectively is crucial for productivity and success. Here are 10 tips to help you improve your time management skills...",
  },
  {
    id: "2",
    title: "The Benefits of Regular Exercise",
    author: "John Doe",
    content:
      "Regular exercise offers numerous benefits for both physical and mental health. From improving cardiovascular health to reducing stress levels, here's why you should prioritize exercise...",
  },
  {
    id: "3",
    title: "Beginner's Guide to Cooking Healthy Meals",
    author: "Emily Johnson",
    content:
      "Cooking healthy meals at home doesn't have to be complicated. In this beginner's guide, we'll cover basic cooking techniques and healthy ingredient choices to get you started on the right track...",
  },
  {
    id: "4",
    title: "Exploring the Wonders of Nature",
    author: "David Wilson",
    content:
      "Nature has a way of captivating us with its beauty and diversity. Join us on a journey to explore some of the most breathtaking natural wonders around the world...",
  },
  {
    id: "5",
    title: "Mastering the Art of Public Speaking",
    author: "Sarah Thompson",
    content:
      "Public speaking is a valuable skill that can open doors to numerous opportunities. Whether you're giving a presentation at work or speaking at a social event, mastering the art of public speaking is essential...",
  },
  {
    id: "6",
    title: "The Importance of Setting Goals",
    author: "Michael Brown",
    content:
      "Setting goals gives you direction, focus, and motivation to achieve your dreams. Learn why goal setting is important and how you can set effective goals to turn your aspirations into reality...",
  },
  {
    id: "7",
    title: "Exploring World Cuisines: A Culinary Adventure",
    author: "Sophia Martinez",
    content:
      "Embark on a culinary adventure as we explore the rich and diverse world cuisines. From spicy curries to savory pastas, there's something for everyone to enjoy...",
  },
  {
    id: "8",
    title: "The Power of Positive Thinking",
    author: "Adam Jones",
    content:
      "Positive thinking can have a profound impact on your life, leading to increased happiness, resilience, and success. Discover how you can cultivate a positive mindset and reap its benefits...",
  },
  {
    id: "9",
    title: "Exploring Mindfulness Meditation",
    author: "Emma White",
    content:
      "Mindfulness meditation is a powerful practice that can help reduce stress, improve focus, and promote overall well-being. Learn how to incorporate mindfulness into your daily routine and experience its transformative effects...",
  },
  {
    id: "10",
    title: "Unlocking the Secrets of Successful Entrepreneurs",
    author: "Jack Johnson",
    content:
      "What sets successful entrepreneurs apart from the rest? Join us as we delve into the habits, mindset, and strategies of some of the world's most successful business leaders...",
  },
  {
    id: "11",
    title: "The Art of Minimalism: Living with Less",
    author: "Olivia Davis",
    content:
      "Minimalism is more than just decluttering your physical space – it's a way of life that promotes simplicity, intentionality, and freedom. Discover the joys of living with less and embrace a minimalist lifestyle...",
  },
];
