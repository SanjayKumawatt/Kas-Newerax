import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, Play, ShieldCheck, CheckCircle2, Plus, Minus, 
  BarChart3, Activity, Lock, Database, Clock
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

const VoiceAI = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  // ROI Calculator State
  const [calls, setCalls] = useState(1000);
  const [duration, setDuration] = useState(6);
  const [costPerCall, setCostPerCall] = useState(500); // INR context

  // Calculator Logic
  const currentSpend = calls * costPerCall;
  const kasCost = calls * 35; // Assuming Kas newerax base cost in INR per call
  const savings = currentSpend - kasCost;

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What is Voice AI in customer service?",
    "How is a voice assistant different from a traditional IVR system?",
    "What is a conversational IVR and how does it work?",
    "Can voice AI be integrated into an existing call center system?",
    "What are the benefits of using call center AI?",
    "Are voice agents secure for handling sensitive customer data?",
    "How does voice AI handle complex customer issues?",
    "How does voice AI improve customer experience in a call center?",
    "Can voice AI be used beyond customer service?"
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section with ROI Calculator */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight">
              Reduce Contact Center Costs with Voice AI
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Give customers fast, intent-driven responses while managing your support budget efficiently using our voice automation module.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/signup" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors text-center shadow-sm`}>
                Request Early Access
              </Link>
              <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors text-center`}>
                Book a Demo
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-400 font-medium">
              Currently in early access and pilot stage.  
            </p>
          </motion.div>

          {/* Interactive ROI Calculator */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm max-w-md mx-auto lg:ml-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Estimated Savings Calculator</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Monthly inbound calls</label>
                  <input 
                    type="number" 
                    value={calls}
                    onChange={(e) => setCalls(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Average call duration (minutes)</label>
                  <input 
                    type="number" 
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current cost per call (INR)</label>
                  <input 
                    type="number" 
                    value={costPerCall}
                    onChange={(e) => setCostPerCall(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea]"
                  />
                </div>
              </div>

              <div className="bg-[#eef0ff] rounded-xl p-5 border border-[#d6dcff]">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Estimated current spend:</span>
                    <span className="text-gray-900 font-bold">{formatCurrency(currentSpend)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Estimated AI cost:</span>
                    <span className="text-gray-900 font-bold">{formatCurrency(kasCost)}/mo</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-[#c6ceff] flex justify-between items-center">
                    <span className="text-[#6039ea] font-bold text-lg">Projected Savings:</span>
                    <span className="text-[#6039ea] font-bold text-lg">{formatCurrency(savings)}/mo</span>
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
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-24">
          Resolve Routine Incoming Calls Instantly
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: Accuracy */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Answer Customer Questions Consistently</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Our Voice AI model recalls facts about your business and uses relevant context to give consistent answers to your customers based on your documentation.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Train on secure URLs, internal documents, and knowledge bases",
                  "Ensure automated voice support outside regular business hours",
                  "Resync and update the AI agent whenever your policies change"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Flat Phone/Voice UI */}
              <div className="relative w-full h-80 bg-[#f4f5f8] rounded-3xl flex items-center justify-center overflow-hidden border border-gray-100">
                <div className="w-64 h-96 bg-white rounded-t-3xl border-t border-l border-r border-gray-200 mt-16 flex flex-col shadow-sm">
                  <div className="bg-[#6039ea] p-4 text-white flex flex-col items-center gap-2 rounded-t-3xl">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Mic className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-sm">Listening...</span>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-4 bg-gray-50">
                    <div className="w-[80%] h-12 bg-[#eef0ff] rounded-2xl rounded-tl-sm border border-[#d6dcff]"></div>
                    <div className="w-[80%] h-16 bg-white rounded-2xl rounded-tr-sm border border-gray-200 self-end"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Human Latency / Speed */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Combine Automation Speed with Human Escalation</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Voice AI answers standard inquiries rapidly and escalates complex calls seamlessly to human agents.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Advanced speech recognition capabilities",
                  "Provide real-time information by connecting with basic APIs",
                  "Compatible with multiple global languages for diverse customer bases"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Flat Video Player/Voice Wave Mockup */}
              <div className="relative w-full h-80 bg-[#1e293b] rounded-3xl flex items-center justify-center overflow-hidden border border-gray-800">
                <div className="flex items-center justify-center gap-1">
                   {[4, 8, 12, 20, 12, 8, 16, 24, 16, 8, 4].map((height, i) => (
                     <div key={i} className={`w-3 bg-teal-400 rounded-full`} style={{ height: `${height * 3}px` }}></div>
                   ))}
                   <div className="mx-6 w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center cursor-pointer shadow-sm">
                      <Play className="w-6 h-6 text-white fill-current" />
                   </div>
                   {[4, 12, 20, 24, 16, 12, 20, 8, 4, 8, 12].map((height, i) => (
                     <div key={i} className={`w-3 bg-teal-400 rounded-full`} style={{ height: `${height * 3}px` }}></div>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: CSAT and FCR */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Focus on Improving CSAT and FCR</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Improve your Customer Satisfaction and First Contact Resolution metrics by automating repetitive Level 1 queries.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Reduce average wait times for customers",
                  "Monitor metrics to continuously improve satisfaction scores",
                  "Enable agents to focus on complex cases that improve First Contact Resolution"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Flat Analytics Mockup */}
              <div className="relative w-full h-80 bg-[#fdf4ff] rounded-3xl flex flex-col items-center justify-center overflow-hidden border border-[#fae8ff] p-8 gap-6">
                <div className="w-full flex gap-4">
                   <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
                      <span className="text-sm text-gray-500 font-medium">CSAT Metric Focus</span>
                      <div className="flex items-end gap-2">
                         <span className="text-xl font-bold text-green-500">Improving</span>
                         <Activity className="w-5 h-5 text-green-500 mb-1" />
                      </div>
                   </div>
                   <div className="flex-1 bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
                      <span className="text-sm text-gray-500 font-medium">Resolution</span>
                      <div className="flex items-end gap-2">
                         <span className="text-xl font-bold text-[#6039ea]">Streamlined</span>
                         <Clock className="w-5 h-5 text-[#6039ea] mb-1" />
                      </div>
                   </div>
                </div>
                <div className="w-full flex-1 bg-white rounded-xl border border-gray-100 shadow-sm flex items-end justify-between px-6 py-4">
                   {[40, 60, 50, 80, 70, 90, 85].map((height, i) => (
                     <div key={i} className="w-8 bg-[#6039ea] rounded-t-sm" style={{ height: `${height}%` }}></div>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Secure Data */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Designed with Security in Mind</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                We prioritize data privacy and security standards so your customer data remains protected during automated interactions.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Designed considering data privacy best practices",
                  "Built to support organizational compliance requirements",
                  "Secure conversation logging and encrypted data transfer"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Flat Security Mockup */}
              <div className="relative w-full h-80 bg-[#eef0ff] rounded-3xl flex items-center justify-center overflow-hidden border border-[#d6dcff]">
                <div className="relative z-10 w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-sm border border-gray-100">
                  <ShieldCheck className="w-16 h-16 text-green-500 mb-2" />
                  <span className="font-bold text-gray-800 tracking-wide">SECURE</span>
                </div>
                {/* Floating data nodes */}
                <div className="absolute top-10 left-10 bg-white p-3 rounded-xl border border-gray-100 shadow-sm"><Lock className="w-5 h-5 text-gray-400" /></div>
                <div className="absolute bottom-12 right-12 bg-white p-3 rounded-xl border border-gray-100 shadow-sm"><Database className="w-5 h-5 text-[#6039ea]" /></div>
              </div>
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
            Start with the conversations that are safe to automate.<br />
            Expand as confidence grows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors shadow-sm`}>
              Request Early Access
            </Link>
            <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors bg-white`}>
              Book a Demo
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default VoiceAI;