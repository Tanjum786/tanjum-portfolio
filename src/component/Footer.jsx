import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Twitter, Instagram, Heart, Code, Mail } from 'lucide-react';

const Footer = () => {
    const [isDark, setIsDark] = useState(true);
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
            url: 'https://github.com/yourusername',
            label: 'GitHub'
        },
        {
            icon: <Linkedin size={20} />,
            url: 'https://linkedin.com/in/yourusername',
            label: 'LinkedIn'
        },
        {
            icon: <Twitter size={20} />,
            url: 'https://twitter.com/yourusername',
            label: 'Twitter'
        },
        {
            icon: <Mail size={20} />,
            url: 'mailto:nabinkhair12@gmail.com',
            label: 'Email'
        }
    ];

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
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
                        ? 'bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-pink-500/5'
                        : 'bg-gradient-to-r from-indigo-300/10 via-purple-300/10 to-pink-300/10'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                        top: '20%',
                        left: '20%',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header with theme toggle */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-3 rounded-full transition-all duration-300 group ${isDark
                                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                                }`}
                        >
                            {isDark ? (
                                <Sun className="group-hover:rotate-180 transition-transform duration-500" size={20} />
                            ) : (
                                <Moon className="group-hover:-rotate-12 transition-transform duration-300" size={20} />
                            )}
                        </button>
                        <h3 className={`text-2xl font-black ${isDark
                            ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
                            }`}>
                            CyberDev
                        </h3>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
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
                        <a
                            key={index}
                            href={link.href}
                            className={`text-lg font-medium transition-all duration-300 hover:scale-105 ${isDark
                                ? 'text-gray-300 hover:text-purple-400'
                                : 'text-gray-600 hover:text-purple-600'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className={`w-full h-px mb-8 ${isDark ? 'bg-gray-700/50' : 'bg-gray-300/50'}`}></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className={`flex items-center space-x-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>© 2025 CyberDev. Made with</span>
                        <Heart className="text-red-500 animate-pulse" size={16} />
                        <span>using</span>
                        <Code className={isDark ? 'text-purple-400' : 'text-purple-600'} size={16} />
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
                        className={`group inline-flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${isDark
                            ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 text-gray-300 hover:text-white'
                            : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 text-gray-700 hover:text-gray-900'
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