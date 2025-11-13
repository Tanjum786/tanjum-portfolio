import React, { useState, useEffect } from 'react';
import {
    Search, Grid, List,
    X, ExternalLink,
    Github,
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
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [filteredProjects, setFilteredProjects] = useState(mockProjects);
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

        // Sort by newest (default)
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

        setFilteredProjects(filtered);
    }, [searchQuery, activeFilter]);

    // Filter tabs
    const filterTabs = [
        { name: 'All', icon: '🌐', count: mockProjects.length },
        { name: 'Web App', icon: '💻', count: mockProjects.filter(p => p.category === 'Web App').length },
        { name: 'Featured', icon: '⭐', count: mockProjects.filter(p => p.featured).length },
    ];

    const clearSearch = () => setSearchQuery('');
    
    const clearAllFilters = () => {
        setSearchQuery('');
        setActiveFilter('All');
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
            {(searchQuery || activeFilter !== 'All') && (
                <button
                    onClick={clearAllFilters}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isDark
                            ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                            : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                        }`}
                >
                    Clear All Filters
                </button>
            )}
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

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                        <div className={`p-2 rounded-full pointer-events-none ${isDark ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                            <Sparkles size={16} />
                        </div>
                    </div>
                )}
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

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {filterTabs.map((filter) => (
                            <button
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border ${
                                    activeFilter === filter.name
                                        ? isDark
                                            ? 'bg-cyan-600 text-white border-cyan-500 shadow-lg'
                                            : 'bg-cyan-600 text-white border-cyan-500 shadow-lg'
                                        : isDark
                                            ? 'bg-gray-800/40 text-gray-300 border-gray-700/50 hover:border-cyan-500/50'
                                            : 'bg-white/70 text-gray-700 border-gray-200/50 hover:border-cyan-400/50'
                                }`}
                            >
                                <span className="text-lg">{filter.icon}</span>
                                <span>{filter.name}</span>
                                <span className={`px-2 py-0.5 rounded-full text-xs ${
                                    activeFilter === filter.name
                                        ? 'bg-white/20 text-white'
                                        : isDark
                                            ? 'bg-gray-700/50 text-gray-400'
                                            : 'bg-gray-100 text-gray-600'
                                }`}>
                                    {filter.count}
                                </span>
                            </button>
                        ))}

                        {/* Clear All Button */}
                        {(searchQuery || activeFilter !== 'All') && (
                            <button
                                onClick={clearAllFilters}
                                className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm border ${
                                    isDark
                                        ? 'bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30'
                                        : 'bg-red-100 text-red-600 border-red-200 hover:bg-red-200'
                                }`}
                            >
                                Clear All
                            </button>
                        )}
                    </div>

                    {/* Active Filters */}
                    {(searchQuery || activeFilter !== 'All') && (
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Active filters:
                            </span>
                            {activeFilter !== 'All' && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    isDark
                                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                        : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                                }`}>
                                    Category: {activeFilter}
                                </span>
                            )}
                            {searchQuery && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    isDark
                                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                                }`}>
                                    Search: "{searchQuery}"
                                </span>
                            )}
                        </div>
                    )}

                    {/* Results Counter */}
                    <div className={`text-sm font-semibold mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Showing {filteredProjects.length} of {mockProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                    </div>
                </div>
            </section>

            {/* Projects Grid/List */}
            <section className="relative z-10 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    {filteredProjects.length === 0 ? (
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