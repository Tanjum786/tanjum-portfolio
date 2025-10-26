import React, { useState, useEffect } from 'react';
import { Moon, Sun, ExternalLink, Calendar, Clock, User, Tag, ChevronDown, ChevronUp, Filter, Star, Eye, Heart, BookOpen, MessageCircle, Share2 } from 'lucide-react';

const BlogSection = () => {
    const [isDark, setIsDark] = useState(true);
    const [hoveredBlog, setHoveredBlog] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showAll, setShowAll] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animating, setAnimating] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            author: 'Your Name',
            featured: true,
            likes: 245,
            views: 3420,
            comments: 28,
            gradient: 'from-blue-600 via-purple-600 to-indigo-700'
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
            author: 'Your Name',
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

Flexbox is perfect for:

### 1. Navigation Bars
\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

### 2. Card Layouts
\`\`\`css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px;
}
\`\`\`

### 3. Centering Content
\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
\`\`\`

## CSS Grid: The Two-Dimensional Layout Champion

CSS Grid excels at:

### 1. Page Layouts
\`\`\`css
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
}
\`\`\`

### 2. Image Galleries
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
\`\`\`

### 3. Complex Dashboards
\`\`\`css
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 1rem;
}

.widget-large {
  grid-column: span 2;
  grid-row: span 2;
}
\`\`\`

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

## Pro Tips

1. **Combine Both**: Use Grid for page layout, Flexbox for components
2. **Browser Support**: Both have excellent modern browser support
3. **Performance**: Both are highly optimized by browsers
4. **Learning Path**: Start with Flexbox, then add Grid to your toolkit

Remember: There's no "wrong" choice - use what works best for your specific use case!
      `,
            image: '🎨',
            category: 'CSS',
            type: 'Tutorial',
            tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
            date: 'Dec 10, 2024',
            readTime: '5 min read',
            author: 'Your Name',
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

