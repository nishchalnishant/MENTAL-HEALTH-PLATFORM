'use client';

interface PlayButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  spotifyUrl?: string;
}

export default function PlayButton({ 
  variant = 'primary', 
  size = 'large',
  spotifyUrl = 'https://open.spotify.com/episode/1oVyBmFHlFKOeOPI9JIuDY' // Default dummy Spotify link
}: PlayButtonProps) {
  const handlePlay = () => {
    // Open Spotify URL in a new tab
    window.open(spotifyUrl, '_blank');
  };

  if (size === 'small') {
    return (
      <button 
        onClick={handlePlay}
        className="bg-white/90 text-black w-12 h-12 rounded-full flex items-center justify-center hover:bg-white"
        title="Play on Spotify"
      >
        ▶
      </button>
    );
  }

  return (
    <button 
      onClick={handlePlay}
      className={`${
        variant === 'primary' 
          ? 'bg-white text-black hover:bg-white/90' 
          : 'bg-gray-500/50 text-white hover:bg-gray-500/70'
      } px-8 py-3 rounded-md flex items-center gap-2`}
      title={variant === 'primary' ? 'Play on Spotify' : 'Save to My List'}
    >
      {variant === 'primary' && <span>▶</span>}
      {variant === 'primary' ? 'Play on Spotify' : '+ My List'}
    </button>
  );
} 