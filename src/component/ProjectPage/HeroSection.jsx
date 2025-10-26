import React, { useState, useEffect } from 'react';
import { Moon, Sun, ArrowDown, Code, Coffee, Heart, Sparkles, Play, Zap, Download } from 'lucide-react';

const HeroSection = () => {
    const [isDark, setIsDark] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [displayText, setDisplayText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Dynamic typing effect
    const roles = ['Full Stack Developer', 'React.js Expert', 'Problem Solver', 'Creative Coder'];
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
        }, isDeleting ? 50 : 150);

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
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    const stats = [
        { number: '2+', label: 'Years Experience', icon: <Code size={20} /> },
        { number: '10+', label: 'Projects Built', icon: <Zap size={20} /> },
        { number: '50+', label: 'Cups of Coffee', icon: <Coffee size={20} /> },
        { number: '∞', label: 'Lines of Code', icon: <Heart size={20} /> },
    ];

    return (
        <section className={`min-h-screen transition-all duration-500 relative overflow-hidden flex items-center ${isDark
                ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white'
                : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900'
            }`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute w-[400px] h-[400px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-500/10'
                            : 'bg-gradient-to-r from-indigo-300/20 via-purple-300/20 to-pink-300/20'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                        top: '10%',
                        left: '5%',
                    }}
                />
                <div
                    className={`absolute w-[350px] h-[350px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-600/10'
                            : 'bg-gradient-to-r from-cyan-300/20 via-blue-300/20 to-indigo-300/20'
                        }`}
                    style={{
                        transform: `translate(-${mousePosition.x * 0.025}px, -${mousePosition.y * 0.025}px)`,
                        bottom: '10%',
                        right: '5%',
                        animationDelay: '1s',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
                {/* Theme Toggle */}
                <div className="flex items-center justify-center mb-8">
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
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Greeting */}
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border ${isDark
                            ? 'bg-gray-800/50 border-gray-700/50 text-purple-400'
                            : 'bg-white/70 border-purple-200/50 text-purple-600'
                        }`}>
                        <Sparkles size={16} className="animate-pulse" />
                        <span className="text-sm font-semibold">Hello, I'm</span>
                    </div>

                    {/* Name */}
                    <h1 className={`text-5xl md:text-7xl font-black leading-tight ${isDark
                            ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
                        }`}>
                        Your Name
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
                            Passionate about creating beautiful, functional, and user-centered digital experiences.
                            I specialize in modern web technologies and love turning ideas into reality through code. ✨
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12 mb-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                                        ? 'bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50'
                                        : 'bg-white/70 border-gray-200/50 hover:border-purple-300/50'
                                    }`}
                            >
                                <div className={`flex items-center justify-center mb-2 ${isDark ? 'text-purple-400' : 'text-purple-600'
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

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                            } shadow-lg hover:shadow-2xl overflow-hidden`}>
                            <div className="flex items-center space-x-2">
                                <Play size={20} />
                                <span>View My Work</span>
                            </div>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        </button>

                        <button className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${isDark
                                ? 'border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white bg-gray-800/50 hover:bg-purple-500/10'
                                : 'border-gray-300 hover:border-purple-500 text-gray-700 hover:text-purple-600 bg-white/50 hover:bg-purple-50'
                            } backdrop-blur-sm`}>
                            <div className="flex items-center space-x-2">
                                <Download size={20} />
                                <span>Download Resume</span>
                            </div>
                        </button>
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
            <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60" />
            <div className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-40" />
            <div className="absolute bottom-32 left-16 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-70" />
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-50" />
        </section>
    );
};

export default HeroSection;