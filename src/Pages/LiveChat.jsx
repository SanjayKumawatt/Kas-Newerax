import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Send, User, Sparkles, Code2, 
  Palette, LayoutDashboard, BarChart3, Settings, 
  Terminal, Globe2, Smartphone, MessageSquare, 
  Clock, CheckCircle2, ChevronRight, Hash
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

const LiveChat = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4.5rem] font-bold text-[#14142b] tracking-tight mb-6">
              Provide Instant Support with Live Chat
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Deliver your customers a personalized experience they deserve with the best Live Chat platform. Add it to your website and mobile apps in minutes to instantly boost customer engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/try-for-free" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors text-center`}>
                Try for Free
              </Link>
              <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors text-center`}>
                Book a Demo
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-400 font-medium">
              30 days free trial . No credit card required .  
            </p>
          </motion.div>

          {/* Hero Dashboard Mockup (Flat UI) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
            <div className="bg-[#f8f9fb] border border-gray-200 rounded-2xl shadow-sm h-[400px] flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-16 bg-[#2d1b6e] flex flex-col items-center py-6 gap-6">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                   <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                   <User className="w-4 h-4 text-white/50" />
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                   <Settings className="w-4 h-4 text-white/50" />
                </div>
              </div>
              {/* Conversation List */}
              <div className="w-1/3 bg-white border-r border-gray-200 p-4 hidden sm:flex flex-col gap-3">
                <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                <div className="p-3 bg-[#eef0ff] rounded-lg border border-[#d6dcff]">
                  <div className="h-3 w-20 bg-[#6039ea]/40 rounded mb-2"></div>
                  <div className="h-2 w-full bg-[#6039ea]/20 rounded"></div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
                  <div className="h-2 w-full bg-gray-200 rounded"></div>
                </div>
              </div>
              {/* Active Chat & Profile */}
              <div className="flex-1 flex bg-white">
                <div className="flex-1 flex flex-col border-r border-gray-200">
                  <div className="h-14 border-b border-gray-100 flex items-center px-4">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-4">
                    <div className="self-start bg-gray-100 p-3 rounded-2xl rounded-tl-sm w-3/4">
                       <div className="h-2 w-full bg-gray-300 rounded mb-2"></div>
                       <div className="h-2 w-2/3 bg-gray-300 rounded"></div>
                    </div>
                    <div className="self-end bg-[#6039ea] p-3 rounded-2xl rounded-tr-sm w-2/3">
                       <div className="h-2 w-full bg-white/50 rounded mb-2"></div>
                       <div className="h-2 w-1/2 bg-white/50 rounded"></div>
                    </div>
                  </div>
                  <div className="h-14 border-t border-gray-100 flex items-center px-4 gap-2">
                    <div className="flex-1 h-8 bg-gray-100 rounded-full"></div>
                    <div className="w-8 h-8 bg-[#6039ea] rounded-full flex items-center justify-center">
                       <Send className="w-3 h-3 text-white ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="w-1/3 bg-gray-50 p-4 hidden md:flex flex-col items-center gap-4">
                   <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                   <div className="h-3 w-20 bg-gray-300 rounded"></div>
                   <div className="w-full space-y-2 mt-4">
                      <div className="h-8 bg-white border border-gray-200 rounded w-full"></div>
                      <div className="h-8 bg-white border border-gray-200 rounded w-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-24 max-w-3xl mx-auto">
          Live Chat Features That Will Help You Win Customers For Life
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: Contextual Triggers */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Contextual Triggers</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Proactively engage with visitors with customizable messages on different pages and based on agent availability.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f0fcfc] rounded-3xl flex items-center justify-center border border-[#ccfbfb]">
                 <div className="w-3/4 max-w-sm relative">
                    {/* Trigger Popup Mockup */}
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-3 relative z-10 animate-bounce" style={{ animationDuration: '3s' }}>
                       <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-teal-600" />
                       </div>
                       <div>
                          <p className="text-xs font-semibold text-gray-800">Hi there! We are here to help.</p>
                          <p className="text-[10px] text-gray-500 mt-1">Drop us a message and we'll get back to you asap.</p>
                       </div>
                    </div>
                    {/* Input field */}
                    <div className="mt-4 bg-white rounded-full p-2 border border-gray-200 shadow-sm flex items-center justify-between">
                       <span className="text-xs text-gray-400 ml-3">Type your message...</span>
                       <div className="w-8 h-8 rounded-full bg-[#6039ea] flex items-center justify-center">
                          <Send className="w-3 h-3 text-white ml-0.5" />
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Real-Time Support (Shortcuts/Canned Responses) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Real-Time Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Help your customers when they need a real human touch and win them for life.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f8f9fb] rounded-3xl flex items-center justify-center border border-gray-100">
                 <div className="w-3/4 max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-1 flex flex-col">
                    {/* Canned Response Menu */}
                    <div className="p-2 space-y-1 bg-gray-50 rounded-t-lg">
                       <div className="flex items-center gap-2 p-2 rounded hover:bg-white border border-transparent hover:border-gray-200 cursor-pointer">
                          <span className="text-xs font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded">/greet</span>
                          <span className="text-xs text-gray-600">Hi! How can I help you today?</span>
                       </div>
                       <div className="flex items-center gap-2 p-2 rounded bg-white border border-[#6039ea] shadow-sm cursor-pointer relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#6039ea]"></div>
                          <span className="text-xs font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded">/pricing</span>
                          <span className="text-xs text-gray-800 font-medium truncate">Here is the link to our pricing...</span>
                       </div>
                       <div className="flex items-center gap-2 p-2 rounded hover:bg-white border border-transparent hover:border-gray-200 cursor-pointer">
                          <span className="text-xs font-bold text-[#6039ea] bg-[#eef0ff] px-1.5 py-0.5 rounded">/bye</span>
                          <span className="text-xs text-gray-600">Thank you! Have a great day.</span>
                       </div>
                    </div>
                    {/* Input */}
                    <div className="p-3 border-t border-gray-100 flex items-center gap-2">
                       <span className="text-sm font-medium text-gray-800">/p</span>
                       <span className="text-sm text-gray-400">|</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Easy Integration */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Easy Integration</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Add Live Chat to your website and mobile app in minutes and start engaging with your customers. No coding required!
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f0fdf4] rounded-3xl flex items-center justify-center border border-[#dcfce7] relative overflow-hidden">
                 {/* Code background */}
                 <div className="absolute top-6 left-6 right-6 bottom-16 bg-[#1e293b] rounded-xl shadow-sm p-4 font-mono text-[10px] text-gray-300">
                    <div className="flex gap-1 mb-3">
                       <div className="w-2 h-2 rounded-full bg-red-400"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                       <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <p><span className="text-pink-400">&lt;script</span> <span className="text-green-300">type</span>=<span className="text-yellow-300">"text/javascript"</span><span className="text-pink-400">&gt;</span></p>
                    <p className="pl-4">{"(function(d, m){"}</p>
                    <p className="pl-8 text-blue-300">{"var kasnewerax = {};"}</p>
                    <p className="pl-8 text-blue-300">{"kasnewerax.appId = 'YOUR_APP_ID';"}</p>
                    <p className="pl-8 text-gray-400">{"// Installation script..."}</p>
                    <p className="pl-4">{"})(document, window.kasnewerax || {});"}</p>
                    <p><span className="text-pink-400">&lt;/script&gt;</span></p>
                 </div>
                 {/* Chat Widget popping over code */}
                 <div className="absolute bottom-6 right-10 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center border-4 border-[#f0fdf4]">
                    <MessageCircle className="w-6 h-6 text-white" />
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Customizable Chat Widget */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Customizable Chat Widget</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Make the chat widget your own by customizing the theme, logo, and colors. Spin it the way you want.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fff5f5] rounded-3xl flex items-center justify-center border border-[#ffe4e6] relative">
                 {/* Widget Mockup */}
                 <div className="w-64 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden relative z-10">
                    <div className="bg-[#ec4899] p-4 flex items-center gap-3 transition-colors duration-500">
                       <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <LayoutDashboard className="w-4 h-4 text-white" />
                       </div>
                       <span className="text-sm font-semibold text-white">Kas newerax</span>
                    </div>
                    <div className="p-4 bg-gray-50 h-32 flex flex-col justify-end">
                       <div className="self-end bg-[#ec4899] text-white text-[10px] p-2 rounded-xl rounded-tr-sm mb-2">Hello! How are you?</div>
                    </div>
                    <div className="p-2 border-t border-gray-100 bg-white">
                       <div className="h-6 w-full bg-gray-100 rounded-full"></div>
                    </div>
                 </div>
                 {/* Color Picker Swatches */}
                 <div className="absolute right-10 flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6039ea] border-2 border-white shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-[#ec4899] border-2 border-gray-800 shadow-sm scale-110"></div>
                    <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white shadow-sm"></div>
                    <div className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white shadow-sm"></div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 5: Single Dashboard For All Conversations (Generic Icons Only) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Single Dashboard For All Conversations</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Manage all messages from different channels - Mobile Apps, Websites, WhatsApp, Facebook Messenger, Instagram, and others from one dashboard. Never miss a thing!
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fdf4ff] rounded-3xl flex items-center justify-center border border-[#fae8ff] relative">
                 {/* Central Inbox */}
                 <div className="w-32 h-32 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center relative z-10">
                    <LayoutDashboard className="w-8 h-8 text-[#6039ea] mb-2" />
                    <span className="text-[10px] font-bold text-gray-700">All Messages</span>
                 </div>
                 
                 {/* Generic Channel Nodes connecting to center */}
                 {/* Website */}
                 <div className="absolute top-10 left-12 w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-blue-500" />
                 </div>
                 <div className="absolute top-16 left-24 w-16 border-t-2 border-dashed border-gray-300 transform rotate-12"></div>
                 
                 {/* Mobile App */}
                 <div className="absolute bottom-10 left-16 w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-green-500" />
                 </div>
                 <div className="absolute bottom-16 left-28 w-12 border-t-2 border-dashed border-gray-300 transform -rotate-45"></div>
                 
                 {/* Messaging 1 */}
                 <div className="absolute top-10 right-12 w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-teal-500" />
                 </div>
                 <div className="absolute top-16 right-24 w-16 border-t-2 border-dashed border-gray-300 transform -rotate-12"></div>
                 
                 {/* Messaging 2 (e.g., Social) */}
                 <div className="absolute bottom-10 right-16 w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Hash className="w-5 h-5 text-pink-500" />
                 </div>
                 <div className="absolute bottom-16 right-28 w-12 border-t-2 border-dashed border-gray-300 transform rotate-45"></div>
              </div>
            </motion.div>
          </div>

          {/* Feature 6: Advanced Reporting */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Advanced Reporting</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Powerful granular reporting to assess overall and individual performances. Make data-driven decisions to increase overall productivity.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fffbeb] rounded-3xl flex items-center justify-center border border-[#fef3c7]">
                 <div className="w-3/4 h-56 bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                       <span className="text-xs font-bold text-gray-800">Performance Metrics</span>
                       <span className="text-[10px] text-gray-400">Last 7 Days</span>
                    </div>
                    <div className="flex-1 flex items-end gap-3 justify-between px-2 pt-4 border-b border-gray-100">
                       {/* Bar Chart Mockup */}
                       {[30, 70, 45, 90, 65, 80, 50].map((height, i) => (
                         <div key={i} className="w-6 bg-amber-400 rounded-t-sm" style={{ height: `${height}%` }}></div>
                       ))}
                    </div>
                    <div className="flex justify-between mt-2">
                       <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500">Total Chats</span>
                          <span className="text-sm font-bold text-gray-900">1,248</span>
                       </div>
                       <div className="flex flex-col text-right">
                          <span className="text-[10px] text-gray-500">Avg Resolution Time</span>
                          <span className="text-sm font-bold text-[#6039ea]">2m 14s</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

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

export default LiveChat;