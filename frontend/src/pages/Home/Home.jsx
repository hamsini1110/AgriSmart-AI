import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Services from "../../components/Services/Services";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Statistics from "../../components/Statistics/Statistics";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;