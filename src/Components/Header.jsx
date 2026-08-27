import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, Menu, X, Sparkles, Bot, Mic, Mail, MessageCircle, HelpCircle,
    MessagesSquare, Stethoscope, GraduationCap, Landmark, ShoppingCart, Gamepad2,
    Plane, RadioTower, ShieldCheck, BrainCircuit, MessageSquare, Brain, Users,
    FileText, Info, PhoneCall
} from 'lucide-react';

import logo from "../assets/logo.png"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    // Primary Theme Color based on reference site
    const themeColor = "text-[#6039ea]";
    const bgThemeColor = "bg-[#6039ea]";

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className={`flex items-center gap-1 font-bold text-2xl ${themeColor}`}>
                           <img src={logo} className='h-8' alt="" />
                            <span className="tracking-tight">kasnewerax</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">

                        {/* Solutions Dropdown */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => handleMouseEnter('solutions')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors">
                                Solutions <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'solutions' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 top-full mt-[-10px] w-[600px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden flex"
                                    >
                                        <div className="w-1/2 p-6 bg-white border-r border-gray-50">
                                            <h3 className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}>Products</h3>
                                            <ul className="space-y-4">
                                                {[
                                                    { name: 'Generative AI Chatbot', icon: Sparkles, to: '/generative-ai' },
                                                    { name: 'Kas AI Agent Builder', icon: Bot, to: '/kas-ai-builder' },                          { name: 'Voice AI Agent', icon: Mic, to: '/voice-ai' },
                                                    { name: 'AI Email Ticketing', icon: Mail, to: '/email-ticketing' },
                                                    { name: 'Live Chat', icon: MessageCircle, to: '/live-chat' },
                                                    { name: 'FAQ Chatbot', icon: HelpCircle, to: '/faq-chatbot' },
                                                    { name: 'Omnichannel Messaging', icon: MessagesSquare, to: '/omnichannel' }
                                                ].map((item, idx) => (
                                                    <li key={idx}>
                                                        <Link to={item.to} className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group">
                                                            <item.icon className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`} />
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="w-1/2 p-6 bg-slate-50/50">
                                            <h3 className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}>Industries</h3>
                                            <ul className="space-y-4">
                                                {[
                                                    { name: 'Healthcare', icon: Stethoscope, to: '/healthcare' },
                                                    { name: 'Education', icon: GraduationCap, to: '/education' },
                                                    { name: 'Banking', icon: Landmark, to: '/banking' },
                                                    { name: 'e-Commerce', icon: ShoppingCart, to: '/e-commerce' },
                                                    // { name: 'Gaming', icon: Gamepad2, to: '/gaming' },
                                                    // { name: 'Travel', icon: Plane, to: '/travel' },
                                                    // { name: 'Telecom', icon: RadioTower, to: '/telecom' },
                                                    // { name: 'Insurance', icon: ShieldCheck, to: '/insurance' }
                                                ].map((item, idx) => (
                                                    <li key={idx}>
                                                        <Link to={item.to} className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group">
                                                            <item.icon className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`} />
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Integrations Dropdown */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => handleMouseEnter('integrations')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors">
                                Integrations <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'integrations' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-[-10px] w-[200px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex"
                                    >
                                        <div className="w-1/2 p-6 border-r border-gray-50">
                                            <h3 className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}>Popular Integrations</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link to="/integration/openai" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea]">
                                                        <BrainCircuit className="w-5 h-5 text-black" /> OpenAI
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/integration/whatsapp" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea]">
                                                        <MessageCircle className="w-5 h-5 text-green-500 fill-current" /> WhatsApp
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Custom AI Agents */}
                        <Link to="/custom-ai-agents" className="flex items-center gap-1.5 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors py-8">
                            Custom AI Agents
                            <span className={`text-[10px] font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded`}>NEW</span>
                        </Link>

                        {/* Resources Dropdown */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors">
                                Resources <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'resources' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-[-10px] w-[450px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 flex"
                                    >
                                        <div className="w-1/2 p-6 border-r border-gray-50">
                                            <h3 className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}>Resources</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link to="/blogs" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group">
                                                        <FileText className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`} /> Blogs
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="w-1/2 p-6 bg-slate-50/50">
                                            <h3 className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}>Company</h3>
                                            <ul className="space-y-4">
                                                <li>
                                                    <Link to="/about-us" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group">
                                                        <Info className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`} /> About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/contact-us" className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group">
                                                        <PhoneCall className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`} /> Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link to="/pricing" className="text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors py-8">
                            Pricing
                        </Link>
                    </nav>

                    {/* Action Buttons (Desktop) */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/login" className="text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors mr-2">
                            Login
                        </Link>
                        <Link to="/book-demo" className={`px-5 py-2.5 rounded-md border border-[#6039ea] ${themeColor} font-semibold text-sm hover:bg-indigo-50 transition-colors`}>
                            Book a Demo
                        </Link>
                        <Link to="/try-for-free" className={`px-5 py-2.5 rounded-md ${bgThemeColor} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors shadow-sm`}>
                            Try for Free
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-800 hover:text-[#6039ea] focus:outline-none p-2"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4 shadow-inner">
                            <div className="space-y-1 pt-2">
                                <p className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase">Menu</p>
                                <Link to="/solutions" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-indigo-50 hover:text-[#6039ea] rounded-md">Solutions</Link>
                                <Link  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-indigo-50 hover:text-[#6039ea] rounded-md">Integrations</Link>
                                <Link to="/custom-ai-agents" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-indigo-50 hover:text-[#6039ea] rounded-md">Custom AI Agents <span className="text-[10px] font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded ml-2">NEW</span></Link>
                                <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-indigo-50 hover:text-[#6039ea] rounded-md">Resources</Link>
                                <Link to="/pricing" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-indigo-50 hover:text-[#6039ea] rounded-md">Pricing</Link>
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
                                <Link to="/login" className="text-center w-full py-2.5 text-base font-medium text-gray-900 hover:text-[#6039ea]">Login</Link>
                                <Link to="/book-demo" className={`text-center w-full py-2.5 rounded-md border border-[#6039ea] ${themeColor} font-semibold text-base`}>Book a Demo</Link>
                                <Link to="/try-for-free" className={`text-center w-full py-2.5 rounded-md ${bgThemeColor} text-white font-semibold text-base`}>Try for Free</Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;