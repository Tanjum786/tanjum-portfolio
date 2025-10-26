import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react';

const LetsConnectSection = () => {
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
                {/* Header - same style as blog section */}
                <div className="text-center mb-16">
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
                            Let's Connect
                        </h2>
                    </div>

                    {/* Description */}
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        I'm currently available for freelance projects and full-time opportunities. If you're
                        interested in working together or have an exciting project in mind, let's have a
                        conversation.
                    </p>

                    {/* CTA Buttons - matching your theme */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <button
                            className={`group relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                                } shadow-lg hover:shadow-2xl overflow-hidden`}
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <Mail size={20} />
                                <span>GET IN TOUCH</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                            </div>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        </button>

                        <button
                            className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${isDark
                                ? 'border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white'
                                : 'border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900'
                                } hover:shadow-lg`}
                        >
                            VIEW MY WORK
                        </button>
                    </div>
                </div>

                {/* Contact Info Cards - Flex container with smaller cards */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto mb-16">
                    <div
                        className={`relative p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 ${isDark
                            ? 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600'
                            : 'bg-white/80 border-gray-200/50 hover:border-gray-300'
                            } backdrop-blur-xl shadow-lg hover:shadow-2xl flex-1 min-w-[280px]`}
                    >
                        <div className={`text-xs font-semibold tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            EMAIL
                        </div>
                        <div className={`text-lg font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                            nabinkhair12@gmail.com
                        </div>
                    </div>

                    <div
                        className={`relative p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 ${isDark
                            ? 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600'
                            : 'bg-white/80 border-gray-200/50 hover:border-gray-300'
                            } backdrop-blur-xl shadow-lg hover:shadow-2xl flex-1 min-w-[280px]`}
                    >
                        <div className={`text-xs font-semibold tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            RESPONSE TIME
                        </div>
                        <div className={`text-lg font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                            Within 24 hours
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30'
                        : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
                        } backdrop-blur-sm`}>
                        <MessageCircle className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
                        <span className="font-semibold">Have a project idea? Let's collaborate!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LetsConnectSection;