### 1. Avoid Memory Leaks
\`\`\`javascript
// Bad: Creates memory leak
function createHandler() {
  const data = new Array(1000000).fill(0);
  return function() {
    // data is never released
    console.log('Handler called');
  };
}

// Good: Clean up references
function createHandler() {
  let data = new Array(1000000).fill(0);
  return function() {
    console.log('Handler called');
    data = null; // Release memory
  };
}
\`\`\`

### 2. Object Pool Pattern
\`\`\`javascript
class ObjectPool {
  constructor(createFn, resetFn) {
    this.createFn = createFn;
    this.resetFn = resetFn;
    this.pool = [];
  }
  
  get() {
    return this.pool.length > 0 ? 
      this.pool.pop() : 
      this.createFn();
  }
  
  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}
\`\`\`

## DOM Optimization

### 1. Batch DOM Updates
\`\`\`javascript
// Bad: Multiple reflows
element.style.width = '100px';
element.style.height = '100px';
element.style.background = 'red';

// Good: Single reflow
element.style.cssText = 'width: 100px; height: 100px; background: red;';
\`\`\`

### 2. Use Document Fragments
\`\`\`javascript
// Bad: Multiple DOM insertions
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  container.appendChild(div);
}

// Good: Single DOM insertion
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = \`Item \${i}\`;
  fragment.appendChild(div);
}
container.appendChild(fragment);
\`\`\`

## Algorithm Optimization

### 1. Use Appropriate Data Structures
\`\`\`javascript
// Bad: O(n) lookup in array
const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
const findUser = (id) => users.find(user => user.id === id);

// Good: O(1) lookup with Map
const userMap = new Map([[1, 'John'], [2, 'Jane']]);
const findUser = (id) => userMap.get(id);
\`\`\`

### 2. Debounce Expensive Operations
\`\`\`javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const expensiveSearch = debounce((query) => {
  // Expensive API call
  searchAPI(query);
}, 300);
\`\`\`

## Modern JavaScript Features

### 1. Use Web Workers for Heavy Tasks
\`\`\`javascript
// main.js
const worker = new Worker('worker.js');
worker.postMessage({data: largeArray});
worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = heavyComputation(e.data);
  self.postMessage(result);
};
\`\`\`

### 2. Lazy Loading with Intersection Observer
\`\`\`javascript
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});
\`\`\`

## Performance Monitoring

Always measure your optimizations:

\`\`\`javascript
console.time('operation');
// Your code here
console.timeEnd('operation');

// Or use Performance API
const start = performance.now();
// Your code here
const end = performance.now();
console.log(\`Operation took \${end - start} milliseconds\`);
\`\`\`

Remember: Premature optimization is the root of all evil. Profile first, then optimize!
      `,
            image: '⚡',
            category: 'JavaScript',
            type: 'Advanced',
            tags: ['JavaScript', 'Performance', 'Optimization', 'Speed'],
            date: 'Dec 8, 2024',
            readTime: '12 min read',
            author: 'Your Name',
            featured: false,
            likes: 203,
            views: 2756,
            comments: 41,
            gradient: 'from-yellow-500 via-orange-500 to-red-600'
        }
    ];

    const stats = [
        { icon: <BookOpen size={20} />, label: '4+ Articles', color: 'text-blue-400' },
        { icon: <Star size={20} />, label: '2 Featured', color: 'text-yellow-400' },
        { icon: <Eye size={20} />, label: '11K+ Views', color: 'text-green-400' },
        { icon: <Heart size={20} />, label: '793+ Likes', color: 'text-red-400' },
    ];

    const allFilters = ['All', 'Featured', 'React', 'JavaScript', 'CSS', 'Tutorial', 'Insights', 'Advanced'];

    const getFilteredBlogs = () => {
        if (activeFilter === 'All') return blogs;
        if (activeFilter === 'Featured') return blogs.filter(blog => blog.featured);

        return blogs.filter(blog =>
            blog.category === activeFilter ||
            blog.type === activeFilter ||
            blog.tags.includes(activeFilter)
        );
    };

    const handleShowMore = () => {
        setAnimating(true);
        setTimeout(() => {
            setShowAll(!showAll);
            setAnimating(false);
        }, 200);
    };

    const filteredBlogs = getFilteredBlogs();
    const displayedBlogs = showAll ? filteredBlogs : filteredBlogs.slice(0, 2);

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
                            My Blog
                        </h2>
                    </div>

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

                {/* Filters */}
                {showAll && (
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
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                                    : isDark
                                        ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                                        : 'bg-white/70 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                )}

                {/* Blogs Grid */}
                <div className={`grid ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 max-w-5xl mx-auto'} gap-8 transition-all duration-500 ${animating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                    }`}>
                    {displayedBlogs.map((blog, index) => (
                        <article
                            key={blog.id}
                            className={`relative group ${isDark
                                ? 'bg-gray-800/40'
                                : 'bg-white/80'
                                } backdrop-blur-xl rounded-3xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'
                                } hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden shadow-lg hover:shadow-2xl`}
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
                                        <ExternalLink className="text-white" size={20} />
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
                                    <h3 className={`text-xl font-bold group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 ${isDark ? 'text-gray-100' : 'text-gray-900'
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
                                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                            : 'bg-purple-100 text-purple-700 border border-purple-200'
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
                                            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                                            : 'bg-purple-100 text-purple-700 border border-purple-200'
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

                                    <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                        Read Article
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Show More/Less Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={handleShowMore}
                        className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${isDark
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                            } shadow-lg hover:shadow-2xl overflow-hidden`}
                    >
                        <div className="flex items-center space-x-2">
                            <span>{showAll ? 'Show Less Articles' : 'Show All Articles'}</span>
                            {showAll ? (
                                <ChevronUp className="group-hover:-translate-y-1 transition-transform duration-200" size={20} />
                            ) : (
                                <ChevronDown className="group-hover:translate-y-1 transition-transform duration-200" size={20} />
                            )}
                        </div>

                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </button>
                </div>

                <div className="text-center mt-16">
                    <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${isDark
                        ? 'bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/30'
                        : 'bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200'
                        } backdrop-blur-sm`}>
                        <BookOpen className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} size={20} />
                        <span className="font-semibold">Have a topic suggestion? Let's discuss!</span>
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
                            className="absolute top-5 right-5 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 z-10 transition-colors duration-200"
                        >
                            ✕
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
                                {/* Floating Elements */}
                                <div className="absolute top-8 left-8 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm animate-pulse"></div>
                                <div className="absolute top-16 right-16 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
                                <div className="absolute bottom-12 left-16 w-6 h-6 bg-white/15 rounded-full"></div>

                                {/* Main Blog Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-9xl opacity-90 filter drop-shadow-2xl transform hover:scale-110 transition-transform duration-300">
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
                                    <span className="bg-blue-600/80 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold">
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
        </section>
    );
};

export default BlogSection;