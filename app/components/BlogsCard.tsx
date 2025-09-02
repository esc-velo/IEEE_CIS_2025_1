import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function BlogCard({ title, description, image, link }: BlogCardProps) {
  return (
    <div className="bg-white/10 rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-200 mb-4">{description}</p>
        <Link
          href={link}
          target="_blank"
          className="text-blue-400 font-semibold hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
