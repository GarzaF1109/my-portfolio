import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { useRef, useState } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-white">
      <ReactLenis
        root
        options={{
          lerp: 0.05, // Aumentado ligeramente para animaciones más responsivas
          duration: 1.0, // Duración reducida para sensación más dinámica
          smoothWheel: true,
          smoothTouch: true,
          easing: (t) => 1 - Math.pow(1 - t, 3), // Función de aceleración más dinámica
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500; // Reducido para transición más compacta

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-white/0 to-white" />
    </div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[150px]">
      {/* Imágenes más compactas y con posicionamiento mejorado */}
      <ParallaxImg
        src="/PostgreSQL.PNG"
        alt="PostgreSQL database"
        start={-200}
        end={200}
        className="w-1/4 hover:shadow-lg"
        rotationStart={-5}
        rotationEnd={5}
      />
      <ParallaxImg
        src="/Laravel.PNG"
        alt="Laravel framework"
        start={-150}
        end={200}
        className="ml-auto w-1/4 -mt-12"
        rotationStart={5}
        rotationEnd={-5}
      />
      <ParallaxImg
        src="/Python.PNG"
        alt="Python programming language"
        start={200}
        end={-250}
        className="mx-auto w-1/2" // Tamaño reducido desde 2/3 a 1/2
        rotationStart={-2}
        rotationEnd={2}
      />
      <ParallaxImg
        src="/PHP.PNG"
        alt="PHP programming language"
        start={-200}
        end={150}
        className="ml-auto w-1/4 -mt-16"
        rotationStart={3}
        rotationEnd={-3}
      />
      <ParallaxImg
        src="/React.PNG"
        alt="React library"
        start={50}
        end={-400}
        className="ml-16 w-1/3 mt-4"
        rotationStart={-4}
        rotationEnd={4}
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end, rotationStart = 0, rotationEnd = 0 }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  // Springs más responsivos para animaciones dinámicas
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 75,
    damping: 12 
  });

  const opacity = useTransform(smoothProgress, [0.6, 0.98], [1, 0]);
  const scale = useTransform(smoothProgress, [0.6, 0.98], [1, 0.82]);
  const y = useTransform(smoothProgress, [0, 1], [start, end]);
  const rotation = useTransform(smoothProgress, [0, 1], [rotationStart, rotationEnd]);
  
  // Animación combinada de transformación
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale}) rotate(${rotation}deg)`;
  
  // Filtros dinámicos mejorados
  const filter = useTransform(
    smoothProgress, 
    [0, 0.5, 1], 
    ["brightness(1) saturate(1)", "brightness(1.1) saturate(1.05)", "brightness(0.92) saturate(0.95)"]
  );

  return (
    <motion.div
      className="relative"

    >
      <motion.img
        src={src}
        alt={alt}
        className={`${className} object-cover rounded-lg transition-shadow duration-300`}
        ref={ref}
        style={{ transform, opacity, filter }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs font-medium p-2 rounded-b-lg"
          >
            {alt}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Schedule = () => {
  return (
    <section
      id="work-experience"
      className="mx-auto max-w-5xl px-4 py-36 text-black bg-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.9 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-5xl font-black uppercase text-black"
      >
        Experiencia de Trabajo
      </motion.h1>
      <div className="grid gap-6">
        <ScheduleItem 
          title="Software Developer" 
          date="2024 - Present" 
          location="IXSY - Burma Technologies" 
          color="#3B82F6"
        />
        <ScheduleItem 
          title="Desarrollador Frontend" 
          date="2023 - Presente" 
          location="Interlook 13" 
          color="#10B981"
        />
        <ScheduleItem 
          title="Practicante en Ciberseguridad" 
          date="2022 - 2023" 
          location="TechSecure MX" 
          color="#6366F1"
        />
        <ScheduleItem 
          title="Diseñador Web Freelance" 
          date="2021 - 2022" 
          location="Remoto" 
          color="#F59E0B"
        />
        <ScheduleItem 
          title="Asistente de TI" 
          date="2020 - 2021" 
          location="Universidad Autónoma" 
          color="#EC4899"
        />
      </div>
    </section>
  );
};

const ScheduleItem = ({ title, date, location, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-5 rounded-lg transition-all duration-300"
      style={{ 
        backgroundColor: isHovered ? `${color}10` : 'transparent',
        borderLeftWidth: isHovered ? '4px' : '0px',
        borderLeftColor: color,
        paddingLeft: isHovered ? '16px' : '20px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <motion.p 
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-1.5 text-xl font-semibold text-black"
        >
          {title}
        </motion.p>
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm uppercase text-gray-500"
        >
          {date}
        </motion.p>
      </div>
      <motion.div 
        initial={{ x: 15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-1.5 text-end text-sm uppercase text-gray-500"
      >
        <p>{location}</p>
        <FiMapPin className="text-gray-400" style={{ color: isHovered ? color : undefined }} />
      </motion.div>
    </motion.div>
  );
};