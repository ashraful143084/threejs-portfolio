import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import VideoPlayer from "./sections/VideoPlayer";

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <VideoPlayer />
      </main>
    </>
  );
};

export default App;
