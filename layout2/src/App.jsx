import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RecipeSection from "./components/RecipeSection";
import EditorsPick from "./components/EditorsPick";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <RecipeSection />
      <EditorsPick />
      <Footer />
    </div>
  );
}

export default App;
