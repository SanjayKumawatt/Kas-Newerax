import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, Plus, Minus, ArrowRight, Info
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

const Pricing = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "What does “conversation” mean?",
    "Can I try before I buy?",
    "Can I add more agents or team members?",
    "What if AI doesn't perform well initially?",
    "How do I know which plan to start with?",
    "Do I need to automate everything to justify the cost?",
    "Can we upgrade later?",
    "What if AI doesn't perform well in our use case?"
  ];

  // Pricing Data configured for Indian Context (INR)
  const plans = {
    starter: {
      name: "Starter",
      desc: "For startups and teams introducing trusted automation",
      priceMonthly: "₹3,200",
      priceAnnual: "₹2,720",
      featuresMonthly: [
        "1 AI agent included (add more for ₹1,600/mo)",
        "1 team member included (add more for ₹1,600/mo)",
        "250 conversations/month (~10K messages)",
        "Channels: Web, Mobile Apps, WhatsApp, Telegram, Instagram",
        "AI Agent for chat",
        "AI Email Automation",
        "Voice AI agent",
        "1-year chat history",
        "Additional conversations: ₹1,200/1,000",
        "Live chat and email support"
      ],
      featuresAnnual: [
        "1 AI agent included (add more for ₹1,600/mo)",
        "1 team member included (add more for ₹1,600/mo)",
        "250 conversations/month (~10K messages)",
        "Channels: Web, Mobile Apps, WhatsApp, Telegram, Instagram",
        "AI Email Automation",
        "3-month chat history",
        "Additional conversations: ₹1,200/1,000",
        "Live chat and email support"
      ]
    },
    professional: {
      name: "Professional",
      badge: "Popular",
      desc: "For growing teams ready to scale automation with control",
      priceMonthly: "₹16,000",
      priceAnnual: "₹13,360",
      featuresMonthly: [
        "2 AI agents included (add extra for ₹2,400/mo)",
        "3 team members included (add extra for ₹2,400/mo)",
        "2,000 conversations/month (~80K messages)",
        "Zendesk, Freshdesk & Google Analytics integration",
        "2-year chat history",
        "Additional conversations: ₹800/1,000",
        "AI Summary, Auto-resolve tickets, Agent Assist",
        "Campaign Messaging",
        "API & Webhooks access",
        "Priority support"
      ],
      featuresAnnual: [
        "2 AI agents included (add extra for ₹2,400/mo)",
        "3 team members included (add extra for ₹2,400/mo)",
        "2,000 conversations/month (~80K messages)",
        "Zendesk, Freshdesk & Google Analytics integration",
        "Phone Call AI",
        "1-year chat history",
        "Additional conversations: ₹800/1,000",
        "AI Summary, Auto-resolve tickets, Agent Assist",
        "Campaign Messaging",
        "API & Webhooks access",
        "Priority support"
      ]
    },
    enterprise: {
      name: "Enterprise",
      desc: "For large organizations running AI as a core support layer",
      priceMonthly: "Contact Sales",
      priceAnnual: "Contact Sales",
      features: [
        "Custom number of AI agents & seats",
        "Discounted conversation/message pricing",
        "Salesforce, HubSpot, Zapier integrations",
        "Dedicated account manager",
        "SLA-backed support",
        "Advanced analytics & insights",
        "SSO & identity management",
        "Custom features & integrations",
        "Remove Kas newerax branding"
      ]
    }
  };

  return (
    <div className="w-full bg-[#f8f9fb] font-sans overflow-hidden min-h-screen">
      
      {/* Header & Toggle Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-12 lg:pt-24 lg:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.15] sm:text-5xl font-bold text-[#14142b] tracking-tight mb-4">
          Pricing that helps you <span className="text-[#6039ea] italic font-serif">grow your confidence with AI</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-sm text-gray-600 font-medium mb-10">
          30-day free trial on all plans • No credit card required
        </motion.p>

        <motion.div variants={fadeInUp} className="flex justify-center items-center">
          <div className="bg-white border border-[#6039ea] p-1 rounded-full flex items-center shadow-sm relative">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors ${!isAnnual ? 'text-white' : 'text-[#6039ea]'}`}
            >
              Monthly billing
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`relative z-10 px-6 py-2.5 text-sm font-bold rounded-full transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-[#6039ea]'}`}
            >
              Annual billing <span className={`text-[10px] px-2 py-0.5 rounded-full ${isAnnual ? 'bg-white text-[#6039ea]' : 'bg-[#eef0ff] text-[#6039ea]'}`}>Save 20%</span>
            </button>
            {/* Sliding Background */}
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#6039ea] rounded-full transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'}`}
              style={{ width: isAnnual ? '160px' : '135px' }}
            ></div>
          </div>
        </motion.div>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Starter Plan */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col hover:border-[#6039ea] transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plans.starter.name}</h3>
            <p className="text-sm text-gray-500 mb-8 h-10">{plans.starter.desc}</p>
            <div className="mb-8">
               <span className="text-4xl font-bold text-gray-900">{isAnnual ? plans.starter.priceAnnual : plans.starter.priceMonthly}</span>
               <span className="text-gray-500 font-medium text-sm">/month</span>
               <p className="text-xs text-gray-400 mt-1">Billed {isAnnual ? 'yearly' : 'monthly'}.</p>
            </div>
            <Link to="/get-started" className={`w-full py-3.5 rounded-lg ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors text-center mb-8`}>
              Get started
            </Link>
            <ul className="space-y-4 flex-1">
              {(isAnnual ? plans.starter.featuresAnnual : plans.starter.featuresMonthly).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Plan */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 border-2 border-[#6039ea] shadow-md flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#eef0ff] text-[#6039ea] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#d6dcff]">
              {plans.professional.badge}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plans.professional.name}</h3>
            <p className="text-sm text-gray-500 mb-8 h-10">{plans.professional.desc}</p>
            <div className="mb-8">
               <span className="text-4xl font-bold text-gray-900">{isAnnual ? plans.professional.priceAnnual : plans.professional.priceMonthly}</span>
               <span className="text-gray-500 font-medium text-sm">/month</span>
               <p className="text-xs text-gray-400 mt-1">Billed {isAnnual ? 'yearly' : 'monthly'}.</p>
            </div>
            <Link to="/get-started" className={`w-full py-3.5 rounded-lg ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors text-center mb-8 shadow-sm`}>
              Get started
            </Link>
            <ul className="space-y-4 flex-1">
              {(isAnnual ? plans.professional.featuresAnnual : plans.professional.featuresMonthly).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col hover:border-[#6039ea] transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plans.enterprise.name}</h3>
            <p className="text-sm text-gray-500 mb-8 h-10">{plans.enterprise.desc}</p>
            <div className="mb-8">
               <span className="text-3xl font-bold text-gray-900 leading-tight block h-10 flex items-center">{plans.enterprise.priceMonthly}</span>
               <p className="text-xs text-gray-400 mt-1">Billed {isAnnual ? 'yearly' : 'monthly'}.</p>
            </div>
            <Link to="/sales" className={`w-full py-3.5 rounded-lg border border-[#6039ea] ${primaryColor} font-bold text-sm hover:bg-[#eef0ff] transition-colors text-center mb-8`}>
              Talk to Sales
            </Link>
            <ul className="space-y-4 flex-1">
              {plans.enterprise.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.section>

      {/* Compare Plans Table */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-t-[3rem] border-t border-gray-200"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          Compare Plan
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 w-1/4">
                  <span className="text-lg font-bold text-gray-900">Key Features</span>
                </th>
                <th className="p-4 w-1/4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-900 mb-4">Starter</span>
                    {/* <Link to="/get-started" className={`w-full py-2.5 rounded-lg border border-[#6039ea] ${primaryColor} font-bold text-sm hover:bg-[#eef0ff] transition-colors`}>Get Started</Link> */}
                  </div>
                </th>
                <th className="p-4 w-1/4 text-center bg-gray-50 rounded-t-2xl border-t border-l border-r border-gray-100">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-900 mb-4">Professional</span>
                    {/* <Link to="/get-started" className={`w-full py-2.5 rounded-lg bg-[#14142b] text-white font-bold text-sm hover:bg-black transition-colors`}>Get Started</Link> */}
                  </div>
                </th>
                <th className="p-4 w-1/4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-900 mb-4">Enterprise</span>
                    {/* <Link to="/sales" className={`w-full py-2.5 rounded-lg border border-[#6039ea] ${primaryColor} font-bold text-sm hover:bg-[#eef0ff] transition-colors`}>Contact Sales</Link> */}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { feature: "AI agent included", starter: "1", pro: "2", ent: "Custom" },
                { feature: "Team members", starter: "1", pro: "3", ent: "Custom" },
                { feature: "Conversations included", starter: "250", pro: "2,000", ent: "Custom" },
                { feature: "Voice AI", starter: "₹5/min", pro: "₹5/min", ent: "Custom" },
                { feature: "Chat history", starter: "1 year", pro: "2 years", ent: "Custom" },
                { feature: "Integrations", starter: "Core", pro: "CRM + Analytics", ent: "Full ecosystem" },
                { feature: "Priority support", starter: "-", pro: "Yes", ent: "SLA" },
                { feature: "Governance & Controls", starter: "Basic", pro: "Standard", ent: "Advanced" },
                { feature: "Branding removal", starter: "-", pro: "-", ent: "Custom" },
                { feature: "Custom features", starter: "-", pro: "-", ent: "Custom" }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-semibold text-gray-700">{row.feature}</td>
                  <td className="p-5 text-center text-gray-600 font-medium">
                     {row.starter === "-" ? <Minus className="w-5 h-5 mx-auto text-gray-300" /> : row.starter}
                  </td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-gray-50 border-l border-r border-gray-100">
                     {row.pro === "-" ? <Minus className="w-5 h-5 mx-auto text-gray-300" /> : row.pro}
                  </td>
                  <td className="p-5 text-center text-gray-600 font-medium">
                     {row.ent === "-" ? <Minus className="w-5 h-5 mx-auto text-gray-300" /> : row.ent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase">Support</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Frequently asked questions
            </h2>
            <p className="text-gray-600">Everything you need to know about Kas newerax's pricing.</p>
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
                    {openFaq === index ? <Minus className="w-5 h-5 text-[#6039ea]" /> : <Plus className="w-5 h-5 text-gray-400" />}
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
                      <p className="pt-4 text-sm text-gray-600 leading-relaxed pr-8">
                        Answers will be configured based on Kas newerax internal documentation. This section provides detailed context regarding your query about pricing or features.
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

export default Pricing;