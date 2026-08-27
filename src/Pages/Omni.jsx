import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Users, Camera, Send, MessageSquare, 
  ArrowRight, Globe2, Smartphone, Blocks, Puzzle,
  LayoutTemplate,
  Database
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const Omnichannel = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section (Dark Theme based on reference) */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-20 lg:pt-24 lg:pb-32 bg-[#1e153b] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-white tracking-tight mb-8">
              Connect With Your <br />
              Customers in their Favorite <br />
              Messaging Apps
            </h1>
            <Link to="/try-for-free" className={`px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors`}>
              Try for Free
            </Link>
          </motion.div>

          {/* Hero Custom Graphic (Orbit style) without specific social icons */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 mt-16 lg:mt-0 relative h-[400px]">
             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm relative">
                   {/* Center Logo Placeholder */}
                   <div className="w-16 h-16 bg-[#6039ea] rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-8 h-8 text-white" />
                   </div>

                   {/* Orbiting Nodes using generic icons instead of social logos */}
                   <div className="absolute top-0 -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center border-4 border-[#1e153b] shadow-lg">
                      <MessageCircle className="w-5 h-5 text-white" />
                   </div>
                   <div className="absolute left-0 -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-[#1e153b] shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                   </div>
                   <div className="absolute bottom-0 translate-y-1/2 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center border-4 border-[#1e153b] shadow-lg">
                      <Camera className="w-5 h-5 text-white" />
                   </div>
                   <div className="absolute right-0 translate-x-1/2 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center border-4 border-[#1e153b] shadow-lg">
                      <Send className="w-5 h-5 text-white" />
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Deploy Apps Grid */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Deploy AI Chatbot Across Messaging Apps in 5 Mins
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          
          {/* App Card 1 (Green theme for WhatsApp equivalent) */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left h-full">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-8">
              Connect your WhatsApp Business account to Kas newerax to manage chats, and support customers effortlessly.
            </p>
            
          </motion.div>

          {/* App Card 2 (Blue theme for Facebook equivalent) */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left h-full">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Facebook</h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-8">
              Integrate Facebook Messenger with Kas newerax to automate support, and engage customers 24/7.
            </p>
            
          </motion.div>

          {/* App Card 3 (Pink theme for Instagram equivalent) */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left h-full">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center mb-6">
              <Camera className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instagram</h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-8">
              Automate Instagram Direct Messages via Kas newerax to offer instant, AI-powered responses and support.
            </p>
            
          </motion.div>

          {/* App Card 4 (Sky blue theme for Telegram equivalent) */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left h-full">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center mb-6">
              <Send className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Telegram</h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-8">
              Link Telegram with Kas newerax to receive, manage, and respond to messages from one unified dashboard.
            </p>
            
          </motion.div>

          {/* App Card 5 (Light Green theme for Line equivalent) */}
          <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left h-full md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
              <MessageSquare className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Line</h3>
            <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-8">
              Integrate Line with Kas newerax to manage, reply, and automate customer chats in real time.
            </p>
            
          </motion.div>

        </div>
      </motion.section>

      {/* Integration Platform Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20 max-w-4xl mx-auto">
          Install Anywhere & Connect With Your Favorite Services
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Platforms Box */}
          <motion.div variants={fadeInUp} className="flex flex-col h-full">
             <div className="w-full h-80 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center border border-gray-100 relative">
                {/* Generic Platform Circle UI */}
                <div className="w-64 h-64 border border-gray-200 rounded-full relative flex items-center justify-center">
                   <div className="w-16 h-16 bg-[#6039ea] rounded-full flex items-center justify-center shadow-md">
                      <MessageCircle className="w-8 h-8 text-white" />
                   </div>
                   <div className="absolute top-0 -translate-y-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"><Globe2 className="w-6 h-6 text-blue-500" /></div>
                   <div className="absolute bottom-0 translate-y-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"><Smartphone className="w-6 h-6 text-green-500" /></div>
                   <div className="absolute left-0 -translate-x-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"><Blocks className="w-6 h-6 text-orange-500" /></div>
                   <div className="absolute right-0 translate-x-1/2 bg-white p-3 rounded-full shadow-sm border border-gray-100"><LayoutTemplate className="w-6 h-6 text-purple-500" /></div>
                </div>
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Easily integrate across all your platforms</h3>
             <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
               Use powerful web and WordPress plugins, dedicated Android, iOS, and hybrid mobile SDKs to get your support system up and running. Deploy chatbots and live chat to Facebook, WhatsApp, and Line easily.
             </p>
             
          </motion.div>

          {/* Integrations Box */}
          <motion.div variants={fadeInUp} className="flex flex-col h-full">
             <div className="w-full h-80 bg-gray-50 rounded-3xl mb-8 flex items-center justify-center border border-gray-100 relative">
                {/* Generic Apps Connection UI */}
                <div className="w-full h-full p-8 relative flex items-center justify-center">
                   <div className="w-16 h-16 bg-[#6039ea] rounded-xl flex items-center justify-center shadow-md z-10 relative">
                      <MessageCircle className="w-8 h-8 text-white" />
                   </div>
                   
                   {/* Lines & Nodes */}
                   <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                      <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="50%" y1="50%" x2="25%" y2="75%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="50%" y1="50%" x2="75%" y2="75%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                   </svg>

                   <div className="absolute top-[20%] left-[20%] bg-white p-3 rounded-lg shadow-sm border border-gray-100"><Puzzle className="w-6 h-6 text-orange-500" /></div>
                   <div className="absolute top-[20%] right-[20%] bg-white p-3 rounded-lg shadow-sm border border-gray-100"><Users className="w-6 h-6 text-blue-500" /></div>
                   <div className="absolute bottom-[20%] left-[20%] bg-white p-3 rounded-lg shadow-sm border border-gray-100"><MessageSquare className="w-6 h-6 text-green-500" /></div>
                   <div className="absolute bottom-[20%] right-[20%] bg-white p-3 rounded-lg shadow-sm border border-gray-100"><Database className="w-6 h-6 text-sky-500" /></div>
                </div>
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Use Kas newerax with your favorite apps</h3>
             <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
               Do more with Kas newerax by connecting your favorite tools and seamlessly transfer data between them. Easily integrate with Facebook, WhatsApp, Line, Zapier, CRMs, and more apps.
             </p>
             
          </motion.div>

        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-[#f8f9fb] text-center px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Start Small. Prove Value. Scale Safely
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            You don't need to bet your entire support operation on AI.<br />
            Start with the conversations that are safe to automate using an AI agent.<br />
            Expand as confidence grows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors`}>
              Get Started
            </Link>
            <Link to="/demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors bg-white`}>
              See a Live Demo
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Omnichannel;