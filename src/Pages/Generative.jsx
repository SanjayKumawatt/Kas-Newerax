import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Link as LinkIcon, FileText, Database, Settings, ShieldCheck, 
  MessageSquare, Smartphone, Zap, CheckCircle2, Plus, Minus, Users
} from 'lucide-react';

import img1 from "../assets/gen1.webp"
import img2 from "../assets/gen2.webp"
import img3 from "../assets/gen3.jpg"

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

const GenerativeAI = () => {
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
        className="pt-16 pb-20 lg:pt-24 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[3.5rem] font-bold text-[#14142b] tracking-tight">
              Generative AI Chatbot <br /> for Customer Service
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Instantly resolve customer queries with generative AI-powered chatbot trained on your custom data. Deploy on websites, mobile apps, WhatsApp and more.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
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

          {/* Flat Illustration Placeholder */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
            <div className="bg-[#1e1345] rounded-3xl p-8 w-full aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
              <div className="absolute top-6 left-6 bg-[#35256e] p-3 rounded-lg flex items-center gap-3 border border-white/10">
                <Database className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-sm font-medium">Train bot on your data</span>
              </div>
              <div className="absolute bottom-10 right-6 bg-[#35256e] p-3 rounded-lg flex items-center gap-3 border border-white/10">
                <span className="text-white text-sm font-medium">Deploy it on any platform</span>
                <Smartphone className="w-5 h-5 text-yellow-400" />
              </div>
              <Bot className="w-32 h-32 text-indigo-400 opacity-50" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature 1: Knowledge Sources */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-gray-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20">
            Scale your customer service with Generative AI-powered chatbot
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Generative AI chatbot tailored to your knowledge sources</h3>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <LinkIcon className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-1`} />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Website Content:</strong> Train the generative AI chatbot by simply entering your website URL</p>
                </div>
                <div className="flex items-start gap-3">
                  <Database className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-1`} />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Knowledge Base:</strong> Seamlessly train the AI chatbot on your existing knowledge base articles built on Zendesk Guide and Salesforce Knowledge</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-1`} />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Document Support:</strong> Upload files like PDFs, docs, and spreadsheets to train the gen AI chatbot for accurate answers</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 bg-[#f4f5f8] rounded-2xl h-80 flex items-center justify-center border border-gray-100">
               <img src={img1} alt="" />
            </motion.div>
          </div>

          {/* Feature 2: Customization */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Customize your Generative AI chatbot for accurate, on-brand responses</h3>
              <ul className="space-y-4 pt-4 list-disc pl-5">
                <li className="text-gray-700 leading-relaxed marker:text-[#6039ea]"><strong className="text-gray-900">Controlled Responses:</strong> Guide the chatbot to answer accurately in your brand tone using RAG and route unknown queries to human agents</li>
                <li className="text-gray-700 leading-relaxed marker:text-[#6039ea]"><strong className="text-gray-900">Brand Alignment:</strong> Align the chatbot’s personality with brand guidelines and ensure responses cite trusted sources</li>
                <li className="text-gray-700 leading-relaxed marker:text-[#6039ea]"><strong className="text-gray-900">Contextual Support:</strong> Use past interactions to deliver personalized, context-aware replies</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 bg-[#f4f5f8] rounded-2xl h-80 flex items-center justify-center border border-gray-100">
               {/* <span className="text-gray-400 font-medium">Customization UI</span> */}
                              <img src={img2} alt="" />

            </motion.div>
          </div>

          {/* Feature 3: 24/7 Support */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">24/7 customer support with Generative AI chatbots</h3>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-1`} />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Omnichannel Support:</strong> Deliver human-like responses across websites, apps (iOS, Android, etc.), and platforms like WhatsApp, Messenger, and Telegram</p>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-1`} />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Smart Escalation:</strong> Route complex queries to agents while automating routine ones</p>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-1`} />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-gray-900">Powerful LLMs:</strong> Use top models from OpenAI, Gemini, Anthropic, or integrate with Dialogflow, Watson, or Amazon Lex for accurate answers</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 bg-[#f4f5f8] rounded-2xl h-80 flex items-center justify-center border border-gray-100">
               {/* <span className="text-gray-400 font-medium">LLM Integrations UI</span> */}
                              <img src={img3} alt="" />

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4 Reasons Section (Dark Cards as per reference) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#140f2d] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-16 text-center max-w-3xl mx-auto">
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
            You don’t need to bet your entire support operation on AI.<br />
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

export default GenerativeAI;