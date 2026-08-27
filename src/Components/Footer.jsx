import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

import logo from "../assets/logo.png"


const Footer = () => {
    const themeColor = "text-[#6039ea]";
    const hoverTheme = "hover:text-[#6039ea]";

    return (
        <footer className="bg-white border-t border-gray-200 font-sans pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Company Info */}
                    <div className="space-y-6 lg:pr-4">
                        <Link to="/" className={`flex items-center gap-1 font-bold text-2xl ${themeColor}`}>
<img src={logo} className='h-8' alt="" />                            <span className="tracking-tight">Kas newerax</span>
                        </Link>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Automate customer conversations fast - without losing control, CSAT, or sleep. A unified AI agent experience for real support teams.
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="block text-gray-800 mb-1">KAS NEWERAX TECHNOLOGY PRIVATE LIMITED</strong>
                                    Khasra No.1423, Nand Vihar Fulsungi, <br />
                                    Rudarpur, Kichha, Udham Singh Nagar, <br />
                                    Uttarakhand, India, 263153.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                <a href="mailto:contact@kasneweraxtech.in" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>
                                    contact@kasneweraxtech.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Products & Solutions */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Products</h3>
                        <ul className="space-y-4">
                            <li><Link to="/generative-ai" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Generative AI Chatbot</Link></li>
                            <li><Link to="/kas-ai-builder" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Kas AI Agent Builder</Link></li>
                            <li><Link to="/voice-ai" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Voice AI Agent</Link></li>
                            <li><Link to="/email-ticketing" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>AI Email Ticketing</Link></li>
                            <li><Link to="/live-chat" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Live Chat</Link></li>
                            <li><Link to="/custom-ai-agents" className={`text-sm text-gray-600 ${hoverTheme} transition-colors flex items-center gap-2`}>
                                Custom AI Agents <span className="text-[9px] font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded">NEW</span>
                            </Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources & Company */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Company & Resources</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about-us" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>About Us</Link></li>
                            <li><Link to="/contact-us" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Contact Us</Link></li>
                            <li><Link to="/pricing" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Pricing</Link></li>
                            <li><Link to="/blogs" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Blogs</Link></li>
                            <li><Link to="/book-demo" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Book a Demo</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link to="/terms-of-service" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Privacy Policy</Link></li>
                            {/* <li><Link to="/cookie-policy" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Cookie Policy</Link></li>
                            <li><Link to="/refund-policy" className={`text-sm text-gray-600 ${hoverTheme} transition-colors`}>Refund & Cancellation</Link></li> */}
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} KAS NEWERAX TECHNOLOGY PRIVATE LIMITED. All rights reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;