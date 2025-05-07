# MindFlix - Mental Health Content Platform

MindFlix is a Netflix-style platform dedicated to mental health and wellness content. It offers personalized content paths for different gender identities and integrates with Spotify for audio content delivery.

## Features

- 🎯 Personalized content paths for men, women, and others
- 🎵 Spotify integration for podcast episodes
- 🎨 Netflix-style UI with smooth animations
- 📱 Fully responsive design
- 🖼️ Dynamic content cards with hover effects
- 🎬 Featured content sections
- 📚 Categorized content library

## Tech Stack

- Next.js 15.3+ with App Router
- TypeScript for type safety
- TailwindCSS for styling
- Turbopack for fast development
- Spotify Web Player integration

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mental-health-platform.git
cd mental-health-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mental-health-platform/
├── app/
│   ├── components/         # Reusable components
│   ├── data/              # Content data files
│   ├── men/               # Men's section
│   ├── women/             # Women's section
│   ├── others/            # Others' section
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
└── ...config files
```

## Key Components

- `ContentCard`: Displays content items with hover effects and play functionality
- `PlayButton`: Handles Spotify playback integration
- `Navbar`: Navigation component with MINDFLIX branding

## Content Structure

Each gender section includes:
- Featured content with hero image
- Multiple content categories
- Individual content cards with:
  - Thumbnail image
  - Title and description
  - Duration
  - Spotify playback integration

## Development

- Use `npm run dev` for development with hot-reload
- The platform uses Next.js App Router for routing
- All components are built with TypeScript for type safety
- Styling is done with TailwindCSS utility classes

## Spotify Integration

The platform integrates with Spotify for audio content:
- Each content piece can have a unique Spotify URL
- Play buttons open content directly in Spotify
- Both large and small play button variants are available

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Netflix for UI/UX inspiration
- Unsplash for placeholder images
- Spotify for audio content integration
