import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Globe, Users, Zap, Settings, Shield, 
  Workflow, MessageSquare, FastForward, Sliders, Layers 
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

const MainContent = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Features Bar */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-12 border-b border-gray-100 bg-gray-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-8">One platform. Every channel. Zero lock-in.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600 font-medium">
            <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-center p-4 bg-white rounded-lg border border-gray-100">
              <Globe className={`w-5 h-5 ${primaryColor}`} />
              <span className="text-left">Live across Web, WhatsApp, Email, Apps with a unified AI agent experience</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-center p-4 bg-white rounded-lg border border-gray-100">
              <Users className={`w-5 h-5 ${primaryColor}`} />
              <span className="text-left">Human handoff built-in, not bolted on, for reliable customer support</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-center p-4 bg-white rounded-lg border border-gray-100">
              <Settings className={`w-5 h-5 ${primaryColor}`} />
              <span className="text-left">Works with OpenAI, Anthropic, Gemini & more to power each AI agent</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start lg:justify-center p-4 bg-white rounded-lg border border-gray-100">
              <Shield className={`w-5 h-5 ${primaryColor}`} />
              <span className="text-left">No long implementations. No AI agent lock-in</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Problem Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          AI promised to reduce support load.<br/>Instead, it created new problems.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-12">
          Support leaders today are stuck between:
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left">
          <motion.div variants={fadeInUp} className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
            <span className="font-medium text-gray-800">AI Agents that sound smart but break on edge cases</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
            <span className="font-medium text-gray-800">Enterprise tools that take months to deploy</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
            <span className="font-medium text-gray-800">“AI-first” platforms that ignore human workflows</span>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-100">
            <span className="font-medium text-gray-800">Teams afraid to trust automation fully in customer support</span>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="p-8 bg-red-50 rounded-2xl border border-red-100">
          <h3 className="text-xl md:text-2xl font-bold text-red-900">
            The result? Automation gets turned off. Tickets come back. Churn follows.
          </h3>
        </motion.div>
      </motion.section>

      {/* The Solution Dilemma */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-[#f4f5f8]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The problem isn't automation.<br/>
              <span className={primaryColor}>The problem is uncontrolled automation powered by an unmanaged AI Agent</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600">Most tools force you to choose between:</motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className={`text-xl font-bold ${primaryColor} mb-4`}>Speed or safety</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Either you provide instant answers or ensure safe and accurate resolution is provided by an AI agent.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className={`text-xl font-bold ${primaryColor} mb-4`}>AI or humans</h4>
              <p className="text-gray-600 text-sm leading-relaxed">AI fails to route queries to specialized teams, create confusion, and delay the response for the customers in real-world customer support.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className={`text-xl font-bold ${primaryColor} mb-4`}>Automation or CX</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Deploy fully automated support system without any human involvement but compromise on customer experience and long-term customer support quality.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Automation without anxiety */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h2 variants={fadeInUp} className={`text-2xl md:text-3xl font-bold ${primaryColor} mb-16`}>
          Kas newerax brings AI and humans together with a controllable AI agent.
        </motion.h2>

        <div className="bg-[#f8f9fb] rounded-3xl p-8 md:p-16 text-left border border-gray-100">
          <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
            Automation without anxiety
          </motion.h3>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
               {/* Clean Flat Dashboard Mockup Placeholder */}
               <div className="w-full aspect-video bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-8 w-full flex flex-col gap-4 mt-8">
                     <div className="bg-indigo-50 p-4 rounded-lg w-[80%]">
                        <p className="text-xs text-gray-500 font-medium mb-1">AI Agent</p>
                        <p className="text-sm text-gray-800">Handling ticket #2049...</p>
                     </div>
                     <div className="bg-gray-50 p-4 rounded-lg w-[80%] self-end">
                        <p className="text-xs text-gray-500 font-medium mb-1">Human Agent (Rachel)</p>
                        <p className="text-sm text-gray-800">Taking over context smoothly. Hi, I can help you with that cancellation.</p>
                     </div>
                  </div>
               </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              <p className="text-lg text-gray-800 mb-6 font-medium">Kas newerax is built for teams that want</p>
              <ul className="space-y-4">
                {[
                  "Immediate workload reduction using an AI agent",
                  "Clear visibility into AI agent behavior",
                  "Seamless human handoff within customer support workflows",
                  "Gradual, controllable automation driven by each AI agent"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${primaryColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div variants={fadeInUp} className="mt-16 text-center space-y-4">
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            You decide <span className={primaryColor}>what AI handles.</span>
          </p>
          <p className="text-xl md:text-2xl font-bold text-gray-900">
            You decide <span className={primaryColor}>when human step in.</span>
          </p>
          <p className={`text-lg md:text-xl font-medium ${primaryColor} mt-6`}>
            Nothing breaks quietly in the background of your customer support stack.
          </p>
        </motion.div>
      </motion.section>

      {/* How it works Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeInUp} className={`text-3xl font-bold text-center ${primaryColor} mb-16`}>
          How it works
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="space-y-3">
              <FastForward className={`w-8 h-8 ${primaryColor} mb-2`} />
              <h4 className="text-lg font-bold text-gray-900">Go Live Fast</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Train your AI agent using your website, help docs, or FAQs. Deploy across web, WhatsApp, apps, and email - without engineering cycles.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-3">
              <Settings className={`w-8 h-8 ${primaryColor} mb-2`} />
              <h4 className="text-lg font-bold text-gray-900">Automate the safe stuff</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Handle repetitive, high-volume questions instantly with an AI agent. AI answers confidently where it's trained - and stops where it's not.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-3">
              <Users className={`w-8 h-8 ${primaryColor} mb-2`} />
              <h4 className="text-lg font-bold text-gray-900">Handoff when it matters</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Complex, emotional, or edge-case conversations move smoothly to humans, with full context intact from the AI agent.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-3">
              <Sliders className={`w-8 h-8 ${primaryColor} mb-2`} />
              <h4 className="text-lg font-bold text-gray-900">Improve with confidence</h4>
              <p className="text-sm text-gray-600 leading-relaxed">See what AI handles, where it escalates, and how customers respond - in real time across your customer support operation.</p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
             {/* Clean Flat Dashboard Mockup Placeholder */}
             <div className="w-full bg-[#f4f5f8] rounded-xl border border-gray-200 flex overflow-hidden min-h-[400px]">
                <div className="w-16 bg-[#2d1b6e] flex flex-col items-center py-4 gap-6">
                   <div className="w-8 h-8 bg-white/20 rounded"></div>
                   <div className="w-6 h-6 bg-white/20 rounded"></div>
                   <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
                <div className="flex-1 p-6">
                  <div className="h-8 bg-white border border-gray-200 rounded mb-4 w-1/3"></div>
                  <div className="space-y-4">
                     <div className="h-24 bg-white border border-gray-200 rounded w-full"></div>
                     <div className="h-24 bg-white border border-gray-200 rounded w-full"></div>
                     <div className="h-24 bg-white border border-gray-200 rounded w-full"></div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Built for real support teams */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      >
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <h2 className={`text-3xl md:text-4xl font-bold ${primaryColor} mb-8 leading-tight`}>
              Built for real support teams, not demos
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-started" className={`px-6 py-3 rounded-md ${bgPrimary} text-white font-semibold text-center hover:bg-[#502cd1] transition-colors`}>
                Get Started
              </Link>
              <Link to="/sales" className={`px-6 py-3 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-center hover:bg-indigo-50 transition-colors`}>
                Talk to Sales
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 relative">
            <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gray-200 hidden sm:block"></div>
            
            <div className="space-y-12">
              {[
                { icon: Zap, title: "Fast time-to-value", desc: "Be live in days, not months with an AI agent ready for production." },
                { icon: Users, title: "Human + AI by design", desc: "Handoff is native, not an afterthought in customer support." },
                { icon: Shield, title: "Control-first AI", desc: "Rules, routing, and visibility - no black boxes for your AI agent." },
                { icon: Layers, title: "Model-agnostic", desc: "Use OpenAI, Anthropic, Gemini, or your existing bots. No AI agent lock-in." },
                { icon: Globe, title: "Omnichannel, actually unified", desc: "One platform for web, WhatsApp, mobile apps, and email powered by a single AI agent layer." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-6 sm:gap-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#f4f0ff] border border-[#eef0ff] flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-5 h-5 ${primaryColor}`} />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-[#f8f9fb] text-center px-4 sm:px-6 lg:px-8"
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

export default MainContent;