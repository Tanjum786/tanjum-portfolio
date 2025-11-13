import React, { useState, useEffect } from 'react';
import { MapPin, Zap } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const AboutHero = () => {
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

    return (
        <section className={`py-20 transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white'
            : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900'
            }`}>

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute w-[350px] h-[350px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-cyan-600/10 via-teal-600/10 to-emerald-500/10'
                        : 'bg-gradient-to-r from-cyan-300/20 via-teal-300/20 to-emerald-300/20'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
                        top: '15%',
                        left: '10%',
                    }}
                />
                <div
                    className={`absolute w-[300px] h-[300px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-600/10'
                        : 'bg-gradient-to-r from-emerald-300/20 via-cyan-300/20 to-blue-300/20'
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
                    <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                        }`}>
                        About Me
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        ReactJS Developer with expertise in React, Redux, and HubSpot CMS. Delivering high-quality web solutions for businesses worldwide.
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
                                ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-600/20'
                                : 'bg-gradient-to-br from-cyan-100 to-emerald-100'
                                }`}>
                                <span className="text-3xl">👩‍💻</span>
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                    I'm Tanjum Kadakol
                                </h3>
                                <div className="flex items-center space-x-2 mt-1">
                                    <MapPin className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={16} />
                                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        Mahalingpur, Karnataka 🇮🇳
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            I'm a <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>ReactJS Developer</span> at{' '}
                            <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Niswey</span> (Delhi-based) with 
                            3 years 3 months of professional experience. I specialize in React.js, Redux Toolkit, and HubSpot CMS, 
                            focusing on creating efficient, maintainable code and solving complex business challenges through technology.
                        </p>

                        {/* Status Badge */}
                        <div className="mt-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-green-400">Open to Opportunities</span>
                        </div>
                    </div>

                    {/* Right - Profile Visual */}
                    <div className="relative">
                        <div className={`w-full max-w-md mx-auto aspect-square rounded-3xl relative overflow-hidden ${isDark
                            ? 'bg-gradient-to-br from-cyan-600/20 to-emerald-600/20'
                            : 'bg-gradient-to-br from-cyan-100 to-emerald-100'
                            } backdrop-blur-xl border-4 ${isDark ? 'border-cyan-500/30' : 'border-cyan-200'}`}>

                            {/* Placeholder for actual image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`text-8xl ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                                    👩‍💻
                                </div>
                            </div>

                            {/* Animated border */}
                            <div className={`absolute inset-0 rounded-3xl ${isDark
                                ? 'bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500'
                                : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600'
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
                                <Zap className={`${isDark ? 'text-yellow-400' : 'text-yellow-600'}`} size={16} />
                                <span className="text-sm font-medium">Always Learning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;