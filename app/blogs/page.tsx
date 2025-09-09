import Footer4Col from "../components/Footer";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import BlogCard from "../components/BlogsCard";

export default function BlogsPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Grid Overlay */}
      <Background />
      <Navbar />

      <main className="container mx-auto px-6 py-30">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>

        <div className="flex justify-center">
          <BlogCard
            title="Is Your Phone Really Listening?"
            description="Ever wondered why ads pop up right after you talk about something? This blog uncovers the truth behind your phone’s “listening” mystery."
            image="/blogs/blogimg.webp"
            link="https://medium.com/@IEEE_CIS_MUJ/why-you-see-that-ad-right-after-talking-about-it-is-your-phone-really-listening-96ce918e77bc"
          />
        </div>
      </main>

      <Footer4Col />
    </div>
  );
}
