import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code, Database, Palette, Smartphone, Cloud, Zap, Star, TrendingUp, Award, ChevronDown, ChevronUp, Filter } from 'lucide-react';

const TechStackSection = () => {
    const [isDark, setIsDark] = useState(true);
    const [hoveredTech, setHoveredTech] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animating, setAnimating] = useState(false);

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

    const techCategories = [
        {
            id: 'frontend',
            title: 'Frontend',
            icon: <Code size={24} />,
            gradient: isDark ? 'from-blue-500 to-cyan-500' : 'from-blue-600 to-cyan-600',
            technologies: [
                { name: 'React', icon: '⚛️', level: 95, color: 'from-blue-400 to-cyan-400', type: 'Framework' },
                { name: 'Next.js', icon: '🚀', level: 90, color: 'from-gray-600 to-gray-400', type: 'Framework' },
                { name: 'TypeScript', icon: '📘', level: 85, color: 'from-blue-600 to-blue-400', type: 'Language' },
                { name: 'JavaScript', icon: '💛', level: 98, color: 'from-yellow-400 to-orange-400', type: 'Language' },
                { name: 'Tailwind CSS', icon: '💨', level: 92, color: 'from-cyan-400 to-blue-500', type: 'Styling' },
                { name: 'HTML5/CSS3', icon: '🎨', level: 95, color: 'from-orange-400 to-red-400', type: 'Styling' },
            ]
        },
        {
            id: 'backend',
            title: 'Backend',
            icon: <Database size={24} />,
            gradient: isDark ? 'from-green-500 to-emerald-500' : 'from-green-600 to-emerald-600',
            technologies: [
                { name: 'Node.js', icon: '💚', level: 88, color: 'from-green-400 to-emerald-500', type: 'Runtime' },
                { name: 'Express.js', icon: '🌐', level: 85, color: 'from-gray-500 to-gray-600', type: 'Framework' },
                { name: 'MongoDB', icon: '🍃', level: 80, color: 'from-green-500 to-green-400', type: 'Database' },
                { name: 'PostgreSQL', icon: '🐘', level: 75, color: 'from-blue-500 to-indigo-500', type: 'Database' },
                { name: 'GraphQL', icon: '🔗', level: 70, color: 'from-pink-400 to-purple-400', type: 'API' },
                { name: 'REST APIs', icon: '🔌', level: 90, color: 'from-orange-400 to-red-400', type: 'API' },
            ]
        },
        {
            id: 'tools',
            title: 'Tools & Design',
            icon: <Palette size={24} />,
            gradient: isDark ? 'from-purple-500 to-pink-500' : 'from-purple-600 to-pink-600',
            technologies: [
                { name: 'Figma', icon: '🎨', level: 90, color: 'from-purple-400 to-pink-400', type: 'Design' },
                { name: 'Git & GitHub', icon: '🐙', level: 95, color: 'from-gray-600 to-gray-800', type: 'Version Control' },
                { name: 'VS Code', icon: '💙', level: 98, color: 'from-blue-500 to-blue-600', type: 'Editor' },
                { name: 'Photoshop', icon: '📸', level: 80, color: 'from-blue-400 to-purple-400', type: 'Design' },
                { name: 'Webpack', icon: '📦', level: 75, color: 'from-blue-300 to-cyan-400', type: 'Build Tool' },
                { name: 'Docker', icon: '🐳', level: 70, color: 'from-cyan-400 to-blue-500', type: 'DevOps' },
            ]
        },
        {
            id: 'mobile',
            title: 'Mobile & Cloud',
            icon: <Smartphone size={24} />,
            gradient: isDark ? 'from-orange-500 to-red-500' : 'from-orange-600 to-red-600',
            technologies: [
                { name: 'React Native', icon: '📱', level: 85, color: 'from-blue-400 to-purple-400', type: 'Mobile' },
                { name: 'Flutter', icon: '🦋', level: 70, color: 'from-blue-300 to-cyan-400', type: 'Mobile' },
                { name: 'AWS', icon: '☁️', level: 75, color: 'from-orange-400 to-yellow-400', type: 'Cloud' },
                { name: 'Firebase', icon: '🔥', level: 80, color: 'from-yellow-400 to-orange-500', type: 'Cloud' },
                { name: 'Vercel', icon: '▲', level: 90, color: 'from-gray-600 to-black', type: 'Deployment' },
                { name: 'Netlify', icon: '🌐', level: 85, color: 'from-teal-400 to-cyan-500', type: 'Deployment' },
            ]
        }
    ];

    const achievements = [
        { icon: <Star size={20} />, label: '50+ Projects', color: 'text-yellow-400' },
        { icon: <TrendingUp size={20} />, label: '3+ Years', color: 'text-green-400' },
        { icon: <Award size={20} />, label: '100% Satisfaction', color: 'text-purple-400' },
        { icon: <Zap size={20} />, label: 'Always Learning', color: 'text-blue-400' },
    ];

    // Get all unique tech types for filters
    const allTechTypes = ['All', ...new Set(
        techCategories.flatMap(cat => cat.technologies.map(tech => tech.type))
    )];

    // Filter technologies based on active filter
    const getFilteredCategories = () => {
        if (activeFilter === 'All') return techCategories;

        return techCategories.map(category => ({
            ...category,
            technologies: category.technologies.filter(tech => tech.type === activeFilter)
        })).filter(category => category.technologies.length > 0);
    };

    const handleShowMore = () => {
        setAnimating(true);
        setTimeout(() => {
            setShowAll(!showAll);
            setAnimating(false);
        }, 200);
    };

    const displayedCategories = showAll ? getFilteredCategories() : [techCategories[0]]; // Only Frontend initially

    return (
        <section className={`py-20 transition-all duration-500 relative overflow-hidden ${isDark
                ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white'
                : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900'
            }`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute w-[300px] h-[300px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10'
                            : 'bg-gradient-to-r from-purple-300/20 via-blue-300/20 to-cyan-300/20'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
                        top: '20%',
                        right: '10%',
                    }}
                />
                <div
                    className={`absolute w-[250px] h-[250px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10'
                            : 'bg-gradient-to-r from-green-300/20 via-emerald-300/20 to-teal-300/20'
                        }`}
                    style={{
                        transform: `translate(-${mousePosition.x * 0.02}px, -${mousePosition.y * 0.02}px)`,
                        bottom: '20%',
                        left: '10%',
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
                                ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'
                                : 'bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent'
                            }`}>
                            Tech Stack
                        </h2>
                    </div>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        The tools and technologies I use to bring ideas to life. Always learning, always evolving! ✨
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                                    ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600'
                                    : 'bg-white/70 border-gray-200/50 hover:border-gray-300'
                                }`}>
                                <span className={achievement.color}>{achievement.icon}</span>
                                <span className="text-sm font-semibold">{achievement.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters - Only show when expanded */}
                {showAll && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
                        <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-800/50 text-gray-400' : 'bg-white/70 text-gray-600'
                            }`}>
                            <Filter size={16} />
                            <span className="text-sm font-medium">Filter by:</span>
                        </div>
                        {allTechTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveFilter(type)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === type
                                        ? isDark
                                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                                        : isDark
                                            ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                                            : 'bg-white/70 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                )}

                {/* Tech Categories Grid */}
                <div className={`grid ${showAll ? 'md:grid-cols-2' : 'grid-cols-1 max-w-2xl mx-auto'} gap-8 transition-all duration-500 ${animating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                    }`}>
                    {displayedCategories.map((category, categoryIndex) => (
                        <div
                            key={category.id}
                            className={`relative group ${isDark
                                    ? 'bg-gray-800/30'
                                    : 'bg-white/60'
                                } backdrop-blur-xl rounded-3xl p-8 border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                                } hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02]`}
                            style={{
                                animationDelay: `${categoryIndex * 0.1}s`,
                            }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center space-x-4 mb-8">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white`}>
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                        {category.title}
                                    </h3>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {category.technologies.length} technologies
                                    </p>
                                </div>
                            </div>

                            {/* Technologies Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {category.technologies.map((tech, techIndex) => (
                                    <div
                                        key={tech.name}
                                        className={`relative p-4 rounded-2xl transition-all duration-300 cursor-pointer group/tech ${isDark
                                                ? 'bg-gray-700/30 hover:bg-gray-700/50'
                                                : 'bg-gray-50/80 hover:bg-white/90'
                                            } border ${isDark ? 'border-gray-600/30 hover:border-gray-500/50' : 'border-gray-200/50 hover:border-gray-300/70'
                                            } transform hover:scale-105`}
                                        onMouseEnter={() => setHoveredTech(`${category.id}-${tech.name}`)}
                                        onMouseLeave={() => setHoveredTech(null)}
                                    >
                                        {/* Tech Icon & Name */}
                                        <div className="flex items-center space-x-3 mb-3">
                                            <span className="text-2xl group-hover/tech:scale-110 transition-transform duration-200">
                                                {tech.icon}
                                            </span>
                                            <div className="flex-1 min-w-0">
                                                <div className={`font-semibold text-sm truncate ${isDark ? 'text-gray-200' : 'text-gray-800'
                                                    }`}>
                                                    {tech.name}
                                                </div>
                                                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'
                                                    }`}>
                                                    {tech.type}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Skill Level Bar */}
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'
                                                    }`}>
                                                    Proficiency
                                                </span>
                                                <span className={`text-xs font-bold ${isDark
                                                        ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                                                        : 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'
                                                    }`}>
                                                    {tech.level}%
                                                </span>
                                            </div>
                                            <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-gray-600/50' : 'bg-gray-200'
                                                }`}>
                                                <div
                                                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: hoveredTech === `${category.id}-${tech.name}` ? `${tech.level}%` : '0%'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover/tech:opacity-10 transition-opacity duration-300`} />
                                    </div>
                                ))}
                            </div>

                            {/* Category Glow Effect */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={handleShowMore}
                        className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                            } shadow-lg hover:shadow-2xl overflow-hidden`}
                    >
                        <div className="flex items-center space-x-2">
                            <span>{showAll ? 'Show Less' : 'Show All Tech Stack'}</span>
                            {showAll ? (
                                <ChevronUp className="group-hover:-translate-y-1 transition-transform duration-200" size={20} />
                            ) : (
                                <ChevronDown className="group-hover:translate-y-1 transition-transform duration-200" size={20} />
                            )}
                        </div>

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </button>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30'
                            : 'bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200'
                        } backdrop-blur-sm`}>
                        <Zap className={`${isDark ? 'text-purple-400' : 'text-purple-600'}`} size={20} />
                        <span className="font-semibold">Always exploring new technologies!</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
        </section>
    );
};

export default TechStackSection;