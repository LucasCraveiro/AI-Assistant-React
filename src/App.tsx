import React from "react";
import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const LazyInfoBlocks = React.lazy(() => import("./components/InfoBlocks"));
const LazyAssitantDocs = React.lazy(() => import("./components/AssistentDocs"));
const LazyGenerateCTA = React.lazy(() => import("./components/GenerateCTA"));

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <React.Suspense>
        <LazyInfoBlocks />
        <LazyAssitantDocs />
        <LazyGenerateCTA />
      </React.Suspense>
      <Footer />
    </>
  );
}

export default App;
