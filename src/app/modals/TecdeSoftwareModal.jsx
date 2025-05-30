import React, { useState, useRef, useEffect } from "react";

export default function AnimatedModal({ open, onClose }) {
  // Fotos de ejemplo - reemplaza con tus propias URLs
  const samplePhotos = [
    "/University/AccentureTec.webp",
    "/University/CafeteriaTec.webp",
    "/University/ClassesTec.jpeg",
    "/University/HalloweenTec.webp",
    "/University/PandeMuertoTec.jpg",
  ];

  const [photos, setPhotos] = useState([]);
  const [draggedPhoto, setDraggedPhoto] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef(null);

  // Generar posiciones aleatorias para las fotos al abrir el modal
  useEffect(() => {
    if (open && photos.length === 0) {
      const modalWidth = 800; // Ancho aproximado del modal
      const modalHeight = 600; // Alto aproximado del modal
      
      const generatedPhotos = samplePhotos.map((src, index) => ({
        id: index,
        src,
        x: Math.random() * (modalWidth - 200), // Evitar que se salgan
        y: Math.random() * (modalHeight - 250),
        rotation: (Math.random() - 0.5) * 20, // Rotación entre -10 y 10 grados
        zIndex: index
      }));
      
      setPhotos(generatedPhotos);
    }
  }, [open]);

  const handleMouseDown = (e, photo) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const modalRect = modalRef.current.getBoundingClientRect();
    
    setDraggedPhoto(photo.id);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    // Traer la foto al frente
    setPhotos(prev => prev.map(p => 
      p.id === photo.id 
        ? { ...p, zIndex: Math.max(...prev.map(ph => ph.zIndex)) + 1 }
        : p
    ));
  };

  const handleMouseMove = (e) => {
    if (draggedPhoto === null || !modalRef.current) return;

    const modalRect = modalRef.current.getBoundingClientRect();
    const newX = e.clientX - modalRect.left - dragOffset.x;
    const newY = e.clientY - modalRect.top - dragOffset.y;

    // Limitar el movimiento dentro del modal
    const maxX = modalRect.width - 200; // Ancho de la foto aproximado
    const maxY = modalRect.height - 250; // Alto de la foto aproximado
    
    const boundedX = Math.max(0, Math.min(newX, maxX));
    const boundedY = Math.max(0, Math.min(newY, maxY));

    setPhotos(prev => prev.map(photo => 
      photo.id === draggedPhoto 
        ? { ...photo, x: boundedX, y: boundedY }
        : photo
    ));
  };

  const handleMouseUp = () => {
    setDraggedPhoto(null);
    setDragOffset({ x: 0, y: 0 });
  };

  // Event listeners globales para el arrastre
  useEffect(() => {
    if (draggedPhoto !== null) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [draggedPhoto, dragOffset]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 transition-opacity animate-fadeIn">
      <div 
        ref={modalRef}
        className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl shadow-2xl relative overflow-hidden transform transition-all duration-300 scale-95 animate-modalIn"
        style={{ width: '90vw', height: '80vh', maxWidth: '1000px', maxHeight: '700px' }}
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 z-50 text-gray-600 hover:text-gray-800 text-3xl bg-white bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:bg-opacity-100"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Título */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center">
          <h2 className="text-2xl font-bold text-gray-800 px-4 py-2">
            My life at the "Tecnológico de Software"
          </h2>
        </div>

        {/* Textura de fondo sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        {/* Fotos arrastrables */}
        <div className="absolute inset-0 pt-20">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`absolute cursor-move select-none transition-shadow duration-200 ${
                draggedPhoto === photo.id ? 'shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'
              }`}
              style={{
                left: `${photo.x}px`,
                top: `${photo.y}px`,
                transform: `rotate(${photo.rotation}deg)`,
                zIndex: photo.zIndex
              }}
              onMouseDown={(e) => handleMouseDown(e, photo)}
            >
              {/* Marco de foto estilo Polaroid */}
              <div className="bg-white p-3 pb-8 rounded-sm shadow-lg border border-gray-200">
                <img
                  src={photo.src}
                  alt={`Foto ${photo.id + 1}`}
                  className="w-full h-auto block pointer-events-none"
                  draggable={false}
                  style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
                />
                {/* Área inferior para texto opcional */}
                <div className="mt-2 text-center text-xs text-gray-600 font-handwriting photo-description">
                  {photo.src.includes('AccentureTec') && 'We visited the amazing Accenture offices!'}
                  {photo.src.includes('CafeteriaTec') && 'A sweet moment with friends and delicious popcorn.'}
                  {photo.src.includes('ClassesTec') && 'Focused and learning, making every class count!'}
                  {photo.src.includes('HalloweenTec') && 'Spooky fun and sweet memories at the Halloween party!'}
                  {photo.src.includes('PandeMuertoTec') && 'Sharing Pan de Muerto, laughter, and friendship.'}
                </div>
              </div>
              
              {/* Indicator de que se puede arrastrar */}
              <div className={`absolute -top-1 -right-1 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs transition-opacity ${
                draggedPhoto === photo.id ? 'opacity-100' : 'opacity-0 hover:opacity-100'
              }`}>
                ↔
              </div>
            </div>
          ))}
        </div>

        {/* Instrucciones */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full shadow-lg">
          <p className="text-sm text-gray-600 text-center">
            🖱️ Drag photos to rearrange
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalIn {
          from { 
            opacity: 0; 
            transform: scale(0.95) translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-modalIn {
          animation: modalIn 0.4s ease-out;
        }
        
        .font-handwriting {
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }
        .photo-description {
          max-width: 200px;
          word-break: break-word;
          white-space: pre-line;
          overflow-wrap: break-word;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}