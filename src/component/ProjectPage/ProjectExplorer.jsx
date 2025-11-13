import React, { useState, useEffect } from 'react';
import {
    Search, Filter, Grid, List,
    X, Code, Globe, Star,
    Calendar, Eye, Heart, ExternalLink,
    Github, Clock, Bookmark, MoreHorizontal,
    Sparkles, Info
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

// Real project data
const mockProjects = [
    {
        id: 1,
        title: "FriendlyGalaxy - Social Media App",
        description: "Social media platform where users can create accounts, follow others, share posts, and engage with content. Built with React.js, Redux Toolkit, and Chakra UI.",
        image: "🌟",
        category: "Web App",
        technologies: ["React.js", "Redux Toolkit", "Chakra UI", "React Router", "Mockbee"],
        status: "Completed",
        likes: 245,
        views: 1200,
        date: "2023-03-15",
        featured: true,
        liveUrl: "https://friendly-galaxy.vercel.app/",
        githubUrl: "https://github.com/Tanjum786/FriendlyGalaxy",
        features: [
            "User authentication and profiles",
            "Follow/unfollow functionality",
            "Create and share posts",
            "Like and comment on posts",
            "User feed with latest content",
            "Responsive design"
        ]
    },
    {
        id: 2,
        title: "E-Galaxy Store - E-commerce Platform",
        description: "Modern e-commerce website for electronics shopping. Features product browsing, cart management, wishlist, and secure checkout with React.js.",
        image: "🛒",
        category: "Web App",
        technologies: ["React.js", "Context API", "React Router", "Mockbee", "CSS"],
        status: "Completed",
        likes: 320,
        views: 1800,
        date: "2023-01-10",
        featured: true,
        liveUrl: "https://e-galaxy-store.vercel.app/",
        githubUrl: "https://github.com/Tanjum786/E-Galaxy-store",
        features: [
            "Product catalog with categories",
            "Shopping cart management",
            "Wishlist functionality",
            "Product search and filters",
            "Secure checkout process",
            "User authentication"
        ]
    },
    {
        id: 3,
        title: "GalaxyPlay - Video Library",
        description: "Video library and music app featuring Hindi songs. Users can like videos, manage watch later, create playlists, and track watch history.",
        image: "🎵",
        category: "Web App",
        technologies: ["React.js", "React Router", "Context API", "Mockbee", "CSS"],
        status: "Completed",
        likes: 203,
        views: 1100,
        date: "2023-02-20",
        featured: true,
        liveUrl: "https://galaxy-play-it.vercel.app/",
        githubUrl: "https://github.com/Tanjum786/GalaxyPlay",
        features: [
            "Video library with categories",
            "Like and save videos",
            "Watch later functionality",
            "Create custom playlists",
            "Watch history tracking",
            "Responsive video player"
        ]
    },
    {
        id: 4,
        title: "Galaxy-Notes - Note Taking App",
        description: "A powerful note-taking application built with React.js. Features include creating, editing, deleting notes with labels, archive functionality, and search capabilities.",
        image: "📝",
        category: "Web App",
        technologies: ["React.js", "React Router", "Context API", "Mockbee", "CSS"],
        status: "Completed",
        likes: 180,
        views: 950,
        date: "2023-04-15",
        featured: true,
        liveUrl: "https://galaxy-notes-app.vercel.app/",
        githubUrl: "https://github.com/Tanjum786/Galaxy-Notes",
        features: [
            "Create and edit notes",
            "Label and categorize notes",
            "Archive functionality",
            "Search notes by title/content",
            "Color-coded notes",
            "Responsive interface"
        ]
    }
];

const ProjectExplorer = () => {
    const { isDark } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [viewMode, setViewMode] = useState('grid');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTechs, setSelectedTechs] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState([]);
    const [dateRange, setDateRange] = useState('all');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [filteredProjects, setFilteredProjects] = useState(mockProjects);
    const [likedProjects, setLikedProjects] = useState(new Set());
    const [bookmarkedProjects, setBookmarkedProjects] = useState(new Set());
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

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

    // Filter and sort projects
    useEffect(() => {
        let filtered = [...mockProjects];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Apply category filter
        if (activeFilter !== 'All') {
            if (activeFilter === 'Featured') {
                filtered = filtered.filter(project => project.featured);
            } else {
                filtered = filtered.filter(project => project.category === activeFilter);
            }
        }

        // Apply technology filter
        if (selectedTechs.length > 0) {
            filtered = filtered.filter(project =>
                selectedTechs.some(tech => project.technologies.includes(tech))
            );
        }

        // Apply status filter
        if (selectedStatus.length > 0) {
            filtered = filtered.filter(project => selectedStatus.includes(project.status));
        }

        // Apply date range filter
        if (dateRange !== 'all') {
            const now = new Date();
            const cutoffDate = new Date();

            switch (dateRange) {
                case '6months':
                    cutoffDate.setMonth(now.getMonth() - 6);
                    break;
                case '1year':
                    cutoffDate.setFullYear(now.getFullYear() - 1);
                    break;
                case '2023':
                    cutoffDate.setFullYear(2023, 0, 1);
                    filtered = filtered.filter(project => {
                        const projectDate = new Date(project.date);
                        return projectDate.getFullYear() === 2023;
                    });
                    break;
                case '2022':
                    cutoffDate.setFullYear(2022, 0, 1);
                    filtered = filtered.filter(project => {
                        const projectDate = new Date(project.date);
                        return projectDate.getFullYear() === 2022;
                    });
                    break;
            }

            if (dateRange === '6months' || dateRange === '1year') {
                filtered = filtered.filter(project => new Date(project.date) >= cutoffDate);
            }
        }

        // Sort by newest (default)
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        setFilteredProjects(filtered);
    }, [searchQuery, activeFilter, selectedTechs, selectedStatus, dateRange]);

    // Filter categories with dynamic counts
    const filterTabs = [
        {
            name: 'All',
            icon: <Globe size={16} />,
            count: mockProjects.length,
            color: 'text-cyan-400'
        },
        {
            name: 'Web App',
            icon: <Code size={16} />,
            count: mockProjects.filter(p => p.category === 'Web App').length,
            color: 'text-blue-400'
        },
        {
            name: 'Featured',
            icon: <Star size={16} />,
            count: mockProjects.filter(p => p.featured).length,
            color: 'text-yellow-400'
        },
    ];

    // All available technologies
    const allTechnologies = [...new Set(mockProjects.flatMap(p => p.technologies))];
    const allStatuses = [...new Set(mockProjects.map(p => p.status))];

    const clearSearch = () => setSearchQuery('');
    const clearAllFilters = () => {
        setSearchQuery('');
        setActiveFilter('All');
        setSelectedTechs([]);
        setSelectedStatus([]);
        setDateRange('all');
    };

    const toggleLike = (projectId) => {
        const newLikedProjects = new Set(likedProjects);
        if (newLikedProjects.has(projectId)) {
            newLikedProjects.delete(projectId);
        } else {
            newLikedProjects.add(projectId);
        }
        setLikedProjects(newLikedProjects);
    };

    const toggleBookmark = (projectId) => {
        const newBookmarkedProjects = new Set(bookmarkedProjects);
        if (newBookmarkedProjects.has(projectId)) {
            newBookmarkedProjects.delete(projectId);
        } else {
            newBookmarkedProjects.add(projectId);
        }
        setBookmarkedProjects(newBookmarkedProjects);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed':
                return isDark ? 'text-green-400 bg-green-500/20' : 'text-green-600 bg-green-100';
            case 'In Progress':
                return isDark ? 'text-yellow-400 bg-yellow-500/20' : 'text-yellow-600 bg-yellow-100';
            case 'Coming Soon':
                return isDark ? 'text-blue-400 bg-blue-500/20' : 'text-blue-600 bg-blue-100';
            default:
                return isDark ? 'text-gray-400 bg-gray-500/20' : 'text-gray-600 bg-gray-100';
        }
    };

    const LoadingState = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`rounded-2xl p-6 animate-pulse ${isDark ? 'bg-gray-800/40' : 'bg-gray-100'
                    }`}>
                    <div className={`h-40 rounded-xl mb-4 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                        }`} />
                    <div className={`h-4 rounded mb-3 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                        }`} />
                    <div className={`h-3 rounded mb-2 w-3/4 ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                        }`} />
                    <div className="flex space-x-2 mt-4">
                        {[...Array(3)].map((_, j) => (
                            <div key={j} className={`h-6 w-16 rounded ${isDark ? 'bg-gray-700/50' : 'bg-gray-200'
                                }`} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    const EmptyState = () => (
        <div className="text-center py-16">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'
                }`}>
                <Search className={`w-8 h-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                No projects found
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                Try adjusting your filters or search query to find what you're looking for.
            </p>
            <button
                onClick={clearAllFilters}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isDark
                        ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                        : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                    }`}
            >
                Clear All Filters
            </button>
        </div>
    );

    const ProjectCard = ({ project }) => (
        <div className={`group rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isDark
                ? 'bg-gray-800/40 border-gray-700/50 hover:border-cyan-500/50'
                : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
            }`}>
            {/* Project Image/Icon */}
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 to-emerald-500/20">
                <div className="w-full h-48 flex items-center justify-center pointer-events-none">
                    <span className="text-7xl transition-transform duration-500 group-hover:scale-110">
                        {project.image}
                    </span>
                </div>
                
                {/* Hover Overlay - always visible for pointer events but transparent */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-4">
                    {/* Info Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal(project);
                        }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer opacity-0 group-hover:opacity-100"
                        title="View Details"
                    >
                        <Info className="text-white" size={20} />
                    </button>

                    {/* Github Button - always show for consistent spacing */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (project.githubUrl) {
                                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                            }
                        }}
                        className={`p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100 ${
                            project.githubUrl ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                        }`}
                        title={project.githubUrl ? "View on GitHub" : "No GitHub link"}
                        disabled={!project.githubUrl}
                    >
                        <Github className="text-white" size={20} />
                    </button>

                    {/* Live Demo Button - always show for consistent spacing */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl) {
                                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                        }}
                        className={`p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100 ${
                            project.liveUrl ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                        }`}
                        title={project.liveUrl ? "View Live Demo" : "No live demo"}
                        disabled={!project.liveUrl}
                    >
                        <ExternalLink className="text-white" size={20} />
                    </button>
                </div>

                {/* Top Right Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    {project.featured && (
                        <div className={`p-2 rounded-full pointer-events-none ${isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                            <Sparkles size={16} />
                        </div>
                    )}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleBookmark(project.id);
                        }}
                        className={`p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 ${bookmarkedProjects.has(project.id)
                                ? 'bg-cyan-500 text-white'
                                : isDark ? 'bg-gray-800/80 text-gray-300 hover:text-purple-400' : 'bg-white/80 text-gray-600 hover:text-purple-600'
                            }`}
                    >
                        <Bookmark size={16} />
                    </button>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className={`font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {project.title}
                    </h3>
                    <div className={`px-2 py-1 rounded-lg text-xs font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                    </div>
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className={`px-2 py-1 rounded-lg text-xs font-medium ${isDark
                                    ? 'bg-gray-700/50 text-gray-300'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            +{project.technologies.length - 3} more
                        </span>
                    )}
                </div>

            </div>
        </div>
    );

    const ProjectListItem = ({ project }) => (
        <div className={`group flex items-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:shadow-lg ${isDark
                ? 'bg-gray-800/40 border-gray-700/50 hover:border-cyan-500/50'
                : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
            }`}>
            {/* Project Image/Icon */}
            <div className="relative w-24 h-24 rounded-xl overflow-hidden mr-6 flex-shrink-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                <span className="text-4xl pointer-events-none">
                    {project.image}
                </span>
                
                {/* Hover Overlay - always visible for pointer events */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-2">
                    {/* Info Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            openModal(project);
                        }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer opacity-0 group-hover:opacity-100"
                        title="View Details"
                    >
                        <Info className="text-white" size={16} />
                    </button>

                    {/* Github Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (project.githubUrl) {
                                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                            }
                        }}
                        className={`p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100 ${
                            project.githubUrl ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                        }`}
                        title={project.githubUrl ? "View on GitHub" : "No GitHub link"}
                        disabled={!project.githubUrl}
                    >
                        <Github className="text-white" size={16} />
                    </button>

                    {/* Live Demo Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (project.liveUrl) {
                                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                            }
                        }}
                        className={`p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100 ${
                            project.liveUrl ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                        }`}
                        title={project.liveUrl ? "View Live Demo" : "No live demo"}
                        disabled={!project.liveUrl}
                    >
                        <ExternalLink className="text-white" size={16} />
                    </button>
                </div>

                {project.featured && (
                    <div className="absolute top-2 right-2 z-10 pointer-events-none">
                        <Sparkles className="text-yellow-400" size={16} />
                    </div>
                )}
            </div>

            {/* Project Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                    <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {project.title}
                    </h3>
                    <div className={`px-3 py-1 rounded-lg text-sm font-semibold ml-4 ${getStatusColor(project.status)}`}>
                        {project.status}
                    </div>
                </div>

                <p className={`text-sm mb-3 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className={`px-2 py-1 rounded text-xs font-medium ${isDark
                                    ? 'bg-gray-700/50 text-gray-300'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );

    return (
        <div className={`min-h-screen transition-all duration-500 ${isDark
                ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800'
                : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50'
            }`}>
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className={`absolute w-[300px] h-[300px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-cyan-600/5 via-teal-600/5 to-emerald-500/5'
                            : 'bg-gradient-to-r from-cyan-300/10 via-teal-300/10 to-emerald-300/10'
                        }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                        top: '10%',
                        left: '80%',
                    }}
                />
                <div
                    className={`absolute w-[200px] h-[200px] rounded-full blur-3xl animate-pulse ${isDark
                            ? 'bg-gradient-to-r from-emerald-600/5 via-cyan-600/5 to-blue-500/5'
                            : 'bg-gradient-to-r from-emerald-300/10 via-cyan-300/10 to-blue-300/10'
                        }`}
                    style={{
                        transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.015}px)`,
                        top: '60%',
                        left: '10%',
                    }}
                />
            </div>

            {/* Controls Section */}
            <section className="relative z-10 py-8">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'
                                }`}>
                                Project Explorer
                            </h2>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Discover and explore my work
                            </p>
                        </div>

                        {/* View Toggle */}
                        <div className={`flex rounded-xl p-1 backdrop-blur-sm border ${isDark
                                ? 'bg-gray-800/40 border-gray-700/50'
                                : 'bg-white/70 border-gray-200/50'
                            }`}>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-lg transition-all duration-200 ${viewMode === 'grid'
                                        ? 'bg-cyan-600 text-white shadow-lg'
                                        : isDark
                                            ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                                    }`}
                            >
                                <Grid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-lg transition-all duration-200 ${viewMode === 'list'
                                        ? 'bg-cyan-600 text-white shadow-lg'
                                        : isDark
                                            ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                                    }`}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <div                             className={`relative flex items-center backdrop-blur-sm border rounded-2xl overflow-hidden ${isDark
                                ? 'bg-gray-800/40 border-gray-700/50 focus-within:border-cyan-500/50'
                                : 'bg-white/70 border-gray-200/50 focus-within:border-cyan-300/50'
                            } transition-all duration-300`}>
                            <div className="absolute left-4">
                                <Search className={`${isDark ? 'text-gray-400' : 'text-gray-500'
                                    }`} size={20} />
                            </div>

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search projects by name, technology, or description..."
                                className={`w-full pl-12 pr-12 py-4 bg-transparent outline-none text-lg placeholder:text-gray-500 ${isDark ? 'text-white' : 'text-gray-900'
                                    }`}
                            />

                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className={`absolute right-4 p-1 rounded-full transition-all duration-200 ${isDark
                                            ? 'text-gray-400 hover:text-red-400 hover:bg-red-500/20'
                                            : 'text-gray-500 hover:text-red-600 hover:bg-red-100'
                                        }`}
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Search Results Counter */}
                        {searchQuery && (
                            <div className="absolute top-full left-0 mt-2">
                                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark
                                        ? 'bg-gray-800/60 text-gray-300 border border-gray-700/50'
                                        : 'bg-white/80 text-gray-600 border border-gray-200/50'
                                    } backdrop-blur-sm`}>
                                    Found {filteredProjects.length} results for "{searchQuery}"
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Filter Tabs & Controls Row */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {filterTabs.map((filter) => (
                                <button
                                    key={filter.name}
                                    onClick={() => setActiveFilter(filter.name)}
                                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border ${activeFilter === filter.name
                            ? isDark
                                ? 'bg-cyan-600/80 text-white border-cyan-500/50 shadow-lg'
                                : 'bg-cyan-600/90 text-white border-cyan-400/50 shadow-lg'
                                            : isDark
                                                ? 'bg-gray-800/40 text-gray-300 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/60'
                                                : 'bg-white/70 text-gray-700 border-gray-200/50 hover:border-gray-300/50 hover:bg-white/80'
                                        }`}
                                >
                                    <span className={activeFilter === filter.name ? 'text-white' : filter.color}>
                                        {filter.icon}
                                    </span>
                                    <span className="font-semibold">{filter.name}</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${activeFilter === filter.name
                                            ? 'bg-white/20 text-white'
                                            : isDark
                                                ? 'bg-gray-700/50 text-gray-400'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        {filter.count}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Advanced Controls */}
                        <div className="flex items-center space-x-3">
                            {/* Advanced Filter Toggle */}
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className={`flex items-center space-x-2 px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-sm border ${isFilterOpen
                        ? isDark
                            ? 'bg-cyan-600/80 text-white border-cyan-500/50'
                            : 'bg-cyan-600/90 text-white border-cyan-400/50'
                                        : isDark
                                            ? 'bg-gray-800/40 text-gray-300 border-gray-700/50 hover:border-gray-600/50'
                                            : 'bg-white/70 text-gray-700 border-gray-200/50 hover:border-gray-300/50'
                                    }`}
                            >
                                <Filter size={16} />
                                <span className="font-semibold lg:inline hidden">Filters</span>
                            </button>

                            {/* Clear All Button */}
                            {(searchQuery || activeFilter !== 'All' || selectedTechs.length > 0 || selectedStatus.length > 0 || dateRange !== 'all') && (
                                <button
                                    onClick={clearAllFilters}
                                    className={`px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${isDark
                                            ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                                            : 'bg-red-100 text-red-600 border border-red-200 hover:bg-red-200'
                                        } backdrop-blur-sm font-semibold`}
                                >
                                    Clear All
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Advanced Filters Panel */}
                    {isFilterOpen && (
                        <div className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 mb-6 ${isDark
                                ? 'bg-gray-800/40 border-gray-700/50'
                                : 'bg-white/70 border-gray-200/50'
                            }`}>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Technology Filter */}
                                <div>
                                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'
                                        }`}>
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {allTechnologies.map((tech) => (
                                            <button
                                                key={tech}
                                                onClick={() => {
                                                    if (selectedTechs.includes(tech)) {
                                                        setSelectedTechs(selectedTechs.filter(t => t !== tech));
                                                    } else {
                                                        setSelectedTechs([...selectedTechs, tech]);
                                                    }
                                                }}
                                                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border ${selectedTechs.includes(tech)
                                                        ? isDark
                                                            ? 'bg-cyan-600/20 text-cyan-400 border-cyan-500/30'
                                                            : 'bg-cyan-100 text-cyan-700 border-cyan-300'
                                                        : isDark
                                                            ? 'bg-gray-700/50 text-gray-300 border-gray-600/50 hover:bg-cyan-600/20 hover:border-cyan-500/30'
                                                            : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-cyan-100 hover:border-cyan-300'
                                                    }`}
                                            >
                                                {tech}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Status Filter */}
                                <div>
                                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'
                                        }`}>
                                        Status
                                    </h4>
                                    <div className="space-y-2">
                                        {allStatuses.map((status) => (
                                            <label key={status} className="flex items-center space-x-3 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedStatus.includes(status)}
                                                    onChange={() => {
                                                        if (selectedStatus.includes(status)) {
                                                            setSelectedStatus(selectedStatus.filter(s => s !== status));
                                                        } else {
                                                            setSelectedStatus([...selectedStatus, status]);
                                                        }
                                                    }}
                                                    className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
                                                />
                                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'
                                                    }`}>
                                                    {status}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Date Range */}
                                <div>
                                    <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'
                                        }`}>
                                        Date Range
                                    </h4>
                                    <select
                                        value={dateRange}
                                        onChange={(e) => setDateRange(e.target.value)}
                                        className={`w-full p-2 rounded-lg border ${isDark
                                                ? 'bg-gray-700 border-gray-600 text-gray-200'
                                                : 'bg-white border-gray-300 text-gray-700'
                                            }`}
                                    >
                                        <option value="all">All Time</option>
                                        <option value="6months">Last 6 Months</option>
                                        <option value="1year">Last Year</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Active Filters Summary */}
                    {(searchQuery || activeFilter !== 'All' || selectedTechs.length > 0 || selectedStatus.length > 0 || dateRange !== 'all') && (
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Active filters:
                            </span>

                            {searchQuery && (
                                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${isDark
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                                    }`}>
                                    <Search size={12} />
                                    <span>Search: "{searchQuery}"</span>
                                    <button onClick={clearSearch}>
                                        <X size={12} />
                                    </button>
                                </div>
                            )}

                            {activeFilter !== 'All' && (
                                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${isDark
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                                    }`}>
                                    <Filter size={12} />
                                    <span>Category: {activeFilter}</span>
                                    <button onClick={() => setActiveFilter('All')}>
                                        <X size={12} />
                                    </button>
                                </div>
                            )}

                            {selectedTechs.map((tech) => (
                                <div key={tech} className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${isDark
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'bg-green-100 text-green-700 border border-green-200'
                                    }`}>
                                    <Code size={12} />
                                    <span>{tech}</span>
                                    <button onClick={() => setSelectedTechs(selectedTechs.filter(t => t !== tech))}>
                                        <X size={12} />
                                    </button>
                                </div>
                            ))}

                            {selectedStatus.map((status) => (
                                <div key={status} className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${isDark
                                        ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                                        : 'bg-orange-100 text-orange-700 border border-orange-200'
                                    }`}>
                                    <Clock size={12} />
                                    <span>{status}</span>
                                    <button onClick={() => setSelectedStatus(selectedStatus.filter(s => s !== status))}>
                                        <X size={12} />
                                    </button>
                                </div>
                            ))}

                            {dateRange !== 'all' && (
                                <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs ${isDark
                                        ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                                        : 'bg-pink-100 text-pink-700 border border-pink-200'
                                    }`}>
                                    <Calendar size={12} />
                                    <span>Date: {dateRange === '6months' ? 'Last 6 Months' : dateRange === '1year' ? 'Last Year' : dateRange === 'all' ? 'All Time' : dateRange}</span>
                                    <button onClick={() => setDateRange('all')}>
                                        <X size={12} />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Results Summary */}
                    <div className="flex items-center justify-between mb-6">
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                            Showing {filteredProjects.length} of {mockProjects.length} projects
                        </div>

                        {filteredProjects.length > 0 && (
                            <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'
                                }`}>
                                Latest projects first
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="relative z-10 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    {isLoading ? (
                        <LoadingState />
                    ) : filteredProjects.length === 0 ? (
                        <EmptyState />
                    ) : viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredProjects.map((project) => (
                                <ProjectListItem key={project.id} project={project} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Click outside to close dropdowns */}
            {isFilterOpen && (
                <div
                    className="fixed inset-0 z-10"
                    onClick={() => {
                        setIsFilterOpen(false);
                    }}
                />
            )}

            {/* Project Modal */}
            {isModalOpen && selectedProject && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
                    onClick={closeModal}
                >
                    <div
                        className={`rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border ${isDark
                            ? 'bg-gray-900 text-white border-gray-700'
                            : 'bg-white text-gray-900 border-gray-200'
                            }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors ${isDark
                                ? 'bg-red-500 hover:bg-red-600 text-white'
                                : 'bg-red-500 hover:bg-red-600 text-white'
                                }`}
                        >
                            <X size={18} />
                        </button>

                        {/* Banner */}
                        <div className="relative">
                            <div
                                className={`h-56 md:h-64 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 relative overflow-hidden rounded-t-2xl`}
                            >
                                {/* Project Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-7xl md:text-9xl opacity-90 filter drop-shadow-2xl">
                                        {selectedProject.image}
                                    </div>
                                </div>

                                {/* Project Title Overlay */}
                                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${isDark ? 'from-black/90' : 'from-white/95'} to-transparent p-4 md:p-6`}>
                                    <h1 className={`text-2xl md:text-3xl font-bold mb-1 md:mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {selectedProject.title}
                                    </h1>
                                    <p className={`text-sm md:text-base ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
                                        {selectedProject.date}
                                    </p>
                                </div>

                                {/* Category & Status Badges */}
                                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                                    <span className={`backdrop-blur-sm border px-3 py-1 rounded-full text-xs font-bold ${isDark
                                        ? 'bg-black/50 border-white/30 text-white'
                                        : 'bg-white/50 border-gray-700/30 text-gray-900'
                                        }`}>
                                        {selectedProject.category.toUpperCase()}
                                    </span>
                                    <span className={`backdrop-blur-sm border px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(selectedProject.status)}`}>
                                        {selectedProject.status.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className={`p-6 md:p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                {selectedProject.liveUrl && (
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 min-w-[140px] bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                                    >
                                        <ExternalLink size={18} />
                                        <span className="text-sm md:text-base">Live Project</span>
                                    </a>
                                )}

                                {selectedProject.githubUrl && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isDark
                                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                                            : 'bg-gray-700 hover:bg-gray-600 text-white'
                                            }`}
                                    >
                                        <Github size={18} />
                                        <span className="text-sm md:text-base">View Source</span>
                                    </a>
                                )}
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className={`font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>About</h3>
                                <p className={`leading-relaxed text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {selectedProject.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h3 className={`font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, index) => (
                                        <div key={index} className={`px-3 py-2 rounded-lg text-xs md:text-sm font-semibold border ${isDark
                                            ? 'bg-gray-800 text-gray-300 border-gray-700'
                                            : 'bg-gray-100 text-gray-700 border-gray-200'
                                            }`}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className={`font-bold text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Features</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {selectedProject.features.map((feature, index) => (
                                        <div key={index} className={`flex items-start text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                            <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectExplorer;