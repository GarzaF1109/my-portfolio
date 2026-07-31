import { useState } from 'react';
import '../../app/dancing-script.css';
import TecdeSoftwareModal from '../modals/TecdeSoftwareModal';

export default function Portfolio() {
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      id: 8,
      title: "Creator of MOOWKA",
      description: "I created Moowka, a link-in-bio SaaS platform that centralizes digital menus, online orders, payments, and local delivery — enabling physical businesses to sell online without marketplace commissions.",
      image: "/Moowka/Moowka.png",
      category: "development",
      year: "2026",
      onClickUrl: "https://moowka.com",
      techIcons: [
        { src: "/TechIcons/Next.PNG", alt: "Next.js", className: "w-5 h-5" },
        { src: "/TechIcons/TypeScript.PNG", alt: "TypeScript", className: "w-5 h-5" },
        { src: "/TechIcons/Supabase.png", alt: "Supabase", className: "w-5 h-5" }
      ]
    },
    {
      id: 9,
      title: "Backend Developer at Aivara",
      description: "Develop backend solutions and system integrations using Python, SQL, and Docker, building scalable APIs and regulatory-compliant software for the petroleum and hydrocarbons industry.",
      image: "/Aivara/Aivara.jpg",
      category: "development",
      year: "2025",
      techIcons: [
        { src: "/TechIcons/Python.PNG", alt: "Python", className: "w-5 h-5" },
        { src: "/TechIcons/PostgreSQL.PNG", alt: "PostgreSQL", className: "w-5 h-5" },
        { src: "/TechIcons/Docker.png", alt: "Docker", className: "w-10 h-5" }
      ]
    },
    {
      id: 0,
      title: "New York Times Games",
      description: "I recreated some of the classic New York Times games in a simple, fun, and personal version — just for the joy of playing and building!",
      image: "/NotNewYorkTimes/NewYorkTimesGames.png",
      category: "art",
      year: "2025",
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
      year: "2024",
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
      year: "2024",
      youtubeId: "UmnfDSnSxj0"
    },
    {
      id: 3,
      title: "QuickFlow",
      description: "I built QuickFlow as a personal project: a customizable platform for business operations, online orders, and inventory management.",
      image: "/QuickFlow/QuickFlow.png",
      category: "video",
      year: "2024",
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
      category: "talks",
      year: "2023"
    },
    {
      id: 5,
      title: 'National Geographic "Slingshot Challenge" | ¿A quién le importa el agua?',
      description: "A look at National Geographic's Slingshot Challenge, where young people propose creative solutions to environmental problems.",
      image: "/NationalGeographic.mp4",
      category: "art",
      year: "2022",
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
      year: "2021",
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

  const renderCardContent = (project) => (
    <>
      {renderMedia(project)}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-lg mb-2 ${project.id === 8 ? 'font-semibold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent' : 'font-medium text-gray-700'}`}>{project.title}</h3>
          {project.techIcons && renderTechIcons(project.techIcons)}
        </div>
        <p className="text-gray-600 text-xs">{project.description}</p>
      </div>
    </>
  );

  const renderProject = (project) => (
    <div key={project.id} className={`mb-6 ${project.id === 8 ? 'moowka-card-wrapper' : ''}`}>
      {project.id === 8 ? (
        <div className="relative group">
          <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 via-orange-400 to-purple-500 bg-[length:300%_100%] animate-gradient-border opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute -inset-[2px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
          <div
            className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <div className="absolute top-3 left-3 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-purple-500/30">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                My First SaaS
              </span>
            </div>
            {renderCardContent(project)}
          </div>
        </div>
      ) : (
        <div
          className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
          onClick={() => handleProjectClick(project)}
        >
          {renderCardContent(project)}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen max-w-4xl mx-auto font-sans">
      <header className="p-6 pt-10 text-center">
        <div className="mb-8 mx-auto max-w-lg">
          <p className="text-sm mb-4 text-center" style={{ color: 'var(--foreground)' }}>
            I'm Fernando Garza—a developer and designer who loves turning ideas into meaningful digital experiences. I enjoy working across the stack, live in dark mode, and break things just to learn how to fix them better.
          </p>
          <div className="mt-2">
            <span className="dancing-script-signature text-4xl" style={{ color: 'var(--foreground)' }}>Fernando Garza</span>
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

      <style>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient-border {
          animation: gradient-border 3s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2.5s ease-in-out infinite;
        }
        .moowka-card-wrapper {
          filter: drop-shadow(0 0 12px rgba(168, 85, 247, 0.15));
        }
        .moowka-card-wrapper:hover {
          filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.3));
        }
      `}</style>
    </div>
  );
}