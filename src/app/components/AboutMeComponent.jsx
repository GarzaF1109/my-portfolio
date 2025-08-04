import { useState } from 'react';
import '../../app/dancing-script.css';
import TecdeSoftwareModal from '../modals/TecdeSoftwareModal';

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      id: 0,
      title: "New York Times Games",
      description: "I recreated some of the classic New York Times games in a simple, fun, and personal version — just for the joy of playing and building!",
      image: "/NotNewYorkTimes/NewYorkTimesGames.png",
      category: "art",
      onClickUrl: "https://not-new-york-times-games.vercel.app/",
      techIcons: [
        { src: "/TechIcons/Next.PNG", alt: "Next.js", className: "w-5 h-5" },
        { src: "/TechIcons/TypeScript.PNG", alt: "TypeScript", className: "w-5 h-5" },
        { src: "/TechIcons/Tailwindcss.PNG", alt: "Tailwind", className: "w-6 h-5" }
      ]
    },
    {
      id: 1,
      title: "Software Developer at IXSY - BURMA",
      description: "I worked on digital platforms to monitor servers and support public services in Yucatán using modern web technologies.",
      image: "/Burma/Burma.jpeg",
      category: "development",
      techIcons: [
        { src: "/TechIcons/Python.PNG", alt: "Python", className: "w-5 h-5" },
        { src: "/TechIcons/PiHPi.PNG", alt: "PHP", className: "w-7 h-5" },
        { src: "/TechIcons/Laravel.PNG", alt: "Laravel", className: "w-5 h-5" },
        { src: "/TechIcons/PostgreSQL.PNG", alt: "PostgreSQL", className: "w-5 h-5" },
        { src: "/TechIcons/Vue.PNG", alt: "Vue.js", className: "w-5 h-5" }
      ]
    },
    {
      id: 2,
      title: "Invent for the Planet 2024",
      description: "We joined the global innovation challenge Invent for the Planet 2024 and won first place at our school with a creative and impactful solution.",
      image: "/IFTP.mp4",
      category: "development",
      youtubeId: "UmnfDSnSxj0"
    },
    {
      id: 3,
      title: "QuickFlow",
      description: "I built QuickFlow as a personal project: a customizable platform for business operations, online orders, and inventory management.",
      image: "/QuickFlow/QuickFlow.png",
      category: "video",
      onClickUrl: "https://quick-flow-ochre.vercel.app/",
      techIcons: [
        { src: "/TechIcons/JavaScript.jpg", alt: "JS", className: "w-5 h-5" },
        { src: "/TechIcons/React.png", alt: "React", className: "w-5 h-5" },
        { src: "/TechIcons/Tailwindcss.PNG", alt: "Tailwind", className: "w-6 h-5" },
        { src: "/TechIcons/Firebase.PNG", alt: "Firebase", className: "w-5 h-5" }
      ]
    },
    {
      id: 4,
      title: "The Beginning of a New Journey",
      description: "I recently started my university studies at Tecnológico de Software, pursuing a degree in Software Development — the first step toward building meaningful digital solutions.",
      image: "/University.webp",
      category: "talks"
    },
    {
      id: 5,
      title: 'National Geographic "Slingshot Challenge" | ¿A quién le importa el agua?',
      description: "A look at National Geographic's Slingshot Challenge, where young people propose creative solutions to environmental problems.",
      image: "/NationalGeographic.mp4",
      category: "art",
      hasTwitter: true,
      tweetText: "The blue glow of a developer's workspace that shows the passion for creating & unique features. That's a short look at some of my favorites 💙",
      youtubeId: "xosNPL5OVVM"
    },
    {
      id: 7,
      title: "FIRST LEGO League Yucatán Robotics Champion",
      description: "Our team proudly secured the championship title at the FIRST LEGO League regional competition in Yucatán, showcasing innovation, teamwork, and engineering excellence.",
      image: "/Robotics.JPG",
      category: "achievement",
      onClickUrl: "https://ruraltv.com.mx/los-ninos-del-agua/"
    }
  ];

  const handleProjectClick = (project) => {
    if (project.id === 4) setModalOpen(true);
    if (project.onClickUrl) window.open(project.onClickUrl, '_blank');
  };

  const renderMedia = (project) => {
    const MediaComponent = project.image.endsWith('.mp4') ? 'video' : 'img';
    const mediaProps = project.image.endsWith('.mp4') 
      ? { src: project.image, loop: true, autoPlay: true, muted: true, playsInline: true, className: "w-full h-48 object-cover bg-black" }
      : { src: project.image, alt: project.title, className: `w-full h-48 object-cover ${project.youtubeId ? 'transition-transform duration-200 group-hover:scale-105' : ''}` };

    return (
      <div className={project.youtubeId ? "relative group cursor-pointer" : ""} 
           onClick={project.youtubeId ? () => window.open(`https://youtu.be/${project.youtubeId}`, '_blank') : undefined}>
        <MediaComponent {...mediaProps} />
        {project.youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-16 h-16 text-red-600" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="10" fill="white"/>
              <path d="M39.6 16.2C39.3 15.1 38.4 14.2 37.3 13.9C35.1 13.3 24 13.3 24 13.3C24 13.3 12.9 13.3 10.7 13.9C9.6 14.2 8.7 15.1 8.4 16.2C7.8 18.4 7.8 24 7.8 24C7.8 24 7.8 29.6 8.4 31.8C8.7 32.9 9.6 33.8 10.7 34.1C12.9 34.7 24 34.7 24 34.7C24 34.7 35.1 34.7 37.3 34.1C38.4 33.8 39.3 32.9 39.6 31.8C40.2 29.6 40.2 24 40.2 24C40.2 24 40.2 18.4 39.6 16.2ZM20.7 29.1V18.9L29.5 24L20.7 29.1Z" fill="#FF0000"/>
            </svg>
          </div>
        )}
      </div>
    );
  };

  const renderTechIcons = (icons) => (
    <span className="flex items-center gap-1 ml-2">
      {icons.map((icon, idx) => (
        <img key={idx} src={icon.src} alt={icon.alt} className={`${icon.className} rounded`} />
      ))}
    </span>
  );

  const renderTwitterSection = (project) => (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-start gap-3">
        <img src="/api/placeholder/40/40" alt="Profile" className="w-8 h-8 rounded-full" />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-sm">@gkburgess</span>
            <span className="text-blue-500 text-xs">✓</span>
          </div>
          <p className="text-gray-700 text-xs mt-1">{project.tweetText}</p>
          <div className="flex gap-4 mt-2 text-gray-500 text-xs">
            {['💬 3', '🔄 12', '❤️ 78'].map((stat, idx) => (
              <span key={idx} className="flex items-center gap-1">{stat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderProject = (project) => (
    <div key={project.id} className="mb-6">
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
        onClick={() => handleProjectClick(project)}
      >
        {renderMedia(project)}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium mb-2">{project.title}</h3>
            {project.techIcons && renderTechIcons(project.techIcons)}
          </div>
          <p className="text-gray-600 text-xs">{project.description}</p>
        </div>
        {/* {project.hasTwitter && renderTwitterSection(project)} */}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto font-sans">
      <header className="p-6 pt-10 text-center">
        <div className="mb-8 mx-auto max-w-lg">
          <p className="text-gray-700 text-sm mb-4 text-center">
            I'm Fernando Garza—a developer and designer who loves turning ideas into meaningful digital experiences. I enjoy working across the stack, live in dark mode, and break things just to learn how to fix them better.
          </p>
          <div className="mt-2">
            <span className="dancing-script-signature text-4xl text-gray-700">Fernando Garza</span>
          </div>
        </div>
      </header>

      <div className="flex justify-center mb-8">
        <div className="h-1 w-16 bg-gray-300 rounded-full"></div>
      </div>
      
      <div className="px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-8">
            {projects.filter((_, i) => i % 2 === 0).map(renderProject)}
          </div>
          <div className="space-y-8">
            {projects.filter((_, i) => i % 2 === 1).map(renderProject)}
          </div>
        </div>
      </div>
      <TecdeSoftwareModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}