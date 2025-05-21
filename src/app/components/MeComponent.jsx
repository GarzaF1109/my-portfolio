import React from 'react';
import HeroImage from './HeroImage';

const MeComponent = () => {
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
          transition: filter 0.3s;
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
