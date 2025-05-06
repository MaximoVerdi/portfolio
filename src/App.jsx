import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { HeroSection } from "./components/heroSection/heroSection";
import { Skills } from "./components/skills/skills";
import { Proyects } from "./components/proyects/proyects";
import { AboutMe } from "./components/aboutMe/aboutMe";
import { Footer } from "./components/footer/footer";

function App() {

  return (
    <>
    <Header />
    <HeroSection />
    <Skills />
    <Proyects />
    <AboutMe />
    <Footer />
    </>
  );
}

export { App };
