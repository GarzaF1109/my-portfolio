import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

export const VelocityText = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scrollVelocity = useVelocity(scrollYProgress);

  const skewXRaw = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["45deg", "-45deg"]
  );
  const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

  const xRaw = useTransform(scrollYProgress, [0, 1], [0, -6000]);
  const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

  const skewXAlt = useTransform(
    scrollVelocity,
    [-0.5, 0.5],
    ["-45deg", "45deg"]
  );
  
  const xAlt = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 6000]),
    { mass: 3, stiffness: 400, damping: 50 }
  );

  return (
    <section
      ref={targetRef}
      className="h-[1000vh] bg-neutral-50 text-neutral-950"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden flex-col justify-center gap-0">
        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-[8rem] font-black uppercase leading-[0.75] md:text-[16rem] md:leading-[0.6]"
        >
          <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded">React</span>,
          <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded">Flask</span>,
          <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded">TypeScript</span>,
          <span className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded">Next.js</span>,
          <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded">Python</span>,
          <span className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded">PostgreSQL</span>,
        </motion.p>

        <motion.p
          style={{ skewX: skewXAlt, x: xAlt }}
          className="origin-bottom-left whitespace-nowrap text-[8rem] font-black uppercase leading-[0.75] md:text-[16rem] md:leading-[0.6]"
        >
          <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded">PHP</span>,
          <span className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded">Laravel</span>,
          <span className="inline-block bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-4 py-2 rounded">Tailwind CSS</span>,
          <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded">React Native</span>,
          <span className="inline-block bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded">Node.js</span>,
          <span className="inline-block bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded">Vue.js</span>
        </motion.p>

        <motion.p
          style={{ skewX, x }}
          className="origin-bottom-left whitespace-nowrap text-[8rem] font-black uppercase leading-[0.75] md:text-[16rem] md:leading-[0.6]"
        >
                <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded">React</span>,
          <span className="inline-block bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded">Flask</span>,
          <span className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded">TypeScript</span>,
          <span className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded">Next.js</span>,
          <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded">Python</span>,
          <span className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded">PostgreSQL</span>,
        </motion.p>

        <motion.p
          style={{ skewX: skewXAlt, x: xAlt }}
          className="origin-bottom-left whitespace-nowrap text-[8rem] font-black uppercase leading-[0.75] md:text-[16rem] md:leading-[0.6]"
        >
           <span className="inline-block bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded">PHP</span>,
          <span className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded">Laravel</span>,
          <span className="inline-block bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-4 py-2 rounded">Tailwind CSS</span>,
          <span className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded">React Native</span>,
          <span className="inline-block bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded">Node.js</span>,
          <span className="inline-block bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded">Vue.js</span>
        </motion.p>
      </div>
    </section>
  );
};