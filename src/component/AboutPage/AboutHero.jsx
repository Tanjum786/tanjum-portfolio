import React, { useState, useEffect } from 'react';
import { Moon, Sun, MapPin } from 'lucide-react';

const AboutHero = () => {
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

    return (
        <section className={`py-20 transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white'
            : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900'
            }`}>

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute w-[350px] h-[350px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-500/10'
                        : 'bg-gradient-to-r from-indigo-300/20 via-purple-300/20 to-pink-300/20'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
                        top: '15%',
                        left: '10%',
                    }}
                />
                <div
                    className={`absolute w-[300px] h-[300px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-600/10'
                        : 'bg-gradient-to-r from-cyan-300/20 via-blue-300/20 to-indigo-300/20'
                        }`}
                    style={{
                        transform: `translate(-${mousePosition.x * 0.02}px, -${mousePosition.y * 0.02}px)`,
                        bottom: '15%',
                        right: '10%',
                        animationDelay: '1s',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 mt-12">
                    <div className="flex items-center justify-center mb-8">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className={`p-3 rounded-full transition-all duration-300 group mr-4 ${isDark
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
                        <h2 className={`text-4xl md:text-6xl font-black ${isDark
                            ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'
                            }`}>
                            About Me
                        </h2>
                    </div>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Passionate developer crafting digital experiences with code, creativity, and endless cups of tea! 🍵
                    </p>
                </div>

                {/* Main Content - Simple Two Column */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Brief Intro */}
                    <div className={`relative p-8 rounded-3xl border ${isDark
                        ? 'bg-gray-800/40 border-gray-700/50'
                        : 'bg-white/80 border-gray-200/50'
                        } backdrop-blur-xl shadow-lg`}>

                        <div className="flex items-center space-x-4 mb-6">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark
                                ? 'bg-gradient-to-br from-purple-500/20 to-blue-600/20'
                                : 'bg-gradient-to-br from-purple-100 to-blue-100'
                                }`}>
                                <span className="text-3xl">👨‍💻</span>
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                    Hey, I'm CyberDev!
                                </h3>
                                <div className="flex items-center space-x-2 mt-1">
                                    <MapPin className={`${isDark ? 'text-purple-400' : 'text-purple-600'}`} size={16} />
                                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Based in India 🇮🇳
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            I'm a passionate <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Frontend Developer</span> with
                            3+ years of experience creating beautiful, functional, and user-friendly web applications.
                            I love turning complex problems into simple, beautiful designs.
                        </p>

                        {/* Status Badge */}
                        <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-green-400">Available for projects</span>
                        </div>
                    </div>

                    {/* Right - Profile Visual */}
                    <div className="relative">
                        <div className={`w-full max-w-md mx-auto aspect-square rounded-3xl relative overflow-hidden ${isDark
                            ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20'
                            : 'bg-gradient-to-br from-purple-100 to-blue-100'
                            } backdrop-blur-xl border-4 ${isDark ? 'border-purple-500/30' : 'border-purple-200'}`}>

                            {/* Placeholder for actual image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`text-8xl ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                                    👨‍💻
                                </div>
                            </div>

                            {/* Animated border */}
                            <div className={`absolute inset-0 rounded-3xl ${isDark
                                ? 'bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500'
                                : 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600'
                                } opacity-20 animate-spin`} style={{ animationDuration: '15s' }}></div>
                        </div>

                        {/* Floating badges */}
                        <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-2xl backdrop-blur-xl border ${isDark
                            ? 'bg-gray-800/80 border-gray-600 text-gray-300'
                            : 'bg-white/80 border-gray-200 text-gray-700'
                            }`}>
                            <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full animate-pulse ${isDark ? 'bg-green-400' : 'bg-green-500'}`}></div>
                                <span className="text-sm font-medium">Open to work</span>
                            </div>
                        </div>

                        <div className={`absolute -bottom-4 -left-4 px-4 py-2 rounded-2xl backdrop-blur-xl border ${isDark
                            ? 'bg-gray-800/80 border-gray-600 text-gray-300'
                            : 'bg-white/80 border-gray-200 text-gray-700'
                            }`}>
                            <div className="flex items-center space-x-2">
                                <span className="text-lg">🍵</span>
                                <span className="text-sm font-medium">Fueled by tea</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;