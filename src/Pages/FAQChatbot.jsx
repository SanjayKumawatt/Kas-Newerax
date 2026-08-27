import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Search, LayoutTemplate, Palette, Zap, 
  MessageCircle, Sparkles, CheckCircle2, 
  Plus, Minus, ArrowRight
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

const FaqChatbot = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "How does a generative AI chatbot work?",
    "What are the benefits of using a generative AI chatbot?",
    "Can I integrate a generative AI chatbot with my existing CRM tools?",
    "Is a generative AI chatbot suitable for my business?",
    "Can the generative AI chatbot understand multiple languages?",
    "How secure is the data shared with a generative AI chatbot?",
    "Can I customize the generative AI chatbot for my business?",
    "What industries can benefit from generative AI chatbots?",
    "How long does it take to set up a generative AI chatbot with Kas newerax?",
    "Can I measure the performance of my generative AI chatbot?",
    "What is the cost of implementing a generative AI chatbot?",
    "Do I need technical skills to manage a generative AI chatbot?"
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight mb-6">
              Automate Customer Queries with a Smart FAQ Chatbot
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Automate your first line of customer support with a FAQ Chatbot that works 24/7. Handle repetitive queries instantly and deliver a seamless experience to every customer.
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
              30 days free trial . No credit card required . Rated 4.8/5 on G2
            </p>
          </motion.div>

          {/* Hero Custom UI Mockup (Flat FAQ Interface) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
            <div className="bg-[#f8f9fb] border border-gray-200 rounded-3xl p-6 shadow-sm h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
               {/* Decorative background elements */}
               <div className="absolute top-10 right-10 w-24 h-24 bg-[#6039ea]/10 rounded-full blur-2xl"></div>
               <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
               
               {/* Main UI Card */}
               <div className="w-[85%] bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden relative z-10">
                  <div className="bg-[#6039ea] p-5 text-center">
                     <h3 className="text-white font-bold text-lg">How can we help?</h3>
                     <div className="mt-4 relative max-w-sm mx-auto">
                        <input type="text" placeholder="Search for answers..." disabled className="w-full pl-10 pr-4 py-2 rounded-full text-sm outline-none border-none opacity-90 bg-white/20 placeholder-white/70 text-white" />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
                     </div>
                  </div>
                  <div className="p-5 space-y-3">
                     <div className="h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center px-4 justify-between">
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                        <Plus className="w-4 h-4 text-gray-400" />
                     </div>
                     <div className="h-12 bg-gray-50 border border-gray-100 rounded-lg flex items-center px-4 justify-between">
                        <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                        <Plus className="w-4 h-4 text-gray-400" />
                     </div>
                  </div>
               </div>

               {/* Floating Bot Icon */}
               <div className="absolute -right-4 top-1/4 w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center rotate-12">
                  <Bot className="w-8 h-8 text-[#6039ea]" />
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
          Let Customers Help Themselves with a Smart FAQ Chatbot
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: AI-Powered Search */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Quickly Find Answers with AI-Powered Search</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Make it easy for customers to help themselves with lightning-fast, intelligent search. Reduce support tickets by allowing users to find accurate answers instantly, improving efficiency and satisfaction.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#eef0ff] rounded-3xl flex items-center justify-center border border-[#d6dcff]">
                 <div className="w-3/4 max-w-sm">
                    <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100 flex items-center mb-6">
                       <Search className="w-5 h-5 text-[#6039ea] mx-3" />
                       <div className="h-4 w-32 bg-gray-100 rounded"></div>
                       <div className="ml-auto bg-[#6039ea] text-white text-xs px-4 py-2 rounded-full font-medium">Search</div>
                    </div>
                    <div className="space-y-3 pl-4">
                       <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                          <div className="h-3 w-3/4 bg-[#6039ea]/20 rounded mb-3"></div>
                          <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                          <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Branded Experience */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Launch a FAQ Chatbot in a Fully Branded Experience</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Build trust with a stunning, customizable interface that blends seamlessly into your website. Create a branded help center where your FAQ Chatbot can guide users through helpful articles and answers with ease.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fff5f5] rounded-3xl flex items-center justify-center border border-[#ffe4e6] relative overflow-hidden">
                 <Palette className="absolute top-10 right-10 w-24 h-24 text-pink-200/50" />
                 <div className="w-3/4 h-56 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden relative z-10">
                    <div className="h-12 bg-pink-500 flex items-center px-4 gap-3">
                       <div className="w-3 h-3 rounded-full bg-white/30"></div>
                       <div className="w-3 h-3 rounded-full bg-white/30"></div>
                       <div className="h-3 w-24 bg-white/30 rounded ml-auto"></div>
                    </div>
                    <div className="flex-1 p-4 flex gap-4">
                       <div className="w-1/3 space-y-2">
                          <div className="h-2 w-full bg-gray-200 rounded"></div>
                          <div className="h-2 w-full bg-gray-100 rounded"></div>
                          <div className="h-2 w-full bg-gray-100 rounded"></div>
                       </div>
                       <div className="flex-1 bg-pink-50 rounded-lg border border-pink-100 flex items-center justify-center">
                          <LayoutTemplate className="w-8 h-8 text-pink-300" />
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Automate FAQs */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Automate FAQs and Streamline Customer Service</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Deploy an AI-powered FAQ Chatbot that delivers real-time answers to common queries. It works around the clock, reduces agent workload, and transfers complex issues to live agents-ensuring a smooth, hybrid support experience.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f0fdf4] rounded-3xl flex items-center justify-center border border-[#dcfce7]">
                 <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-4">
                       <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                          <MessageCircle className="w-8 h-8 text-gray-400" />
                       </div>
                       <div className="flex items-center gap-1 text-green-500">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                       </div>
                       <div className="w-20 h-20 bg-[#6039ea] rounded-2xl shadow-sm flex items-center justify-center relative">
                          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400" />
                          <Bot className="w-10 h-10 text-white" />
                       </div>
                    </div>
                    <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700">
                       24/7 Automated Resolutions
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* 4 Reasons Section (Dark Theme as per reference) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#140f2d] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-16 text-center max-w-4xl mx-auto">
            4 Reasons to Choose Kas newerax's Generative AI-Powered Chatbot
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-xl border border-white/10 hover:border-[#6039ea] transition-colors">
              <h3 className="text-xl font-bold mb-4">Automate Routine Queries with Generative AI Chatbot</h3>
              <p className="text-gray-300 leading-relaxed text-sm">Delegate over 80% of repetitive customer queries to your generative AI chatbot. It resolves issues instantly with AI-driven responses in your brand’s tone, freeing human agents to manage more complex cases.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-xl border border-white/10 hover:border-[#6039ea] transition-colors">
              <h3 className="text-xl font-bold mb-4">Scale Personalized Support with Generative AI</h3>
              <p className="text-gray-300 leading-relaxed text-sm">Offer hyper-personalized customer support with your generative AI chatbot, using CRM and ticketing system data to understand intent and deliver tailored resolutions.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-xl border border-white/10 hover:border-[#6039ea] transition-colors">
              <h3 className="text-xl font-bold mb-4">Train Your Generative AI Chatbot with Multiple Knowledge Sources</h3>
              <p className="text-gray-300 leading-relaxed text-sm">Quickly enhance your generative AI chatbot’s knowledge by linking it to websites, documents, and help center articles, ensuring it provides accurate answers from the most relevant sources.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-xl border border-white/10 hover:border-[#6039ea] transition-colors">
              <h3 className="text-xl font-bold mb-4">Seamless Generative AI Chatbot Integration</h3>
              <p className="text-gray-300 leading-relaxed text-sm">Easily integrate your generative AI chatbot with existing systems like Zendesk, Freshdesk, Zoho Desk, and more. Enable effortless ticket creation and management directly within the chatbot interface.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#fffaf5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 sticky top-24">
              Frequently <br /> Asked <br /> Questions
            </h2>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-[15px] font-semibold text-gray-900 group-hover:text-[#6039ea] transition-colors pr-6">
                    {faq}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-[#6039ea] text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-[#eef0ff] group-hover:text-[#6039ea]'}`}>
                    {openFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-gray-600 leading-relaxed">
                        Answers will be configured based on Kas newerax internal documentation. This section provides detailed context regarding {faq.toLowerCase()}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
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

export default FaqChatbot;