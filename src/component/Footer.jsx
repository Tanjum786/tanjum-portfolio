import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Heart, Code, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const { isDark } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse tracking for parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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
            url: 'mailto:tanjunkadakol147@gmail.com',
            label: 'Email'
        }
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        // { name: 'Blog', href: '/blogs' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <footer className={`py-16 transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white border-t border-gray-700/50'
            : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900 border-t border-gray-200/50'
            }`}>

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute w-[300px] h-[300px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-cyan-600/5 via-teal-600/5 to-emerald-500/5'
                        : 'bg-gradient-to-r from-cyan-300/10 via-teal-300/10 to-emerald-300/10'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                        top: '20%',
                        left: '20%',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h3 className={`text-2xl font-black ${isDark
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                        }`}>
                        Tanjum Kadakol
                    </h3>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={`group p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${isDark
                                    ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                                    } shadow-lg hover:shadow-xl`}
                                title={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${isDark
                                ? 'text-gray-300 hover:text-cyan-400'
                                : 'text-gray-600 hover:text-cyan-600'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Divider */}
                <div className={`w-full h-px mb-8 ${isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'}`}></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className={`flex items-center space-x-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>© 2025 Tanjum Kadakol. Made with</span>
                        <Heart className="text-red-500 animate-pulse" size={16} />
                        <span>using</span>
                        <Code className={isDark ? 'text-cyan-400' : 'text-cyan-600'} size={16} />
                        <span>React & Tailwind CSS</span>
                    </div>

                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        All rights reserved.
                    </div>
                </div>

                {/* Back to Top */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Scroll to top"
                        className={`group inline-flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${isDark
                            ? 'bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30 text-gray-300 hover:text-white'
                            : 'bg-gradient-to-r from-cyan-100 to-emerald-100 border border-cyan-200 text-gray-700 hover:text-gray-900'
                            } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                    >
                        <span className="text-sm font-semibold">Back to Top</span>
                        <div className="transform group-hover:-translate-y-1 transition-transform duration-200">
                            ↑
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;