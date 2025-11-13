import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Code, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ExperienceTimeline = () => {
    const { isDark } = useTheme();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState('experience');
    const [visibleItems, setVisibleItems] = useState(new Set());

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

    // Animate timeline items
    useEffect(() => {
        const timer = setTimeout(() => {
            const items = activeTab === 'experience' ? experiences : education;
            items.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleItems(prev => new Set([...prev, `${activeTab}-${index}`]));
                }, index * 200);
            });
        }, 300);

        return () => clearTimeout(timer);
    }, [activeTab]);

    // Reset visible items when tab changes
    useEffect(() => {
        setVisibleItems(new Set());
    }, [activeTab]);

    const experiences = [
        {
            id: 1,
            title: 'Frontend HubSpot Developer (S1)',
            company: 'Niswey',
            location: 'Remote (Delhi-based)',
            period: '2021 - Present (3+ years)',
            type: 'Full-time',
            description: 'Developing web applications with React.js and Vue.js. Building HubSpot CMS websites using HubL templating. Creating custom HubSpot workflows, UI extensions, and integrating marketing automation modules to enhance client business processes.',
            technologies: ['React.js', 'Vue.js', 'HubL', 'Redux Toolkit', 'HubSpot CMS', 'Custom Workflows', 'UI Extensions', 'JavaScript', 'HTML5', 'CSS3'],
            achievements: [
                '🏆 Received Top Performer Award for outstanding contributions',
                'Developed web applications using React.js and Vue.js',
                'Built 8+ websites using HubL templating language',
                'Created custom HubSpot workflows and UI extensions',
                '🌟 Recognized by CEO for exceptional customer service',
                'Optimized website performance and SEO'
            ],
            icon: <Briefcase size={20} />,
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 2,
            title: 'Trainee',
            company: 'neoG Camp',
            location: 'Bangalore, India',
            period: 'January 2022 - June 2022 (6 months)',
            type: 'Training',
            description: 'Intensive bootcamp training focused on advanced React.js, Redux, and modern JavaScript frameworks. Built real-world projects and learned industry best practices.',
            technologies: ['React.js', 'Redux', 'JavaScript', 'Git', 'Project Building'],
            achievements: [
                'Completed 6-month intensive bootcamp',
                'Mastered React.js and Redux',
                'Built multiple full-stack projects',
                'Industry-ready development skills'
            ],
            icon: <Code size={20} />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            title: 'Web Development Training',
            company: 'NavGurukul',
            location: 'Bangalore, India',
            period: 'November 2020 - July 2022',
            type: 'Training',
            description: 'Comprehensive web development training covering HTML, CSS, JavaScript, React, and modern web technologies. Built strong foundation in frontend development.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'Web Development'],
            achievements: [
                'Mastered core web technologies',
                'Built multiple real-world projects',
                'Learned modern development practices',
                'Strong foundation in React.js and JavaScript'
            ],
            icon: <Code size={20} />,
            color: 'from-blue-500 to-cyan-500'
        }
    ];

    const education = [
        {
            id: 1,
            title: 'neoG Bootcamp',
            company: 'neoG Camp',
            location: 'Bangalore, India',
            period: 'January 2022 - July 2022',
            type: 'Bootcamp',
            description: 'Intensive bootcamp program focused on advanced React.js, Redux, and modern JavaScript development. Learned industry best practices and built production-ready applications.',
            technologies: ['React.js', 'Redux', 'JavaScript ES6+', 'Git', 'Full-stack Development'],
            achievements: [
                'Completed intensive 6-month bootcamp',
                'Mastered React.js and Redux',
                'Built real-world applications',
                'Industry-ready development skills'
            ],
            icon: <Award size={20} />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 2,
            title: 'Web Development Program',
            company: 'NavGurukul',
            location: 'Bangalore, India',
            period: 'November 2020 - July 2022',
            type: 'Professional Training',
            description: 'Comprehensive web development training covering HTML, CSS, JavaScript, React, and modern web technologies. Built strong foundation in frontend development.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'Web Development'],
            achievements: [
                'Mastered frontend web technologies',
                'Built multiple real-world projects',
                'Learned modern development practices',
                'Strong foundation in React.js and JavaScript'
            ],
            icon: <Code size={20} />,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 3,
            title: 'Bachelor of Commerce (BCom)',
            company: 'Rani Channamma University',
            location: 'Belagavi, Karnataka',
            period: '2018 - 2020',
            type: 'Degree',
            description: 'Bachelor of Commerce degree with focus on commerce fundamentals. Built strong analytical and business understanding.',
            technologies: ['Commerce', 'Accounting', 'Business Management', 'Economics'],
            achievements: [
                'Graduated with BCom degree',
                'Strong analytical skills',
                'Business fundamentals knowledge'
            ],
            icon: <GraduationCap size={20} />,
            color: 'from-indigo-500 to-blue-500'
        },
    ];

    const currentData = activeTab === 'experience' ? experiences : education;

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
                        My Journey
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        From learning the basics to building complex applications - here's my professional and educational journey! 📈
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12">
                    <div className={`flex p-2 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'experience'
                                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg'
                                    : isDark
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <Briefcase size={20} />
                            <span>Experience</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'education'
                                    ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg'
                                    : isDark
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            <GraduationCap size={20} />
                            <span>Education</span>
                        </button>
                    </div>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {currentData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`relative flex items-start space-x-6 transition-all duration-700 ${visibleItems.has(`${activeTab}-${index}`)
                                            ? 'opacity-100 translate-x-0'
                                            : 'opacity-0 translate-x-8'
                                        }`}
                                >
                                    {/* Timeline Icon */}
                                    <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg`}>
                                        {item.icon}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`flex-1 p-8 rounded-3xl border ${isDark
                                        ? 'bg-gray-800/40 border-gray-700/50'
                                        : 'bg-white/80 border-gray-200/50'
                                        } backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300`}>

                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                                        {item.title}
                                                    </h3>
                                                    <div className="flex items-center space-x-4 text-sm">
                                                        <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                                            {item.company}
                                                        </span>
                                                        <div className="flex items-center space-x-1">
                                                            <MapPin size={14} />
                                                            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                                                {item.location}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${isDark
                                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                                                        }`}>
                                                        {item.type}
                                                    </div>
                                                    <div className="flex items-center space-x-1 mt-2 text-sm">
                                                        <Calendar size={14} />
                                                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                                                            {item.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            {item.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="mb-6">
                                            <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                Technologies & Skills:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {item.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className={`px-3 py-1 rounded-full text-sm font-medium ${isDark
                                                            ? 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                                                            : 'bg-gray-100 text-gray-700 border border-gray-200'
                                                            }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievements */}
                                        <div>
                                            <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                Key Achievements:
                                            </h4>
                                            <ul className="space-y-2">
                                                {item.achievements.map((achievement, achIndex) => (
                                                    <li key={achIndex} className="flex items-start space-x-2">
                                                        <span className={`text-sm mt-1 ${isDark ? 'text-green-400' : 'text-green-500'}`}>•</span>
                                                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30'
                        : 'bg-gradient-to-r from-cyan-100 to-emerald-100 border border-cyan-200'
                        } backdrop-blur-sm`}>
                        <ExternalLink className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={20} />
                        <span className="font-semibold">Ready to add your project to my journey!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;