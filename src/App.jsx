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
    <div className="relative min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
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
        <div className="w-full max-w-4xl mx-auto backdrop-blur-md bg-slate-900/40 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col min-h-[600px]">

          {/* Header & Navigation */}
          <header className="border-b border-slate-700/50 bg-slate-900/50 p-4 sm:px-8 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/profile.png"
                alt="The CosmicCollie"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-indigo-400/50 shadow-lg object-cover"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">The CosmicCollie</h1>
                <p className="text-indigo-300 font-medium text-sm sm:text-base">Server Manager & Moderator</p>
              </div>
            </div>

            <nav className="flex space-x-1 sm:space-x-2 bg-slate-950/50 p-1.5 rounded-xl border border-slate-800/50 overflow-x-auto max-w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    aria-label={`${tab.label} Tab`}
                    className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'bg-indigo-500/20 text-indigo-300 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <FontAwesomeIcon icon={tab.icon} className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'opacity-70'}`} />
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
        <footer className="mt-8 text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} The CosmicCollie. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;