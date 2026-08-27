import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

const Hero = () => {
  const themeColor = "text-[#6039ea]";
  const bgThemeColor = "bg-[#6039ea]";

  return (
    <section className="w-full bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight">
              Automate customer <br className="hidden lg:block" />
              conversations fast - <br />
              <span className={themeColor}>without losing control, <br className="hidden lg:block"/> CSAT, or sleep.</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              KAS NEWERAX TECHNOLOGY PRIVATE LIMITED helps customer support teams reduce ticket volume using AI that knows when to answer, when to escalate, and when to step aside. Each AI agent operates with clear boundaries.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                to="/try-for-free" 
                className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgThemeColor} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors text-center`}
              >
                Try for Free
              </Link>
              <Link 
                to="/book-demo" 
                className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${themeColor} font-semibold text-base hover:bg-indigo-50 transition-colors text-center`}
              >
                Book a Demo
              </Link>
            </div>
            
            <p className="mt-5 text-sm text-gray-400 font-medium">
              No Credit Card Required . 30 Days Free Trial . Rated 4.8/5 on G2
            </p>
          </motion.div>

          {/* Right Content Area (Chat Mockup) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            {/* Flat, clean background as per preference */}
            <div className="bg-[#f4f5f8] rounded-xl p-6 sm:p-8 w-full max-w-lg mx-auto lg:mr-0 flex flex-col gap-6 relative">
              
              {/* Message 1: User */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex justify-end items-end gap-3"
              >
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tr-sm p-4 text-[14.5px] text-gray-700 shadow-sm max-w-[80%] leading-relaxed">
                  I don't recognize the ₹500 charge on my card. Can you explain what is it?
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                   <User className="w-5 h-5 text-gray-500" />
                </div>
              </motion.div>

              {/* Message 2: Bot */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="flex justify-start items-end gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#f4a261] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                   {/* Flat bot face representation */}
                   <div className="w-6 h-6 bg-[#2a9d8f] rounded flex items-center justify-center">
                     <Bot className="w-4 h-4 text-white" />
                   </div>
                </div>
                <div className="bg-white border border-[#eef0ff] rounded-2xl rounded-tl-sm p-4 text-[14.5px] text-gray-700 shadow-sm max-w-[80%] leading-relaxed">
                  It looks like the extra ₹500 charge was applied as a late payment due charge.
                </div>
              </motion.div>

              {/* Message 3: User */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.8 }}
                className="flex justify-end items-end gap-3"
              >
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tr-sm p-3 px-4 text-[14.5px] text-gray-700 shadow-sm max-w-[80%] leading-relaxed">
                  But I paid on time
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                   <User className="w-5 h-5 text-gray-500" />
                </div>
              </motion.div>

              {/* Message 4: Bot */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.4 }}
                className="flex justify-start items-end gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#f4a261] flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                   <div className="w-6 h-6 bg-[#2a9d8f] rounded flex items-center justify-center">
                     <Bot className="w-4 h-4 text-white" />
                   </div>
                </div>
                <div className="bg-white border border-[#eef0ff] rounded-2xl rounded-tl-sm p-4 text-[14.5px] text-gray-700 shadow-sm max-w-[80%] leading-relaxed">
                  This looks like a technical issue. I am handing over the chat to one of our agents
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;