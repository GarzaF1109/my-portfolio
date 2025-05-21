import { useState } from 'react';
import '../../app/dancing-script.css';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "ReadMe Retirement Video",
      description: "We created a video to cap our ten-year run, say goodbye, and explain why we're shutting down our creative creation tool.",
      image: "/api/placeholder/400/225",
      category: "video"
    },
    {
      id: 2,
      title: "Building Magical Developer Experiences",
      description: "Our design has had impact across a strong combination between designer-developer relationships and cross-team collaboration. Here we dive a bit about how we each approach our crafts.",
      image: "/api/placeholder/400/225",
      category: "development"
    },
    {
      id: 3,
      title: "Storytelling Talk",
      description: "In this talk, I explain the frameworks we've created over the years that just work.",
      image: "/api/placeholder/400/225",
      category: "talks"
    },
    {
    id: 4,
    title: "National Geographic “Slingshot Challenge” | ¿A quién le importa el agua?",
    description: "A look at National Geographic's Slingshot Challenge, where young people propose creative solutions to environmental problems.",
    image: "https://img.youtube.com/vi/xosNPL5OVVM/hqdefault.jpg", 
    category: "art",
    hasTwitter: true,
    tweetText: "The blue glow of a developer's workspace that shows the passion for creating & unique features. That's a short look at some of my favorites 💙",
    youtubeId: "xosNPL5OVVM",
    videoUrl: "https://www.youtube.com/watch?v=xosNPL5OVVM"
    },
    {
      id: 5,
      title: "Would I Lie To You?",
      description: "A few years ago, I was in Would I Lie To You? which I was very happy to do. I still get emails asking about the story I told. I get a bunch of clips from YouTube (it's much easier than finding the episode).",
      image: "/api/placeholder/400/225",
      category: "video"
    },
    {
      id: 6,
      title: "Startup-ish NYC",
      description: "I once recreated comedy... but more comedy than advertised. So much enjoyment that adds happiness.",
      image: "/api/placeholder/400/225",
      category: "art"
    },
    {
      id: 7,
      title: "Cat Animation",
      description: "Working with animations is just about something that I've tried to bring into every single product and experience I've been involved in creating.",
      image: "/api/placeholder/400/225",
      category: "art",
      hasTwitter: true,
      tweetText: "Working with animations is just about something that I've tried to bring into every single product and experience I've been involved in creating."
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen max-w-4xl mx-auto font-sans">
      {/* Hero Section */}
      <header className="p-6 pt-10">
        <div className="mb-8">
          <p className="text-gray-700 text-sm mb-4 max-w-lg">
            I'm Fernando Garza—a developer and designer who loves turning ideas into meaningful digital experiences. I enjoy working across the stack, live in dark mode, and break things just to learn how to fix them better.
          </p>
          <div className="mt-2">
            <span className="dancing-script-signature text-4xl text-gray-700">Fernando Garza</span>
          </div>
        </div>
      </header>

      {/* Central Divider */}
      <div className="flex justify-center mb-8">
        <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
      </div>
      
      {/* Projects Section - Two Column Layout */}
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-8">
            {projects.filter((_, i) => i % 2 === 0).map((project) => (
              <div key={project.id} className="mb-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  {project.youtubeId ? (
                    <div className="relative group cursor-pointer" onClick={() => window.open(`https://youtu.be/${project.youtubeId}`, '_blank')}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-16 h-16 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="text-white font-semibold">Ver video</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-xs">{project.description}</p>
                  </div>
                  
                  {/* Twitter/Social Media Comment Section */}
                  {project.hasTwitter && (
                    <div className="border-t border-gray-200 p-4">
                      <div className="flex items-start gap-3">
                        <img 
                          src="/api/placeholder/40/40" 
                          alt="Profile" 
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-sm">@gkburgess</span>
                            <span className="text-blue-500 text-xs">✓</span>
                          </div>
                          <p className="text-gray-700 text-xs mt-1">
                            {project.tweetText}
                          </p>
                          <div className="flex gap-4 mt-2 text-gray-500 text-xs">
                            <span className="flex items-center gap-1">
                              <span>💬</span> 3
                            </span>
                            <span className="flex items-center gap-1">
                              <span>🔄</span> 12
                            </span>
                            <span className="flex items-center gap-1">
                              <span>❤️</span> 78
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-64 bottom-20 w-px bg-gray-200"></div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {projects.filter((_, i) => i % 2 === 1).map((project) => (
              <div key={project.id} className="mb-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  {project.youtubeId ? (
                    <div className="relative group cursor-pointer" onClick={() => window.open(`https://youtu.be/${project.youtubeId}`, '_blank')}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-16 h-16 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="text-white font-semibold">Ver video</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-xs">{project.description}</p>
                  </div>
                  
                  {/* Twitter/Social Media Comment Section */}
                  {project.hasTwitter && (
                    <div className="border-t border-gray-200 p-4">
                      <div className="flex items-start gap-3">
                        <img 
                          src="/api/placeholder/40/40" 
                          alt="Profile" 
                          className="w-8 h-8 rounded-full"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-sm">@gkburgess</span>
                            <span className="text-blue-500 text-xs">✓</span>
                          </div>
                          <p className="text-gray-700 text-xs mt-1">
                            {project.tweetText}
                          </p>
                          <div className="flex gap-4 mt-2 text-gray-500 text-xs">
                            <span className="flex items-center gap-1">
                              <span>💬</span> 3
                            </span>
                            <span className="flex items-center gap-1">
                              <span>🔄</span> 12
                            </span>
                            <span className="flex items-center gap-1">
                              <span>❤️</span> 78
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}