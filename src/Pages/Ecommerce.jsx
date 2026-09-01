import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Package, Bot, CheckCircle2, User, Clock, 
  Coins, Users, ThumbsUp, Code2, Plus, Minus, ArrowRightLeft, 
  Sparkles, RefreshCw, Shirt, Search
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

const Ecommerce = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What is an AI customer service agent for ecommerce?",
    "How does an AI agent differ from a standard chatbot?",
    "Can the AI agent handle order tracking and returns?",
    "Does the AI agent integrate with my ecommerce platform?",
    "How does the AI agent handle complex queries?",
    "Can the AI agent provide personalized product recommendations?",
    "What languages does the ecommerce AI agent support?",
    "Is it difficult to set up and train the AI agent?"
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-[#fffaf5]"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight mb-6">
              Your Ecommerce Support, Supercharged by AI Agents
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Stop losing customers to slow support. Our AI agents handle voice, email, chat, and messaging - instantly, 24/7, at any scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/try-for-free" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors text-center`}>
                Try for Free
              </Link>
              <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors text-center bg-white`}>
                Book a Demo
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-400 font-medium">
              30 days free trial . No credit card required .  
            </p>
          </motion.div>

          {/* Hero Custom Flat Mockup (Ecom App & Chat) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex justify-center lg:justify-end gap-4 relative h-[450px]">
             {/* Support Chat Floating */}
             <div className="absolute top-10 left-0 w-64 space-y-4 z-10">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">LM</div>
                      <div>
                         <p className="text-xs font-bold">Lucy Mellor</p>
                         <p className="text-[9px] text-gray-400">Order Issue</p>
                      </div>
                   </div>
                   <p className="text-xs text-gray-700">Hi team, when can I expect my replacement?</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                   <div className="flex items-center gap-2 mb-2 text-fuchsia-600">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Kas newerax AI</span>
                   </div>
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-[#6039ea] flex items-center justify-center">
                         <Bot className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-[10px] font-bold text-gray-400">Kas Support Agent</p>
                   </div>
                   <p className="text-xs text-gray-700 leading-relaxed mb-2">Hi Lucy, thank you for your patience. Kindly check <span className="text-[#6039ea] font-medium">this link</span> for your order status.</p>
                </div>
             </div>

             {/* Mobile App UI */}
             <div className="absolute right-0 bottom-0 w-64 h-[400px] bg-white rounded-t-[2rem] shadow-sm border border-gray-200 overflow-hidden flex flex-col pt-4 px-4">
                <div className="flex items-center justify-between mb-4">
                   <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                   <span className="font-bold text-sm">Shop</span>
                   <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center"><Package className="w-4 h-4 text-orange-500" /></div>
                </div>
                <div className="bg-gray-100 rounded-full h-8 flex items-center px-3 gap-2 mb-4">
                   <Search className="w-3 h-3 text-gray-400" />
                   <div className="h-2 w-20 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-between mb-4 px-2">
                   <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"><Shirt className="w-5 h-5 text-purple-600" /></div><div className="h-1.5 w-8 bg-gray-200 rounded"></div></div>
                   <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-blue-100 rounded-full"></div><div className="h-1.5 w-8 bg-gray-200 rounded"></div></div>
                   <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-green-100 rounded-full"></div><div className="h-1.5 w-8 bg-gray-200 rounded"></div></div>
                   <div className="flex flex-col items-center gap-1"><div className="w-10 h-10 bg-orange-100 rounded-full"></div><div className="h-1.5 w-8 bg-gray-200 rounded"></div></div>
                </div>
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-bold">Best Selling</span>
                   <span className="text-[9px] text-gray-500">See All</span>
                </div>
                <div className="flex gap-2 h-32">
                   <div className="w-1/2 bg-gray-50 rounded-xl border border-gray-100"></div>
                   <div className="w-1/2 bg-gray-50 rounded-xl border border-gray-100"></div>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Features Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-24">
          The Most Flexible AI Customer Service Agent for Ecommerce
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: Automate Queries */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Automate Repeated Queries with our Ecommerce AI Agent</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Train the AI agent for ecommerce using your help center articles, FAQs, and documents to deliver real-time assistance.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Automate order tracking, returns, and exchanges",
                  "Provide assitance on account management and shipping updates",
                  "Deliver real-time product assistance and sizing help"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f8f9fb] rounded-3xl flex items-center justify-center border border-gray-200">
                 <div className="w-3/4 max-w-sm">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3">
                       <div className="self-end bg-gray-100 p-2 rounded-lg text-xs w-3/4 text-right">I need an update on order #20349</div>
                       <div className="self-start bg-[#eef0ff] border border-[#d6dcff] p-3 rounded-lg w-5/6 flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                             <Package className="w-4 h-4 text-[#6039ea]" />
                             <span className="text-[10px] font-bold text-[#6039ea]">ORDER TRACKING</span>
                          </div>
                          <p className="text-xs text-gray-800">Your order #20349 is out for delivery today. You can track the driver <span className="text-[#6039ea] underline">here</span>.</p>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-[10px] border border-gray-200 bg-white px-2 py-1 rounded-full cursor-pointer hover:bg-gray-50">Return Item</span>
                          <span className="text-[10px] border border-gray-200 bg-white px-2 py-1 rounded-full cursor-pointer hover:bg-gray-50">Cancel Order</span>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Personalization */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Personalization at Scale</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Effortlessly connect your existing tools with Kas newerax AI agent to deliver hyper personalized experiences for your customers.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Connect your CRM and ticketing tool",
                  "Provide real-time information with APIs and webhooks",
                  "100+ languages for your global customers"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fff5f5] rounded-3xl flex items-center justify-center border border-[#ffe4e6] overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-50"></div>
                 <div className="w-3/4 max-w-sm bg-white p-5 rounded-xl shadow-sm border border-gray-100 z-10 relative">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-3 mb-3">
                       <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                       <div>
                          <p className="text-xs font-bold">VIP Customer Detected</p>
                          <div className="h-2 w-20 bg-gray-100 rounded mt-1"></div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span className="text-[10px] text-gray-500">Last Purchase</span>
                          <span className="text-xs font-semibold text-gray-800">Men's Running Shoes</span>
                       </div>
                       <div className="flex items-center gap-2 p-3 bg-pink-50 border border-pink-100 rounded-lg">
                          <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
                          <p className="text-[10px] text-pink-800">Recommend "Activewear Shorts" matching their previous order history.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Instant Support */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Instant Support Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our Ecommerce AI Agent with built-in guardrails delivers 24/7 customer support wherever your customers are - no exceptions.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Improve First Response Time by 90%",
                  "State-of-the-art LLMs for custom training",
                  "Set guardrails for accuracy with custom prompts and training"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f0fdf4] rounded-3xl flex items-center justify-center border border-[#dcfce7]">
                 <div className="flex flex-col items-center gap-6">
                    <div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center relative">
                       <Clock className="w-10 h-10 text-green-500" />
                       <div className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">24/7</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 text-center">
                       <div>
                          <p className="text-xs text-gray-500">Response Time</p>
                          <p className="text-lg font-bold text-green-600">&lt; 1 sec</p>
                       </div>
                       <div className="w-px h-8 bg-gray-200"></div>
                       <div>
                          <p className="text-xs text-gray-500">Availability</p>
                          <p className="text-lg font-bold text-green-600">Always On</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Human Handoff */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Swift Human Handoff</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Resolve L1 queries with AI agent for ecommerce and let your human agents work on complex queries.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Route queries based on teams and tags",
                  "Track agent performance with inbuilt CSAT",
                  "Improve Resolution Time by 80%"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#1e153b] rounded-3xl flex items-center justify-center relative overflow-hidden">
                 <div className="w-3/4 max-w-sm bg-white rounded-xl shadow-sm overflow-hidden flex flex-col relative z-10">
                    <div className="bg-gray-100 p-3 flex items-center gap-2 text-xs">
                       <RefreshCw className="w-4 h-4 text-orange-500" />
                       <span className="font-semibold text-gray-800">Processing Refund</span>
                    </div>
                    <div className="p-4 bg-gray-50 flex flex-col gap-3">
                       <div className="self-end bg-[#6039ea] text-white p-2 rounded-lg text-xs w-2/3">I received a damaged item, I need a refund now.</div>
                       <div className="flex justify-center my-2">
                          <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-1 rounded font-bold flex items-center gap-1">
                             <ArrowRightLeft className="w-3 h-3" /> HANDOFF TO SUPPORT AGENT
                          </span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                             <User className="w-3 h-3 text-blue-600" />
                          </div>
                          <div className="bg-white border border-gray-200 p-2 rounded-lg text-xs w-3/4">Hi, I'm Alex. I will process your refund immediately.</div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* Stats Section (Cream Background) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-[#fffaf5] border-y border-[#fceee0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Customer Service Platform Made for Ecommerce
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Kas newerax brings all your customer queries from across email, chat, and messaging platforms under one platform. Leverage state-of-the-art AI models to resolve repeated queries with accuracy and scalability.
            </p>
            <Link to="/try-for-free" className={`inline-block px-6 py-2.5 rounded-md ${bgPrimary} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors`}>
              Try for Free
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 flex flex-col sm:flex-row items-center justify-center gap-12">
             <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 text-green-700 mb-4" />
                <p className="text-sm font-bold text-gray-900">90% Reduction in Average<br />Resolution Time</p>
             </div>
             <div className="w-px h-16 bg-gray-200 hidden sm:block"></div>
             <div className="flex flex-col items-center text-center">
                <Coins className="w-12 h-12 text-green-700 mb-4" />
                <p className="text-sm font-bold text-gray-900">50% Decrease in Cost<br />Per Resolution</p>
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

export default Ecommerce;