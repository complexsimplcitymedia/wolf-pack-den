import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and real-time inventory management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team communication features.',
      tech: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with interactive charts and customizable reporting capabilities.',
      tech: ['React', 'D3.js', 'Express', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          A selection of recent work showcasing my expertise in building modern web applications
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
