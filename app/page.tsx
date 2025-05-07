import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { podcastData } from './data/podcast';
import PlayButton from './components/PlayButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2000"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to Your Mental Wellness Journey</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl">
            Discover personalized content tailored to your unique path of mental well-being
          </p>
        </div>
      </div>

      {/* Category Selection */}
      <div className="relative z-10 -mt-32 pb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Choose Your Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Men's Section */}
            <Link href="/men" className="group">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920"
                  alt="Men's Section"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">For Men</h3>
                  <p className="text-gray-300">Explore content tailored for men's mental health journey</p>
                </div>
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>

            {/* Women's Section */}
            <Link href="/women" className="group">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920"
                  alt="Women's Section"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">For Women</h3>
                  <p className="text-gray-300">Discover resources focused on women's mental wellness</p>
                </div>
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>

            {/* Others' Section */}
            <Link href="/others" className="group">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920"
                  alt="Others' Section"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">For Others</h3>
                  <p className="text-gray-300">Find inclusive mental health content for all identities</p>
                </div>
                <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </div>

          <div className="mt-16 text-center text-lg text-gray-400 max-w-2xl mx-auto">
            <p>Your mental health journey is unique. Select a path that resonates with you to access personalized content and resources designed for your specific needs.</p>
          </div>
        </div>
      </div>

      {/* Podcast Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 px-4">Mental Wellness Podcast</h2>
          
          {/* Featured Episode */}
          <div className="relative aspect-[21/9] mb-16 rounded-lg overflow-hidden">
            <Image
              src={podcastData.featured.thumbnail}
              alt={podcastData.featured.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3">
              <span className="inline-block bg-red-600 text-sm px-3 py-1 rounded-full mb-4">
                {podcastData.featured.episode}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{podcastData.featured.title}</h3>
              <p className="text-lg text-gray-300 mb-6">{podcastData.featured.description}</p>
              <div className="flex gap-4">
                <PlayButton 
                  variant="primary" 
                  spotifyUrl={podcastData.featured.spotifyUrl || 'https://open.spotify.com/episode/1oVyBmFHlFKOeOPI9JIuDY'} 
                />
                <PlayButton variant="secondary" />
              </div>
            </div>
          </div>

          {/* Seasons */}
          {podcastData.seasons.map((season) => (
            <div key={season.number} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 px-4">Season {season.number}: {season.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {season.episodes.map((episode, index) => (
                  <div 
                    key={index}
                    className="group relative bg-gray-800 rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={episode.thumbnail}
                        alt={episode.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <span className="inline-block bg-red-600 text-xs px-2 py-1 rounded-full mb-2">
                        S{season.number} {episode.episode}
                      </span>
                      <h4 className="font-semibold text-lg mb-1">{episode.title}</h4>
                      <p className="text-sm text-gray-400">{episode.duration}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayButton 
                        size="small" 
                        spotifyUrl={episode.spotifyUrl || 'https://open.spotify.com/episode/1oVyBmFHlFKOeOPI9JIuDY'} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
