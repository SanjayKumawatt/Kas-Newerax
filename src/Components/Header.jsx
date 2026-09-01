import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown,
    Menu,
    X,
    Sparkles,
    Bot,
    Mic,
    Mail,
    MessageCircle,
    HelpCircle,
    MessagesSquare,
    Stethoscope,
    GraduationCap,
    Landmark,
    ShoppingCart,
    BrainCircuit,
    FileText,
    Info,
    PhoneCall
} from 'lucide-react';

import logo from "../assets/logo.png";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    const themeColor = "text-[#6039ea]";
    const bgThemeColor = "bg-[#6039ea]";

    const handleMouseEnter = (menu) => {
        setActiveDropdown(menu);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (menu) => {
        setMobileDropdown((prev) => (prev === menu ? null : menu));
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileDropdown(null);
    };

    const products = [
        {
            name: 'Generative AI Chatbot',
            icon: Sparkles,
            to: '/generative-ai'
        },
        {
            name: 'Kas AI Agent Builder',
            icon: Bot,
            to: '/kas-ai-builder'
        },
        {
            name: 'Voice AI Agent',
            icon: Mic,
            to: '/voice-ai'
        },
        {
            name: 'AI Email Ticketing',
            icon: Mail,
            to: '/email-ticketing'
        },
        {
            name: 'Live Chat',
            icon: MessageCircle,
            to: '/live-chat'
        },
        {
            name: 'FAQ Chatbot',
            icon: HelpCircle,
            to: '/faq-chatbot'
        },
        {
            name: 'Omnichannel Messaging',
            icon: MessagesSquare,
            to: '/omnichannel'
        }
    ];

    const industries = [
        {
            name: 'Healthcare',
            icon: Stethoscope,
            to: '/healthcare'
        },
        {
            name: 'Education',
            icon: GraduationCap,
            to: '/education'
        },
        {
            name: 'Banking',
            icon: Landmark,
            to: '/banking'
        },
        {
            name: 'e-Commerce',
            icon: ShoppingCart,
            to: '/e-commerce'
        }
    ];

    const integrations = [
        {
            name: 'OpenAI',
            icon: BrainCircuit,
            to: '/integration/openai',
            iconClass: 'text-black'
        },
        {
            name: 'WhatsApp',
            icon: MessageCircle,
            to: '/integration/whatsapp',
            iconClass: 'text-green-500 fill-current'
        }
    ];

    const resources = [
        {
            name: 'Blogs',
            icon: FileText,
            to: '/blogs'
        }
    ];

    const company = [
        {
            name: 'About Us',
            icon: Info,
            to: '/about-us'
        },
        {
            name: 'Contact Us',
            icon: PhoneCall,
            to: '/contact-us'
        }
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm font-sans">

            {/* ================= HEADER ================= */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center min-h-20">

                    {/* ================= LOGO ================= */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link
                            to="/"
                            onClick={closeMobileMenu}
                            className={`flex items-center gap-1 font-bold text-2xl ${themeColor}`}
                        >
                            <img
                                src={logo}
                                className="h-8 w-auto object-contain"
                                alt="Kas Newerax"
                            />

                            <span className="tracking-tight">
                                kasnewerax
                            </span>
                        </Link>
                    </div>

                    {/* ================= DESKTOP NAVIGATION ================= */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">

                        {/* ================= SOLUTIONS ================= */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => handleMouseEnter('solutions')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                type="button"
                                className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors"
                            >
                                Solutions
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'solutions' && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-[-10px] w-[600px] max-w-[90vw] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden flex"
                                    >

                                        {/* PRODUCTS */}
                                        <div className="w-1/2 p-6 bg-white border-r border-gray-50">

                                            <h3
                                                className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}
                                            >
                                                Products
                                            </h3>

                                            <ul className="space-y-4">
                                                {products.map((item) => {
                                                    const Icon = item.icon;

                                                    return (
                                                        <li key={item.to}>
                                                            <Link
                                                                to={item.to}
                                                                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group"
                                                            >
                                                                <Icon
                                                                    className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`}
                                                                />

                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                        {/* INDUSTRIES */}
                                        <div className="w-1/2 p-6 bg-slate-50/50">

                                            <h3
                                                className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}
                                            >
                                                Industries
                                            </h3>

                                            <ul className="space-y-4">
                                                {industries.map((item) => {
                                                    const Icon = item.icon;

                                                    return (
                                                        <li key={item.to}>
                                                            <Link
                                                                to={item.to}
                                                                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group"
                                                            >
                                                                <Icon
                                                                    className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`}
                                                                />

                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ================= INTEGRATIONS ================= */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => handleMouseEnter('integrations')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                type="button"
                                className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors"
                            >
                                Integrations
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'integrations' && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-[-10px] w-[240px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden"
                                    >

                                        <div className="p-6">

                                            <h3
                                                className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}
                                            >
                                                Popular Integrations
                                            </h3>

                                            <ul className="space-y-4">
                                                {integrations.map((item) => {
                                                    const Icon = item.icon;

                                                    return (
                                                        <li key={item.to}>
                                                            <Link
                                                                to={item.to}
                                                                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group"
                                                            >
                                                                <Icon
                                                                    className={`w-5 h-5 ${item.iconClass} group-hover:scale-110 transition-transform`}
                                                                />

                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>

                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ================= CUSTOM AI AGENTS ================= */}
                        <Link
                            to="/custom-ai-agents"
                            className="flex items-center gap-1.5 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors py-8 whitespace-nowrap"
                        >
                            Custom AI Agents

                            <span className="text-[10px] font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded">
                                NEW
                            </span>
                        </Link>

                        {/* ================= RESOURCES ================= */}
                        <div
                            className="relative py-8"
                            onMouseEnter={() => handleMouseEnter('resources')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                type="button"
                                className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors"
                            >
                                Resources
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            <AnimatePresence>
                                {activeDropdown === 'resources' && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 10
                                        }}
                                        transition={{
                                            duration: 0.2
                                        }}
                                        className="absolute left-1/2 -translate-x-1/2 top-full mt-[-10px] w-[450px] max-w-[90vw] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-50 overflow-hidden flex"
                                    >

                                        {/* RESOURCES */}
                                        <div className="w-1/2 p-6 border-r border-gray-50">

                                            <h3
                                                className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}
                                            >
                                                Resources
                                            </h3>

                                            <ul className="space-y-4">
                                                {resources.map((item) => {
                                                    const Icon = item.icon;

                                                    return (
                                                        <li key={item.to}>
                                                            <Link
                                                                to={item.to}
                                                                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group"
                                                            >
                                                                <Icon
                                                                    className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`}
                                                                />

                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>

                                        </div>

                                        {/* COMPANY */}
                                        <div className="w-1/2 p-6 bg-slate-50/50">

                                            <h3
                                                className={`text-sm font-semibold ${themeColor} mb-4 uppercase tracking-wider`}
                                            >
                                                Company
                                            </h3>

                                            <ul className="space-y-4">
                                                {company.map((item) => {
                                                    const Icon = item.icon;

                                                    return (
                                                        <li key={item.to}>
                                                            <Link
                                                                to={item.to}
                                                                className="flex items-center gap-3 text-sm font-medium text-gray-700 hover:text-[#6039ea] group"
                                                            >
                                                                <Icon
                                                                    className={`w-5 h-5 ${themeColor} group-hover:scale-110 transition-transform`}
                                                                />

                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>

                                        </div>

                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ================= PRICING ================= */}
                        <Link
                            to="/pricing"
                            className="text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors py-8"
                        >
                            Pricing
                        </Link>

                    </nav>

                    {/* ================= DESKTOP ACTION BUTTONS ================= */}
                    <div className="hidden lg:flex items-center gap-3 xl:gap-4">

                        <Link
                            to="/login"
                            className="text-[15px] font-medium text-gray-800 hover:text-[#6039ea] transition-colors mr-1"
                        >
                            Login
                        </Link>

                        <Link
                            to="/book-demo"
                            className={`px-4 xl:px-5 py-2.5 rounded-md border border-[#6039ea] ${themeColor} font-semibold text-sm hover:bg-indigo-50 transition-colors whitespace-nowrap`}
                        >
                            Book a Demo
                        </Link>

                        <Link
                            to="/try-for-free"
                            className={`px-4 xl:px-5 py-2.5 rounded-md ${bgThemeColor} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors shadow-sm whitespace-nowrap`}
                        >
                            Try for Free
                        </Link>

                    </div>

                    {/* ================= MOBILE MENU BUTTON ================= */}
                    <div className="lg:hidden flex items-center">

                        <button
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-800 hover:text-[#6039ea] focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>

                    </div>

                </div>
            </div>

            {/* ================= MOBILE NAVIGATION ================= */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0
                        }}
                        animate={{
                            height: 'auto',
                            opacity: 1
                        }}
                        exit={{
                            height: 0,
                            opacity: 0
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut"
                        }}
                        className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >

                        <div className="px-4 sm:px-6 pt-2 pb-6 shadow-inner max-h-[calc(100vh-80px)] overflow-y-auto">

                            {/* MENU TITLE */}
                            <div className="pt-2 pb-2">
                                <p className="px-1 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Menu
                                </p>
                            </div>

                            {/* ================= MOBILE SOLUTIONS ================= */}
                            <div className="border-b border-gray-100">

                                <button
                                    type="button"
                                    onClick={() => toggleMobileDropdown('solutions')}
                                    className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-indigo-50 hover:text-[#6039ea] transition-colors"
                                >
                                    <span>Solutions</span>

                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-200 ${
                                            mobileDropdown === 'solutions'
                                                ? 'rotate-180 text-[#6039ea]'
                                                : ''
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {mobileDropdown === 'solutions' && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="pb-3 pl-3 pr-1">

                                                {/* PRODUCTS */}
                                                <div className="rounded-xl bg-gray-50 p-3 mb-2">

                                                    <p
                                                        className={`px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider ${themeColor}`}
                                                    >
                                                        Products
                                                    </p>

                                                    <div className="space-y-1">
                                                        {products.map((item) => {
                                                            const Icon = item.icon;

                                                            return (
                                                                <Link
                                                                    key={item.to}
                                                                    to={item.to}
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:text-[#6039ea] transition-colors"
                                                                >
                                                                    <Icon
                                                                        className={`w-5 h-5 flex-shrink-0 ${themeColor}`}
                                                                    />

                                                                    <span>
                                                                        {item.name}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>

                                                </div>

                                                {/* INDUSTRIES */}
                                                <div className="rounded-xl bg-slate-50 p-3">

                                                    <p
                                                        className={`px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider ${themeColor}`}
                                                    >
                                                        Industries
                                                    </p>

                                                    <div className="space-y-1">
                                                        {industries.map((item) => {
                                                            const Icon = item.icon;

                                                            return (
                                                                <Link
                                                                    key={item.to}
                                                                    to={item.to}
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:text-[#6039ea] transition-colors"
                                                                >
                                                                    <Icon
                                                                        className={`w-5 h-5 flex-shrink-0 ${themeColor}`}
                                                                    />

                                                                    <span>
                                                                        {item.name}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>

                                                </div>

                                            </div>

                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>

                            {/* ================= MOBILE INTEGRATIONS ================= */}
                            <div className="border-b border-gray-100">

                                <button
                                    type="button"
                                    onClick={() => toggleMobileDropdown('integrations')}
                                    className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-indigo-50 hover:text-[#6039ea] transition-colors"
                                >
                                    <span>Integrations</span>

                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-200 ${
                                            mobileDropdown === 'integrations'
                                                ? 'rotate-180 text-[#6039ea]'
                                                : ''
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {mobileDropdown === 'integrations' && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="pb-3 pl-3 pr-1">

                                                <div className="rounded-xl bg-gray-50 p-3">

                                                    <p
                                                        className={`px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider ${themeColor}`}
                                                    >
                                                        Popular Integrations
                                                    </p>

                                                    <div className="space-y-1">
                                                        {integrations.map((item) => {
                                                            const Icon = item.icon;

                                                            return (
                                                                <Link
                                                                    key={item.to}
                                                                    to={item.to}
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:text-[#6039ea] transition-colors"
                                                                >
                                                                    <Icon
                                                                        className={`w-5 h-5 flex-shrink-0 ${item.iconClass}`}
                                                                    />

                                                                    <span>
                                                                        {item.name}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>

                                                </div>

                                            </div>

                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>

                            {/* ================= CUSTOM AI AGENTS ================= */}
                            <Link
                                to="/custom-ai-agents"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-indigo-50 hover:text-[#6039ea] transition-colors border-b border-gray-100"
                            >
                                <span>Custom AI Agents</span>

                                <span className="text-[10px] font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded">
                                    NEW
                                </span>
                            </Link>

                            {/* ================= MOBILE RESOURCES ================= */}
                            <div className="border-b border-gray-100">

                                <button
                                    type="button"
                                    onClick={() => toggleMobileDropdown('resources')}
                                    className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-indigo-50 hover:text-[#6039ea] transition-colors"
                                >
                                    <span>Resources</span>

                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-200 ${
                                            mobileDropdown === 'resources'
                                                ? 'rotate-180 text-[#6039ea]'
                                                : ''
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {mobileDropdown === 'resources' && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0
                                            }}
                                            className="overflow-hidden"
                                        >

                                            <div className="pb-3 pl-3 pr-1">

                                                {/* RESOURCES */}
                                                <div className="rounded-xl bg-gray-50 p-3 mb-2">

                                                    <p
                                                        className={`px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider ${themeColor}`}
                                                    >
                                                        Resources
                                                    </p>

                                                    <div className="space-y-1">
                                                        {resources.map((item) => {
                                                            const Icon = item.icon;

                                                            return (
                                                                <Link
                                                                    key={item.to}
                                                                    to={item.to}
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:text-[#6039ea] transition-colors"
                                                                >
                                                                    <Icon
                                                                        className={`w-5 h-5 flex-shrink-0 ${themeColor}`}
                                                                    />

                                                                    <span>
                                                                        {item.name}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>

                                                </div>

                                                {/* COMPANY */}
                                                <div className="rounded-xl bg-slate-50 p-3">

                                                    <p
                                                        className={`px-2 pb-2 pt-1 text-xs font-bold uppercase tracking-wider ${themeColor}`}
                                                    >
                                                        Company
                                                    </p>

                                                    <div className="space-y-1">
                                                        {company.map((item) => {
                                                            const Icon = item.icon;

                                                            return (
                                                                <Link
                                                                    key={item.to}
                                                                    to={item.to}
                                                                    onClick={closeMobileMenu}
                                                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:text-[#6039ea] transition-colors"
                                                                >
                                                                    <Icon
                                                                        className={`w-5 h-5 flex-shrink-0 ${themeColor}`}
                                                                    />

                                                                    <span>
                                                                        {item.name}
                                                                    </span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>

                                                </div>

                                            </div>

                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>

                            {/* ================= PRICING ================= */}
                            <Link
                                to="/pricing"
                                onClick={closeMobileMenu}
                                className="block px-3 py-3 text-base font-medium text-gray-900 rounded-lg hover:bg-indigo-50 hover:text-[#6039ea] transition-colors"
                            >
                                Pricing
                            </Link>

                            {/* ================= MOBILE ACTION BUTTONS ================= */}
                            <div className="pt-5 mt-2 border-t border-gray-100 flex flex-col gap-3">

                                <Link
                                    to="/login"
                                    onClick={closeMobileMenu}
                                    className="text-center w-full py-3 text-base font-medium text-gray-900 hover:text-[#6039ea] rounded-lg transition-colors"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/book-demo"
                                    onClick={closeMobileMenu}
                                    className={`text-center w-full py-3 rounded-lg border border-[#6039ea] ${themeColor} font-semibold text-base hover:bg-indigo-50 transition-colors`}
                                >
                                    Book a Demo
                                </Link>

                                <Link
                                    to="/try-for-free"
                                    onClick={closeMobileMenu}
                                    className={`text-center w-full py-3 rounded-lg ${bgThemeColor} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors shadow-sm`}
                                >
                                    Try for Free
                                </Link>

                            </div>

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
};

export default Header;