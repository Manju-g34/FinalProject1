// MainPage.jsx
import React from "react";
import Hero from "../Hero/Hero";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import WhyUse from "../WhyUse/WhyUse"; // Example component

const MainPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhyUse />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MainPage;
