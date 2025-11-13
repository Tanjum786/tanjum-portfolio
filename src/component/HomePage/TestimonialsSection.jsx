import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Briefcase, MapPin } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const TestimonialsSection = () => {
    const { isDark } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeIndex, setActiveIndex] = useState(0);

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

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'CEO',
            company: 'TechStart Inc.',
            location: 'San Francisco, USA',
            image: '👩‍💼',
            rating: 5,
            text: 'Working with CyberDev was an absolute pleasure! The attention to detail and technical expertise brought our vision to life. Our website performance improved by 40% and user engagement doubled.',
            project: 'E-commerce Platform',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            name: 'Michael Chen',
            role: 'Product Manager',
            company: 'Digital Solutions',
            location: 'Singapore',
            image: '👨‍💻',
            rating: 5,
            text: 'Exceptional work! The React application was delivered ahead of schedule with clean, maintainable code. Great communication throughout the project and quick to implement feedback.',
            project: 'Admin Dashboard',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            role: 'Marketing Director',
            company: 'Creative Agency',
            location: 'London, UK',
            image: '👩‍🎨',
            rating: 5,
            text: 'The website redesign exceeded our expectations! Modern, fast, and mobile-responsive. Our client satisfaction scores went up significantly. Highly recommend!',
            project: 'Website Redesign',
            gradient: 'from-green-500 to-emerald-500'
        },
        {
            id: 4,
            name: 'David Kumar',
            role: 'Founder',
            company: 'StartupHub',
            location: 'Bangalore, India',
            image: '👨‍🚀',
            rating: 5,
            text: 'Professional, skilled, and reliable. Built our MVP in record time with excellent code quality. The HubSpot integration was flawless. Will definitely work together again!',
            project: 'SaaS MVP Development',
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[activeIndex];

    return (
        <section className={`py-20 transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white'
            : 'bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 text-gray-900'
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
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                        }`}>
                        Client Testimonials
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        What clients say about working with me 💬
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className={`relative p-8 md:p-12 rounded-3xl border ${isDark
                        ? 'bg-gray-800/40 border-gray-700/50'
                        : 'bg-white/80 border-gray-200/50'
                        } backdrop-blur-xl shadow-2xl`}>
                        
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark
                                ? 'bg-gradient-to-r from-cyan-600 to-emerald-600'
                                : 'bg-gradient-to-r from-cyan-500 to-emerald-500'
                                }`}>
                                <Quote className="text-white" size={24} />
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="space-y-6 mt-4">
                            {/* Stars */}
                            <div className="flex items-center space-x-1">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-yellow-400 fill-yellow-400"
                                        size={20}
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className={`text-lg md:text-xl leading-relaxed italic ${isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                "{currentTestimonial.text}"
                            </p>

                            {/* Project Tag */}
                            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isDark
                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                                }`}>
                                <Briefcase size={16} />
                                <span className="text-sm font-semibold">Project: {currentTestimonial.project}</span>
                            </div>

                            {/* Client Info */}
                            <div className="flex items-center space-x-4 pt-6 border-t border-gray-700/30">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${isDark
                                    ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-600/20'
                                    : 'bg-gradient-to-br from-cyan-100 to-emerald-100'
                                    }`}>
                                    {currentTestimonial.image}
                                </div>
                                <div className="flex-1">
                                    <h4 className={`font-bold text-lg ${isDark ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {currentTestimonial.role} at {currentTestimonial.company}
                                    </p>
                                    <div className={`flex items-center space-x-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'
                                        }`}>
                                        <MapPin size={12} />
                                        <span>{currentTestimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center justify-between mt-8">
                            <button
                                onClick={prevTestimonial}
                                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${isDark
                                    ? 'bg-gray-700/50 hover:bg-gray-600 text-gray-300 hover:text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex items-center space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`transition-all duration-300 rounded-full ${index === activeIndex
                                            ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-emerald-500'
                                            : isDark
                                                ? 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                                                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${isDark
                                    ? 'bg-gray-700/50 hover:bg-gray-600 text-gray-300 hover:text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                    {[
                        { value: '25+', label: 'Happy Clients' },
                        { value: '50+', label: 'Projects Done' },
                        { value: '100%', label: 'Satisfaction' },
                        { value: '3+', label: 'Years Experience' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 text-center ${isDark
                                ? 'bg-gray-800/50 border-gray-700/50 hover:border-cyan-500/50'
                                : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
                                }`}
                        >
                            <div className={`text-3xl font-bold mb-2 ${isDark
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
            </div>
        </section>
    );
};

export default TestimonialsSection;

