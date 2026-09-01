import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Inbox, CheckCircle2, AlertCircle, Clock, 
  Languages, BarChart2, Zap, UserPlus, FileText, 
  Sparkles, Plus, Minus, ArrowRight
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

const EmailTicketing = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What is an email ticketing system, and how does it work?",
    "How does Kas newerax's AI-powered email ticketing system improve response times?",
    "Can this email-based ticketing system handle multilingual queries?",
    "What is a conversational IVR and how does it work?",
    "What are the benefits of using an AI ticketing system for email support?",
    "How does the shared inbox feature improve team collaboration?",
    "Can I integrate the email ticketing system with my existing tools?",
    "How secure is Kas newerax's email ticketing system?",
    "How does conversation summarization help in managing email tickets?",
    "What kind of customer queries can be automated with this AI email ticketing system?"
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
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight mb-6">
              Automate Email Ticketing with Accurate Resolutions
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Automate and resolve repetitive incoming email queries with AI. Prioritize, assign, and escalate complex queries to support agents.
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

          {/* Hero Custom UI Mockup (Flat Dashboard) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
            <div className="bg-[#f8f9fb] border border-gray-100 rounded-2xl p-4 shadow-sm h-96 flex overflow-hidden">
              {/* Left Panel (Ticket List) */}
              <div className="w-1/3 border-r border-gray-200 pr-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2">
                  <Inbox className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-sm text-gray-800">Inbox</span>
                </div>
                {/* Ticket Item 1 */}
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm relative">
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-500"></div>
                  <h4 className="text-xs font-bold text-gray-800 truncate pr-4">Delivery Status</h4>
                  <p className="text-[10px] text-gray-500 mt-1 truncate">David Cleans - Request to...</p>
                  <div className="mt-2 flex items-center justify-between">
                     <span className="text-[9px] font-medium text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">Medium</span>
                     <span className="text-[9px] text-gray-400">10m ago</span>
                  </div>
                </div>
                {/* Ticket Item 2 */}
                <div className="bg-white p-3 rounded-lg border border-[#eef0ff] shadow-sm relative">
                  <h4 className="text-xs font-bold text-gray-800 truncate pr-4">Refund Issue</h4>
                  <p className="text-[10px] text-gray-500 mt-1 truncate">Sarah Jenkins - The amount...</p>
                  <div className="mt-2 flex items-center justify-between">
                     <span className="text-[9px] font-medium text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">High</span>
                     <span className="text-[9px] text-gray-400">1h ago</span>
                  </div>
                </div>
              </div>
              {/* Right Panel (Email View) */}
              <div className="flex-1 pl-4 flex flex-col">
                <div className="border-b border-gray-200 pb-3 mb-4">
                   <h3 className="text-sm font-bold text-gray-900">Subject: Request to change delivery date</h3>
                   <div className="flex items-center gap-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">DC</div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">David Cleans</p>
                        <p className="text-[10px] text-gray-500">david.c@example.com</p>
                      </div>
                   </div>
                </div>
                <div className="flex-1 space-y-4">
                   <div className="bg-gray-50 p-3 rounded-lg rounded-tl-sm text-xs text-gray-700 leading-relaxed">
                     Hi team, I would like to change the delivery date of my recent order #89283 to next Tuesday. Is this possible?
                   </div>
                   <div className="bg-[#f0fdf4] border border-[#dcfce7] p-3 rounded-lg rounded-tr-sm text-xs text-green-800 leading-relaxed ml-4 relative">
                     <div className="absolute -top-2.5 right-2 bg-green-100 px-1.5 py-0.5 rounded text-[8px] font-bold text-green-700 flex items-center gap-1 border border-green-200"><Zap className="w-2 h-2" /> AI Auto-Resolved</div>
                     Hi David, I have successfully updated your delivery date for order #89283 to next Tuesday. You will receive a tracking update shortly.
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Detail Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50/50 rounded-3xl"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20 max-w-3xl mx-auto leading-tight">
          Deflect incoming tickets with Kas newerax's AI-powered email ticketing
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">Say goodbye to email ticket backlogs with AI by your side</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Connect your support email to Kas newerax's intuitive dashboard for seamless management of email ticket queries and optimized ticket backlogs. AI resolves repetitive customer queries automatically, using your FAQs, support documents, and help center articles, all while maintaining your brand tone.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-72 bg-[#eef0ff] rounded-2xl flex items-center justify-center overflow-hidden border border-[#d6dcff]">
                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 w-3/4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-4/5 bg-gray-100 rounded"></div>
                  </div>
                  <div className="mt-4 p-3 bg-[#fdf4ff] rounded-lg border border-[#fae8ff] flex items-start gap-2">
                     <Sparkles className="w-4 h-4 text-fuchsia-500 mt-0.5 shrink-0" />
                     <p className="text-xs text-fuchsia-900 font-medium leading-relaxed">Kas AI generated a response using the Returns Policy Document.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">Don’t let language be a barrier to your email support</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Automate response to email queries in more than 100 languages with Kas newerax's dynamic language translations, ensuring personalized communication for your diverse customer base.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-72 bg-[#f0fdf4] rounded-2xl flex items-center justify-center overflow-hidden border border-[#dcfce7]">
                <div className="relative w-3/4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 ml-8 transform -rotate-2">
                     <div className="flex items-center gap-2 mb-2">
                       <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">Spanish</span>
                     </div>
                     <p className="text-xs text-gray-700 italic">"¿Dónde está mi reembolso?"</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 transform rotate-1 border-l-4 border-l-green-500">
                     <div className="flex items-center gap-2 mb-2">
                       <Languages className="w-4 h-4 text-green-500" />
                       <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded">Auto-Translated (English)</span>
                     </div>
                     <p className="text-xs text-gray-800 font-medium">"Where is my refund?"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">Make better decisions with AI-powered insights</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Get actionable insights at a glance. Kas newerax's Insights and Summarization feature provides indepth analysis of every ticket with sentiment analysis, and key highlights of email conversations, helping your team to make informed decision and resolve queries faster and smarter.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-72 bg-[#fffbeb] rounded-2xl flex flex-col items-center justify-center p-6 border border-[#fef3c7]">
                <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-4">
                   <div className="flex items-center justify-between">
                     <h4 className="text-xs font-bold text-gray-800 uppercase">Sentiment Analysis</h4>
                     <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded">Frustrated ↘</span>
                   </div>
                   <div>
                     <h4 className="text-xs font-bold text-gray-800 uppercase mb-2">AI Summary</h4>
                     <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded leading-relaxed border border-gray-100">
                       Customer has followed up three times regarding a delayed shipping issue. Expedited handling is recommended.
                     </p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">Upgrade your agents to AI-powered human agents</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Supercharge your support agents with AI-powered suggestions, writing tools, and access to knowledge base. Quickly fetch answers from hundreds of support documents, enabling agents to deliver accurate resolutions faster. Agent Assist will provide suggestions on improving the answers with the right grammar and tone.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-72 bg-[#fdf4ff] rounded-2xl flex items-center justify-center overflow-hidden border border-[#fae8ff]">
                <div className="w-3/4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                   <p className="text-xs text-gray-500 mb-2">Drafting Reply...</p>
                   <div className="text-xs text-gray-800 leading-relaxed p-2 bg-gray-50 border border-gray-200 rounded">
                     We r sory for the delay. Package is coming tomorrow.
                   </div>
                   <div className="mt-3 bg-[#eef0ff] p-3 rounded-lg border border-[#d6dcff]">
                     <div className="flex items-center gap-2 mb-2">
                       <Sparkles className="w-3 h-3 text-[#6039ea]" />
                       <span className="text-[10px] font-bold text-[#6039ea] uppercase">Kas AI Rewrite Suggestion</span>
                     </div>
                     <p className="text-xs text-[#6039ea] leading-relaxed">
                       "We sincerely apologize for the delay. Your package is scheduled to arrive tomorrow."
                     </p>
                     <button className="mt-2 text-[10px] font-bold text-white bg-[#6039ea] px-3 py-1 rounded">Apply Suggestion</button>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">AI for the public. Human support agents for your premium customers</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Seamlessly transfer unresolved complex email ticket queries from AI to support live agents. Ensure every customer concern is addressed with the perfect blend of automation and human empathy.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-72 bg-[#f0fdf4] rounded-2xl flex items-center justify-center overflow-hidden border border-[#dcfce7]">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                       <Sparkles className="w-8 h-8 text-blue-500" />
                    </div>
                    <div className="flex flex-col items-center text-green-600">
                       <ArrowRight className="w-6 h-6 mb-1" />
                       <span className="text-[9px] font-bold uppercase tracking-wider bg-green-100 px-2 py-0.5 rounded">Handoff</span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                       <UserPlus className="w-8 h-8 text-green-500" />
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
        className="py-24 bg-white"
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

export default EmailTicketing;