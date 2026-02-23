import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to create something amazing
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a
                  href="mailto:your.email@example.com"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-emerald-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-slate-400">Your City, Country</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              {submitted ? 'Sent!' : 'Send Message'}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
