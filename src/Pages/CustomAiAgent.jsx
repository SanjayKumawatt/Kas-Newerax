import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, CheckSquare, ArrowLeftRight, Code2, Target, 
  MessageCircle, Users, FileText, Activity, Settings, 
  Layers, Plus, Minus, ArrowRight, X, CircleDot
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

const CustomAIAgents = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Why one platform instead of best-of-breed tools per department?",
      a: "Best-of-breed tools solve one department's problem and create data silos. Kas newerax agents share one platform, one integration layer, and one view of the customer—so your teams are not working from disconnected systems that never talk to each other."
    },
    {
      q: "How long does it take to go live?",
      a: "Most agents go live in weeks, not quarters. We train on your existing docs, FAQs, and workflows, then deploy in stages so your team can validate before it touches real customers."
    },
    {
      q: "Does this replace our CRM, helpdesk or internal tools?",
      a: "No. Agents integrate with the systems you already run - Zendesk, Salesforce, Slack, WhatsApp and more - so there is nothing to rip out and no vendor lock-in."
    },
    {
      q: "What happens when the AI does not know the answer?",
      a: "It hands off. Every agent is built with clear escalation rules, so edge cases, complaints, and anything sensitive move to a human with full context intact - nothing gets guessed at."
    },
    {
      q: "Is our data secure?",
      a: "Kas newerax is designed with enterprise security, data privacy, and compliance requirements in mind. One data agreement and one access review covers your agent deployment, instead of separate ones for multiple point tools."
    },
    {
      q: "Do we need an internal AI team to maintain this?",
      a: "No. A dedicated solution engineer owns your build through launch and stays on to optimize it, so this does not become another system your engineering team has to babysit."
    }
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
            <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> ONE PLATFORM. UNIFIED SUPPORT.
            </p>
            <h1 className="text-[3rem] leading-[1.1] sm:text-6xl lg:text-[4.5rem] font-bold text-[#14142b] tracking-tight mb-6">
              Stop buying a new AI vendor for every workflow
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Different support workflows often end up on different AI tools bought by different teams. Kas newerax builds custom agents for those workflows on a single platform—one contract, one integration, one unified customer view.
            </p>
            
            <p className="mt-8 text-xs text-gray-400 font-medium tracking-wide flex flex-wrap gap-2 items-center">
              <span>Growing businesses</span> <span className="w-1 h-1 bg-gray-300 rounded-full"></span> 
              <span>one unified platform</span> <span className="w-1 h-1 bg-gray-300 rounded-full"></span> 
              <span>security and privacy by design</span>
            </p>
          </motion.div>

          {/* Hero Custom Diagram (Node connecting to platform) */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-[400px] flex items-center justify-between pl-8">
               <div className="flex flex-col gap-5 z-10 w-40">
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-lg text-xs font-bold text-[#1e293b] shadow-sm flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#6039ea]"></div> L1 SUPPORT
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-lg text-xs font-bold text-[#1e293b] shadow-sm flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]"></div> TICKETING
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-lg text-xs font-bold text-[#1e293b] shadow-sm flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></div> ESCALATIONS
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-lg text-xs font-bold text-[#1e293b] shadow-sm flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></div> OPS WORKFLOWS
                  </div>
               </div>
               
               <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
                  <path d="M 192 100 L 320 200" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 192 165 L 320 200" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 192 230 L 320 200" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 192 295 L 320 200" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.6"/>
               </svg>

               <div className="z-10 w-40 h-40 bg-[#6039ea] rounded-full text-white flex flex-col items-center justify-center font-black text-sm shadow-xl border-[6px] border-[#eef0ff] absolute right-4">
                  KAS NEWERAX
                  <span className="text-[9px] font-medium tracking-widest uppercase mt-1 opacity-80">one platform</span>
               </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Cost of Vendor Sprawl */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
          <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> THE COST OF AI VENDOR SPRAWL
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Multiple workflows, multiple AI vendors, and no one owns the outcome
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Growing businesses do not plan to end up here. The website buys a chatbot, support buys a helpdesk bot, and ops buys an automation tool. Each works in isolation, none of them talk to each other, and no one owns the outcome company-wide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
             <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center mb-6">
                <DollarSign className="w-4 h-4 text-[#6039ea]" />
             </div>
             <h3 className="text-lg font-bold text-gray-900 mb-3">A vendor contract per workflow</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Multiple renewals, invoices, and procurement cycles - for tools that all do some version of the same thing.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
             <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mb-6">
                <CheckSquare className="w-4 h-4 text-blue-600" />
             </div>
             <h3 className="text-lg font-bold text-gray-900 mb-3">A security review per vendor</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Every new AI tool is another data processing agreement, another access review, and another potential vulnerability.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
             <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center mb-6">
                <ArrowLeftRight className="w-4 h-4 text-gray-600" />
             </div>
             <h3 className="text-lg font-bold text-gray-900 mb-3">No shared system of record</h3>
             <p className="text-gray-600 text-sm leading-relaxed">A pre-sales conversation, a support ticket, and a post-sales inquiry live in three tools that have never spoken to each other.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Alternative to Sprawl */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#f8f9fb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
             <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> ONE PLATFORM, UNIFIED SUPPORT
             </p>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
               The alternative to multiple AI vendors is one platform
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed">
               L1 support, ticketing, email routing, and ops workflows can each run on Kas newerax instead of a different point solution bought by a different team.
             </p>
          </motion.div>

          {/* Sprawl vs Unified Graphic */}
          <motion.div variants={fadeInUp} className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 bg-white border border-gray-200 rounded-3xl p-12 shadow-sm">
             
             {/* Vendor Sprawl Side */}
             <div className="flex flex-col items-center w-full lg:w-1/3">
                <p className="text-[10px] font-bold text-red-500 tracking-widest uppercase mb-6">Vendor sprawl</p>
                <div className="w-full space-y-3">
                   <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-xs font-bold text-gray-800">Support Bot Co</span>
                      <X className="w-4 h-4 text-red-500" />
                   </div>
                   <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-xs font-bold text-gray-800">Helpdesk AI</span>
                      <X className="w-4 h-4 text-red-500" />
                   </div>
                   <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-xs font-bold text-gray-800">Sales AI Tool</span>
                      <X className="w-4 h-4 text-red-500" />
                   </div>
                   <div className="border border-red-200 bg-red-50 rounded-lg p-4 flex justify-between items-center shadow-sm">
                      <span className="text-xs font-bold text-gray-800">Ops Workflow App</span>
                      <X className="w-4 h-4 text-red-500" />
                   </div>
                </div>
             </div>

             {/* Arrow */}
             <div className="text-[#6039ea] font-bold text-2xl hidden lg:block">→</div>
             <div className="text-[#6039ea] font-bold text-2xl lg:hidden">↓</div>

             {/* Unified Platform Side */}
             <div className="flex flex-col items-center w-full lg:w-1/2 relative h-[300px] justify-center">
                <p className="text-[10px] font-bold text-[#6039ea] tracking-widest uppercase absolute top-0">One platform</p>
                
                <div className="flex items-center justify-between w-full h-full relative pl-4 mt-8">
                   <div className="flex flex-col justify-center gap-4 z-10 w-1/2">
                      <div className="bg-white border border-[#0ea5e9] px-4 py-3 rounded-lg text-xs font-bold text-gray-800 shadow-sm text-center">SUPPORT</div>
                      <div className="bg-white border border-[#0ea5e9] px-4 py-3 rounded-lg text-xs font-bold text-gray-800 shadow-sm text-center">TICKETING</div>
                      <div className="bg-white border border-[#0ea5e9] px-4 py-3 rounded-lg text-xs font-bold text-gray-800 shadow-sm text-center">SALES</div>
                      <div className="bg-white border border-[#0ea5e9] px-4 py-3 rounded-lg text-xs font-bold text-gray-800 shadow-sm text-center">OPS</div>
                   </div>
                   
                   <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
                      <path d="M 180 80 L 320 150" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
                      <path d="M 180 125 L 320 150" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
                      <path d="M 180 170 L 320 150" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
                      <path d="M 180 215 L 320 150" stroke="#0ea5e9" strokeWidth="2" fill="none"/>
                   </svg>

                   <div className="z-10 w-32 h-32 bg-[#6039ea] rounded-full text-white flex flex-col items-center justify-center font-black text-[11px] shadow-lg border-[4px] border-[#eef0ff] absolute right-8">
                      KAS NEWERAX
                      <span className="text-[7px] font-medium tracking-widest uppercase mt-1 opacity-80">one contract</span>
                   </div>
                </div>
             </div>

          </motion.div>
          <motion.p variants={fadeInUp} className="text-center text-sm font-bold text-gray-800 mt-8">
            Same core use cases. One contract, one integration, one team that owns it.
          </motion.p>
        </div>
      </motion.section>

      {/* Buying Table Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
          <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> BUILT FOR THE WHOLE BUYING TABLE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Built for the people who have to sign off on it
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            An AI platform touches finance, engineering, and customer experience at once. Kas newerax is built to satisfy all three sign-offs, not add another point-solution vendor to manage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeInUp} className="border-t-4 border-[#6039ea] bg-white border-l border-r border-b border-gray-200 p-8 rounded-b-xl shadow-sm">
             <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center mb-6 text-[#6039ea] font-bold text-sm">
                $
             </div>
             <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">For the CFO</p>
             <h3 className="text-lg font-bold text-gray-900 mb-3">One contract instead of five</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Every new support workflow extends the platform you already use—one renewal, one budget line, instead of a new vendor contract every time a team wants automation.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="border-t-4 border-[#0ea5e9] bg-white border-l border-r border-b border-gray-200 p-8 rounded-b-xl shadow-sm">
             <div className="w-8 h-8 bg-sky-100 rounded flex items-center justify-center mb-6 text-[#0ea5e9] font-bold">
                <Code2 className="w-4 h-4" />
             </div>
             <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">For the CTO</p>
             <h3 className="text-lg font-bold text-gray-900 mb-3">One integration layer</h3>
             <p className="text-gray-600 text-sm leading-relaxed">Every agent runs through the same platform, the same data agreement, and the same access controls—not a new vendor risk assessment every time you expand automation.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="border-t-4 border-[#10b981] bg-white border-l border-r border-b border-gray-200 p-8 rounded-b-xl shadow-sm">
             <div className="w-8 h-8 bg-emerald-100 rounded flex items-center justify-center mb-6 text-[#10b981] font-bold">
                <CircleDot className="w-4 h-4" />
             </div>
             <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">For the Head of CX</p>
             <h3 className="text-lg font-bold text-gray-900 mb-3">One system of record</h3>
             <p className="text-gray-600 text-sm leading-relaxed">All support and ticketing conversations live on the same platform, so nothing gets lost between tools that were never meant to talk to each other.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Grid of Agents Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#f8f9fb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
             <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> WHAT WE BUILD
             </p>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
               AI agents for your support workflows
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed">
               Every agent runs on the same platform as your existing CX stack, designed specifically for growing digital teams.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* Agents 1-5 (White Cards focused on support) */}
             {[
               { id: "01", title: "Customer Support Agents", desc: "Resolve tickets across chat, email, and WhatsApp, and hand off complex cases to your team." },
               { id: "02", title: "Pre-Sales Support Agents", desc: "Qualify inquiries, answer product questions, and route to your sales team in real time." },
               { id: "03", title: "Technical Support Agents", desc: "Triage tickets, resolve common issues, and escalate what needs a specialist." },
               { id: "04", title: "Knowledge Assistants", desc: "Turn your docs and wikis into an assistant that actually knows the answer." },
               { id: "05", title: "Operations & Workflow Agents", desc: "Automate approvals, handoffs, and repetitive operational tasks in support." }
             ].map((agent, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:border-[#6039ea] transition-colors group">
                   <p className="text-[9px] font-bold text-[#0ea5e9] tracking-widest uppercase mb-3">AGENT_{agent.id}</p>
                   <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#6039ea] transition-colors">{agent.title}</h4>
                   <p className="text-xs text-gray-600 leading-relaxed">{agent.desc}</p>
                </motion.div>
             ))}
             
             {/* Custom Agent (Dark Card) */}
             <motion.div variants={fadeInUp} className="bg-[#140f2d] border border-[#1e1642] p-6 rounded-xl shadow-sm">
                <p className="text-[9px] font-bold text-[#0ea5e9] tracking-widest uppercase mb-3">AGENT_CUSTOM</p>
                <h4 className="text-base font-bold text-white mb-2">Custom AI agents for your business</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Do not see your use case? We build agents around your exact workflow requirements.</p>
             </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How it works (Timeline) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <motion.div variants={fadeInUp} className="mb-20 max-w-3xl">
          <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            From discovery to deployment
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured build process, run by our team from first workshop to ongoing optimization - with no engineering lift on your side.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
           {[
             { num: "01", title: "Discover your workflows", desc: "We map how your team actually works today, systems included." },
             { num: "02", title: "Design the right AI solution", desc: "We design the agent architecture around your goals, not a generic template." },
             { num: "03", title: "Build and integrate", desc: "We connect the agent to your CRM, helpdesk, and internal systems." },
             { num: "04", title: "Test and deploy", desc: "We validate against real scenarios before it reaches a customer." },
             { num: "05", title: "Optimize continuously", desc: "We monitor performance and refine the agent as your business changes." }
           ].map((step, i) => (
             <motion.div key={i} variants={fadeInUp} className="flex flex-col relative">
                <div className="w-10 h-10 rounded-full bg-[#eef0ff] text-[#6039ea] font-bold flex items-center justify-center mb-6 z-10 border-2 border-white shadow-sm">
                   {step.num}
                </div>
                <div className="absolute top-5 left-10 w-full h-px bg-gray-200 -z-0 hidden md:block"></div>
                <p className="text-[9px] font-bold text-[#0ea5e9] tracking-widest uppercase mb-2">Step.{step.num}</p>
                <h4 className="text-sm font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed pr-4">{step.desc}</p>
             </motion.div>
           ))}
        </div>
      </motion.section>

      {/* Typical Outcomes Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <motion.div variants={fadeInUp} className="mb-16 max-w-3xl">
          <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> TYPICAL OUTCOMES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            What changes after deployment
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Directional results teams aim for when rolling out Kas newerax AI agents. Actual impact depends on your starting ticket volume, systems, and use case.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
           <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#6039ea] mb-2">Resolution</h3>
              <p className="text-xs text-gray-600 font-medium">Higher automated resolution rate for routine queries</p>
           </motion.div>
           <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#6039ea] mb-2">Efficiency</h3>
              <p className="text-xs text-gray-600 font-medium">Reduction in manual human handoff volume</p>
           </motion.div>
           <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#6039ea] mb-2">Satisfaction</h3>
              <p className="text-xs text-gray-600 font-medium">Measurable improvement in overall CSAT</p>
           </motion.div>
           <motion.div variants={fadeInUp} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-[#6039ea] mb-2">Speed</h3>
              <p className="text-xs text-gray-600 font-medium">Typical time to first live agent is in weeks, not quarters</p>
           </motion.div>
        </div>
      </motion.section>

      {/* Why Kas newerax */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100"
      >
        <motion.div variants={fadeInUp} className="max-w-3xl">
          <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> WHY KAS NEWERAX
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            The platform you already run, extended
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Custom agents are not a separate product or a separate relationship. They extend the platform already handling your support conversations, keeping your tech stack unified.
          </p>
        </motion.div>
      </motion.section>

      {/* Ready when you are (Dark Banner) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-[#140f2d] text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-[#0ea5e9] font-bold text-[10px] mb-6 tracking-[0.2em] uppercase flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> READY WHEN YOU ARE
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Bring your support workflows onto one AI platform
          </h2>
          <p className="text-base text-gray-400 mb-10 leading-relaxed max-w-2xl">
            A 30-minute workshop to map your current support workflows and show your leaders exactly where consolidating onto Kas newerax pays for itself.
          </p>
          <Link to="/workshop" className={`px-8 py-4 rounded-md ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors shadow-md`}>
            Book an AI Discovery Workshop
          </Link>
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
            <p className="text-[#0ea5e9] font-bold text-[10px] mb-4 tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span> COMMON QUESTIONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 sticky top-24">
              Answers for whoever signs off
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The questions we hear most from finance, engineering, and support leaders before they commit.
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-5 pt-3">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-start justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm font-bold text-gray-900 group-hover:text-[#6039ea] transition-colors pr-6 mt-1">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openFaq === index ? 'bg-[#eef0ff] text-[#6039ea]' : 'text-gray-400 group-hover:bg-gray-50'}`}>
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
                      <p className="pt-4 text-sm text-gray-600 leading-relaxed pr-8">
                        {faq.a}
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
            <Link to="/workshop" className={`w-full sm:w-auto px-8 py-4 rounded-md ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors shadow-sm`}>
              Book an AI discovery workshop
            </Link>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default CustomAIAgents;