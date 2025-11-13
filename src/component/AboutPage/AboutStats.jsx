import React, { useState, useEffect } from 'react';
import { Code, Users, Award, Clock, Target, TrendingUp, Zap, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const AboutStats = () => {
    const { isDark } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [counters, setCounters] = useState({
        experience: 0,
        projects: 0,
        satisfaction: 0,
        technologies: 0,
        commits: 0
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
            projects: 8,
            satisfaction: 100,
            technologies: 12,
            commits: 1000
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
            label: 'HubSpot Websites',
            description: 'Successful deliveries',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-500/20'
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
            description: 'Frontend & HubSpot',
            color: 'from-cyan-500 to-teal-500',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-500/20'
        },
        {
            icon: <Code size={32} />,
            value: counters.commits,
            suffix: '+',
            label: 'Code Commits',
            description: 'Active development',
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20'
        }
    ];

    const achievements = [
        {
            icon: <Award size={24} />,
            title: 'Top Performer Award',
            description: 'Recognized as Top Performer at Niswey for outstanding contributions and dedication',
            color: 'text-yellow-400',
            link: 'https://www.linkedin.com/posts/tanjum-kadakol-665a69225_gratitude-topperformer-workanniversary-activity-7378079096293031936-xYmk'
        },
        {
            icon: <Users size={24} />,
            title: 'Customer Recognition',
            description: 'Appreciated by CEO for exceptional customer service and team collaboration',
            color: 'text-blue-400',
            link: 'https://www.linkedin.com/posts/sumaep_i-am-so-proud-of-this-team-that-makes-a-customer-activity-7292753317284261890-sSna'
        },
        {
            icon: <TrendingUp size={24} />,
            title: '3+ Years at Niswey',
            description: 'Completed 3 wonderful years of growth, learning, and contributing to team success',
            color: 'text-green-400'
        },
        {
            icon: <Zap size={24} />,
            title: '8+ HubSpot Websites',
            description: 'Successfully delivered 8+ HubSpot CMS websites for clients worldwide',
            color: 'text-purple-400'
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
                        By The Numbers
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        3+ years at Niswey, 8+ HubSpot websites, delivering quality solutions and driving digital success!
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
                        {achievements.map((achievement, index) => {
                            const AchievementContent = (
                                <div className={`relative p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 ${isDark
                                    ? 'bg-gray-800/40 border-gray-700/50 hover:border-gray-600'
                                    : 'bg-white/80 border-gray-200/50 hover:border-gray-300'
                                    } backdrop-blur-xl shadow-lg hover:shadow-2xl`}>
                                    <div className="flex items-start space-x-4">
                                        <div className={`p-3 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-gray-100'} ${achievement.color}`}>
                                            {achievement.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                                {achievement.title}
                                            </h4>
                                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {achievement.description}
                                            </p>
                                            {achievement.link && (
                                                <a 
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`inline-flex items-center space-x-1 mt-3 text-xs font-medium ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
                                                >
                                                    <span>View on LinkedIn</span>
                                                    <ExternalLink size={12} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );

                            return achievement.link ? (
                                <a
                                    key={index}
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    {AchievementContent}
                                </a>
                            ) : (
                                <div key={index}>
                                    {AchievementContent}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30'
                        : 'bg-gradient-to-r from-cyan-100 to-emerald-100 border border-cyan-200'
                        } backdrop-blur-sm`}>
                        <TrendingUp className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={20} />
                        <span className="font-semibold">Growing every day with new challenges and opportunities!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStats;