import React, { useState, useEffect } from 'react';
import { Moon, Sun, Code, Palette, Database, Settings, Zap, Star } from 'lucide-react';

const SkillsSection = () => {
    const [isDark, setIsDark] = useState(true);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCategory, setActiveCategory] = useState('Frontend');
    const [skillProgress, setSkillProgress] = useState({});

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

    // Animate skill progress bars
    useEffect(() => {
        const timer = setTimeout(() => {
            const progressData = {};
            skillCategories.forEach(category => {
                category.skills.forEach(skill => {
                    progressData[skill.name] = skill.level;
                });
            });
            setSkillProgress(progressData);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const skillCategories = [
        {
            name: 'Frontend',
            icon: <Code size={24} />,
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'React.js', level: 90, icon: '⚛️' },
                { name: 'JavaScript', level: 85, icon: '🟨' },
                { name: 'HTML5 & CSS3', level: 95, icon: '🎨' },
                { name: 'Tailwind CSS', level: 88, icon: '💨' },
                { name: 'Next.js', level: 75, icon: '▲' },
                { name: 'TypeScript', level: 70, icon: '🔷' }
            ]
        },
        {
            name: 'Backend',
            icon: <Database size={24} />,
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Node.js', level: 65, icon: '🟢' },
                { name: 'Express.js', level: 60, icon: '🚂' },
                { name: 'MongoDB', level: 55, icon: '🍃' },
                { name: 'REST APIs', level: 70, icon: '🔗' },
                { name: 'Firebase', level: 75, icon: '🔥' },
                { name: 'SQL', level: 50, icon: '🗃️' }
            ]
        },
        {
            name: 'Tools & Others',
            icon: <Settings size={24} />,
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'Git & GitHub', level: 90, icon: '🐙' },
                { name: 'HubSpot', level: 80, icon: '🧡' },
                { name: 'Figma', level: 70, icon: '🎨' },
                { name: 'VS Code', level: 95, icon: '💙' },
                { name: 'Chrome DevTools', level: 85, icon: '🔍' },
                { name: 'Responsive Design', level: 92, icon: '📱' }
            ]
        },
        {
            name: 'Soft Skills',
            icon: <Zap size={24} />,
            color: 'from-yellow-500 to-orange-500',
            skills: [
                { name: 'Problem Solving', level: 90, icon: '🧩' },
                { name: 'Team Collaboration', level: 85, icon: '🤝' },
                { name: 'Communication', level: 80, icon: '💬' },
                { name: 'Project Management', level: 75, icon: '📊' },
                { name: 'Learning Agility', level: 95, icon: '🚀' },
                { name: 'Attention to Detail', level: 88, icon: '🔍' }
            ]
        }
    ];

    const getSkillLevel = (level) => {
        if (level >= 90) return { text: 'Expert', color: 'text-green-400' };
        if (level >= 75) return { text: 'Advanced', color: 'text-blue-400' };
        if (level >= 60) return { text: 'Intermediate', color: 'text-yellow-400' };
        return { text: 'Beginner', color: 'text-orange-400' };
    };

    const currentCategory = skillCategories.find(cat => cat.name === activeCategory);

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
                            My Skills
                        </h2>
                    </div>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Technologies and tools I use to bring ideas to life. Always learning, always growing! 🚀
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {skillCategories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => setActiveCategory(category.name)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === category.name
                                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                                    : isDark
                                        ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                                        : 'bg-white/70 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category.icon}
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="max-w-5xl mx-auto">
                    <div className={`p-8 rounded-3xl border ${isDark
                        ? 'bg-gray-800/40 border-gray-700/50'
                        : 'bg-white/80 border-gray-200/50'
                        } backdrop-blur-xl shadow-lg mb-8`}>

                        {/* Category Header */}
                        <div className="flex items-center space-x-3 mb-8">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${currentCategory.color}`}>
                                {currentCategory.icon}
                            </div>
                            <div>
                                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                    {currentCategory.name}
                                </h3>
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {currentCategory.skills.length} skills in this category
                                </p>
                            </div>
                        </div>

                        {/* Skills List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {currentCategory.skills.map((skill, index) => (
                                <div key={skill.name} className="space-y-3">
                                    {/* Skill Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">{skill.icon}</span>
                                            <span className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                                {skill.name}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className={`text-sm font-medium ${getSkillLevel(skill.level).color}`}>
                                                {getSkillLevel(skill.level).text}
                                            </span>
                                            <span className={`text-sm font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className={`w-full h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <div
                                            className={`h-full rounded-full bg-gradient-to-r ${currentCategory.color} transition-all duration-1000 ease-out`}
                                            style={{
                                                width: `${skillProgress[skill.name] || 0}%`,
                                                transitionDelay: `${index * 100}ms`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={`p-6 rounded-2xl border ${isDark
                            ? 'bg-gray-800/40 border-gray-700/50'
                            : 'bg-white/80 border-gray-200/50'
                            } backdrop-blur-xl shadow-lg text-center`}>
                            <div className="text-3xl mb-3">🏆</div>
                            <div className={`text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent`}>
                                15+
                            </div>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Technologies Mastered
                            </p>
                        </div>

                        <div className={`p-6 rounded-2xl border ${isDark
                            ? 'bg-gray-800/40 border-gray-700/50'
                            : 'bg-white/80 border-gray-200/50'
                            } backdrop-blur-xl shadow-lg text-center`}>
                            <div className="text-3xl mb-3">📚</div>
                            <div className={`text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>
                                Always
                            </div>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Learning New Skills
                            </p>
                        </div>

                        <div className={`p-6 rounded-2xl border ${isDark
                            ? 'bg-gray-800/40 border-gray-700/50'
                            : 'bg-white/80 border-gray-200/50'
                            } backdrop-blur-xl shadow-lg text-center`}>
                            <div className="text-3xl mb-3">🚀</div>
                            <div className={`text-2xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}>
                                3+
                            </div>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Years of Experience
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30'
                        : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
                        } backdrop-blur-sm`}>
                        <Star className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
                        <span className="font-semibold">Continuously upgrading my toolkit to deliver the best solutions!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;