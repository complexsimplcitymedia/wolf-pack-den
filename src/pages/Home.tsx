import { ArrowRight, Code2, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const skills = [
    { icon: Code2, name: 'Web Development', color: 'emerald' },
    { icon: Sparkles, name: 'UI/UX Design', color: 'blue' },
    { icon: Zap, name: 'Performance', color: 'amber' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <section className="text-center mb-32">
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-emerald-400">Your Name</span>
        </h1>
        <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          A passionate developer crafting beautiful digital experiences
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
        >
          View My Work
          <ArrowRight size={20} />
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-emerald-500/50 transition-all hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-${skill.color}-500/20 flex items-center justify-center mb-4`}>
                <Icon className={`text-${skill.color}-400`} size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-slate-400">
                Delivering excellence with modern tools and best practices
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
