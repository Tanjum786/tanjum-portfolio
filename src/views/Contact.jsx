import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, Phone, Clock, MessageCircle, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const { isDark } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // EmailJS configuration
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Send email using EmailJS
            await emailjs.send(
                serviceID,
                templateID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'tanjunkadakol147@gmail.com'
                },
                publicKey
            );

            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setSubmitStatus(''), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 5000);
        }
    };

    return (
        <>
            {/* Top Success/Error Banner */}
            {submitStatus && (
                <div className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-slide-down ${
                    submitStatus === 'success' 
                        ? 'bg-gradient-to-r from-cyan-500 to-teal-500' 
                        : 'bg-gradient-to-r from-red-500 to-orange-500'
                    } text-white px-6 md:px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 w-[90%] md:min-w-[400px] md:max-w-[600px]`}>
                    <div className="flex-shrink-0">
                        {submitStatus === 'success' ? (
                            <CheckCircle2 size={24} className="text-white" />
                        ) : (
                            <AlertCircle size={24} className="text-white" />
                        )}
                    </div>
                    <div className="flex-1">
                        <p className="font-semibold text-base md:text-lg">
                            {submitStatus === 'success' 
                                ? 'Thank You!' 
                                : 'Oops! Something Went Wrong'}
                        </p>
                        <p className="text-xs md:text-sm text-white/90">
                            {submitStatus === 'success' 
                                ? "I'll get back to you soon." 
                                : 'Please try again or email me directly.'}
                        </p>
                    </div>
                    <button 
                        onClick={() => setSubmitStatus('')}
                        aria-label="Close notification"
                        className="text-white/80 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>
            )}

        <div className={`min-h-screen relative overflow-hidden mt-12 transition-all duration-500 ${isDark
            ? 'bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white'
            : 'bg-gradient-to-br from-slate-50 via-cyan-50 to-teal-50 text-gray-900'
            }`}>
            {/* Background Grid Pattern */}
            <div className={`absolute inset-0 ${isDark ? 'opacity-10' : 'opacity-5'}`}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                ></div>
            </div>

            {/* Background Glow Effects */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className={`text-sm font-semibold tracking-wider uppercase border px-4 py-2 rounded-full ${isDark
                            ? 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10'
                            : 'text-cyan-600 border-cyan-400/50 bg-cyan-100'
                            }`}>
                            LET'S CONNECT
                        </span>
                    </div>
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Get in{' '}
                        <span className="italic bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Have a project in mind or want to collaborate? I'd be happy to discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Info</h2>

                            {/* Email */}
                            <div className={`group mb-6 p-6 rounded-2xl border transition-all duration-300 ${isDark
                                ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
                                }`}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                                        <Mail className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email</h3>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>tanjunkadakol147@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className={`group mb-6 p-6 rounded-2xl border transition-all duration-300 ${isDark
                                ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
                                }`}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                                        <MapPin className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Location</h3>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Mahalingpur, Karnataka - 587312</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className={`group mb-8 p-6 rounded-2xl border transition-all duration-300 ${isDark
                                ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                : 'bg-white/70 border-gray-200/50 hover:border-cyan-300/50'
                                }`}>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300">
                                        <Clock className="text-cyan-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Response Time</h3>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className={`font-bold mb-6 text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>Social Links</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <a href="https://github.com/Tanjum786" target="_blank" rel="noopener noreferrer" className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${isDark 
                                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                    : 'bg-white border-gray-200 hover:border-cyan-300'
                                    }`}>
                                    <Github className={`transition-colors duration-300 mb-2 ${isDark ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'}`} size={24} />
                                    <span className={`block transition-colors duration-300 text-sm ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>GitHub</span>
                                </a>
                                    <a href="https://www.linkedin.com/in/tanjum-kadakol-665a69225/" target="_blank" rel="noopener noreferrer" className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${isDark 
                                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                    : 'bg-white border-gray-200 hover:border-cyan-300'
                                    }`}>
                                    <Linkedin className={`transition-colors duration-300 mb-2 ${isDark ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'}`} size={24} />
                                    <span className={`block transition-colors duration-300 text-sm ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>LinkedIn</span>
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&to=tanjunkadakol147@gmail.com" target="_blank" rel="noopener noreferrer" className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${isDark 
                                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                    : 'bg-white border-gray-200 hover:border-cyan-300'
                                    }`}>
                                    <Mail className={`transition-colors duration-300 mb-2 ${isDark ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'}`} size={24} />
                                    <span className={`block transition-colors duration-300 text-sm ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>Email</span>
                                </a>
                                <a href={`https://wa.me/918904937408?text=${encodeURIComponent("Hello, I visited your portfolio and would like to discuss an opportunity with you.")}`} target="_blank" rel="noopener noreferrer" className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${isDark 
                                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-cyan-500/30'
                                    : 'bg-white border-gray-200 hover:border-cyan-300'
                                    }`}>
                                    <Phone className={`transition-colors duration-300 mb-2 ${isDark ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'}`} size={24} />
                                    <span className={`block transition-colors duration-300 text-sm ${isDark ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Response Note */}
                        <div className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/20">
                            <p className="text-cyan-400 text-sm">
                                I typically respond within 24 hours. Looking forward to hearing from you!
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className={`rounded-3xl p-8 border backdrop-blur-sm ${isDark 
                        ? 'bg-gray-800/20 border-gray-700/30'
                        : 'bg-white/40 border-gray-200/30'
                        }`}>
                        <div className="mb-8">
                            <div className="flex items-center space-x-3 mb-4">
                                <MessageCircle className="text-cyan-400" size={24} />
                                <span className={`text-sm uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Send Message</span>
                            </div>
                            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Start a Conversation</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-cyan-500/50 ${isDark 
                                        ? 'bg-gray-700/30 border border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50'
                                        : 'bg-gray-100/50 border border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                                    }`}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-cyan-500/50 ${isDark 
                                        ? 'bg-gray-700/30 border border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50'
                                        : 'bg-gray-100/50 border border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                                    }`}
                                />
                            </div>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-cyan-500/50 ${isDark 
                                    ? 'bg-gray-700/30 border border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50'
                                    : 'bg-gray-100/50 border border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                                }`}
                            />

                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className={`w-full p-4 rounded-xl transition-all duration-300 focus:outline-none focus:border-cyan-500/50 resize-none ${isDark 
                                    ? 'bg-gray-700/30 border border-gray-600/50 text-white placeholder-gray-400 focus:bg-gray-700/50'
                                    : 'bg-gray-100/50 border border-gray-300/50 text-gray-900 placeholder-gray-500 focus:bg-white/70'
                                }`}
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full p-4 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ContactPage;
