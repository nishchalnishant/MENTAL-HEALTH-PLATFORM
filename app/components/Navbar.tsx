import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      <div className="absolute w-full h-20 bg-gradient-to-b from-black/80 to-transparent"></div>
      <nav className="relative flex items-center px-8 py-4">
        <Link href="/" className="flex items-center">
          <h1 className="text-red-600 text-3xl font-bold">MINDFLIX</h1>
        </Link>
        <div className="flex-grow"></div>
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-gray-300">Sign In</button>
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-white">👤</span>
          </div>
        </div>
      </nav>
    </div>
  );
} 