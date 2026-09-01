import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartPulse, CalendarDays, MessageSquare, ShieldCheck, 
  Stethoscope, Bot, User, ArrowRightLeft, FileText, 
  Clock, Coins, Users, ThumbsUp, Plus, Minus, CheckCircle2,
  Globe2, Smartphone,
  Code2
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

const Healthcare = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What is a healthcare chatbot?",
    "How can AI chatbots improve patient engagement?",
    "Is the healthcare chatbot secure and HIPAA-compliant?",
    "Can the chatbot integrate with my existing hospital or clinic system?",
    "What languages does the healthcare chatbot support?",
    "How does a healthcare chatbot reduce operational costs?",
    "Can patients talk to a live agent if needed?",
    "Does the chatbot offer voice-based support for elderly patients?"
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
              Boost Patient Care with AI Agent for Healthcare
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Healthcare AI agent for appointment scheduling, telemedicine, preventive care, lab tests, insurance support, and patient feedback. Provides 24/7 seamless patient support across all channels.
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

          {/* Hero Custom Flat Mockup (Healthcare Chat) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[450px]">
              <div className="bg-[#6039ea] p-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-[#6039ea]" />
                 </div>
                 <div>
                    <h3 className="text-white font-bold text-sm">Kas newerax Care</h3>
                    <p className="text-white/70 text-[10px]">Usually replies instantly</p>
                 </div>
              </div>
              <div className="flex-1 bg-[#f8f9fb] p-4 flex flex-col gap-4 overflow-hidden relative">
                 <div className="self-end bg-[#6039ea] text-white p-3 rounded-2xl rounded-tr-sm w-3/4 text-xs leading-relaxed shadow-sm">
                    Hi, I need to book a consultation for my mother.
                 </div>
                 <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm w-5/6 text-xs text-gray-700 leading-relaxed shadow-sm flex items-start gap-2">
                    <Bot className="w-4 h-4 text-[#6039ea] shrink-0 mt-0.5" />
                    <p>Hello! I can help you with that. Which department or specialist are you looking for?</p>
                 </div>
                 <div className="self-end bg-[#6039ea] text-white p-3 rounded-2xl rounded-tr-sm w-1/2 text-xs leading-relaxed shadow-sm">
                    Cardiology
                 </div>
                 <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm w-5/6 text-xs text-gray-700 leading-relaxed shadow-sm flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                       <Bot className="w-4 h-4 text-[#6039ea] shrink-0 mt-0.5" />
                       <p>Here are the available slots for Cardiology tomorrow:</p>
                    </div>
                    <div className="ml-6 flex flex-wrap gap-2">
                       <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 font-medium">10:00 AM</span>
                       <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100 font-medium">02:30 PM</span>
                    </div>
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
          Deliver Outstanding Customer Service in Healthcare
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: 24/7 Support */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">24/7 Seamless Support for Your Patients</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Providing exceptional customer service in healthcare is essential for ensuring patient satisfaction and trust. From appointment scheduling to real-time assistance, a well-structured support system enhances patient experiences and streamlines operations.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Streamline appointment scheduling, cancelling, rescheduling, enquiry on report status",
                  "Ensure healthcare customer service is available 24/7 without human involvement-yet in a human-like way with the most advanced LLMs",
                  "Assist patients with customer service in healthcare industry including medication management, FAQs, and more"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#eef0ff] rounded-3xl flex items-center justify-center border border-[#d6dcff] relative">
                 <div className="w-64 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                    <div className="bg-teal-500 p-3 flex items-center justify-between">
                       <span className="text-white font-bold text-sm">Schedule Visit</span>
                       <CalendarDays className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-4 space-y-3">
                       <div className="flex justify-between items-center bg-gray-50 p-2 rounded border border-gray-100">
                          <span className="text-xs font-semibold text-gray-700">Oct 24, 2026</span>
                          <span className="text-xs text-gray-500">Dr. Smith</span>
                       </div>
                       <div className="flex justify-between items-center bg-green-50 p-2 rounded border border-green-100">
                          <span className="text-xs font-bold text-green-700">Confirmed</span>
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                       </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[#6039ea]" />
                    <div>
                       <p className="text-sm font-bold text-gray-900">24/7 Access</p>
                       <p className="text-xs text-gray-500">Automated Desk</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Omnichannel */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Provide Omnichannel Customer Service in Healthcare</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Boost your CSAT by assisting patients on their preferred communication channels with hyper-personalization with seamless customer service in healthcare industry.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Effortlessly connect your healthcare ERP with Kas newerax for fetching real-time information",
                  "Offer healthcare customer service over calls, web, mobile, and many more",
                  "Support patients in 100+ local languages, ensuring inclusive customer service in healthcare for diverse patient needs."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fff5f5] rounded-3xl flex items-center justify-center border border-[#ffe4e6] relative">
                 <div className="absolute top-10 left-10 w-16 h-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-pink-500" />
                 </div>
                 <div className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center">
                    <Globe2 className="w-8 h-8 text-blue-500" />
                 </div>
                 <div className="w-48 h-48 bg-[#6039ea] rounded-full flex flex-col items-center justify-center text-white shadow-md relative z-10">
                    <MessageSquare className="w-12 h-12 mb-2" />
                    <span className="font-bold">Kas Care AI</span>
                 </div>
                 <div className="absolute top-1/2 right-12 w-32 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                    <span className="text-xs font-bold text-gray-800">Lab Results</span>
                    <div className="h-2 w-full bg-green-100 rounded mt-2"></div>
                    <div className="h-2 w-3/4 bg-green-100 rounded mt-1"></div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Contextual AI */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Contextual AI Responses for Healthcare Customer Service</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Kas newerax leverages the latest LLMs from OpenAI, Anthropic, and Google Gemini to train the AI with minimal hallucinations and maximum accuracy.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Train AI agent with the data from hospital guidelines, helpcenter articles, and other documents for precise healthcare customer service",
                  "Use custom prompts to ensure AI aligns with your brand tone, enhancing customer service in the healthcare industry",
                  "Guardrails for minimal hallucination when the AI is trained exclusively on your data"
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
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-24 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-2 p-2">
                       <FileText className="w-8 h-8 text-blue-400" />
                       <div className="h-1 w-full bg-gray-100 rounded"></div>
                       <div className="h-1 w-full bg-gray-100 rounded"></div>
                       <div className="h-1 w-2/3 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-[#6039ea] animate-pulse"></div>
                       <div className="w-2 h-2 rounded-full bg-[#6039ea] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                       <div className="w-2 h-2 rounded-full bg-[#6039ea] animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="w-24 h-24 bg-[#6039ea] rounded-full shadow-sm flex items-center justify-center">
                       <Bot className="w-12 h-12 text-white" />
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Human Handoff */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Swift Human Handoff for Healthcare Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Automate repeated patient queries with healthcare AI agent while ensuring seamless escalation for complex cases that need human empathy and expertise.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Assign patient queries to the right teams based on urgency, specialty, or tags",
                  "Use inbuilt CSAT to track efficiency and improve patient satisfaction",
                  "Improve Resolution Time by 80% just by automating responses and enabling swift human handoff in healthcare"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f0fdf4] rounded-3xl flex items-center justify-center border border-[#dcfce7]">
                 <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                       <Bot className="w-10 h-10 text-[#6039ea]" />
                    </div>
                    <div className="flex flex-col items-center text-green-500">
                       <ArrowRightLeft className="w-6 h-6 mb-1" />
                       <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 px-2 py-0.5 rounded">Handoff</span>
                    </div>
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center">
                       <Stethoscope className="w-10 h-10 text-green-600" />
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
              AI-Powered Patient Support Platform for Healthcare
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Kas newerax brings all your patient queries from across email, chat, and messaging platforms under one platform. Leverage state-of-the-art AI models to automate repeated queries with accuracy and scalability.
            </p>
            <Link to="/try-for-free" className={`inline-block px-6 py-2.5 rounded-md ${bgPrimary} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors`}>
              Try for Free
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">90% Reduction in <br />Average Resolution Time</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <Coins className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">50% Decrease in <br />Cost Per Resolution</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">70% Increase in <br />Customer Retention Rate</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <ThumbsUp className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">40% Increase in <br />CSAT Score</p>
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

export default Healthcare;