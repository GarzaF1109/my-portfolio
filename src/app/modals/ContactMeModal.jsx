import React, { useState, useEffect } from "react";

export default function ContactsModal({ open = true, onClose = () => {} }) {
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

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-opacity-60 transition-all duration-300
        ${isOpen ? 'bg-black/50 animate-fadeIn' : 'bg-transparent animate-fadeOut'}
      `}
      onClick={onClose} // Close when clicking outside the modal
    >
      <div
        className={`
          bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl shadow-2xl relative overflow-hidden
          transform transition-all duration-300 border border-white/20
          ${isOpen ? 'scale-100 opacity-100 animate-modalIn' : 'scale-95 opacity-0 animate-modalOut'}
        `}
        style={{ width: '90vw', height: 'auto', maxWidth: '800px', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
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
              Let's Connect!
            </h2>
          </div>

          {/* Contact Content - Compact Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Phone */}
            <a
              href="tel:+529991836510"
              className="group relative bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-white/50 hover:border-blue-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <img
                    src="/ContactMe/Phone.PNG"
                    alt="Phone Icon"
                    className="w-6 h-6"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-800">Call Me</h3> {/* Eliminado truncate */}
                  <p className="text-xs text-gray-600 leading-tight"> {/* Eliminado line-clamp-1 */}
                    +52 999-183-6510
                  </p>
                </div>
                <div className="mt-0 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                  Tap to call
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:fernandogarza801@gmail.com"
              className="group relative bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-white/50 hover:border-red-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-md flex items-center justify-center mb-0 shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <img
                    src="/ContactMe/Gmail.png"
                    alt="Email Icon"
                    className="w-7 h-5 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-800">Email Me</h3> {/* Eliminado truncate */}
                  <p className="text-xs text-gray-600 leading-tight"> {/* Eliminado line-clamp-1 y break-all */}
                    fernandogarza801@gmail.com
                  </p>
                </div>
                <div className="mt-0 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                  Send email
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fernando-garza-473682330/"
              className="group relative bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 border border-white/50 hover:border-blue-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-md flex items-center justify-center mb-0 shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <img
                    src="/ContactMe/Linkedin.jpg"
                    alt="LinkedIn Icon"
                    className="w-5 h-5 rounded object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-gray-800">Connect</h3> {/* Eliminado truncate */}
                  <p className="text-xs text-gray-600 leading-tight"> {/* Eliminado line-clamp-1 */}
                    Fernando Garza
                  </p>
                </div>
                <div className="mt-0 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:block">
                  View profile
                </div>
              </div>
            </a>
          </div>

          {/* Footer (optional, keeping it for now) */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              I typically respond within 24 hours • Available Monday-Friday
            </p>
          </div>
        </div>

        {/* Enhanced CSS Animations (unchanged) */}
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