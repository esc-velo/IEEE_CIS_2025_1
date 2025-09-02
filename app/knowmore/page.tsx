         
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer4Col from "../components/Footer";

export default function KnowMore() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
  <h1 className="text-4xl md:text-5xl font-bold mb-6">Know More</h1>
  <p className="max-w-3xl text-lg text-gray-800 leading-relaxed mb-12">
    Welcome to <span className="font-semibold">Lujo Gifts</span>, where 
    tradition meets luxury. We curate timeless handcrafted pieces that 
    celebrate India’s heritage, blending artistry and elegance into every 
    creation. Each product is more than a gift – it’s a story of culture, 
    craftsmanship, and celebration.
  </p>

  <section className="grid md:grid-cols-3 gap-8 max-w-5xl">
    <div className="p-6 rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Who We Are</h2>
      <p className="text-gray-800">
        We are a luxury gifting brand that believes in preserving Indian 
        heritage while offering modern aesthetics. Our collections reflect 
        a harmony of tradition and contemporary elegance.
      </p>
    </div>

    <div className="p-6 rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
      <p className="text-gray-800">
        To create gifts that hold meaning, inspire emotions, and leave 
        lasting impressions. We aim to bring heritage craftsmanship to the 
        forefront of modern luxury experiences.
      </p>
    </div>

    <div className="p-6 rounded-2xl shadow-lg bg-white/20 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h2>
      <p className="text-gray-800">
        Craftsmanship, authenticity, sustainability, and cultural pride 
        form the foundation of everything we do. Every collection tells a 
        story that connects people to timeless artistry.
      </p>
    </div>
  </section>
</main>


      <Footer4Col />
    </div>
  );
}
