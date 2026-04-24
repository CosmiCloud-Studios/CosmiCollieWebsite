import { MapPin, Coffee, Gamepad2, Activity } from 'lucide-react';

export default function AboutTab() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start h-full">
      <div className="md:w-1/3 flex flex-col items-center text-center space-y-4 bg-slate-900/40 p-6 rounded-2xl border border-slate-700/50 w-full">
        <img
          src="/profile.png"
          alt="The CosmicCollie"
          className="w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-xl object-cover border border-indigo-500/30 rotate-3 hover:rotate-0 transition-transform duration-300"
        />
        <div>
          <h2 className="text-xl font-bold text-white mb-1">The CosmicCollie</h2>
          <div className="flex items-center justify-center gap-1.5 text-indigo-300 font-medium">
            <MapPin size={16} />
            <span>United Kingdom</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <span className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-700">Moderator</span>
          <span className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-700">Manager</span>
          <span className="px-3 py-1 bg-slate-800/60 text-slate-300 text-xs rounded-full border border-slate-700">Creator</span>
        </div>
      </div>

      <div className="md:w-2/3 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            Hello there! <span className="text-4xl animate-wave origin-bottom-right inline-block">👋</span>
          </h2>
          <div className="prose prose-invert prose-slate max-w-none space-y-4 text-slate-300 leading-relaxed">
            <p>
              I build projects, run and moderate communities, and tinker with bots and tools. With years of experience leading online spaces, I specialize in fostering healthy, engaging, and secure digital environments for communities of all sizes.
            </p>
            <p>
              Whether it's building a server architecture from the ground up, mentoring staff, or handling complex conflict resolution, I bring a steady, professional hand to community management.
            </p>
          </div>
        </div>

        <div className="bg-indigo-950/20 border border-indigo-900/50 rounded-xl p-5">
          <h3 className="text-indigo-200 font-semibold mb-3 flex items-center gap-2">
            Beyond the Keyboard
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-sm">
            <li className="flex items-center gap-2">
              <Coffee size={16} className="text-amber-600" />
              <span>I drink far too much tea</span>
            </li>
            <li className="flex items-center gap-2">
              <Gamepad2 size={16} className="text-purple-400" />
              <span>Currently playing Fallout 4</span>
            </li>
            <li className="flex items-center gap-2">
              <Activity size={16} className="text-emerald-400" />
              <span>Passionate about running</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
