import Image from 'next/image';
import { menContent } from '../data/content';
import Navbar from '../components/Navbar';
import PlayButton from '../components/PlayButton';
import ContentCard from '../components/ContentCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Men's Mental Wellness",
  description: "Explore content tailored for men's mental health journey - stress management, emotional resilience, and personal growth.",
};

export default function MenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Featured Content */}
      <div className="relative h-[95vh]">
        <Image
          src={menContent.featured.thumbnail}
          alt={menContent.featured.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-32 left-0 p-12 space-y-4 w-full md:w-1/2">
          <h1 className="text-5xl font-bold">{menContent.featured.title}</h1>
          <p className="text-lg">{menContent.featured.description}</p>
          <div className="flex gap-4">
            <PlayButton variant="primary" spotifyUrl={menContent.featured.spotifyUrl} />
            <PlayButton variant="secondary" />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="relative bg-black pt-16">
        <div className="container mx-auto px-8">
          {menContent.categories.map((category, index) => (
            <section key={index} className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <ContentCard
                    key={itemIndex}
                    title={item.title}
                    description={item.description}
                    thumbnail={item.thumbnail}
                    duration={item.duration}
                    spotifyUrl={item.spotifyUrl}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
} 