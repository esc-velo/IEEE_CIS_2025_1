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

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>

        <div className="flex justify-center">
          <BlogCard
            title="AI in Today’s World"
            description="Discover how Artificial Intelligence is shaping industries, transforming businesses, and impacting our daily lives."
            image=""
            link="https://medium.com/your-medium-link"
          />
        </div>
      </main>

      <Footer4Col />
    </div>
  );
}
