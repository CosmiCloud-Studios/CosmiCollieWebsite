import { useState, useEffect } from 'react';
import SpaceBackground from './SpaceBackground';
import LoadingScreen from './LoadingScreen';
import AboutTab from './components/AboutTab';
import ExperienceTab from './components/ExperienceTab';
import ServicesTab from './components/ServicesTab';
import ContactTab from './components/ContactTab';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faWrench, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const tabs = [
  { id: 'about', label: 'About', icon: faUser },
  { id: 'experience', label: 'Experience', icon: faBriefcase },
  { id: 'services', label: 'Services', icon: faWrench },
  { id: 'contact', label: 'Contact', icon: faEnvelope },
];

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-rose-50 font-sans selection:bg-pink-400/30 overflow-x-hidden">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <SpaceBackground />

      <div className="relative z-30 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-5xl mx-auto backdrop-blur-xl bg-[#2a102b]/70 border border-pink-200/20 rounded-[2rem] shadow-[0_24px_100px_rgba(190,24,93,0.22)] overflow-hidden flex flex-col min-h-[600px]">

          {/* Header & Navigation */}
          <header className="border-b border-pink-200/10 bg-[#351331]/65 p-4 sm:px-8 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-4">
              <img
                src="/profile.png"
                alt="The Cosmic Collie"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-pink-300/70 shadow-[0_0_28px_rgba(244,114,182,0.35)] object-cover"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">The Cosmic Collie</h1>
                <p className="text-pink-200 font-medium text-sm sm:text-base">Community builder · project lead · cosmic tinkerer</p>
              </div>
            </div>

            <nav className="flex space-x-1 sm:space-x-2 bg-[#1c0b23]/70 p-1.5 rounded-2xl border border-pink-200/10 overflow-x-auto max-w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-label={`${tab.label} Tab`}
                    className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-pink-400/20 text-pink-100 shadow-[0_0_18px_rgba(244,114,182,0.18)]'
                        : 'text-pink-100/60 hover:text-white hover:bg-pink-200/10'
                    }`}
                  >
                    <FontAwesomeIcon icon={tab.icon} className={`w-4 h-4 ${isActive ? 'text-pink-200' : 'opacity-70'}`} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </header>

          {/* Content Area */}
          <main className="flex-grow p-6 sm:p-8 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {activeTab === 'about' && <AboutTab />}
                {activeTab === 'experience' && <ExperienceTab />}
                {activeTab === 'services' && <ServicesTab />}
                {activeTab === 'contact' && <ContactTab />}
              </motion.div>
            </AnimatePresence>
          </main>

        </div>

        {/* Footer */}
        <footer className="mt-8 text-pink-100/45 text-sm font-medium">
          &copy; {new Date().getFullYear()} The Cosmic Collie · @CosmiCollie. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
