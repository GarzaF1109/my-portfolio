import React from "react";

export default function AnimatedModal({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 transition-opacity animate-fadeIn">
          <div className="bg-white rounded-lg shadow-lg p-8 min-w-[300px] min-h-[150px] transform transition-all duration-300 scale-95 animate-modalIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              onClick={onClose}
              aria-label="Cerrar"
            >
              &times;
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-gray-700 text-lg">Modal de ejemplo vacío</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Animaciones Tailwind personalizadas sugeridas:
// animate-fadeIn: opacity-0 -> opacity-100
// animate-modalIn: scale-95 -> scale-100 y opacity-0 -> opacity-100
// Puedes agregarlas en tu tailwind.config.js si quieres más suavidad visual.
