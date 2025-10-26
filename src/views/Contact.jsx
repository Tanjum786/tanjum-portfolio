import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram, Facebook, Send, Phone, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
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

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setSubmitStatus(''), 3000);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden mt-12">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase border border-purple-400/30 px-4 py-2 rounded-full bg-purple-400/10">
                            LET'S CONNECT
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Get in{' '}
                        <span className="italic bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or just want to chat? I'd love to hear from you. Let's discuss how we
                        can bring your ideas to life.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-8 text-white">Contact Info</h2>

                            {/* Email */}
                            <div className="group mb-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                                        <Mail className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm uppercase tracking-wider">Email</h3>
                                        <p className="text-white font-medium">nabinkhari2@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="group mb-6 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                                        <MapPin className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm uppercase tracking-wider">Location</h3>
                                        <p className="text-white font-medium">Dharan, Nepal</p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="group mb-8 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                                        <Clock className="text-purple-400" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-400 text-sm uppercase tracking-wider">Response Time</h3>
                                        <p className="text-white font-medium">Within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-white font-bold mb-6 text-xl">Social Links</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <a href="#" className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                                    <Github className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-2" size={24} />
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">GitHub</span>
                                </a>
                                <a href="#" className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                                    <Linkedin className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-2" size={24} />
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">LinkedIn</span>
                                </a>
                                <a href="#" className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                                    <Instagram className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-2" size={24} />
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">Instagram</span>
                                </a>
                                <a href="#" className="group p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                                    <Facebook className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300 mb-2" size={24} />
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm">Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Response Note */}
                        <div className="text-center p-4 bg-purple-500/5 rounded-xl border border-purple-500/20">
                            <p className="text-purple-400 text-sm">
                                I typically respond within 24 hours. Looking forward to hearing from you!
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-gray-800/20 rounded-3xl p-8 border border-gray-700/30 backdrop-blur-sm">
                        <div className="mb-8">
                            <div className="flex items-center space-x-3 mb-4">
                                <MessageCircle className="text-purple-400" size={24} />
                                <span className="text-gray-400 text-sm uppercase tracking-wider">Send Message</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Start a Conversation</h2>
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
                                    className="w-full p-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-700/50 transition-all duration-300"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-700/50 transition-all duration-300"
                                />
                            </div>

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                                className="w-full p-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-700/50 transition-all duration-300"
                            />

                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                rows={6}
                                className="w-full p-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-700/50 transition-all duration-300 resize-none"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full p-4 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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

                            {submitStatus === 'success' && (
                                <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                    <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
