import React from "react";

export default function ContactsModal({ open = true, onClose = () => {} }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60  transition-all duration-300 animate-fadeIn">
      <div 
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl shadow-2xl relative overflow-hidden transform transition-all duration-500 animate-modalIn border border-white/20"
        style={{ width: '90vw', height: 'auto', maxWidth: '800px', maxHeight: '90vh' }}
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

        <div className="relative z-10 p-8 md:p-12">
          <div className="mb-12 text-center">
            {/* <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div> */}
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
              Let's Connect!
            </h2>
            {/* <p className="text-gray-600 text-lg font-medium">
              Ready to start a conversation? Reach out through any of these channels
            </p> */}
          </div>

          {/* Contact Content - Enhanced Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Phone */}
            <a 
              href="tel:+529991836510" 
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 hover:border-blue-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/ContactMe/Phone.PNG"
                    alt="Phone Icon" 
                    className="w-9 h-8" 
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Call Me</h3>
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                  +52 999-183-6510
                </span>
                <div className="mt-3 px-4 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Tap to call
                </div>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:fernandogarza801@gmail.com" 
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 hover:border-red-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/ContactMe/Gmail.png"
                    alt="Email Icon" 
                    className="w-10 h-7 object-contain" 
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Email Me</h3>
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors break-all">
                  fernandogarza801@gmail.com
                </span>
                <div className="mt-3 px-4 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Send email
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/fernando-garza-473682330/"
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 hover:border-blue-200"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src="/ContactMe/Linkedin.jpg"
                    alt="LinkedIn Icon" 
                    className="w-8 h-8 rounded object-cover" 
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Connect</h3>
                <span className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors">
                  Fernando Garza
                </span>
                <div className="mt-3 px-4 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  View profile
                </div>
              </div>
            </a>
          </div>

          {/* Additional CTA
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              I typically respond within 24 hours • Available Monday-Friday
            </p>
          </div> */}
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