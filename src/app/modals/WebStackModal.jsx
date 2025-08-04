import React, { useState, useEffect } from "react";

export default function WebStackModal({ open = true, onClose = () => {} }) {
  const [isOpen, setIsOpen] = useState(open);
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      // Give time for the exit animation to complete before unmounting
      const timeoutId = setTimeout(() => setShouldRender(false), 300); // Duration of fadeOut and slideOut classes
      return () => clearTimeout(timeoutId);
    }
  }, [open]);

  if (!shouldRender) return null;

const skills = [
  {
    name: "Next.js",
    description: "React framework for hybrid rendering, routing, and web optimization.",
    icon: "/TechIcons/Next.PNG",
    color: "from-gray-800 to-black"
  },
  {
    name: "JavaScript",
    description: "Main language for interactive logic and dynamic behavior.",
    icon: "/TechIcons/JavaScript.jpg",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for fast styling and responsive design.",
    icon: "/TechIcons/Tailwindcss.PNG",
    color: "from-sky-400 to-teal-500"
  },
  {
    name: "HTML5",
    description: "Semantic structure for web content.",
    icon: "/TechIcons/Html.png",
    color: "from-orange-500 to-red-500"
  },
  // {
  //   name: "CSS3",
  //   description: "Custom styling and visual presentation control.",
  //   icon: "/TechIcons/Css.png",
  //   color: "from-blue-500 to-indigo-600"
  // }
];


  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 transition-all duration-300
        ${isOpen ? 'bg-black/50 animate-fadeIn' : 'bg-transparent animate-fadeOut'}
      `}
      onClick={onClose}
    >
      <div
        className={`
          bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl shadow-2xl relative overflow-hidden
          transform transition-all duration-300 border border-white/20
          ${isOpen ? 'scale-100 opacity-100 animate-modalIn' : 'scale-95 opacity-0 animate-modalOut'}
        `}
        style={{ width: '90vw', height: 'auto', maxWidth: '900px', maxHeight: '85vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-200/20 to-pink-300/20 rounded-full blur-xl"></div>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 z-50 text-gray-500 hover:text-gray-700 text-2xl bg-white/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl hover:scale-110"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="relative z-10 p-4 md:p-6 overflow-y-auto" style={{ maxHeight: '85vh' }}>
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1">
              This website was built with
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Tools and technologies used in this project
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-white/50 hover:border-blue-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>

                <div className="relative z-10 flex items-center space-x-2">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                  {/\.(png|jpe?g|svg)$/i.test(skill.icon) ? (
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <span className="text-sm">{skill.icon}</span>
                  )}
                </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-800 truncate">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-600 leading-tight line-clamp-2">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Crafted with care and curiosity
            </p>
          </div>
        </div>

        {/* Enhanced CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          
          @keyframes modalIn {
            from {
              opacity: 0;
              transform: scale(0.85) translateY(-30px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes modalOut {
            from {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
            to {
              opacity: 0;
              transform: scale(0.95) translateY(-10px); /* Slightly move up and shrink */
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          
          .animate-fadeOut {
            animation: fadeOut 0.3s ease-out forwards;
          }
          
          .animate-modalIn {
            animation: modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          .animate-modalOut {
            animation: modalOut 0.3s ease-in forwards;
          }
        `}</style>
      </div>
    </div>
  );
}