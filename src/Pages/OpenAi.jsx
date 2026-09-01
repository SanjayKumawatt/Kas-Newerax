import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, Zap, MessageSquare, FileText, Globe, 
  TableProperties, Plus, Minus, CheckCircle2, User, Bot 
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

const OpenAIIntegration = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Can I use OpenAI models directly inside Kas newerax?",
    "Do I need my own OpenAI API key to use this integration?",
    "Which AI models can I use with Kas newerax?",
    "Can I train the AI agent on my company data?",
    "Where can I deploy my OpenAI-powered AI agent?"
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-12 lg:pt-24 lg:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight mb-6">
              Build Customer Support AI Agents Powered by OpenAI
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Build and deploy OpenAI-powered customer support AI agents across web, mobile, email, and messaging channels, all within Kas newerax.
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

          {/* Hero Custom Flat Mockup */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#6039ea] rounded-3xl shadow-sm border border-[#502cd1] flex items-center justify-center h-[350px] relative overflow-hidden">
               <div className="flex items-center gap-6 z-10">
                  <div className="w-24 h-24 rounded-2xl border-2 border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-sm">
                     <BrainCircuit className="w-12 h-12 text-white" />
                  </div>
                  <Zap className="w-10 h-10 text-white fill-current animate-pulse" />
                  <div className="w-24 h-24 rounded-2xl border-2 border-white/20 bg-white/10 flex items-center justify-center backdrop-blur-sm">
                     <MessageSquare className="w-12 h-12 text-white fill-current" />
                  </div>
               </div>
               {/* Decorative background curves */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sub-heading Banner */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeInUp}
        className="pb-20 pt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          No-code setup. Human handoff. Omnichannel deployment. Enterprise-ready security.
        </h2>
      </motion.section>

      {/* Main Features Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-32">
          
          {/* Feature 1: Infrastructure */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Go live faster with built-in infrustructure</h3>
              <ul className="space-y-5 pt-2">
                {[
                  "Build & deploy customer support AI agents powered by latest OpenAI models without managing complex infrastructure",
                  "Track resolution rates, conversations, escalation trends, and AI performance",
                  "Connect APIs and workflows so the AI agent can fetch order status, create tickets, or trigger actions"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-[380px] bg-[#f8f9fb] rounded-3xl flex items-center justify-center border border-gray-100 p-8">
                 <div className="flex flex-row items-center gap-8 w-full max-w-sm">
                    {/* Left Models Column */}
                    <div className="flex flex-col gap-4 w-1/2">
                       <div className="bg-gray-200 text-gray-700 text-sm font-semibold py-3 px-4 rounded-full text-center shadow-sm">gpt-5.5</div>
                       <div className="bg-gray-200 text-gray-700 text-sm font-semibold py-3 px-4 rounded-full text-center shadow-sm">gpt-5-mini</div>
                       <div className="bg-gray-200 text-gray-700 text-sm font-semibold py-3 px-4 rounded-full text-center shadow-sm opacity-50">gpt-5-nano</div>
                    </div>
                    {/* Right Metrics Column */}
                    <div className="flex flex-col gap-3 w-1/2">
                       <div className="bg-white text-gray-700 text-xs font-semibold py-3 px-4 rounded-lg text-center shadow-sm border border-gray-100">Resolution Rate</div>
                       <div className="bg-white text-gray-700 text-xs font-semibold py-3 px-4 rounded-lg text-center shadow-sm border border-gray-100">AI Performance</div>
                       <div className="bg-white text-gray-700 text-xs font-semibold py-3 px-4 rounded-lg text-center shadow-sm border border-gray-100 leading-tight">Conversations<br/>Escalated</div>
                       <div className="bg-white text-gray-700 text-xs font-semibold py-3 px-4 rounded-lg text-center shadow-sm border border-gray-100">CSAT Score</div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Training / On-brand */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Train your AI agent for accurate, on-brand responses</h3>
              <ul className="space-y-5 pt-2">
                {[
                  "Train the OpenAI agent on your company knowledge base from your website, documents, and help center.",
                  "Define the AI agent to answer accurately in your brand tone with custom instructions",
                  "Provide contextual support using past interactions to deliver personalized, context-aware replies."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-[380px] bg-[#f8f9fb] rounded-3xl flex flex-col items-center justify-center border border-gray-100 p-8 relative">
                 <div className="flex items-center gap-8 mb-8 relative">
                    {/* Connecting lines */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 border-t-2 border-dashed border-gray-300"></div>
                    
                    {/* Icons */}
                    <div className="w-14 h-14 bg-gray-600 rounded-xl flex items-center justify-center text-white relative z-10 shadow-sm">
                       <FileText className="w-6 h-6" />
                    </div>
                    <div className="w-14 h-14 bg-gray-600 rounded-full flex items-center justify-center text-white relative z-10 shadow-sm">
                       <Globe className="w-6 h-6" />
                    </div>
                    <div className="w-14 h-14 bg-gray-600 rounded-xl flex items-center justify-center text-white relative z-10 shadow-sm">
                       <TableProperties className="w-6 h-6" />
                    </div>
                 </div>
                 
                 <div className="w-full max-w-sm bg-white p-5 rounded-xl shadow-sm border border-gray-200 text-left">
                    <p className="text-[11px] text-gray-500 mb-2 font-mono">System Prompt:</p>
                    <p className="text-[11px] text-gray-800 leading-relaxed font-mono">
                      You are an AI support agent for a hospital.<br/>
                      Your role is to help patients with appointment bookings, insurance details, refunds, doctor recommendations, account issues, and FAQs.<br/><br/>
                      Follow these instructions carefully:<br/>
                      - Always respond in a friendly, professional, and concise tone.<br/>
                      - Prioritize solving the patient's issue in the fewest steps possible.<br/>
                      - If the patient asks about an insurance policy, collect or verify:<br/>
                      &nbsp;&nbsp;• Insurance ID<br/>
                      &nbsp;&nbsp;• Registered email address
                    </p>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Omnichannel Support */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Provide 24/7 Omnichannel support with OpenAI agent built on Kas newerax</h3>
              <ul className="space-y-5 pt-2">
                {[
                  "Deploy OpenAI agent across websites, mobile apps, email, WhatsApp, Telegram, and messaging platforms from a single dashboard.",
                  "Automatically transfer conversations to support agents when the customer requests it"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-[450px] bg-[#f8f9fb] rounded-3xl flex items-center justify-center border border-gray-100 overflow-hidden pt-10">
                 <div className="w-64 bg-white rounded-t-3xl shadow-lg border border-gray-200 overflow-hidden flex flex-col h-full">
                    <div className="bg-[#1e293b] p-4 flex items-center justify-between">
                       <span className="text-white font-bold text-xs">Life-Care Hospitals</span>
                       <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded">FAQ</span>
                    </div>
                    <div className="p-4 space-y-4 bg-gray-50 flex-1 overflow-hidden relative flex flex-col">
                       
                       <div className="self-end bg-[#1e293b] text-white p-3 rounded-2xl rounded-tr-sm w-5/6 text-[10px] leading-relaxed shadow-sm text-right">
                          I applied for my insurance weeks ago and haven't received an update.
                       </div>
                       
                       <div className="self-start flex items-start gap-2 w-5/6">
                          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center shrink-0 mt-1">
                             <Bot className="w-3 h-3 text-white" />
                          </div>
                          <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm text-[10px] text-gray-700 leading-relaxed shadow-sm">
                             Apologies, could you please share your policy ID with us so I can check this?
                          </div>
                       </div>

                       <div className="self-end bg-[#1e293b] text-white p-2 px-4 rounded-2xl rounded-tr-sm text-[10px] shadow-sm">
                          p-45349
                       </div>

                       <div className="self-start flex items-start gap-2 w-5/6">
                          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center shrink-0 mt-1">
                             <Bot className="w-3 h-3 text-white" />
                          </div>
                          <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-sm text-[10px] text-gray-700 leading-relaxed shadow-sm">
                             Thanks Joseph. It looks like your insurance will be approved within the next 48 hours.<br/><br/>
                             You can track your insurance status here: <span className="text-blue-500 font-medium cursor-pointer">link.to/</span>
                          </div>
                       </div>

                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-white border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently asked questions
            </h2>
            <p className="text-gray-600">Everything you need to know about the product and billing.</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-4 pt-4">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-[15px] font-bold text-gray-900 group-hover:text-[#6039ea] transition-colors pr-6">
                    {faq}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors`}>
                    {openFaq === index ? <Minus className="w-5 h-5 text-gray-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
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

export default OpenAIIntegration;