import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Briefcase, Mail } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors">
              Portfolio
            </Link>
            <div className="flex gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive
                        ? 'text-emerald-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="bg-slate-900/50 border-t border-slate-700/50 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          <p>&copy; 2026 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
