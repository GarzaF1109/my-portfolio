import React, { useRef } from 'react';
import HeroImage from './HeroImage';

const MeComponent = () => {
  const boardRef = useRef(null);

  // Animación al hacer click en el board
  React.useEffect(() => {
    const svg = document.querySelector('.hero-image-svg svg');
    if (!svg) return;
    const board = svg.querySelector('#board');
    if (!board) return;
    const handleClick = () => {
      board.classList.toggle('enlarge');
      // Centrar el board en pantalla si está agrandado
      if (board.classList.contains('enlarge')) {
        svg.style.overflow = 'visible';
      } else {
        svg.style.overflow = '';
      }
    };
    board.addEventListener('click', handleClick);
    return () => {
      board.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div style={{ background: '#fff', width: '100%', height: '100%', maxWidth: '940px', maxHeight: '86vh', minWidth: '220px', minHeight: '220px', margin: 0, boxShadow: 'none', borderRadius: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-image-svg" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroImage draggable="false" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
      </div>
      <style>{`
        .hero-image-svg {
          
        }
        #linux_plushie {
          transition: filter 0.3s, transform 0.3s;
        }
        #linux_plushie:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        #rubiks {
          transition: filter 0.3s, transform 0.3s;
        }
        #rubiks:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        #github {
          transition: filter 0.3s, transform 0.3s;
        }
        #github:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        #contacts_telephone {
          transition: filter 0.3s, transform 0.3s;
        }
        #contacts_telephone:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        #board {
          transition: filter 0.3s, transform 0.3s;
          cursor: pointer;
        }
        #board.enlarge {
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1), filter 0.3s;
          transform: scale(2.5) translate(-25vw, 0);
          filter: drop-shadow(0 0 32px #fffbe6) brightness(1.1);
          position: relative !important;
        }
        #board:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        @media (max-width: 900px) {
          div[style*='maxWidth: 940px'] {
            max-width: 98vw !important;
            max-height: 65vh !important;
            border-radius: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MeComponent;
