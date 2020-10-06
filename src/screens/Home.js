import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Slider from "../components/Slider";
import Trending from "../components/TrendingPosts";
import FreshStories from "../components/freshStories";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Trending />
      <FreshStories />
      <Footer />
    </>
  );
}

export default Home;
