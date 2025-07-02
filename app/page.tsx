import MinimalHero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer4Col from "./components/Footer";
import BentoGrid1 from "./components/MissionVision";
export default function Home() {
  return (
    <div>
      <MinimalHero />
      <Navbar />
      <BentoGrid1 />
      <Footer4Col />
    </div>
  );
}
