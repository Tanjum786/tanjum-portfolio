import React, { useState, useEffect } from 'react';
import { Moon, Sun, Briefcase, GraduationCap, Code, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceTimeline = () => {
    const [isDark, setIsDark] = useState(true);
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
            title: 'Frontend Developer',
            company: 'Tech Solutions Inc.',
            location: 'Remote',
            period: '2022 - Present',
            type: 'Full-time',
            description: 'Developing modern web applications using React.js and implementing responsive designs. Leading frontend development for multiple client projects.',
            technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'HubSpot', 'Git'],
            achievements: [
                'Improved application performance by 40%',
                'Led a team of 3 junior developers',
                'Delivered 15+ successful projects'
            ],
            icon: <Briefcase size={20} />,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            title: 'Junior Frontend Developer',
            company: 'Digital Agency Pro',
            location: 'Hybrid',
            period: '2021 - 2022',
            type: 'Full-time',
            description: 'Worked on client websites and web applications. Focused on creating pixel-perfect designs and implementing interactive user interfaces.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery'],
            achievements: [
                'Completed 25+ client projects',
                'Learned React.js and modern frameworks',
                'Improved code quality and best practices'
            ],
            icon: <Code size={20} />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 3,
            title: 'Web Development Intern',
            company: 'StartupHub',
            location: 'On-site',
            period: '2021 (6 months)',
            type: 'Internship',
            description: 'First professional experience in web development. Learned industry standards and worked on real-world projects under senior developer guidance.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Figma'],
            achievements: [
                'Successfully completed internship program',
                'Built 5+ landing pages',
                'Learned version control with Git'
            ],
            icon: <Award size={20} />,
            color: 'from-green-500 to-emerald-500'
        }
    ];

    const education = [
        {
            id: 1,
            title: 'Bachelor of Technology (B.Tech)',
            company: 'XYZ University',
            location: 'India',
            period: '2020 - 2024',
            type: 'Degree',
            description: 'Computer Science Engineering with specialization in Web Development and Frontend Technologies. Graduated with distinction.',
            technologies: ['Data Structures', 'Algorithms', 'Database Management', 'Software Engineering'],
            achievements: [
                'Graduated with 8.5+ CGPA',
                'Won 3 coding competitions',
                'Led college tech fest development team'
            ],
            icon: <GraduationCap size={20} />,
            color: 'from-indigo-500 to-blue-500'
        },
        {
            id: 2,
            title: 'React.js Certification',
            company: 'Online Learning Platform',
            location: 'Online',
            period: '2022',
            type: 'Certification',
            description: 'Comprehensive React.js course covering hooks, state management, and modern React patterns. Built multiple projects during the course.',
            technologies: ['React.js', 'Hooks', 'Context API', 'Redux', 'Jest'],
            achievements: [
                'Completed 50+ hours of coursework',
                'Built 5 real-world projects',
                'Achieved 95% course completion score'
            ],
            icon: <Award size={20} />,
            color: 'from-cyan-500 to-blue-500'
        },
        {
            id: 3,
            title: 'JavaScript Fundamentals',
            company: 'Coding Bootcamp',
            location: 'Online',
            period: '2021',
            type: 'Course',
            description: 'Intensive JavaScript course covering ES6+, DOM manipulation, async programming, and modern JavaScript development practices.',
            technologies: ['JavaScript ES6+', 'DOM APIs', 'Fetch API', 'Async/Await', 'NPM'],
            achievements: [
                'Mastered core JavaScript concepts',
                'Built interactive web applications',
                'Learned modern development workflow'
            ],
            icon: <Code size={20} />,
            color: 'from-yellow-500 to-orange-500'
        }
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
                            My Journey
                        </h2>
                    </div>

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
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
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
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
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
                                                        <span className={`font-semibold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
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
                                                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${isDark
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
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30'
                        : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
                        } backdrop-blur-sm`}>
                        <ExternalLink className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
                        <span className="font-semibold">Ready to add your project to my journey!</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;