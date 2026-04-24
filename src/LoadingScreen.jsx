import React from 'react';
import { motion } from 'framer-motion';

const stars = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 0.5,
  animationDuration: Math.random() * 3 + 2,
  animationDelay: Math.random() * 2,
}));

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      {/* Animated Star Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: star.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.animationDelay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
        {/* Deep space glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-indigo-600/20 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbits */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-indigo-500/30"
            style={{
              width: `${(i + 1) * 25}%`,
              height: `${(i + 1) * 25}%`,
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 8 + i * 4,
              repeat: Infinity,
              ease: "linear",
              direction: i % 2 === 0 ? "normal" : "reverse"
            }}
          >
            {/* Planet on orbit */}
            <div
              className="absolute rounded-full"
              style={{
                width: `${6 + i * 2}px`,
                height: `${6 + i * 2}px`,
                top: `-${3 + i}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: i === 0 ? '#60A5FA' : i === 1 ? '#A78BFA' : i === 2 ? '#F472B6' : '#2DD4BF',
                boxShadow: `0 0 ${10 + i * 5}px ${i === 0 ? '#60A5FA' : i === 1 ? '#A78BFA' : i === 2 ? '#F472B6' : '#2DD4BF'}`
              }}
            />
          </motion.div>
        ))}

        {/* Core Sun/Black hole */}
        <motion.div
          className="absolute w-12 h-12 rounded-full bg-white"
          style={{
            boxShadow: '0 0 40px 10px rgba(255, 255, 255, 0.8), 0 0 80px 20px rgba(99, 102, 241, 0.6)'
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.h1
        className="relative z-10 text-2xl md:text-3xl font-black tracking-[0.5em] text-white uppercase ml-[0.5em]"
        style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(99, 102, 241, 0.5)' }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Loading
      </motion.h1>
      <motion.p
        className="relative z-10 mt-4 text-indigo-300/60 tracking-widest text-xs md:text-sm uppercase"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Establishing Connection...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;