import DesignTools from "@/components/DesignTools";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Navbar from "@/components/Navbar";
import Platforms from "@/components/Platforms";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import InputForm from "@/components/InputForm";


export default function Home() {
  return (
    <>
      <div className="bg-black">
        <Navbar />

        <Hero />

        <Features />

        <InputForm/>

        <DesignTools />

        <Products />

        <Platforms />

        <Solutions />

        <Testimonials />

        <Offers />

        <Footer />
      </div>
    </>
  );
}
