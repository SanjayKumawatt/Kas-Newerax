import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Bot, CheckCircle2, User, Clock, 
  Coins, Users, ThumbsUp, Code2, Plus, Minus,
  ShieldCheck, ArrowRightLeft, Sparkles, MessageSquare, Globe2, Smartphone
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

const Banking = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What is an AI chatbot for banks?",
    "How can a banking chatbot improve customer service?",
    "Is my financial data secure when using a banking chatbot?",
    "How does the AI chatbot for banks integrate with existing systems?",
    "Does the banking chatbot support omnichannel communication?",
    "How does an AI chatbot reduce operational costs for banks?",
    "What types of queries can a banking chatbot handle?"
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
            <p className="text-[#6039ea] font-bold text-sm mb-3 tracking-wide uppercase">AI Chatbot for Banking</p>
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4.5rem] font-bold text-[#14142b] tracking-tight mb-6">
              Effortlessly Transform Banking with 24/7 AI-Powered Support
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Streamline every banking experience with an AI chatbot that delivers instant 24/7 support, personalized financial advice, fast onboarding, transaction automation, loan eligibility guidance, fraud alerts-all through a conversational interface that makes banking simple and efficient.
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
              30 days free trial . No credit card required . Rated 4.8 on G2
            </p>
          </motion.div>

          {/* Hero Custom Flat Mockup (Banking Chat) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[450px]">
              <div className="bg-blue-700 p-4 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                       <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm">Evercrest Bank Support</span>
                 </div>
              </div>
              <div className="flex-1 bg-[#f8f9fb] p-4 flex flex-col gap-4 overflow-hidden relative">
                 <div className="self-end bg-blue-700 text-white p-3 rounded-2xl rounded-tr-sm w-3/4 text-xs leading-relaxed shadow-sm">
                    I want to update my email on the account.
                 </div>
                 <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm w-5/6 text-xs text-gray-700 leading-relaxed shadow-sm flex items-start gap-2">
                    <Bot className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <p>Hi, you can update your email by logging into our app. A confirmation email will be sent to your new email to confirm.</p>
                 </div>
                 <div className="self-end bg-blue-700 text-white p-3 rounded-2xl rounded-tr-sm w-2/3 text-xs leading-relaxed shadow-sm text-right">
                    and what about my address
                 </div>
                 <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm w-5/6 text-xs text-gray-700 leading-relaxed shadow-sm flex items-start gap-2">
                    <Bot className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <p>You will have to provide us with the proof of your new address. We only accept valid Government documents to process new addresses.</p>
                 </div>
                 <div className="self-end bg-blue-700 text-white p-3 rounded-2xl rounded-tr-sm w-1/4 text-xs leading-relaxed shadow-sm text-center">
                    Thanks
                 </div>
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
          Scalable AI Platform for Banking Customer Support
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: 24/7 AI-Powered */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">24/7 AI-Powered Banking Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Deliver secure, efficient, and automated banking support with AI-driven assistance that resolves customer queries instantly and accurately.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Train AI on banking FAQs, policies, compliance documents, and financial services",
                  "Ensure 24/7 banking support with AI-powered automation-providing real-time, human-like assistance without the need for live agents",
                  "Automate Banking Queries related to card management, security alerts, compliance FAQs, and more"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f4f5f8] rounded-3xl flex items-center justify-center border border-gray-200 relative overflow-hidden">
                 <div className="w-64 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative z-10">
                    <div className="bg-[#1e293b] p-3 flex items-center justify-between">
                       <span className="text-white font-bold text-xs">Kas newerax Capital Bot</span>
                       <ShieldCheck className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="p-4 space-y-3 bg-gray-50 h-48">
                       <div className="bg-gray-200 p-2 rounded-lg ml-auto w-3/4">
                          <p className="text-[10px] text-gray-800">I lost my card, please block it.</p>
                       </div>
                       <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm mr-auto w-5/6">
                          <div className="flex items-center gap-1 mb-1">
                             <Bot className="w-3 h-3 text-[#1e293b]" />
                          </div>
                          <p className="text-[10px] text-gray-800 leading-relaxed">
                            I have temporarily blocked your card ending in 4592. Would you like to order a replacement?
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Omnichannel */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Deliver Omnichannel Banking Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Boost customer satisfaction by assisting clients on WhatsApp, Telegram, web, and mobile app.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Effortlessly integrate your banking CRM to fetch real-time account details, transactions, and loan updates",
                  "Offer banking customer service over calls, WhatsApp, Facebook, and more-ensuring customers can connect anytime, anywhere",
                  "Ensure secure and efficient banking support while catering to diverse customer needs across multiple languages"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#eefcf6] rounded-3xl flex items-center justify-center border border-[#d1fae5] relative">
                 <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-green-500" />
                 </div>
                 <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Globe2 className="w-8 h-8 text-blue-500" />
                 </div>
                 <div className="w-48 h-48 bg-teal-600 rounded-full flex flex-col items-center justify-center text-white shadow-md relative z-10">
                    <MessageSquare className="w-12 h-12 mb-2" />
                    <span className="font-bold">SafeSecure Bot</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Contextual AI */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Contextual AI Responses for Banking Customer Service</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Kas newerax leverages top LLMs from OpenAI, Anthropic, and Gemini to train AI for accurate, secure, and efficient banking customer service.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Automate banking queries with AI trained on secure financial data",
                  "Use custom prompts to align AI with your brand tone and compliance needs",
                  "Ensure accuracy with AI trained exclusively on your data, reducing errors"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f8f9fb] rounded-3xl flex items-center justify-center border border-gray-200">
                 <div className="w-64 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-[#0f172a] p-3 flex items-center justify-between">
                       <span className="text-white font-bold text-xs">Blue Stone Bank</span>
                    </div>
                    <div className="p-4 space-y-3 bg-gray-50 h-48">
                       <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm mr-auto w-5/6">
                          <p className="text-[10px] text-gray-800 leading-relaxed">
                            Hello, Alex! This is a friendly reminder that your credit card payment is due tomorrow. Would you like to make the payment now?
                          </p>
                       </div>
                       <div className="bg-slate-200 p-2 rounded-lg ml-auto w-1/2 text-center">
                          <p className="text-[10px] font-medium text-gray-800">Yes, please.</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Human Handoff */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Seamless Human Handoff for 5 Star Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Automate routine banking queries with AI while ensuring seamless escalation for complex cases that require human expertise and personalized assistance.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Route banking queries to the right teams based on urgency, account type, or transaction complexity",
                  "Use built-in CSAT tracking to measure efficiency and enhance customer satisfaction",
                  "Boost resolution speed by 80% with AI-powered automation and seamless human handoff"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fff7ed] rounded-3xl flex items-center justify-center border border-[#ffedd5]">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                       <Bot className="w-10 h-10 text-orange-500" />
                    </div>
                    <div className="flex flex-col items-center text-orange-500">
                       <ArrowRightLeft className="w-6 h-6 mb-1" />
                       <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-100 px-2 py-0.5 rounded">Handoff</span>
                    </div>
                    <div className="w-20 h-20 bg-[#f97316] rounded-2xl shadow-sm border border-orange-600 flex items-center justify-center">
                       <User className="w-10 h-10 text-white" />
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
              AI-Powered Banking Customer Service Automation Platform
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Kas newerax centralizes customer queries across email, chat, and messaging, ensuring seamless communication and efficient support. Our advanced AI automates repetitive inquiries, delivering accurate and scalable solutions for banking customer support.
            </p>
            <Link to="/try-for-free" className={`inline-block px-6 py-2.5 rounded-md ${bgPrimary} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors`}>
              Try for Free
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Reduce First Response Time<br />to less than 10 seconds</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <Bot className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Resolve 80% of Queries<br />without any human involvement</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">70% Increase in<br />Customer Retention Rate</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <ThumbsUp className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Increase CSAT score<br />by 40%</p>
             </div>
          </motion.div>
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

export default Banking;