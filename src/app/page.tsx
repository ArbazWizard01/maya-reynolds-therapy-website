import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import Services from "@/components/Services";
import BannerQuote from "@/components/BannerQuote";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import MeetDrMaya from "@/components/MeetDrMaya";
import ReflectionBanner from "@/components/ReflectionBanner";
import Approach from "@/components/Approach";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutIntro />
        <Services />
        <BannerQuote />
        <AreasOfExpertise />
        <MeetDrMaya />
        <ReflectionBanner />
        <Approach />
        <OurOffice />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
