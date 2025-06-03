import React from "react";

export default function SkillsModal({ open = true, onClose = () => {} }) {
  if (!open) return null;

  const skills = [
    {
      name: "React",
      description: "Building dynamic user interfaces with modern React patterns",
      icon: "⚛️",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "JavaScript",
      description: "Full-stack development with ES6+ features",
      icon: "🟨",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Node.js",
      description: "Server-side development and API creation",
      icon: "🟢",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "Python",
      description: "Data analysis, automation, and backend development",
      icon: "🐍",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "SQL",
      description: "Database design and complex query optimization",
      icon: "🗄️",
      color: "from-gray-500 to-slate-600"
    },
    {
      name: "Git",
      description: "Version control and collaborative development",
      icon: "📝",
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Docker",
      description: "Containerization and deployment strategies",
      icon: "🐳",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "AWS",
      description: "Cloud infrastructure and serverless architectures",
      icon: "☁️",
      color: "from-orange-400 to-yellow-500"
    },
    {
      name: "MongoDB",
      description: "NoSQL database design and management",
      icon: "🍃",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "TypeScript",
      description: "Type-safe development and scalable applications",
      icon: "🔷",
      color: "from-blue-600 to-indigo-700"
    },
    {
      name: "CSS/Tailwind",
      description: "Responsive design and modern styling frameworks",
      icon: "🎨",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "GraphQL",
      description: "Efficient API queries and data management",
      icon: "🔺",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 transition-all duration-300 animate-fadeIn">
      <div 
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl shadow-2xl relative overflow-hidden transform transition-all duration-500 animate-modalIn border border-white/20"
        style={{ width: '90vw', height: 'auto', maxWidth: '900px', maxHeight: '85vh' }}
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
              Technical Skills
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Technologies and tools I work with
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
                  <div className={`w-8 h-8 bg-gradient-to-br ${skill.color} rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                    <span className="text-sm">{skill.icon}</span>
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
              Always learning and exploring new technologies
            </p>
          </div>
        </div>

        {/* Enhanced CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
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
          
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
          
          .animate-modalIn {
            animation: modalIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
        `}</style>
      </div>
    </div>
  );
}