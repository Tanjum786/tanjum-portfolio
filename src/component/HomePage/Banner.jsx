import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Zap, Star, Coffee } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import resumePDF from '../../assets/Tanjum Kadakol.pdf';

const BannerHeroSection = () => {
    const { isDark } = useTheme();
    const navigate = useNavigate();
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const texts = ['ReactJS Developer', 'Frontend HubSpot Developer', 'Redux Specialist', 'Web Developer'];

    // Typing effect
    useEffect(() => {
        const type = () => {
            const fullText = texts[textIndex];

            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        };

            const timer = setTimeout(type, isDeleting ? 30 : 50);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, textIndex, texts]);

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
        <div className={`min-h-screen transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white'
            : 'bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 text-gray-900'
            }`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Enhanced Gradient Orbs */}
                <div
                    className={`absolute w-[400px] h-[400px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-cyan-600/20 via-teal-600/20 to-emerald-500/20'
                        : 'bg-gradient-to-r from-cyan-300/30 via-teal-300/30 to-emerald-300/30'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                        top: '10%',
                        left: '10%',
                    }}
                />
                <div
                    className={`absolute w-[350px] h-[350px] rounded-full blur-3xl animate-pulse ${isDark
                        ? 'bg-gradient-to-r from-emerald-500/15 via-cyan-500/15 to-blue-600/15'
                        : 'bg-gradient-to-r from-emerald-200/40 via-cyan-200/40 to-blue-200/40'
                        }`}
                    style={{
                        transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`,
                        top: '50%',
                        right: '10%',
                        animationDelay: '1s',
                    }}
                />

                {/* Grid Pattern */}
                <div className={`absolute inset-0 opacity-[0.03] ${isDark ? 'bg-white' : 'bg-gray-900'}`}
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            {/* Hero Section - 2 Column Layout */}
            <main className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Status Badge */}
                        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-green-400">Open to Opportunities</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <p className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Hello, I'm
                            </p>
                            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                                <span className={`block ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                    Tanjum Kadakol
                                </span>
                            </h1>

                            {/* Dynamic Role */}
                            <div className="h-16 flex items-center justify-center lg:justify-start">
                                <h2 className={`text-2xl lg:text-4xl font-bold ${isDark
                                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent'
                                    : 'bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent'
                                    }`}>
                                    {currentText}
                                    <span className="animate-ping text-cyan-500">|</span>
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <p className={`text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 ${isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            ReactJS Developer at Niswey (Delhi) with 3+ years of experience. I specialize in React.js, Redux Toolkit, and HubSpot CMS, 
                            crafting high-performance web solutions that drive business growth and deliver exceptional user experiences.
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                            {[
                                { value: '3+', label: 'Years Coding', icon: <Zap size={20} /> },
                                { value: '8+', label: 'HubSpot Sites', icon: <Coffee size={20} /> },
                                { value: '8+', label: 'Projects Delivered', icon: <Star size={20} /> },
                            ].map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className={`mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 ${isDark
                                        ? 'bg-cyan-500/20 text-cyan-400'
                                        : 'bg-cyan-100 text-cyan-600'
                                        }`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-2xl font-bold ${isDark
                                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent'
                                        : 'bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent'
                                        }`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button 
                                onClick={() => navigate('/projects')}
                                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-cyan-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                                <span>View My Work</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={18} />
                            </button>
                            <button 
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = resumePDF;
                                    link.download = 'Tanjum_Kadakol_CV.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border-2 ${isDark
                                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800/50'
                                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-100'
                                }`}>
                                <Download size={18} />
                                <span>Download CV</span>
                            </button>
                        </div>


                    </div>


                    {/* Right Side - Visual */}
                    <div className="relative flex justify-center">
                        {/* Main Avatar/Profile Circle */}
                        <div className={`relative w-80 h-80 rounded-full bg-gradient-to-br ${isDark
                            ? 'from-cyan-600 via-teal-600 to-emerald-600'
                            : 'from-cyan-500 via-teal-500 to-emerald-500'
                            } p-1 shadow-2xl`}>
                            <div className={`w-full h-full rounded-full flex items-center justify-center text-8xl ${isDark ? 'bg-gray-800' : 'bg-white'
                                }`}>
                                👩‍💻
                            </div>

                            {/* Floating Elements */}
                            <div className={`absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${isDark
                                ? 'from-yellow-400 to-orange-500'
                                : 'from-yellow-400 to-orange-400'
                                } flex items-center justify-center text-2xl animate-bounce shadow-lg`}>
                                ⚡
                            </div>

                            <div className={`absolute -bottom-8 -left-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${isDark
                                ? 'from-green-400 to-emerald-500'
                                : 'from-green-400 to-emerald-400'
                                } flex items-center justify-center text-3xl animate-pulse shadow-lg`}>
                                🚀
                            </div>

                            <div className={`absolute top-12 -left-12 w-12 h-12 rounded-xl bg-gradient-to-br ${isDark
                                ? 'from-blue-400 to-cyan-500'
                                : 'from-blue-400 to-cyan-400'
                                } flex items-center justify-center text-xl animate-ping shadow-lg`}>
                                💡
                            </div>
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                            <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${isDark ? 'bg-cyan-500' : 'bg-cyan-400'
                                } shadow-lg`} />
                            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full ${isDark ? 'bg-teal-500' : 'bg-teal-400'
                                } shadow-lg`} />
                            <div className={`absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${isDark ? 'bg-emerald-500' : 'bg-emerald-400'
                                } shadow-lg`} />
                            <div className={`absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${isDark ? 'bg-green-500' : 'bg-green-400'
                                } shadow-lg`} />
                        </div>
                    </div>
                </div>
                {/* Additional floating elements for ambiance */}
                <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60" />
                <div className="absolute top-40 right-32 w-3 h-3 bg-teal-400 rounded-full animate-ping opacity-40" />
                <div className="absolute bottom-32 left-16 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-70" />
                <div className="absolute bottom-20 right-20 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-50" />

            </main>
        </div>
    );
};

export default BannerHeroSection;