import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  const blogName = 'Underreacted';
  const aboutText = 'Welcome to my blog!';

  const posts = [
    {
      id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    },
    {
      id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    },
    {
      id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
    }
  ];

  return (
    <div>
      <Header blogName={blogName} />
      <About aboutText={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;