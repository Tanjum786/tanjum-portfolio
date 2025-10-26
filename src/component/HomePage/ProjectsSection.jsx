import React, { useState, useEffect } from 'react';
import { Moon, Sun, ExternalLink, Github, Code, X, Info, ChevronDown, ChevronUp, Filter, Star, Eye, Heart, Zap, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [isDark, setIsDark] = useState(true);
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
    // You can replace this with your actual routing logic
    // For example, if using React Router: navigate('/projects')
    // For now, we'll use a simple alert to demonstrate
    alert('Redirecting to All Projects page...');
    // window.location.href = '/projects'; // Uncomment for actual redirect
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
      title: 'NEPTUNE - E-commerce Website',
      shortDescription: 'Modern e-commerce platform for camera gallery with advanced features and seamless user experience.',
      fullDescription: 'NEPTUNE is a camera gallery ecommerce website.',
      image: '📷',
      category: 'Web App',
      type: 'Frontend',
      technologies: ['React.js', 'React Router', 'Context API', 'Reducer', 'HTML5', 'CSS3'],
      features: [
        'Authentication (Login, Signup)',
        'Product Listing',
        'Products Filters',
        'Product Search',
        'Cart Management',
        'Wishlist Management',
        'Price Calculation',
        'Address Management'
      ],
      date: 'April 2022',
      github: '#',
      live: '#',
      featured: true,
      likes: 124,
      views: 2840,
      status: 'Completed',
      gradient: 'from-blue-600 via-purple-600 to-indigo-700',
      mockBackend: 'Mock Backend (for backend)'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      shortDescription: 'Collaborative task management tool with drag-and-drop functionality and team collaboration.',
      fullDescription: 'A comprehensive task management platform designed for teams to collaborate effectively and track project progress in real-time.',
      image: '📋',
      category: 'Web App',
      type: 'Fullstack',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JWT'],
      features: [
        'Drag & Drop Interface',
        'Real-time Collaboration',
        'Team Management',
        'Deadline Tracking',
        'File Attachments',
        'Progress Analytics',
        'Notification System',
        'Export Reports'
      ],
      date: 'December 2023',
      github: '#',
      live: '#',
      featured: true,
      likes: 89,
      views: 1920,
      status: 'Completed',
      gradient: 'from-green-500 via-emerald-600 to-teal-700'
    }
  ];

  const stats = [
    { icon: <Code size={20} />, label: '2+ Projects', color: 'text-blue-400' },
    { icon: <Star size={20} />, label: '2 Featured', color: 'text-yellow-400' },
    { icon: <Eye size={20} />, label: '4K+ Views', color: 'text-green-400' },
    { icon: <Heart size={20} />, label: '213+ Likes', color: 'text-red-400' },
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
              My Projects
            </h2>
          </div>

          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
            A showcase of my work, from web applications to mobile apps. Each project tells a story of problem-solving and creativity! 🚀
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
                } hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-2xl`}
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
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <div
                    onClick={() => openModal(project)}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                  >
                    <Info className="text-white" size={20} />
                  </div>

                  <div
                    onClick={() => window.open(project.github, '_blank')}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                  >
                    <Github className="text-white" size={20} />
                  </div>

                  <div
                    onClick={() => window.open(project.live, '_blank')}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                  >
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className={`text-xl font-bold group-hover:text-purple-400 transition-colors duration-300 ${isDark ? 'text-gray-100' : 'text-gray-900'
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
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'bg-purple-100 text-purple-700 border border-purple-200'
                      }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <Heart size={14} />
                      <span>{project.likes}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <Eye size={14} />
                      <span>{project.views}</span>
                    </div>
                  </div>

                  <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Hover for details
                  </div>
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
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
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
            ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30'
            : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
            } backdrop-blur-sm`}>
            <Code className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
            <span className="font-semibold">Have a project idea? Let's collaborate!</span>
          </div>
        </div>
      </div>

      {/* Modal remains the same */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-5 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 z-10"
            >
              <X size={16} />
            </button>

            {/* Full Banner Image */}
            <div className="relative">
              {/* Main Banner */}
              <div
                className={`h-64 bg-gradient-to-br ${selectedProject.gradient} relative overflow-hidden rounded-t-2xl`}
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="1000" height="400" fill="url(%23grid)"/></svg>')`,
                  backgroundSize: 'cover, 40px 40px'
                }}
              >
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm animate-pulse"></div>
                <div className="absolute top-16 right-16 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-12 left-16 w-6 h-6 bg-white/15 rounded-full"></div>

                {/* Main Project Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl opacity-90 filter drop-shadow-2xl transform hover:scale-110 transition-transform duration-300">
                    {selectedProject.image}
                  </div>
                </div>

                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h1>
                      <p className="text-white/80 text-lg">
                        {selectedProject.date}
                      </p>
                    </div>

                    {/* Action Buttons on Banner */}
                    <div className="flex gap-3">
                      <a
                        href={selectedProject.live}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2 transform hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live Project
                      </a>

                      <a
                        href={selectedProject.github}
                        className="bg-black/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-black/50 transition-all flex items-center gap-2 transform hover:scale-105"
                      >
                        <Github size={18} />
                        View Source
                      </a>
                    </div>
                  </div>
                </div>

                {/* Category & Status Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-black/50 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {selectedProject.category.toUpperCase()}
                  </span>
                  <span className="bg-green-600/80 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {selectedProject.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-white font-bold mb-4">Technologies</h3>
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded-lg text-center text-sm font-semibold text-gray-300 border border-gray-700">
                      {tech}
                    </div>
                  ))}
                </div>
                {selectedProject.mockBackend && (
                  <p className="text-gray-500 text-sm italic mt-3">
                    Note: {selectedProject.mockBackend}
                  </p>
                )}
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-white font-bold mb-4">Key Features</h3>
                <div className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-gray-300">
                      <span className="text-blue-500 mr-3 mt-1">•</span>
                      {feature}
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