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
      title: "Invent for the Planet 2024",
      description: "We joined the global innovation challenge Invent for the Planet 2024 and won first place at our school with a creative and impactful solution.",
      image: "/IFTP.mp4",
      category: "development",
      youtubeId: "UmnfDSnSxj0",
      videoUrl: "https://youtu.be/UmnfDSnSxj0"
    },
    {
      id: 3,
      title: "The Beginning of a New Journey",
      description: "I recently started my university studies at Tecnológico de Software, pursuing a degree in Software Development — the first step toward building meaningful digital solutions.",
      image: "/University.webp",
      category: "talks"
    },
    {
    id: 4,
    title: 'National Geographic "Slingshot Challenge" | ¿A quién le importa el agua?',
    description: "A look at National Geographic's Slingshot Challenge, where young people propose creative solutions to environmental problems.",
    image: "/NationalGeographic.mp4", 
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
      title: "FIRST LEGO League Yucatán Robotics Champion",
      description: "Our team proudly secured the championship title at the FIRST LEGO League regional competition in Yucatán, showcasing innovation, teamwork, and engineering excellence.",
      image: "/Robotics.JPG",
      category: "achievement"
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
    <div className="min-h-screen max-w-4xl mx-auto font-sans">
      {/* Hero Section */}
      <header className="p-6 pt-10 text-center">
        <div className="mb-8 mx-auto max-w-lg">
          <p className="text-gray-700 text-sm mb-4 text-center">
            I'm Fernando Garza—a developer and designer who loves turning ideas into meaningful digital experiences. I enjoy working across the stack, live in dark mode, and break things just to learn how to fix them better.
          </p>
          <div className="mt-2">
            <span className="dancing-script-signature text-4xl text-gray-700">
              Fernando Garza
            </span>
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
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  {project.youtubeId ? (
                    <div className="relative group cursor-pointer" onClick={() => window.open(`https://youtu.be/${project.youtubeId}`, '_blank')}>
                      {project.image.endsWith('.mp4') ? (
                        <video
                          src={project.image}
                          loop
                          autoPlay
                          muted
                          playsInline
                          className="w-full h-48 object-cover bg-black"
                          poster="/api/placeholder/400/225"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* YouTube logo SVG */}
                        <svg className="w-16 h-16 text-red-600 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="10" fill="white"/>
                          <path d="M39.6 16.2C39.3 15.1 38.4 14.2 37.3 13.9C35.1 13.3 24 13.3 24 13.3C24 13.3 12.9 13.3 10.7 13.9C9.6 14.2 8.7 15.1 8.4 16.2C7.8 18.4 7.8 24 7.8 24C7.8 24 7.8 29.6 8.4 31.8C8.7 32.9 9.6 33.8 10.7 34.1C12.9 34.7 24 34.7 24 34.7C24 34.7 35.1 34.7 37.3 34.1C38.4 33.8 39.3 32.9 39.6 31.8C40.2 29.6 40.2 24 40.2 24C40.2 24 40.2 18.4 39.6 16.2ZM20.7 29.1V18.9L29.5 24L20.7 29.1Z" fill="#FF0000"/>
                        </svg>
                        <span className="text-red-600 font-semibold bg-white bg-opacity-80 rounded px-2 py-1">Ver en YouTube</span>
                      </div>
                    </div>
                  ) : (
                    project.image.endsWith('.mp4') ? (
                      <video
                        src={project.image}
                        loop
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-48 object-cover bg-black"
                        poster="/api/placeholder/400/225"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    )
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
                <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  {project.youtubeId ? (
                    <div className="relative group cursor-pointer" onClick={() => window.open(`https://youtu.be/${project.youtubeId}`, '_blank')}>
                      {project.image.endsWith('.mp4') ? (
                        <video
                          src={project.image}
                          loop
                          autoPlay
                          muted
                          playsInline
                          className="w-full h-48 object-cover bg-black"
                          poster="/api/placeholder/400/225"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* YouTube logo SVG */}
                        <svg className="w-16 h-16 text-red-600 mb-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="48" height="48" rx="10" fill="white"/>
                          <path d="M39.6 16.2C39.3 15.1 38.4 14.2 37.3 13.9C35.1 13.3 24 13.3 24 13.3C24 13.3 12.9 13.3 10.7 13.9C9.6 14.2 8.7 15.1 8.4 16.2C7.8 18.4 7.8 24 7.8 24C7.8 24 7.8 29.6 8.4 31.8C8.7 32.9 9.6 33.8 10.7 34.1C12.9 34.7 24 34.7 24 34.7C24 34.7 35.1 34.7 37.3 34.1C38.4 33.8 39.3 32.9 39.6 31.8C40.2 29.6 40.2 24 40.2 24C40.2 24 40.2 18.4 39.6 16.2ZM20.7 29.1V18.9L29.5 24L20.7 29.1Z" fill="#FF0000"/>
                        </svg>
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