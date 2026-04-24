import { Mail, MessageCircle } from 'lucide-react';

const TwitterIcon = ({ size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function ContactTab() {
  const contacts = [
    {
      platform: "Email",
      value: "Cosmic@CosmiCollie.xyz",
      icon: Mail,
      link: "mailto:cosmic@cosmicollie.xyz",
      color: "text-emerald-400",
      bgHover: "hover:bg-emerald-500/10",
      borderHover: "hover:border-emerald-500/30"
    },
    {
      platform: "Twitter",
      value: "@cosmicollie",
      icon: TwitterIcon,
      link: "https://twitter.com/cosmicollie",
      color: "text-sky-400",
      bgHover: "hover:bg-sky-500/10",
      borderHover: "hover:border-sky-500/30"
    },
    {
      platform: "Discord",
      value: "@thecosmicollie",
      icon: MessageCircle,
      link: "https://discord.com/users/1407241036480118806", // fallback link format
      color: "text-indigo-400",
      bgHover: "hover:bg-indigo-500/10",
      borderHover: "hover:border-indigo-500/30"
    }
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Whether you're looking for a moderator/admin, help making a server or just want a chat, Reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center p-8 rounded-2xl bg-slate-900/40 border border-slate-700/50 transition-all duration-300 group ${contact.bgHover} ${contact.borderHover}`}
            >
              <div className={`p-4 rounded-full bg-slate-800/80 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${contact.color}`}>
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-200 mb-1">{contact.platform}</h3>
              <p className="text-slate-400 font-mono text-sm">{contact.value}</p>
            </a>
          );
        })}
      </div>

      <div className="mt-12 text-slate-500 text-sm flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available for new opportunities
      </div>
    </div>
  );
}
