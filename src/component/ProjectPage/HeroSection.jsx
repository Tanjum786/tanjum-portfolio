import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Heart, Zap, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = () => {
    const { isDark } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Dynamic typing effect
    const roles = ['ReactJS Developer', 'Frontend HubSpot Developer', 'Redux Specialist', 'Web Developer'];
    const currentWord = roles[currentWordIndex];

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentWord.substring(0, displayText.length + 1));
                if (displayText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(currentWord.substring(0, displayText.length - 1));
                if (displayText === '') {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 30 : 60);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWord, currentWordIndex]);

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

    const scrollToProjects = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    const stats = [
        { number: '10+', label: 'Projects Built', icon: <Code size={20} /> },
        { number: '15+', label: 'HubSpot Websites', icon: <Zap size={20} /> },
        { number: '15+', label: 'React Applications', icon: <Star size={20} /> },
        { number: '100%', label: 'On-Time Delivery', icon: <Heart size={20} /> },
    ];

    return (
        <section className={`pt-12 pb-6 md:pt-16 md:pb-8 transition-all duration-500 relative overflow-hidden ${isDark
                ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white'
                : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900'
            }`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute w-[400px] h-[400px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-cyan-600/10 via-teal-600/10 to-emerald-500/10'
                            : 'bg-gradient-to-r from-cyan-300/20 via-teal-300/20 to-emerald-300/20'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                        top: '10%',
                        left: '5%',
                    }}
                />
                <div
                    className={`absolute w-[350px] h-[350px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-600/10'
                            : 'bg-gradient-to-r from-emerald-300/20 via-cyan-300/20 to-blue-300/20'
                        }`}
                    style={{
                        transform: `translate(-${mousePosition.x * 0.025}px, -${mousePosition.y * 0.025}px)`,
                        bottom: '10%',
                        right: '5%',
                        animationDelay: '1s',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-4 text-center">
                {/* Main Content */}
                <div className="space-y-8">
                    {/* Greeting */}
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border ${isDark
                            ? 'bg-gray-800/50 border-gray-700/50 text-cyan-400'
                            : 'bg-white/70 border-cyan-200/50 text-cyan-600'
                        }`}>
                        <span className="text-sm font-semibold">Hello, I'm</span>
                    </div>

                    {/* Name */}
                    <h1 className={`text-5xl md:text-7xl font-black leading-tight ${isDark
                            ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                        }`}>
                        Tanjum Kadakol
                    </h1>

                    {/* Dynamic Role */}
                    <div className="space-y-4">
                        <p className={`text-xl md:text-2xl font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            I'm a{' '}
                            <span className={`inline-block min-w-[200px] ${isDark
                                    ? 'text-gradient bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                                    : 'text-gradient bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'
                                }`}>
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </p>

                        {/* Description */}
                        <p className={`text-lg md:text-xl leading-relaxed max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            ReactJS Developer at Niswey with 3 years 3 months of experience.
                            I focus on creating performant, scalable web applications using React.js, Redux Toolkit, and HubSpot CMS, 
                            delivering solutions that meet both technical and business requirements.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12 mb-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                                        ? 'bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50'
                                        : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
                                    }`}
                            >
                                <div className={`flex items-center justify-center mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'
                                    }`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {stat.number}
                                </div>
                                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={scrollToProjects}
                        className={`animate-bounce p-3 rounded-full transition-all duration-300 hover:scale-110 ${isDark
                                ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white border border-gray-700/50'
                                : 'bg-white/70 hover:bg-white/90 text-gray-600 hover:text-gray-900 border border-gray-200/50'
                            } backdrop-blur-sm`}
                    >
                        <ArrowDown size={20} />
                    </button>
                </div>
            </div>

            {/* Floating ambient elements */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
            <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400 rounded-full animate-ping opacity-40" />
            <div className="absolute bottom-32 left-16 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-70" />
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-50" />
        </section>
    );
};

export default HeroSection;