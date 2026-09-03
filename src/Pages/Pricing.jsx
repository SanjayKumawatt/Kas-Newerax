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
    "How does the early access pilot program work?",
    "Can I add more agents or team members?",
    "What if the AI doesn't perform well initially?",
    "How do I know which setup to start with?",
    "Do I need to automate everything to justify the cost?",
    "Can we expand our deployment later?",
    "What if AI doesn't fit our specific use case?"
  ];

  // Pricing Data configured for Early Access / Pilot Stage
  const plans = {
    pilot: {
      name: "Pilot Program",
      desc: "For growing teams ready to test and deploy AI support automation.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      featuresMonthly: [
        "1 Core AI support agent included",
        "Configurable human handoff workflows",
        "Omnichannel (Web, WhatsApp, Email)",
        "Knowledge base grounding",
        "Dedicated onboarding support",
        "Live chat and email assistance"
      ],
      featuresAnnual: [
        "1 Core AI support agent included",
        "Configurable human handoff workflows",
        "Omnichannel (Web, WhatsApp, Email)",
        "Knowledge base grounding",
        "Dedicated onboarding support",
        "Live chat and email assistance"
      ]
    },
    growth: {
      name: "Growth (Roadmap)",
      badge: "Coming Soon",
      desc: "For teams scaling automation across multiple complex workflows.",
      priceMonthly: "TBA",
      priceAnnual: "TBA",
      featuresMonthly: [
        "Multiple AI agents for different departments",
        "Advanced CRM Integrations (Zendesk, Freshdesk)",
        "Extended chat history analytics",
        "AI Summaries and Agent Assist",
        "API & Webhooks access",
        "Priority technical support"
      ],
      featuresAnnual: [
        "Multiple AI agents for different departments",
        "Advanced CRM Integrations (Zendesk, Freshdesk)",
        "Extended chat history analytics",
        "AI Summaries and Agent Assist",
        "API & Webhooks access",
        "Priority technical support"
      ]
    },
    enterprise: {
      name: "Enterprise",
      desc: "For large organizations running AI as a core support layer.",
      priceMonthly: "Contact Sales",
      priceAnnual: "Contact Sales",
      features: [
        "Custom deployment & scalable volume",
        "SSO & identity management (Roadmap)",
        "Salesforce & HubSpot integrations (Roadmap)",
        "Dedicated account manager",
        "SLA-backed support (Roadmap)",
        "Custom features & integrations"
      ]
    }
  };

  return (
    <div className="w-full bg-[#f8f9fb] font-sans overflow-hidden min-h-screen">
      
      {/* Header Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-12 lg:pt-24 lg:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.15] sm:text-5xl font-bold text-[#14142b] tracking-tight mb-4">
          Flexible deployment for <span className="text-[#6039ea] italic font-serif">growing support teams</span>
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Kas newerax is currently in early access. We are working closely with pilot customers to provide custom, scalable pricing tailored to your exact support volume.
        </motion.p>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pilot Plan */}
          <motion.div variants={fadeInUp} className="bg-white rounded-3xl p-8 border-2 border-[#6039ea] shadow-md flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#eef0ff] text-[#6039ea] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#d6dcff]">
              Early Access
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plans.pilot.name}</h3>
            <p className="text-sm text-gray-500 mb-8 h-10">{plans.pilot.desc}</p>
            <div className="mb-8">
               <span className="text-4xl font-bold text-gray-900">{plans.pilot.priceMonthly}</span>
               <p className="text-xs text-gray-400 mt-2">Tailored based on expected conversation volume.</p>
            </div>
            <Link to="/signup" className={`w-full py-3.5 rounded-lg ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors text-center mb-8 shadow-sm`}>
              Request Access
            </Link>
            <ul className="space-y-4 flex-1">
              {plans.pilot.featuresMonthly.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#6039ea] flex-shrink-0" />
                  <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Growth Plan (Roadmap) */}
          <motion.div variants={fadeInUp} className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col opacity-80">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-gray-600">{plans.growth.name}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-8 h-10">{plans.growth.desc}</p>
            <div className="mb-8">
               <span className="text-4xl font-bold text-gray-500">{plans.growth.priceMonthly}</span>
               <p className="text-xs text-gray-400 mt-2">Features currently in active development.</p>
            </div>
            <button disabled className="w-full py-3.5 rounded-lg bg-gray-200 text-gray-400 font-bold text-sm text-center mb-8 cursor-not-allowed">
              Coming Soon
            </button>
            <ul className="space-y-4 flex-1">
              {plans.growth.featuresMonthly.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-500 leading-relaxed">{feature}</span>
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
               <p className="text-xs text-gray-400 mt-1">For custom requirements and integrations.</p>
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
          Platform Capabilities
        </motion.h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 w-1/4">
                  <span className="text-lg font-bold text-gray-900">Key Features</span>
                </th>
                <th className="p-4 w-1/4 text-center bg-gray-50 rounded-t-2xl border-t border-l border-r border-gray-100">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-900 mb-4">Pilot Program</span>
                    <Link to="/signup" className={`w-full py-2.5 rounded-lg bg-[#14142b] text-white font-bold text-sm hover:bg-black transition-colors`}>Request Access</Link>
                  </div>
                </th>
                <th className="p-4 w-1/4 text-center">
                  <div className="flex flex-col items-center opacity-70">
                    <span className="text-xl font-bold text-gray-600 mb-4">Growth</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Roadmap</span>
                  </div>
                </th>
                <th className="p-4 w-1/4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-900 mb-4">Enterprise</span>
                    <Link to="/sales" className={`w-full py-2.5 rounded-lg border border-[#6039ea] ${primaryColor} font-bold text-sm hover:bg-[#eef0ff] transition-colors`}>Contact Sales</Link>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { feature: "AI agents", pilot: "1 Core", pro: "Multiple", ent: "Custom" },
                { feature: "Conversational Channels", pilot: "Web, WhatsApp, Email", pro: "Extended Channels", ent: "Custom integrations" },
                { feature: "Knowledge Base Grounding", pilot: "Yes", pro: "Advanced", ent: "Custom sources" },
                { feature: "Human Handoff Routing", pilot: "Basic", pro: "Advanced", ent: "Custom rules" },
                { feature: "Integrations", pilot: "Core Platforms", pro: "CRM + Analytics (Roadmap)", ent: "Full ecosystem" },
                { feature: "Security & Privacy", pilot: "Standard", pro: "Standard", ent: "Advanced Controls" },
                { feature: "SLA-backed support", pilot: "-", pro: "-", ent: "Roadmap" },
                { feature: "SSO / Identity Management", pilot: "-", pro: "-", ent: "Roadmap" }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                  <td className="p-5 font-semibold text-gray-700">{row.feature}</td>
                  <td className="p-5 text-center text-gray-900 font-bold bg-gray-50 border-l border-r border-gray-100">
                     {row.pilot === "-" ? <Minus className="w-5 h-5 mx-auto text-gray-300" /> : row.pilot}
                  </td>
                  <td className="p-5 text-center text-gray-500 font-medium opacity-80">
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
            <p className="text-gray-600">Everything you need to know about Kas newerax's early access and deployment.</p>
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
                        Answers will be configured based on Kas newerax internal documentation. This section provides detailed context regarding your query about platform capabilities or onboarding.
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

export default Pricing;