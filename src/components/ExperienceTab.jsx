import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Head of Studio",
    company: "CosmiCollie Studios (Fka Howlz Digital Studios)",
    period: "2024 — Present",
    description: "Established and directed a creative studio dedicated to developing and organizing various projects. Managed the entire portfolio, overseeing concept development, resource allocation, and project lifecycle management.",
    skills: ["Studio Management", "Project Portfolio", "Creative Direction"]
  },
  {
    role: "Owner",
    company: "Shitty Mod Life",
    period: "2023 — Present",
    description: "Assumed ownership and leadership of a 300+ member server dedicated to providing advice, advertising, and support for Discord moderators, owners, and staff. Focus on community guidance and operational continuity.",
    skills: ["Community Leadership", "Staff Mentorship", "Operational Transfer", "Moderation Consulting"]
  },
  {
    role: "Head Developer",
    company: "The Moonlight Alliance",
    period: "2024 — Present",
    description: "Spearheaded the technical vision for the Moonlight Alliance Discord bot. Responsible for initial architectural design, feature planning, and core development efforts for this utility project.",
    skills: ["Bot Development", "Technical Planning", "Architecture Design", "Utility Coding"]
  },
  {
    role: "Head of Staff",
    company: "Cybershield",
    period: "2024 — Present",
    description: "Manage staff operations for Cybershield, a bot focused on security and verification. Crucially, I take reports and add to the blacklist database, which is key to preventing verification of bad actors and securing user spaces.",
    skills: ["Decision Making", "Report Taking", "Staff Supervision", "Verification Tools"]
  },
  {
    role: "Senior Moderator",
    company: "Linkr",
    period: "2023 — Present",
    description: "Senior-level moderation of Linkr's global chat that links multiple Discord servers. Responsibility for content review, conflict resolution, and maintaining communication standards across a broad network.",
    skills: ["High Level Moderation", "Content Review", "Conflict Resolution", "Communication Integrity"]
  },
  {
    role: "Administrator",
    company: "The Singularity",
    period: "2025 — Present",
    description: "Promoted to Administrator of a 300+ member community server. Oversee server stability, enforce server rules, and manage administrative actions to maintain a consistent, positive community environment.",
    skills: ["Community Administration", "Policy Enforcement", "Operational Oversight", "Large Community Management"]
  },
  {
    role: "Discord Moderator",
    company: "The Raven's Nest",
    period: "2025 — Present",
    description: "Actively moderate the official Discord server for Twitch streamer OutcastRaven. Maintain channel safety and enforce community standards to support the streamer's brand.",
    skills: ["Streamer Support", "Community Moderation", "Event Management", "Community Support"]
  },
  {
    role: "Owner (Former)",
    company: "The Wolf Pack",
    period: "2022 — 2024",
    description: "Founded, managed, and grew a general community server before executing a successful transfer of ownership. Responsibilities included infrastructure setup, staff management, and fostering community engagement.",
    skills: ["Founding", "Community Building", "Staff Management", "Succession Planning"]
  },
  {
    role: "Moderator (Former)",
    company: "The Singularity",
    period: "2022 — 2025",
    description: "Executed daily moderation duties, managed minor conflicts, and ensured adherence to community guidelines, contributing to a welcoming and safe environment for members. Promoted to Administrator.",
    skills: ["Community Moderation", "Guideline Adherence", "Conflict Mediation", "Daily Operations"]
  },
  {
    role: "Technical Support",
    company: "BotGhost",
    period: "2025 — 2025",
    description: "Provided direct technical support for the BotGhost no-code bot creation platform, assisting users with setup, troubleshooting issues, and documenting common fixes for the community.",
    skills: ["Technical Support", "User Assistance", "Troubleshooting", "Community Helpdesk"]
  }
];

export default function ExperienceTab() {
  return (
    <div className="h-full overflow-y-auto pr-2 custom-scrollbar pb-10">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 hover:bg-slate-800/60 hover:border-indigo-500/30 transition-all group"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-indigo-400/80 font-medium text-sm mt-1">
                  <Building2 size={14} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-sm whitespace-nowrap bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700/50 w-fit">
                <Calendar size={12} />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill, sIndex) => (
                <span
                  key={sIndex}
                  className="px-2 py-1 bg-indigo-950/30 text-indigo-200 text-xs rounded-md border border-indigo-900/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
