import React from 'react';
import { Github, Linkedin, Heart, Mail, Sparkles, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();

    const socialLinks = [
        {
            icon: <Github size={20} />,
            url: 'https://github.com/Tanjum786',
            label: 'GitHub'
        },
        {
            icon: <Linkedin size={20} />,
            url: 'https://www.linkedin.com/in/tanjum-kadakol-665a69225/',
            label: 'LinkedIn'
        },
        {
            icon: <Mail size={20} />,
            url: 'https://mail.google.com/mail/?view=cm&to=tanjunkadakol147@gmail.com',
            label: 'Email'
        }
    ];

    return (
        <footer className={`py-16 transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white border-t border-gray-700/50'
            : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900 border-t border-gray-200/50'
            }`}>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                    {/* Left Column - Name & Tagline */}
                    <div className="space-y-4">
                        <h3 className={`text-3xl md:text-4xl font-black ${isDark
                            ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                            }`}>
                            Tanjum Kadakol
                        </h3>
                        <p className={`text-base flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            <Sparkles size={18} className={isDark ? 'text-cyan-400' : 'text-cyan-600'} />
                            <span>Frontend Developer specializing in React & HubSpot</span>
                        </p>
                    </div>

                    {/* Right Column - Social Links */}
                    <div className="flex md:justify-end justify-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={`group p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${isDark
                                    ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-cyan-400'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-cyan-600'
                                    } shadow-lg hover:shadow-xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200'}`}
                                title={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={`w-full h-px mb-8 ${isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'}`}></div>

                {/* Bottom - Copyright */}
                <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm mb-8 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    <div className="flex items-center gap-1.5">
                        <span>© 2025 Tanjum Kadakol. Made with</span>
                        <Heart className="text-red-500" size={14} fill="currentColor" />
                        <span>using</span>
                        <Code className={isDark ? 'text-cyan-400' : 'text-cyan-600'} size={14} />
                        <span>React & Tailwind CSS</span>
                    </div>
                    <div>
                        <span>All rights reserved.</span>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="text-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Scroll to top"
                        className={`group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
                            ? 'bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50'
                            : 'bg-white border border-gray-200 text-gray-600 hover:text-cyan-600 hover:border-cyan-400'
                            } shadow-lg hover:shadow-xl`}
                    >
                        <span>Back to Top</span>
                        <span className="transform group-hover:-translate-y-1 transition-transform duration-200 text-lg">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;