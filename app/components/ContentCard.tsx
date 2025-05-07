'use client';

import Image from 'next/image';
import PlayButton from './PlayButton';

interface ContentCardProps {
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  spotifyUrl?: string;
}

export default function ContentCard({
  title,
  description,
  thumbnail,
  duration,
  spotifyUrl
}: ContentCardProps) {
  return (
    <div className="group relative bg-gray-800 rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10">
      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 p-4 w-full">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-2">{description}</p>
          <p className="text-sm text-gray-400 mb-2">{duration}</p>
          <PlayButton size="small" spotifyUrl={spotifyUrl} />
        </div>
      </div>
    </div>
  );
}
