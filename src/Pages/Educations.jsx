import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Bot, CheckCircle2, User, Clock, 
  Coins, Users, ThumbsUp, Code2, Plus, Minus,
  BookOpen, Calendar, ArrowRightLeft, Sparkles, School
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

const Education = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What is an AI support agent for education?",
    "How does Kas newerax's education AI agent work?",
    "How do AI agents benefit educational institutions?",
    "What kind of queries can the AI agent handle?",
    "How quickly can we deploy the AI agent?",
    "Does the AI agent support multiple languages for international students?",
    "Can we customize the AI agent for our specific institution?",
    "How secure is student data with Kas newerax's platform?"
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
            <p className="text-[#6039ea] font-bold text-sm mb-3 tracking-wide uppercase">AI Support for Education</p>
            <h1 className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4.5rem] font-bold text-[#14142b] tracking-tight mb-6">
              AI support built for schools, higher ed and ed-tech
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Provide automated support for admissions, course FAQs, deadlines, and basic IT issues across web, WhatsApp, and mobile apps. Keep human staff in control by routing complex cases seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="/signup" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors text-center shadow-sm`}>
                Request Early Access
              </Link>
              <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors text-center bg-white`}>
                Book a Demo
              </Link>
            </div>
            <p className="mt-5 text-sm text-gray-400 font-medium">
              Currently in early access and pilot stage.
            </p>
          </motion.div>

          {/* Hero Custom Flat Mockup (Student Chat) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[450px]">
              <div className="bg-blue-600 p-4 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                       <School className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm">University Support</span>
                 </div>
                 <span className="text-[9px] font-bold text-blue-600 bg-white px-2 py-0.5 rounded">FAQ</span>
              </div>
              <div className="flex-1 bg-[#f8f9fb] p-4 flex flex-col gap-4 overflow-hidden relative">
                 <div className="self-end bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm w-3/4 text-xs leading-relaxed shadow-sm">
                    What's the deadline for submission?
                 </div>
                 <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm w-5/6 text-xs text-gray-700 leading-relaxed shadow-sm flex items-start gap-2">
                    <Bot className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p>To assist you please let me know which project submission you are referring to?</p>
                 </div>
                 <div className="self-end bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm w-2/3 text-xs leading-relaxed shadow-sm">
                    For MGT 302 mid terms
                 </div>
                 <div className="self-start bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-sm w-5/6 text-xs text-gray-700 leading-relaxed shadow-sm flex items-start gap-2">
                    <Bot className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p>The last date for submitting the project for Mid term theory test Core registers is April 12, 2026.</p>
                 </div>
                 <div className="self-end bg-blue-600 text-white p-3 rounded-2xl rounded-tr-sm w-1/4 text-xs leading-relaxed shadow-sm text-center">
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
          Elevate student support with automated AI workflows
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: Automate queries */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Automate repetitive student queries</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Streamline your communication processes with an AI agent that handles high volumes of routine inquiries instantly.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Answer queries about admission deadlines, eligibility criteria, and document requirements",
                  "Guide students through basic login troubleshooting and LMS navigation FAQs",
                  "Automate standard responses related to fee structures, payment deadlines, and financial aid basic info"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#eef2ff] rounded-3xl flex items-center justify-center border border-[#d6e0ff] relative">
                 <div className="w-64 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-blue-600 p-3 flex items-center gap-2">
                       <School className="w-4 h-4 text-white" />
                       <span className="text-white font-bold text-sm">State University</span>
                    </div>
                    <div className="p-4 space-y-3 bg-gray-50 h-48">
                       <div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm">
                          <p className="text-[10px] text-gray-500 mb-1">Student:</p>
                          <p className="text-xs text-gray-800">What are the GPA requirements for the MBA program?</p>
                       </div>
                       <div className="bg-blue-50 p-2 rounded-lg border border-blue-100 shadow-sm ml-4">
                          <div className="flex items-center gap-1 mb-1">
                             <Bot className="w-3 h-3 text-blue-600" />
                             <p className="text-[10px] font-bold text-blue-600">AI Assistant</p>
                          </div>
                          <p className="text-xs text-blue-900 leading-relaxed">
                            Based on our guidelines, the minimum GPA requirement for the MBA program is 3.0 on a 4.0 scale.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Personalized experiences */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Deliver contextual experiences at scale</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Use your existing knowledge base and FAQs to train Kas newerax's AI agent, creating relevant and contextual interactions for students.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Connect with standard education platforms to fetch routine information",
                  "Automate reminders for general exam periods, deadlines, and standard campus policies",
                  "Help route students to the right mental health resources or academic support links"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#fdf4ff] rounded-3xl flex items-center justify-center border border-[#fae8ff] relative">
                 <div className="w-3/4 max-w-sm bg-white rounded-xl shadow-sm border border-gray-100 p-5 relative z-10">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                       <span className="font-bold text-gray-800 text-sm">System Notification</span>
                       <BookOpen className="w-4 h-4 text-fuchsia-500" />
                    </div>
                    <div className="space-y-3">
                       <div className="flex items-start gap-3 bg-fuchsia-50 p-3 rounded-lg border border-fuchsia-100">
                          <Calendar className="w-5 h-5 text-fuchsia-600 shrink-0 mt-0.5" />
                          <div>
                             <p className="text-xs font-bold text-fuchsia-900">Deadline Query Response</p>
                             <p className="text-[10px] text-fuchsia-700 mt-1">Based on the academic calendar, the final date for History 101 submissions is tomorrow.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Automated Support */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Automated support outside business hours</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Provide assistance across multiple channels using established AI models, built to support the specific needs of educational institutions.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Reduce first response times by automating initial triage and routine answers",
                  "Train your AI agent securely using your own public URLs and help docs",
                  "Maintain accuracy with custom prompts, guardrails, and continuous monitoring"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <div className="w-full h-80 bg-[#f0fdf4] rounded-3xl flex flex-col items-center justify-center border border-[#dcfce7]">
                 <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
                       <Clock className="w-8 h-8 text-emerald-500" />
                    </div>
                    <div className="h-0.5 w-16 bg-emerald-200"></div>
                    <div className="w-16 h-16 bg-emerald-500 rounded-full shadow-sm flex items-center justify-center">
                       <Bot className="w-8 h-8 text-white" />
                    </div>
                 </div>
                 <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-100">
                    <span className="text-sm font-bold text-gray-800">After-hours query handling</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Human Handoff */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Smart human handoff when it matters</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Let AI agents manage repetitive tasks, and cleanly hand off complex or sensitive queries to the correct student support department.
              </p>
              <ul className="space-y-4 pt-2">
                {[
                  "Route students to the right department or staff member based on query type",
                  "Monitor AI agent performance and track resolution efficiency",
                  "Help teams resolve requests faster by delivering context-rich escalations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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

      {/* Stats Section (Factual outcomes, No fake percentages) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16 bg-[#fffaf5] border-y border-[#fceee0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Drive Real Results with Automation
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Kas newerax's platform helps universities, colleges, and edtech platforms automate student conversations. Reduce repetitive support workload and help your human teams focus on what matters.
            </p>
            <Link to="/signup" className={`inline-block px-6 py-2.5 rounded-md ${bgPrimary} text-white font-semibold text-sm hover:bg-[#502cd1] transition-colors shadow-sm`}>
              Request Early Access
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6">
             <div className="flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Faster Issue <br />Resolution Times</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <Coins className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Reduced Routine <br />Support Costs</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Higher Student <br />Engagement</p>
             </div>
             <div className="flex flex-col items-center text-center">
                <ThumbsUp className="w-10 h-10 text-green-700 mb-3" />
                <p className="text-xs font-bold text-gray-900">Improved Overall <br />Feedback Scores</p>
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
            Platform Capabilities
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-6">
             {/* Left Large Card */}
             <motion.div variants={fadeInUp} className="w-full lg:w-1/3 bg-[#1e1642] p-8 rounded-2xl border border-white/10 flex flex-col">
                <h3 className="text-xl font-bold mb-4">Core Integrations</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow">
                  Kas newerax is built to connect with your existing workflows, aiming to reduce the need for heavy manual coding or difficult installations.
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
                   <h3 className="text-lg font-bold mb-2">Automated Support</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Kas newerax supports multilingual conversational capabilities, ensuring routine student inquiries are handled efficiently, even outside standard hours.
                   </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-[#1e1642] p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
                   <h3 className="text-lg font-bold mb-2">Flexible AI Models</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Our platform is designed to support leading AI models like OpenAI, Google Gemini, and Anthropic, allowing the system to adapt to your institution's specific content.
                   </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-[#1e1642] p-6 rounded-2xl border border-white/10 flex flex-col justify-center">
                   <h3 className="text-lg font-bold mb-2">Unified Support Workflow</h3>
                   <p className="text-gray-300 text-sm leading-relaxed">
                     Kas newerax helps consolidate support conversations from multiple channels into one platform, keeping human agents in control of complex resolutions.
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
            <Link to="/signup" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors shadow-sm`}>
              Request Early Access
            </Link>
            <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors bg-white`}>
              See a Live Demo
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Education;