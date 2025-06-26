import React, { useState } from 'react'; // Import useState
import HeroImage from './HeroImage';
import ContactsModal from '../modals/ContactMeModal';
import SkillsModal from '../modals/SkillsModal';

const MeComponent = () => {
  // State to control the visibility of the ContactsModal
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);


  // Function to open and close the SkillsModal
  const handleOpenSkillsModal = () => {
    setIsSkillsModalOpen(true);
  };

  const handleCloseSkillsModal = () => {
    setIsSkillsModalOpen(false);
  };

  // Function to open and close the ContactsModal
  const handleOpenContactsModal = () => {
    setIsContactsModalOpen(true);
  };

  const handleCloseContactsModal = () => {
    setIsContactsModalOpen(false);
  };

  // Function to download the CV
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV/CV_GarzaF.pdf';
    link.download = 'CV_GarzaF.pdf'; 
    link.click();
    window.open('/CV/CV_GarzaF.pdf', '_blank');
  };

  return (
    <div style={{ width: '100%', height: '100%', maxWidth: '940px', maxHeight: '86vh', minWidth: '220px', minHeight: '220px', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-image-svg" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Pass the click handler to HeroImage */}
        <HeroImage 
          draggable="false" 
          style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
          onTelephoneClick={handleOpenContactsModal}
          onRubiksClick={handleOpenSkillsModal} 
          onPortfolioClick={handleDownloadCV}
        />
      </div>
      <style>{`
        .hero-image-svg {
          
        }
        #linux_plushie,
        #rubiks,
        #portfolio,
        #telephone {
          transition: filter 0.15s, transform 0.15s, opacity 0.1s;
          cursor: pointer;
        }
        #linux_plushie:hover,
        #rubiks:hover,
        #portfolio:hover,
        #telephone:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
          opacity: 0;
        }
        #linux_plushie3,
        #linux_arrow,
        #linux_text,
        #rubiks1,
        #rubiks_text,
        #rubiks_arrow,
        #portfolio1,
        #portfolio_text,
        #portfolio_arrow,
        #portfolio_shadow,
        #telephone1,
        #telephone_text,
        #telephone_arrow {
          opacity: 0;
          transition: opacity 0.1s;
          pointer-events: none;
        }
        #linux_plushie, #linux_plushie3, #linux_arrow, #linux_text,
        #rubiks, #rubiks1, #rubiks_text, #rubiks_arrow,
        #portfolio, #portfolio1, #portfolio_text, #portfolio_arrow, #portfolio_shadow,
        #telephone, #telephone1, #telephone_text, #telephone_arrow {
          position: relative;
        }
        #linux_plushie::before,
        #rubiks::before,
        #portfolio::before,
        #telephone::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          pointer-events: auto;
          z-index: -1;
        }
        #linux_plushie:hover ~ * #linux_plushie3,
        #linux_plushie:hover + * #linux_plushie3,
        body:has(#linux_plushie:hover) #linux_plushie3,
        #linux_plushie:hover ~ * #linux_arrow,
        #linux_plushie:hover + * #linux_arrow,
        body:has(#linux_plushie:hover) #linux_arrow,
        #linux_plushie:hover ~ * #linux_text,
        #linux_plushie:hover + * #linux_text,
        body:has(#linux_plushie:hover) #linux_text,
        #rubiks:hover ~ * #rubiks1,
        #rubiks:hover + * #rubiks1,
        body:has(#rubiks:hover) #rubiks1,
        #rubiks:hover ~ * #rubiks_text,
        #rubiks:hover + * #rubiks_text,
        body:has(#rubiks:hover) #rubiks_text,
        #rubiks:hover ~ * #rubiks_arrow,
        #rubiks:hover + * #rubiks_arrow,
        body:has(#rubiks:hover) #rubiks_arrow,
        #portfolio:hover ~ * #portfolio1,
        #portfolio:hover + * #portfolio1,
        body:has(#portfolio:hover) #portfolio1,
        #portfolio:hover ~ * #portfolio_text,
        #portfolio:hover + * #portfolio_text,
        body:has(#portfolio:hover) #portfolio_text,
        #portfolio:hover ~ * #portfolio_arrow,
        #portfolio:hover + * #portfolio_arrow,
        body:has(#portfolio:hover) #portfolio_arrow,
        #portfolio:hover ~ * #portfolio_shadow,
        #portfolio:hover + * #portfolio_shadow,
        body:has(#portfolio:hover) #portfolio_shadow,
        #telephone:hover ~ * #telephone1,
        #telephone:hover + * #telephone1,
        body:has(#telephone:hover) #telephone1,
        #telephone:hover ~ * #telephone_text,
        #telephone:hover + * #telephone_text,
        body:has(#telephone:hover) #telephone_text,
        #telephone:hover ~ * #telephone_arrow,
        #telephone:hover + * #telephone_arrow,
        body:has(#telephone:hover) #telephone_arrow {
          opacity: 1;
          pointer-events: auto;
        }
        #linux_plushie3:hover,
        #linux_arrow:hover,
        #linux_text:hover,
        #rubiks1:hover,
        #rubiks_text:hover,
        #rubiks_arrow:hover,
        #portfolio1:hover,
        #portfolio_text:hover,
        #portfolio_arrow:hover,
        #portfolio_shadow:hover,
        #telephone1:hover,
        #telephone_text:hover,
        #telephone_arrow:hover {
          opacity: 1;
          pointer-events: auto;
        }
        body:has(#linux_plushie3:hover) #linux_plushie,
        body:has(#linux_arrow:hover) #linux_plushie,
        body:has(#linux_text:hover) #linux_plushie,
        body:has(#rubiks1:hover) #rubiks,
        body:has(#rubiks_text:hover) #rubiks,
        body:has(#rubiks_arrow:hover) #rubiks,
        body:has(#portfolio1:hover) #portfolio,
        body:has(#portfolio_text:hover) #portfolio,
        body:has(#portfolio_arrow:hover) #portfolio,
        body:has(#portfolio_shadow:hover) #portfolio,
        body:has(#telephone1:hover) #telephone,
        body:has(#telephone_text:hover) #telephone,
        body:has(#telephone_arrow:hover) #telephone {
          opacity: 0;
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        body:has(#linux_plushie3:hover) #linux_plushie3,
        body:has(#linux_plushie3:hover) #linux_arrow,
        body:has(#linux_plushie3:hover) #linux_text,
        body:has(#linux_arrow:hover) #linux_plushie3,
        body:has(#linux_arrow:hover) #linux_arrow,
        body:has(#linux_arrow:hover) #linux_text,
        body:has(#linux_text:hover) #linux_plushie3,
        body:has(#linux_text:hover) #linux_arrow,
        body:has(#linux_text:hover) #linux_text,
        body:has(#rubiks1:hover) #rubiks1,
        body:has(#rubiks1:hover) #rubiks_text,
        body:has(#rubiks1:hover) #rubiks_arrow,
        body:has(#rubiks_text:hover) #rubiks1,
        body:has(#rubiks_text:hover) #rubiks_text,
        body:has(#rubiks_text:hover) #rubiks_arrow,
        body:has(#rubiks_arrow:hover) #rubiks1,
        body:has(#rubiks_arrow:hover) #rubiks_text,
        body:has(#rubiks_arrow:hover) #rubiks_arrow,
        body:has(#portfolio1:hover) #portfolio1,
        body:has(#portfolio1:hover) #portfolio_text,
        body:has(#portfolio1:hover) #portfolio_arrow,
        body:has(#portfolio1:hover) #portfolio_shadow,
        body:has(#portfolio_text:hover) #portfolio1,
        body:has(#portfolio_text:hover) #portfolio_text,
        body:has(#portfolio_text:hover) #portfolio_arrow,
        body:has(#portfolio_text:hover) #portfolio_shadow,
        body:has(#portfolio_arrow:hover) #portfolio1,
        body:has(#portfolio_arrow:hover) #portfolio_text,
        body:has(#portfolio_arrow:hover) #portfolio_arrow,
        body:has(#portfolio_arrow:hover) #portfolio_shadow,
        body:has(#portfolio_shadow:hover) #portfolio1,
        body:has(#portfolio_shadow:hover) #portfolio_text,
        body:has(#portfolio_shadow:hover) #portfolio_arrow,
        body:has(#portfolio_shadow:hover) #portfolio_shadow,
        body:has(#telephone1:hover) #telephone1,
        body:has(#telephone1:hover) #telephone_text,
        body:has(#telephone1:hover) #telephone_arrow,
        body:has(#telephone_text:hover) #telephone1,
        body:has(#telephone_text:hover) #telephone_text,
        body:has(#telephone_text:hover) #telephone_arrow,
        body:has(#telephone_arrow:hover) #telephone1,
        body:has(#telephone_arrow:hover) #telephone_text,
        body:has(#telephone_arrow:hover) #telephone_arrow {
          opacity: 1;
          pointer-events: auto;
        }
        #mug1,
        #mug_arrow,
        #mug_text {
          opacity: 0;
          transition: opacity 0.1s;
          pointer-events: none;
        }
        #mug {
          transition: filter 0.15s, transform 0.15s, opacity 0.1s;
          cursor: pointer;
        }
        #mug:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
          opacity: 0;
        }
        #mug, #mug1, #mug_text, #mug_arrow {
          position: relative;
        }
        #mug::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          pointer-events: auto;
          z-index: -1;
        }
        #mug:hover ~ * #mug1,
        #mug:hover + * #mug1,
        body:has(#mug:hover) #mug1,
        #mug:hover ~ * #mug_text,
        #mug:hover + * #mug_text,
        body:has(#mug:hover) #mug_text,
        #mug:hover ~ * #mug_arrow,
        #mug:hover + * #mug_arrow,
        body:has(#mug:hover) #mug_arrow {
          opacity: 1;
          pointer-events: auto;
        }
        #mug1:hover,
        #mug_text:hover,
        #mug_arrow:hover {
          opacity: 1;
          pointer-events: auto;
        }
        body:has(#mug1:hover) #mug,
        body:has(#mug_text:hover) #mug,
        body:has(#mug_arrow:hover) #mug {
          opacity: 0;
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        body:has(#mug1:hover) #mug1,
        body:has(#mug1:hover) #mug_text,
        body:has(#mug1:hover) #mug_arrow,
        body:has(#mug_text:hover) #mug1,
        body:has(#mug_text:hover) #mug_text,
        body:has(#mug_text:hover) #mug_arrow,
        body:has(#mug_arrow:hover) #mug1,
        body:has(#mug_arrow:hover) #mug_text,
        body:has(#mug_arrow:hover) #mug_arrow {
          opacity: 1;
          pointer-events: auto;
        }
        #github1,
        #github_arrow,
        #github_text {
          opacity: 0;
          transition: opacity 0.1s;
          pointer-events: none;
        }
        #github {
          transition: filter 0.15s, transform 0.15s, opacity 0.1s;
          cursor: pointer;
        }
        #github:hover {
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
          opacity: 0;
        }
        #github, #github1, #github_text, #github_arrow {
          position: relative;
        }
        #github::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          pointer-events: auto;
          z-index: -1;
        }
        #github:hover ~ * #github1,
        #github:hover + * #github1,
        body:has(#github:hover) #github1,
        #github:hover ~ * #github_text,
        #github:hover + * #github_text,
        body:has(#github:hover) #github_text,
        #github:hover ~ * #github_arrow,
        #github:hover + * #github_arrow,
        body:has(#github:hover) #github_arrow {
          opacity: 1;
          pointer-events: auto;
        }
        #github1:hover,
        #github_text:hover,
        #github_arrow:hover {
          opacity: 1;
          pointer-events: auto;
        }
        body:has(#github1:hover) #github,
        body:has(#github_text:hover) #github,
        body:has(#github_arrow:hover) #github {
          opacity: 0;
          filter: drop-shadow(0 0 16px #fffbe6) brightness(1.2);
        }
        body:has(#github1:hover) #github1,
        body:has(#github1:hover) #github_text,
        body:has(#github1:hover) #github_arrow,
        body:has(#github_text:hover) #github1,
        body:has(#github_text:hover) #github_text,
        body:has(#github_text:hover) #github_arrow,
        body:has(#github_arrow:hover) #github1,
        body:has(#github_arrow:hover) #github_text,
        body:has(#github_arrow:hover) #github_arrow {
          opacity: 1;
          pointer-events: auto;
        }
      `}</style>
      <ContactsModal 
        open={isContactsModalOpen} 
        onClose={handleCloseContactsModal} 
      />
      <SkillsModal 
        open={isSkillsModalOpen} 
        onClose={handleCloseSkillsModal} 
      />
    </div>
  );
};

export default MeComponent;