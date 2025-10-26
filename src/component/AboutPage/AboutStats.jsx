import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code, Coffee, Users, Award, Clock, Target, TrendingUp, Zap } from 'lucide-react';

const AboutStats = () => {
    const [isDark, setIsDark] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [counters, setCounters] = useState({
        experience: 0,
        projects: 0,
        clients: 0,
        satisfaction: 0,
        technologies: 0,
        coffees: 0
    });

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

    // Counter animation
    useEffect(() => {
        const targets = {
            experience: 3,
            projects: 50,
            clients: 25,
            satisfaction: 100,
            technologies: 15,
            coffees: 500
        };

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepTime = duration / steps;

        const intervals = Object.keys(targets).map(key => {
            const target = targets[key];
            const increment = target / steps;
            let current = 0;
            let step = 0;

            return setInterval(() => {
                step++;
                current = Math.min(increment * step, target);

                setCounters(prev => ({
                    ...prev,
                    [key]: Math.floor(current)
                }));

                if (step >= steps) {
                    clearInterval(intervals[Object.keys(targets).indexOf(key)]);
                }
            }, stepTime);
        });

        return () => intervals.forEach(interval => clearInterval(interval));
    }, []);

    const stats = [
        {
            icon: <Clock size={32} />,
            value: counters.experience,
            suffix: '+',
            label: 'Years Experience',
            description: 'Professional development',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20'
        },
        {
            icon: <Code size={32} />,
            value: counters.projects,
            suffix: '+',
            label: 'Projects Completed',
            description: 'Successful deliveries',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20'
        },
        {
            icon: <Users size={32} />,
            value: counters.clients,
            suffix: '+',
            label: 'Happy Clients',
            description: 'Satisfied customers',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20'
        },
        {
            icon: <Award size={32} />,
            value: counters.satisfaction,
            suffix: '%',
            label: 'Client Satisfaction',
            description: 'Quality guaranteed',
            color: 'from-yellow-500 to-orange-500',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/20'
        },
        {
            icon: <Target size={32} />,
            value: counters.technologies,
            suffix: '+',
            label: 'Technologies',
            description: 'Modern tech stack',
            color: 'from-indigo-500 to-blue-500',
            bgColor: 'bg-indigo-500/10',
            borderColor: 'border-indigo-500/20'
        },
        {
            icon: <span className="text-3xl">🍵</span>,
            value: counters.coffees,
            suffix: '+',
            label: 'Cups of Tea',
            description: 'Fuel for coding',
            color: 'from-amber-500 to-yellow-500',
            bgColor: 'bg-amber-500/10',
            borderColor: 'border-amber-500/20'
        }
    ];

    const achievements = [
        {
            icon: <TrendingUp size={24} />,
            title: 'Performance Optimization',
            description: 'Improved website load times by 40% on average',
            color: 'text-blue-400'
        },
        {
            icon: <Zap size={24} />,
            title: 'Rapid Development',
            description: 'Delivered projects 25% faster than industry average',
            color: 'text-purple-400'
        },
        {
            icon: <Award size={24} />,
            title: 'Quality Assurance',
            description: 'Zero critical bugs in production deployments',
            color: 'text-green-400'
        },
        {
            icon: <Users size={24} />,
            title: 'Team Collaboration',
            description: 'Led cross-functional teams of 5+ developers',
            color: 'text-yellow-400'
        }
    ];

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
                            By The Numbers
                        </h2>
                    </div>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        My journey in development, measured in achievements, satisfied clients, and countless cups of tea! 📊
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative group p-8 rounded-3xl border transition-all duration-500 transform hover:scale-105 ${isDark
                                ? 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600'
                                : 'bg-white/80 border-gray-200/50 hover:border-gray-300'
                                } backdrop-blur-xl shadow-lg hover:shadow-2xl overflow-hidden`}
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                            {/* Icon */}
                            <div className={`relative mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>

                            {/* Value */}
                            <div className="relative mb-4">
                                <span className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                    {stat.value}{stat.suffix}
                                </span>
                            </div>

                            {/* Label */}
                            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                {stat.label}
                            </h3>

                            {/* Description */}
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stat.description}
                            </p>

                            {/* Hover Effect */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                        </div>
                    ))}
                </div>

                {/* Achievements Section */}
                <div className="mb-16">
                    <h3 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                        Key Achievements
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`relative p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 ${isDark
                                    ? 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600'
                                    : 'bg-white/80 border-gray-200/50 hover:border-gray-300'
                                    } backdrop-blur-xl shadow-lg hover:shadow-2xl`}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'} ${achievement.color}`}>
                                        {achievement.icon}
                                    </div>
                                    <div>
                                        <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                            {achievement.title}
                                        </h4>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {achievement.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30'
                        : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
                        } backdrop-blur-sm`}>
                        <TrendingUp className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
                        <span className="font-semibold">Growing every day with new challenges and opportunities!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;