import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import NavContent from "./Components/Content/NavContent";
import PressRelease from "./Components/Press Release/PressRelease";
import News from "./Components/TheNews.jsx/News";
import WixDetails from "./Components/WixDetails/WixDetails";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <NavContent />
      <PressRelease />
      <News />
      <WixDetails />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
