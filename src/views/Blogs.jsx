import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, Clock, User, Tag, ChevronDown, ChevronUp, Filter, Star, Eye, Heart, BookOpen, MessageCircle, Share2, Search, X, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const BlogsPage = () => {
    const { isDark } = useTheme();
    const [hoveredBlog, setHoveredBlog] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const openModal = (blog) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedBlog(null);
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

    const blogs = [
        {
            id: 1,
            title: 'Building Scalable React Applications: Best Practices & Architecture',
            shortDescription: 'Learn how to structure large React applications with proper state management, component architecture, and performance optimization techniques.',
            fullDescription: 'In this comprehensive guide, we explore the essential patterns and practices for building maintainable and scalable React applications. From component composition to state management strategies, this article covers everything you need to know to take your React skills to the next level.',
            content: `
# Building Scalable React Applications

When building large-scale React applications, proper architecture becomes crucial for maintainability and performance. Here are the key principles I've learned from building production applications.

## Component Architecture

The foundation of any scalable React app is a well-thought-out component structure. I recommend following these patterns:

### 1. Atomic Design Principles
- **Atoms**: Basic building blocks (buttons, inputs)
- **Molecules**: Simple combinations of atoms
- **Organisms**: Complex UI components
- **Templates**: Page-level layouts
- **Pages**: Specific instances of templates

### 2. Container vs Presentational Components
Separate your logic from your UI by using container components for state management and presentational components for rendering.

## State Management

For large applications, proper state management is essential:

- **Local State**: Use useState for component-specific state
- **Global State**: Consider Redux Toolkit or Zustand for global state
- **Server State**: Use React Query or SWR for API data
- **URL State**: Use React Router for navigation state

## Performance Optimization

Key techniques for keeping your app fast:

1. **Code Splitting**: Use React.lazy() and Suspense
2. **Memoization**: React.memo, useMemo, useCallback
3. **Virtual Scrolling**: For large lists
4. **Bundle Analysis**: Regular bundle size monitoring

## Testing Strategy

A robust testing strategy includes:
- Unit tests for components
- Integration tests for features
- E2E tests for critical paths

Remember, the goal is to create applications that are not just functional, but maintainable and enjoyable to work with!
      `,
            image: '⚛️',
            category: 'React',
            type: 'Tutorial',
            tags: ['React', 'JavaScript', 'Architecture', 'Best Practices'],
            date: 'Dec 15, 2024',
            readTime: '8 min read',
            author: 'Tanjum Kadakol',
            featured: true,
            likes: 245,
            views: 3420,
            comments: 28,
            gradient: 'from-blue-600 via-cyan-600 to-teal-700'
        },
        {
            id: 2,
            title: 'The Future of Web Development: Trends to Watch in 2025',
            shortDescription: 'Explore the emerging technologies and trends that will shape web development in 2025, from AI integration to new frameworks.',
            fullDescription: 'As we step into 2025, the web development landscape continues to evolve at breakneck speed. This article examines the key trends and technologies that every developer should be aware of to stay ahead of the curve.',
            content: `
# The Future of Web Development: 2025 Trends

The web development landscape is constantly evolving. Here are the key trends that will dominate 2025:

## 1. AI-Powered Development

Artificial Intelligence is revolutionizing how we build applications:

- **Code Generation**: AI assistants helping write boilerplate code
- **Automated Testing**: AI-powered test generation and maintenance
- **Design to Code**: Converting designs directly to functional components
- **Performance Optimization**: AI analyzing and optimizing bundle sizes

## 2. Edge Computing & Serverless

The move towards edge computing continues:

- **Edge Functions**: Running code closer to users
- **Serverless Databases**: Planet-scale databases with zero config
- **CDN Evolution**: Smart caching and dynamic content delivery

## 3. Web Assembly (WASM) Adoption

WASM is becoming mainstream:

- **Performance Critical Apps**: Near-native performance in browsers
- **Language Diversity**: Running Rust, C++, Go in browsers
- **Gaming & Graphics**: Complex applications running smoothly

## 4. Enhanced Developer Experience

Tools are getting smarter:

- **Zero-Config Frameworks**: Batteries-included development
- **Hot Reloading 2.0**: Instant feedback loops
- **Visual Development**: Low-code solutions for developers

## 5. Web3 Integration

Decentralized web technologies:

- **Wallet Integration**: Seamless crypto wallet connections
- **IPFS Storage**: Decentralized file storage
- **Smart Contract Interfaces**: Direct blockchain interaction

The future is exciting, and these trends will shape how we build the web of tomorrow!
      `,
            image: '🚀',
            category: 'Web Development',
            type: 'Insights',
            tags: ['Web Development', 'Trends', 'Future', 'Technology'],
            date: 'Dec 12, 2024',
            readTime: '6 min read',
            author: 'Tanjum Kadakol',
            featured: true,
            likes: 189,
            views: 2890,
            comments: 34,
            gradient: 'from-green-500 via-emerald-600 to-teal-700'
        },
        {
            id: 3,
            title: 'CSS Grid vs Flexbox: When to Use What',
            shortDescription: 'A comprehensive comparison of CSS Grid and Flexbox with practical examples and use cases for modern web layouts.',
            fullDescription: 'Understanding when to use CSS Grid versus Flexbox is crucial for creating efficient and maintainable layouts. This guide breaks down the strengths of each approach with real-world examples.',
            content: `
# CSS Grid vs Flexbox: The Ultimate Guide

Both CSS Grid and Flexbox are powerful layout tools, but they excel in different scenarios. Let's explore when to use each.

## Flexbox: The One-Dimensional Layout Master

Flexbox is perfect for navigation bars, card layouts, and centering content.

## CSS Grid: The Two-Dimensional Layout Champion

CSS Grid excels at page layouts, image galleries, and complex dashboards.

## Decision Matrix

**Use Flexbox when:**
- Working with one dimension (row OR column)
- Items should grow/shrink based on content
- Centering content
- Creating navigation or toolbars

**Use CSS Grid when:**
- Working with two dimensions (rows AND columns)
- Creating page layouts
- Overlapping elements
- Complex alignment requirements

Remember: There's no "wrong" choice - use what works best for your specific use case!
      `,
            image: '🎨',
            category: 'CSS',
            type: 'Tutorial',
            tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
            date: 'Dec 10, 2024',
            readTime: '5 min read',
            author: 'Tanjum Kadakol',
            featured: false,
            likes: 156,
            views: 2140,
            comments: 19,
            gradient: 'from-pink-500 via-red-500 to-orange-500'
        },
        {
            id: 4,
            title: 'JavaScript Performance Optimization Techniques',
            shortDescription: 'Master the art of writing fast JavaScript code with these proven performance optimization techniques and best practices.',
            fullDescription: 'Performance is crucial for user experience. Learn advanced JavaScript optimization techniques that can dramatically improve your application speed and responsiveness.',
            content: `
# JavaScript Performance Optimization

Writing performant JavaScript is an art. Here are proven techniques to make your code blazing fast.

## Memory Management

Avoid memory leaks and use proper cleanup techniques.

## DOM Optimization

Batch DOM updates and use document fragments for better performance.

## Algorithm Optimization

Use appropriate data structures and debounce expensive operations.

Remember: Premature optimization is the root of all evil. Profile first, then optimize!
      `,
            image: '⚡',
            category: 'JavaScript',
            type: 'Advanced',
            tags: ['JavaScript', 'Performance', 'Optimization', 'Speed'],
            date: 'Dec 8, 2024',
            readTime: '12 min read',
            author: 'Tanjum Kadakol',
            featured: false,
            likes: 203,
            views: 2756,
            comments: 41,
            gradient: 'from-yellow-500 via-orange-500 to-red-600'
        },
        {
            id: 5,
            title: 'Mastering Tailwind CSS: Tips and Tricks',
            shortDescription: 'Unlock the full potential of Tailwind CSS with advanced techniques, custom configurations, and productivity tips.',
            fullDescription: 'Tailwind CSS has revolutionized how we write styles. This guide covers advanced patterns and techniques to help you become a Tailwind master.',
            content: `
# Mastering Tailwind CSS

Tailwind CSS is more than just utility classes. Let's explore advanced techniques to supercharge your workflow.

## Custom Configuration

Extend Tailwind with custom colors, spacing, and utilities.

## Component Patterns

Reusable component patterns with @apply and custom classes.

## Performance Tips

Optimize your Tailwind builds for production with PurgeCSS.

Master these techniques to build beautiful interfaces faster!
      `,
            image: '💨',
            category: 'CSS',
            type: 'Tutorial',
            tags: ['Tailwind CSS', 'CSS', 'Styling', 'Frontend'],
            date: 'Dec 5, 2024',
            readTime: '7 min read',
            author: 'Tanjum Kadakol',
            featured: false,
            likes: 178,
            views: 1980,
            comments: 22,
            gradient: 'from-cyan-500 via-blue-500 to-indigo-600'
        },
        {
            id: 6,
            title: 'Modern React Hooks: useCallback and useMemo Explained',
            shortDescription: 'Deep dive into React performance hooks and learn when and how to use them effectively in your applications.',
            fullDescription: 'React hooks are powerful, but understanding when to use useCallback and useMemo can be tricky. This article provides clear examples and practical use cases.',
            content: `
# Modern React Hooks Guide

Learn how to optimize your React components with performance hooks.

## useCallback

Memoize functions to prevent unnecessary re-renders.

## useMemo

Cache expensive calculations between renders.

## When to Use

Guidelines for deciding when optimization is necessary.

Use these hooks wisely for better performance!
      `,
            image: '🎣',
            category: 'React',
            type: 'Advanced',
            tags: ['React', 'Hooks', 'Performance', 'Optimization'],
            date: 'Dec 1, 2024',
            readTime: '10 min read',
            author: 'Tanjum Kadakol',
            featured: true,
            likes: 312,
            views: 4120,
            comments: 56,
            gradient: 'from-purple-500 via-pink-500 to-rose-500'
        }
    ];

    const stats = [
        { icon: <BookOpen size={20} />, label: `${blogs.length} Articles`, color: 'text-blue-400' },
        { icon: <Star size={20} />, label: `${blogs.filter(b => b.featured).length} Featured`, color: 'text-yellow-400' },
        { icon: <Eye size={20} />, label: `${blogs.reduce((sum, b) => sum + b.views, 0)}+ Views`, color: 'text-green-400' },
        { icon: <Heart size={20} />, label: `${blogs.reduce((sum, b) => sum + b.likes, 0)}+ Likes`, color: 'text-red-400' },
    ];

    const allFilters = ['All', 'Featured', 'React', 'JavaScript', 'CSS', 'Tutorial', 'Insights', 'Advanced'];

    const getFilteredBlogs = () => {
        let filtered = blogs;

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Apply category filter
        if (activeFilter === 'All') return filtered;
        if (activeFilter === 'Featured') return filtered.filter(blog => blog.featured);

        return filtered.filter(blog =>
            blog.category === activeFilter ||
            blog.type === activeFilter ||
            blog.tags.includes(activeFilter)
        );
    };

    const filteredBlogs = getFilteredBlogs();

    return (
        <div className={`min-h-screen transition-all duration-500 relative overflow-hidden ${isDark
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white'
            : 'bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 text-gray-900'
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

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="text-center mb-16 mt-12">
                    <h2 className={`text-4xl md:text-6xl font-black mb-8 ${isDark
                        ? 'bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                        }`}>
                        My Blog
                    </h2>

                    <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Sharing insights, tutorials, and experiences from my journey in web development. Join me as we explore the latest in tech! 📝
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

                {/* Search Bar */}
                <div className="relative mb-8 max-w-2xl mx-auto">
                    <div className={`relative flex items-center backdrop-blur-sm border rounded-2xl overflow-hidden ${isDark
                        ? 'bg-gray-800/40 border-gray-700/50 focus-within:border-cyan-500/50'
                        : 'bg-white/70 border-gray-200/50 focus-within:border-cyan-300/50'
                        } transition-all duration-300`}>
                        <div className="absolute left-4">
                            <Search className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`} size={20} />
                        </div>

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search articles..."
                            className={`w-full pl-12 pr-12 py-4 bg-transparent outline-none ${isDark ? 'text-white' : 'text-gray-900'
                                }`}
                        />

                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className={`absolute right-4 p-1 rounded-full transition-all duration-200 ${isDark
                                    ? 'text-gray-400 hover:text-red-400 hover:bg-red-500/20'
                                    : 'text-gray-500 hover:text-red-600 hover:bg-red-100'
                                    }`}
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? 'bg-gray-800/50 text-gray-400' : 'bg-white/70 text-gray-600'
                        }`}>
                        <Filter size={16} />
                        <span className="text-sm font-medium">Filter by:</span>
                    </div>
                    {allFilters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === filter
                                ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-lg'
                                : isDark
                                    ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                                    : 'bg-white/70 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Results Counter */}
                {(searchQuery || activeFilter !== 'All') && (
                    <div className="text-center mb-8">
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Showing {filteredBlogs.length} of {blogs.length} articles
                        </p>
                    </div>
                )}

                {/* Blogs Grid */}
                {filteredBlogs.length === 0 ? (
                    <div className="text-center py-16">
                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
                            <Search className={`w-8 h-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        </div>
                        <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                            No articles found
                        </h3>
                        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Try adjusting your search or filters
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setActiveFilter('All');
                            }}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isDark
                                ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                                : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                                }`}
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => (
                            <article
                                key={blog.id}
                                className={`relative group ${isDark
                                    ? 'bg-gray-800/40'
                                    : 'bg-white/80'
                                    } backdrop-blur-xl rounded-3xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                                    } hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-2xl`}
                                onMouseEnter={() => setHoveredBlog(blog.id)}
                                onMouseLeave={() => setHoveredBlog(null)}
                            >
                                {/* Featured Badge */}
                                {blog.featured && (
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

                                {/* Blog Header Image */}
                                <div
                                    className={`relative w-full h-52 rounded-t-3xl bg-gradient-to-br ${blog.gradient} flex items-center justify-center overflow-hidden group`}
                                >
                                    <span className="text-7xl">{blog.image}</span>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                                        <div
                                            onClick={() => openModal(blog)}
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                                        >
                                            <BookOpen className="text-white" size={20} />
                                        </div>

                                        <div
                                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200 transform hover:scale-110 cursor-pointer"
                                        >
                                            <Share2 className="text-white" size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Blog Info */}
                                <div className="p-6 space-y-4">
                                    <div className="space-y-2">
                                        <h3 className={`text-xl font-bold group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 ${isDark ? 'text-gray-100' : 'text-gray-900'
                                            }`}>
                                            {blog.title}
                                        </h3>

                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center space-x-3">
                                                <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <Calendar size={14} />
                                                    <span>{blog.date}</span>
                                                </div>
                                                <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    <Clock size={14} />
                                                    <span>{blog.readTime}</span>
                                                </div>
                                            </div>
                                            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark
                                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                                : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                                                }`}>
                                                {blog.type}
                                            </div>
                                        </div>
                                    </div>

                                    <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {blog.shortDescription}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${isDark
                                                    ? 'bg-gray-700/50 text-gray-300 border border-gray-600/30'
                                                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                                                    }`}
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                        {blog.tags.length > 3 && (
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDark
                                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                                : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
                                                }`}>
                                                +{blog.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/30">
                                        <div className="flex items-center space-x-4 text-sm">
                                            <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <Heart size={14} />
                                                <span>{blog.likes}</span>
                                            </div>
                                            <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <Eye size={14} />
                                                <span>{blog.views}</span>
                                            </div>
                                            <div className={`flex items-center space-x-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <MessageCircle size={14} />
                                                <span>{blog.comments}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-cyan-600/20 to-emerald-600/20 border border-cyan-500/30'
                        : 'bg-gradient-to-r from-cyan-100 to-emerald-100 border border-cyan-200'
                        } backdrop-blur-sm`}>
                        <BookOpen className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} size={20} />
                        <span className="font-semibold">More articles coming soon! Stay tuned for updates.</span>
                    </div>
                </div>
            </div>

            {/* Blog Modal */}
            {isModalOpen && selectedBlog && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center p-5 z-50 overflow-y-auto"
                    onClick={closeModal}
                >
                    <div
                        className="bg-gray-900 text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-700 my-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-5 right-5 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 z-10 transition-colors duration-200"
                        >
                            <X size={20} />
                        </button>

                        {/* Blog Header */}
                        <div className="relative">
                            <div
                                className={`h-64 bg-gradient-to-br ${selectedBlog.gradient} relative overflow-hidden rounded-t-2xl`}
                                style={{
                                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="1000" height="400" fill="url(%23grid)"/></svg>')`,
                                    backgroundSize: 'cover, 40px 40px'
                                }}
                            >
                                {/* Main Blog Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-9xl opacity-90 filter drop-shadow-2xl">
                                        {selectedBlog.image}
                                    </div>
                                </div>

                                {/* Blog Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <h1 className="text-3xl font-bold text-white mb-2">
                                                {selectedBlog.title}
                                            </h1>
                                            <div className="flex items-center space-x-4 text-white/80">
                                                <div className="flex items-center space-x-1">
                                                    <User size={16} />
                                                    <span>{selectedBlog.author}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Calendar size={16} />
                                                    <span>{selectedBlog.date}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Clock size={16} />
                                                    <span>{selectedBlog.readTime}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all flex items-center gap-2 transform hover:scale-105">
                                                <Heart size={18} />
                                                {selectedBlog.likes}
                                            </button>

                                            <button className="bg-black/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-black/50 transition-all flex items-center gap-2 transform hover:scale-105">
                                                <Share2 size={18} />
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Category & Type Badges */}
                                <div className="absolute top-6 left-6 flex gap-3">
                                    <span className="bg-black/50 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold">
                                        {selectedBlog.category.toUpperCase()}
                                    </span>
                                    <span className="bg-cyan-600/80 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold">
                                        {selectedBlog.type.toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {/* Description */}
                            <div className="mb-6">
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {selectedBlog.fullDescription}
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mb-8">
                                <h3 className="text-white font-bold mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-3">
                                    {selectedBlog.tags.map((tag, index) => (
                                        <div key={index} className="bg-gray-800 px-4 py-2 rounded-lg text-sm font-semibold text-gray-300 border border-gray-700 flex items-center gap-2">
                                            <Tag size={14} />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className="mb-6">
                                <h3 className="text-white font-bold mb-4 text-2xl">Full Article</h3>
                                <div className="prose prose-invert max-w-none">
                                    <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                                        {selectedBlog.content}
                                    </div>
                                </div>
                            </div>

                            {/* Stats Footer */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                                <div className="flex items-center space-x-6 text-gray-400">
                                    <div className="flex items-center space-x-2">
                                        <Heart size={16} />
                                        <span>{selectedBlog.likes} likes</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Eye size={16} />
                                        <span>{selectedBlog.views} views</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MessageCircle size={16} />
                                        <span>{selectedBlog.comments} comments</span>
                                    </div>
                                </div>
                                <div className="text-gray-500 text-sm">
                                    Published on {selectedBlog.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogsPage;

