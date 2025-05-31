import React, { useState, useRef, useEffect } from "react";

export default function AnimatedModal({ open = true, onClose = () => {} }) {
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

  const generateOrganizedPositions = (modalWidth, modalHeight) => {
    const photoWidth = 200;
    const photoHeight = 250;
    const padding = 20;
    
    const photosPerRow = Math.floor((modalWidth - padding * 2) / (photoWidth + padding));
    const totalRows = Math.ceil(samplePhotos.length / photosPerRow);
    
    const totalGridWidth = photosPerRow * photoWidth + (photosPerRow - 1) * padding;
    const startX = (modalWidth - totalGridWidth) / 2;
    const startY = 80; 
    
    return samplePhotos.map((src, index) => {
      const row = Math.floor(index / photosPerRow);
      const col = index % photosPerRow;
      
      const photosInRow = row === totalRows - 1 ? samplePhotos.length - row * photosPerRow : photosPerRow;
      const rowStartX = photosInRow < photosPerRow 
        ? startX + (photosPerRow - photosInRow) * (photoWidth + padding) / 2
        : startX;
      
      return {
        id: index,
        src,
        x: rowStartX + col * (photoWidth + padding),
        y: startY + row * (photoHeight + padding),
        rotation: (Math.random() - 0.5) * 8, 
        zIndex: index
      };
    });
  };

  useEffect(() => {
    if (open && photos.length === 0) {
      const modalWidth = 1000;
      const modalHeight = 700; 
      
      const generatedPhotos = generateOrganizedPositions(modalWidth, modalHeight);
      setPhotos(generatedPhotos);
    }
  }, [open]);

  const handleMouseDown = (e, photo) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    
    setDraggedPhoto(photo.id);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

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

    const maxX = modalRect.width - 220; 
    const maxY = modalRect.height - 270; 
    
    const boundedX = Math.max(10, Math.min(newX, maxX));
    const boundedY = Math.max(60, Math.min(newY, maxY)); 

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
        className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl shadow-2xl relative overflow-hidden transform transition-all duration-300 animate-modalIn"
        style={{ width: '90vw', height: '80vh', maxWidth: '1000px', maxHeight: '700px' }}
      >
        {/* Botón de cerrar */}
        <button
          className="absolute top-4 right-4 z-50 text-gray-600 hover:text-gray-800 text-2xl bg-white bg-opacity-90 rounded-full w-8 h-8 flex items-center justify-center shadow-md transition-all hover:bg-opacity-100 hover:shadow-lg"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Título */}
        <div className="absolute top-0 left-0 right-0 z-40 bg-white bg-opacity-95 py-4 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            My Life at the "Tecnológico de Software"
          </h2>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>

        <div className="absolute inset-0 pt-16 overflow-hidden">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`absolute cursor-move select-none transition-all duration-200 ${
                draggedPhoto === photo.id 
                  ? 'shadow-2xl scale-105 z-50' 
                  : 'shadow-lg hover:shadow-xl hover:scale-102'
              }`}
              style={{
                left: `${photo.x}px`,
                top: `${photo.y}px`,
                transform: `rotate(${photo.rotation}deg)`,
                zIndex: draggedPhoto === photo.id ? 1000 : photo.zIndex
              }}
              onMouseDown={(e) => handleMouseDown(e, photo)}
            >
              {/* Marco de foto estilo Polaroid */}
              <div className="bg-white p-3 pb-6 rounded-sm shadow-md border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="w-48 h-32 bg-gray-100 rounded overflow-hidden">
                  <img 
                    src={photo.src} 
                    alt={`Foto ${photo.id + 1}`} 
                    className="w-full h-full object-cover" 
                    draggable={false}
                  />
                </div>
                
                {/* Descripción de la foto */}
                <div className="mt-2 text-center text-xs text-gray-700 font-medium">
                  {photo.src.includes('AccentureTec') && 'Accenture Visit'}
                  {photo.src.includes('CafeteriaTec') && 'Cafeteria Fun'}
                  {photo.src.includes('ClassesTec') && 'Class Time'}
                  {photo.src.includes('HalloweenTec') && 'Halloween Party'}
                  {photo.src.includes('PandeMuertoTec') && 'Day of the Dead'}
                </div>
              </div>
              
              <div className={`absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs transition-opacity ${
                draggedPhoto === photo.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                ⋮⋮
              </div>
            </div>
          ))}
        </div>

        {/* Instrucciones */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-95 px-6 py-2 rounded-full shadow-md">
          <p className="text-sm text-gray-600 text-center font-medium">
            🖱️ Drag the photos
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
            transform: scale(0.9) translateY(-20px); 
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
          animation: modalIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}