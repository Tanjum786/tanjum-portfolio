import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Code, X, Info, ChevronDown, ChevronUp, Filter, Star, Eye, Heart, Zap, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const { isDark } = useTheme();
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  // Function to redirect to projects page
  const redirectToProjectsPage = () => {
    navigate('/projects');
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

  const projects = [
    {
      id: 1,
      title: 'FriendlyGalaxy - Social Media App',
      shortDescription: 'Social media platform where users can create accounts, follow others, share posts, and engage with content. Built with React.js and Redux Toolkit.',
      fullDescription: 'FriendlyGalaxy is a full-featured social media application built with React.js and Redux Toolkit. Users can create accounts, follow other users, post updates, like and comment on posts, bookmark content, and manage their profiles. Features a modern UI with Chakra UI and includes authentication, profile management, explore feed, and bookmarking functionality.',
      image: '🌟',
      category: 'Web App',
      type: 'Frontend',
      technologies: ['React.js', 'Redux Toolkit', 'Chakra UI', 'React Router', 'Mockbee', 'CSS'],
      features: [
        'User Authentication (Login, Signup, Logout)',
        'Create, Edit & Delete Posts',
        'Like & Comment on Posts',
        'Follow/Unfollow Users',
        'Bookmark Posts',
        'User Profile Management',
        'Explore Feed with Latest & Trending Posts',
        'Guest User Login'
      ],
      date: 'March 2023',
      github: 'https://github.com/Tanjum786/FriendlyGalaxy',
      live: 'https://friendly-galaxy.vercel.app/',
      featured: true,
      likes: 124,
      views: 2840,
      status: 'Completed',
      gradient: 'from-purple-600 via-pink-600 to-rose-700'
    },
    {
      id: 2,
      title: 'E-Galaxy Store - E-commerce Platform',
      shortDescription: 'Modern e-commerce website for electronics shopping. Features product browsing, cart management, wishlist, and secure checkout with React.js.',
      fullDescription: 'E-Galaxy Store is a comprehensive e-commerce platform built with React.js. The application provides a seamless shopping experience with features like product filtering, search functionality, cart management, wishlist, and user authentication. Built with a focus on user experience and modern design patterns.',
      image: '🛒',
      category: 'Web App',
      type: 'Frontend',
      technologies: ['React.js', 'React Router', 'Context API', 'Mockbee', 'CSS', 'JavaScript'],
      features: [
        'User Authentication',
        'Product Catalog with Search & Filters',
        'Shopping Cart Management',
        'Wishlist Functionality',
        'Product Sorting & Filtering',
        'Order Summary & Checkout',
        'Responsive Design',
        'Category-based Navigation'
      ],
      date: 'January 2023',
      github: 'https://github.com/Tanjum786/E-Galaxy-store',
      live: 'https://e-galaxy-store.vercel.app/',
      featured: true,
      likes: 89,
      views: 1920,
      status: 'Completed',
      gradient: 'from-blue-600 via-cyan-600 to-teal-700'
    }
  ];

  const stats = [
    { icon: <Code size={20} />, label: '4+ Projects', color: 'text-blue-400' },
    { icon: <Star size={20} />, label: 'Open Source', color: 'text-yellow-400' },
    { icon: <Eye size={20} />, label: 'Live Demos', color: 'text-green-400' },
    { icon: <Heart size={20} />, label: 'React Apps', color: 'text-red-400' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'In Progress': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'Coming Soon': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  // Only show first 2 projects on the main page
  const displayedProjects = projects.slice(0, 2);

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
          <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark
            ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
            }`}>
            My Projects
          </h2>

          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            A showcase of my work, from web applications to HubSpot CMS solutions. Each project demonstrates problem-solving and technical expertise.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((stat, index) => (
              <div key={index} className={`flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDark
                ? 'bg-gray-800/50 border-gray-700/50 hover:border-gray-600'
                : 'bg-white/70 border-gray-200/50 hover:border-gray-300'
                }`}>
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-sm font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid - Only showing first 2 projects */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group ${isDark
                ? 'bg-gray-800/40'
                : 'bg-white/80'
                } backdrop-blur-xl rounded-3xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                } hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-2xl`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${isDark
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                    }`}>
                    <Star size={12} />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image/Icon */}
              <div
                className={`relative w-full h-52 rounded-t-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden group`}
              >
                <span className="text-7xl">{project.image}</span>

                {/* Hover Overlay */}
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

                  {/* GitHub Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.github) {
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className={`p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100 ${
                      project.github ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    }`}
                    title={project.github ? "View on GitHub" : "No GitHub link"}
                    disabled={!project.github}
                  >
                    <Github className="text-white" size={20} />
                  </button>

                  {/* Live Demo Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.live) {
                        window.open(project.live, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className={`p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 opacity-0 group-hover:opacity-100 ${
                      project.live ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    }`}
                    title={project.live ? "View Live Demo" : "No live demo"}
                    disabled={!project.live}
                  >
                    <ExternalLink className="text-white" size={20} />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className={`text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {project.date}
                    </div>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${isDark
                        ? 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                        : 'bg-gray-100 text-gray-700 border border-gray-200'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                      }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Show All Projects Button - Now redirects instead of expanding */}
        <div className="text-center mt-12">
          <button
            onClick={redirectToProjectsPage}
            className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
              ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white'
              : 'bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white'
              } shadow-lg hover:shadow-2xl overflow-hidden`}
          >
            <div className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </div>

            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </button>
        </div>

        <div className="text-center mt-16">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
            ? 'bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30'
            : 'bg-gradient-to-r from-cyan-100 to-emerald-100 border border-cyan-200'
            } backdrop-blur-sm`}>
            <Code className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={20} />
            <span className="font-semibold">Have a project idea? Let's collaborate!</span>
          </div>
        </div>
      </div>

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
                className={`h-56 md:h-64 bg-gradient-to-br ${selectedProject.gradient} relative overflow-hidden rounded-t-2xl`}
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
                  <span className="bg-green-600/80 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {selectedProject.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`p-6 md:p-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm md:text-base">Live Project</span>
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
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
                  {selectedProject.fullDescription}
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
    </section>
  );
};

export default ProjectsSection;