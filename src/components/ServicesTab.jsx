import { ServerCog, Users, ShieldCheck, Cpu, MessageSquare, BookOpen } from 'lucide-react';

const services = [
  {
    title: "Server Architecture & Setup",
    icon: ServerCog,
    description: "Designing from the ground up: category organization, channel permissions, roles, and onboarding flows for communities of any scale."
  },
  {
    title: "Community Management",
    icon: Users,
    description: "Guiding the direction of your server, fostering engagement, organizing events, and maintaining an active, positive environment."
  },
  {
    title: "Security & Verification",
    icon: ShieldCheck,
    description: "Implementing robust verification systems, raid protection, and moderation bots to keep bad actors out and your community safe."
  },
  {
    title: "Bot Configuration",
    icon: Cpu,
    description: "Setup and fine-tuning of utility, moderation, and entertainment bots."
  },
  {
    title: "Staff Management",
    icon: BookOpen,
    description: "Recruiting, training, and managing moderation teams. Building clear guidelines and effective conflict resolution strategies."
  },
  {
    title: "Community Moderation",
    icon: MessageSquare,
    description: "Full-Time moderation of your discord community. Rules enforcement, conflict resolution and active engagement."
  }
];

export default function ServicesTab() {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Professional Services</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Leveraging years of experience in leading and building communities, I offer a range of services to help your server thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar pr-2 pb-4 flex-grow">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl hover:bg-slate-800/60 transition-colors group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-100">{service.title}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-700/50 flex justify-center">
        <div className="bg-indigo-600/20 border border-indigo-500/30 px-6 py-4 rounded-xl flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
          <div className="text-center sm:text-left flex-grow">
            <h4 className="text-lg font-bold text-white">Interested in working together?</h4>
            <p className="text-indigo-200 text-sm">Every community is unique. Let's discuss your specific needs.</p>
          </div>
          <button
            onClick={() => document.querySelector('button[aria-label="Contact Tab"]')?.click()}
            className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/25 whitespace-nowrap"
          >
            Contact to Inquire
          </button>
        </div>
      </div>
    </div>
  );
}
