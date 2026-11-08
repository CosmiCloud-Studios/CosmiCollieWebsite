import { MapPin, Coffee, Gamepad2, Activity } from 'lucide-react';

export default function AboutTab() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-start h-full">
      <div className="md:w-1/3 flex flex-col items-center text-center space-y-4 bg-[#3b1639]/45 p-6 rounded-3xl border border-pink-200/15 shadow-inner w-full">
        <img
          src="/profile.png"
          alt="The Cosmic Collie"
          className="w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-xl object-cover border border-pink-300/35 rotate-3 hover:rotate-0 transition-transform duration-300"
        />
        <div>
          <h2 className="text-xl font-bold text-white mb-1">The Cosmic Collie</h2>
          <div className="flex items-center justify-center gap-1.5 text-pink-200 font-medium">
            <MapPin size={16} />
            <span>United Kingdom</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <span className="px-3 py-1 bg-slate-800/60 text-pink-50/75 text-xs rounded-full border border-slate-700">Moderator</span>
          <span className="px-3 py-1 bg-slate-800/60 text-pink-50/75 text-xs rounded-full border border-slate-700">Manager</span>
          <span className="px-3 py-1 bg-slate-800/60 text-pink-50/75 text-xs rounded-full border border-slate-700">Creator</span>
        </div>
      </div>

      <div className="md:w-2/3 space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
            Hello there! <span className="text-4xl animate-wave origin-bottom-right inline-block">👋</span>
          </h2>
          <div className="prose prose-invert prose-slate max-w-none space-y-4 text-pink-50/75 leading-relaxed">
            <p>
              I’m The Cosmic Collie — online as @CosmiCollie. I build projects, run communities, and tinker with bots and tools with a soft spot for thoughtful, welcoming digital spaces.
            </p>
            <p>
              CosmiCollie Projects is not one solid team or a formal agency. It’s a loose collection of people and projects that I bring together and lead — each with its own ideas, energy, and direction.
            </p>
          </div>
        </div>

        <div className="bg-pink-300/10 border border-pink-200/15 rounded-xl p-5">
          <h3 className="text-pink-100 font-semibold mb-3 flex items-center gap-2">
            Little things about me
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-pink-50/75 text-sm">
            <li className="flex items-center gap-2">
              <Coffee size={16} className="text-amber-600" />
              <span>Powered by far too much tea</span>
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
