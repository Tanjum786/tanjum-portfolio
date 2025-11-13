import React, { useState, useEffect } from 'react';
import { Code, Palette, Smartphone, Globe, Settings, ShoppingCart, CheckCircle, Star, Users, Rocket } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ServicesOffered = () => {
    const { isDark } = useTheme();
    const [visibleServices, setVisibleServices] = useState(new Set());

    // Animate services on load
    useEffect(() => {
        services.forEach((_, index) => {
            setTimeout(() => {
                setVisibleServices(prev => new Set([...prev, index]));
            }, index * 100);
        });
    }, []);

    const services = [
        {
            id: 1,
            title: 'Frontend Development',
            icon: <Code size={24} />,
            gradient: 'from-blue-500 to-cyan-500',
            description: 'Modern, responsive web applications with React.js, Next.js, and TypeScript',
            features: ['React.js & Next.js', 'TypeScript Integration', 'Performance Optimization'],
        },
        {
            id: 2,
            title: 'HubSpot Development',
            icon: <Settings size={24} />,
            gradient: 'from-orange-500 to-red-500',
            description: 'Custom HubSpot solutions for marketing and sales automation',
            features: ['Custom Templates', 'Landing Pages', 'Marketing Automation'],
            popular: true
        },
        {
            id: 3,
            title: 'UI/UX Design',
            icon: <Palette size={24} />,
            gradient: 'from-purple-500 to-pink-500',
            description: 'Beautiful, user-centered designs that convert visitors',
            features: ['User Interface Design', 'Wireframing & Prototyping', 'Responsive Layouts']
        },
        {
            id: 4,
            title: 'Responsive Design',
            icon: <Smartphone size={24} />,
            gradient: 'from-green-500 to-emerald-500',
            description: 'Perfect websites on every device and screen size',
            features: ['Cross-Device Compatibility', 'SEO Optimization', 'Fast Loading']
        },
        {
            id: 5,
            title: 'E-commerce Development',
            icon: <ShoppingCart size={24} />,
            gradient: 'from-indigo-500 to-blue-500',
            description: 'Complete e-commerce solutions to grow your business',
            features: ['Custom Shopping Carts', 'Payment Integration', 'Inventory Management']
        },
        {
            id: 6,
            title: 'Website Maintenance',
            icon: <Globe size={24} />,
            gradient: 'from-cyan-500 to-teal-500',
            description: 'Keep your website secure and performing optimally',
            features: ['Security Updates', 'Performance Monitoring', '24/7 Support']
        }
    ];

    const processSteps = [
        { step: 1, title: 'Discovery', description: 'Understanding your needs', icon: <Users size={20} /> },
        { step: 2, title: 'Development', description: 'Coding and implementing your solution', icon: <Code size={20} /> },
        { step: 3, title: 'Testing & Launch', description: 'Deploy and go live', icon: <Rocket size={20} /> },
        { step: 4, title: 'Support', description: 'Ongoing maintenance', icon: <Settings size={20} /> }
    ];

    return (
        <section className={`py-16 transition-all duration-500 relative ${isDark
            ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white'
            : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 text-gray-900'
            }`}>

            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark
                    ? 'bg-gradient-to-r from-cyan-600/10 to-emerald-600/10'
                    : 'bg-gradient-to-r from-cyan-300/20 to-emerald-300/20'
                    } top-10 left-10`} />
                <div className={`absolute w-80 h-80 rounded-full blur-3xl animate-pulse ${isDark
                    ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10'
                    : 'bg-gradient-to-r from-emerald-300/20 to-teal-300/20'
                    } bottom-10 right-10`} style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className={`text-4xl md:text-5xl font-black mb-6 ${isDark
                        ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent'
                        }`}>
                        Services Offered
                    </h1>
                    <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Transform your ideas into powerful digital solutions
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`relative group transition-all duration-500 ${visibleServices.has(index)
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute -top-2 -right-2 z-10">
                                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                                        <Star size={10} fill="currentColor" />
                                        <span>POPULAR</span>
                                    </div>
                                </div>
                            )}

                            <div className={`h-full p-6 rounded-2xl border transition-all duration-300 ${isDark
                                ? 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60'
                                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
                                } backdrop-blur-lg shadow-lg hover:shadow-xl group-hover:scale-[1.02]`}>

                                {/* Service Header */}
                                <div className="mb-4">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${service.gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {service.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="mb-4">
                                    <ul className="space-y-1">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-2">
                                                <CheckCircle className={`${isDark ? 'text-green-400' : 'text-green-500'}`} size={14} />
                                                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {feature}
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
        </section>
    );
};

export default ServicesOffered;