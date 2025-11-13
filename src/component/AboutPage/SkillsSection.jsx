import React, { useState, useEffect } from 'react';
import { Code, Palette, Database, Settings, Zap, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SkillsSection = () => {
    const { isDark } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeCategory, setActiveCategory] = useState('Frontend Development');
    const [skillProgress, setSkillProgress] = useState({});

    const skillCategories = [
        {
            name: 'Frontend Development',
            icon: <Code size={24} />,
            color: 'from-blue-500 to-cyan-500',
            skills: [
                { name: 'React.js', level: 92, icon: '⚛️' },
                { name: 'Vue.js', level: 85, icon: '💚' },
                { name: 'Redux Toolkit', level: 88, icon: '🔄' },
                { name: 'JavaScript ES6+', level: 90, icon: '🟨' },
                { name: 'HTML5 & CSS3', level: 95, icon: '🎨' },
                { name: 'Responsive Design', level: 95, icon: '📱' },
                { name: 'Tailwind CSS', level: 85, icon: '💨' }
            ]
        },
        {
            name: 'HubSpot Development',
            icon: <Settings size={24} />,
            color: 'from-orange-500 to-red-500',
            skills: [
                { name: 'HubL Language', level: 92, icon: '📝' },
                { name: 'HubSpot CMS', level: 92, icon: '🧡' },
                { name: 'HubL Templates', level: 90, icon: '📄' },
                { name: 'Custom Modules', level: 88, icon: '🧩' },
                { name: 'Custom Workflows', level: 85, icon: '⚙️' },
                { name: 'UI Extensions', level: 82, icon: '🔌' },
                { name: 'HubSpot CRM', level: 85, icon: '📊' }
            ]
        },
        {
            name: 'Tools & Design',
            icon: <Palette size={24} />,
            color: 'from-purple-500 to-pink-500',
            skills: [
                { name: 'Git & GitHub', level: 90, icon: '🐙' },
                { name: 'VS Code', level: 95, icon: '💙' },
                { name: 'Figma', level: 75, icon: '🎨' },
                { name: 'Chrome DevTools', level: 90, icon: '🔍' },
                { name: 'Postman', level: 80, icon: '📮' },
                { name: 'NPM/Yarn', level: 85, icon: '📦' }
            ]
        },
        {
            name: 'Soft Skills',
            icon: <Zap size={24} />,
            color: 'from-green-500 to-emerald-500',
            skills: [
                { name: 'Problem Solving', level: 95, icon: '🧩' },
                { name: 'Team Collaboration', level: 90, icon: '🤝' },
                { name: 'Adaptability', level: 92, icon: '🔄' },
                { name: 'Learning Agility', level: 95, icon: '🚀' },
                { name: 'Attention to Detail', level: 90, icon: '🔍' },
                { name: 'Communication', level: 88, icon: '💬' }
            ]
        }
    ];

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
    }, [skillCategories]);

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
                        My Skills
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Technologies and tools I use to bring ideas to life. Always learning, always growing.
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
                        ? 'bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30'
                        : 'bg-gradient-to-r from-cyan-100 to-emerald-100 border border-cyan-200'
                        } backdrop-blur-sm`}>
                        <Star className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={20} />
                        <span className="font-semibold">Continuously upgrading my toolkit to deliver the best solutions!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;