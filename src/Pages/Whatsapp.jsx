import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Zap, Clock, Smartphone, 
  Layers, ShieldCheck, Code2, ArrowRight
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

const WhatsAppIntegration = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section (Curved Background as per reference) */}
      <div className="relative bg-[#f8f9fb] rounded-b-[3rem] lg:rounded-b-[8rem] border-b border-gray-100 overflow-hidden">
        <motion.section 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="pt-24 pb-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            {/* Generic Green Message Icon to represent WhatsApp (Rule: No Social Icons) */}
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
               <MessageCircle className="w-10 h-10 text-white fill-current" />
            </div>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-[2.5rem] sm:text-5xl font-bold text-[#14142b] tracking-tight mb-6">
            WhatsApp
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            WhatsApp AI Agent that resolves repetitive customer queries instantly - with rich responses like forms, lists, and quick replies - and knows exactly when to step aside and hand the conversation to a human.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/try-for-free" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors`}>
              Try for Free
            </Link>
            <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors bg-white`}>
              Book a Demo
            </Link>
          </motion.div>
        </motion.section>
      </div>

      {/* Main Content & Sidebar */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Sidebar Menu */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/4">
            <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
               <ul className="space-y-4">
                 <li>
                   <Link to="#" className="flex items-center justify-between text-sm font-bold text-[#6039ea] bg-[#eef0ff] px-4 py-3 rounded-lg">
                     Overview <ArrowRight className="w-4 h-4" />
                   </Link>
                 </li>
                 <li>
                   <Link to="/pricing" className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-[#6039ea] hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors">
                     View plans and pricing <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                   </Link>
                 </li>

               </ul>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <motion.div variants={fadeInUp} className="w-full lg:w-3/4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-12">
              Enhance customer communication by integrating Kas newerax's AI Agent with your WhatsApp Business. Automate responses, provide instant support, and manage conversations effortlessly-all from a centralized dashboard.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Why Integrate Kas newerax AI Agent with Your WhatsApp Business?
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-purple-600" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Instant AI Training</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Train the AI agent on your existing FAQs and business data for personalized, automated responses-no manual setup required.</p>
                 </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Automated Assistance</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Engage customers round-the-clock, reducing response time and improving satisfaction.</p>
                 </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Enhanced Customer Experience</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Deliver seamless interactions with real-time chat, proactive messaging, and personalized responses.</p>
                 </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6 text-orange-600" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Centralized Management</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Track and manage all customer queries in one place, ensuring consistent support across all channels.</p>
                 </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-start gap-4">
                 <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Scalable & Secure</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Grow your business with a chatbot that scales with your needs while maintaining security and reliability.</p>
                 </div>
              </div>
            </div>

            <div className="bg-[#eef0ff] border border-[#d6dcff] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
               <p className="text-lg font-bold text-[#6039ea] m-0">Start automating your WhatsApp conversations today with Kas newerax!</p>
               <Link to="/get-started" className={`px-6 py-3 rounded-md ${bgPrimary} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors whitespace-nowrap`}>
                 Get Started Now
               </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Easy-to-Use AI-Powered Support Automation (Dark Theme) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#140f2d] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Easy-to-Use AI-Powered Support Automation
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-6">
             {/* Left Large Card */}
             <motion.div variants={fadeInUp} className="w-full lg:w-1/3 bg-[#1e1642] p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-xl font-bold mb-4">In Built Native Integration</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                  Kas newerax features native integration, eliminating the need for any manual coding or installation. You can seamlessly add Kas newerax AI to your existing workflow-even without any coding expertise.
                </p>
                <div className="w-full h-48 bg-[#2d1b6e] rounded-xl flex items-center justify-center border border-white/10">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-white" />
                   </div>
                </div>
             </motion.div>

             {/* Right Stacked Cards */}
             <div className="w-full lg:w-2/3 flex flex-col gap-6">
                <motion.div variants={fadeInUp} className="bg-[#1e1642] p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
                   <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Kas newerax offers round-the-clock support in over 100 languages, ensuring that whenever you face challenges or require a custom integration, our dedicated team is always available to assist you-no matter the time.
                   </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-[#1e1642] p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
                   <h3 className="text-lg font-bold mb-2">Latest AI Models for Accuracy</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Kas newerax utilizes cutting-edge AI models from OpenAI, Google Gemini, and Anthropic, allowing you to choose the perfect fit for your specific needs. Plus, our system automatically adapts to your content, eliminating the need for manual training.
                   </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-[#1e1642] p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
                   <h3 className="text-lg font-bold mb-2">One Stop Solution for Support</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Kas newerax is an incredibly user-friendly support automation solution that consolidates conversations from phone, email, chat, and social media into a single platform. Businesses can effortlessly automate support across all these channels without any hassle.
                   </p>
                </motion.div>
             </div>
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

export default WhatsAppIntegration;