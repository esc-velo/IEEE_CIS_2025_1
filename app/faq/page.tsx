import Footer4Col from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq3 from "../components/FAQs";
import Background from "../components/Background";

export default function TeamPage() {
  return (
    <div className=" relative min-h-screen  text-white">
      {/* Grid Overlay */}
      <Background />
      <Navbar/>
      
      <Faq3/>
      
<Footer4Col/>
    </div>
  );
}