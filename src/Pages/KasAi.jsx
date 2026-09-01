import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, User, Sparkles, Code2, Globe2, MessageCircle, 
  Palette, BarChart3, LineChart, TrendingUp, ShieldCheck, 
  Settings, CheckCircle2, ArrowRightLeft, LayoutTemplate
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

const KasAIBuilder = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-20 lg:pt-24 lg:pb-24 border-b border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight mb-6">
            Build Your Support AI Agent <br className="hidden sm:block" /> with Kas AI Builder
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
            Automate customer support with a no-code AI agent. Connect your knowledge base, CRM, and ticketing systems to automate customer conversations across your website, mobile apps, WhatsApp, and more.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/try-for-free" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors`}>
              Try for Free
            </Link>
            <Link to="/book-demo" className={`w-full sm:w-auto px-8 py-3.5 rounded-md border border-[#6039ea] ${primaryColor} font-semibold text-base hover:bg-indigo-50 transition-colors`}>
              Book a Demo
            </Link>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-5 text-sm text-gray-400 font-medium">
            30 days free trial . No credit card required .  
          </motion.p>
        </div>
      </motion.section>

      {/* Features Section with Custom Tailwind Illustrations */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-24">
          The Most Easy-to-Use Customer Support AI Agent Builder
        </motion.h2>

        <div className="space-y-32">
          
          {/* Feature 1: Zero Coding */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Build Support AI Agent with Zero Coding</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Build your AI agent using your own data-website content, documents (PDFs, docs, spreadsheets), and help center articles from Zendesk, Freshdesk, or Salesforce. Configure its responses to match your brand voice with simple prompts.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Tailwind Illustration */}
              <div className="relative w-full h-80 bg-[#eef0ff] rounded-3xl flex items-center justify-center overflow-hidden border border-[#d6dcff]">
                <div className="absolute top-10 left-10 w-24 h-24 bg-[#6039ea]/10 rounded-full blur-2xl"></div>
                {/* Mock UI elements */}
                <div className="relative z-10 w-3/4 h-48 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                  <div className="h-10 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 p-6 flex items-center justify-center">
                     <div className="relative">
                       <Code2 className="w-16 h-16 text-gray-300" />
                       <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                         <div className="bg-[#6039ea] text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2">
                           <Sparkles className="w-4 h-4" /> No-Code UI
                         </div>
                       </div>
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Hybrid System */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Foolproof Human + AI Agent Hybrid System</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Things may not always go “according to plan” and hence, we have built a seamless AI agent to human hand-off feature where your AI agent can quickly transfer control to a live human agent to handle any escalations ensuring your customer queries never go unanswered.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Tailwind Illustration */}
              <div className="relative w-full h-80 bg-[#f0fdf4] rounded-3xl flex items-center justify-center overflow-hidden border border-[#dcfce7]">
                <div className="flex items-center gap-8 z-10">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
                    <Bot className="w-10 h-10 text-[#6039ea]" />
                    <span className="text-xs font-bold text-gray-500">AI AGENT</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 text-green-500">
                    <ArrowRightLeft className="w-8 h-8" />
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-green-100 px-2 py-1 rounded">Seamless Handoff</span>
                  </div>
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
                    <User className="w-10 h-10 text-green-500" />
                    <span className="text-xs font-bold text-gray-500">HUMAN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 3: Multilingual & Omnichannel */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Multilingual Support AI Agent Builder with Omnichannel Messaging</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Kas newerax supports more than 100 languages including Spanish, Italian, Portuguese, Arabic, and German. Deploy the AI agent on any website or mobile apps built on iOS, Android, Flutter, Ionic, and React Native. Support your customers on WhatsApp, Instagram, Telegram, Line, Viber and more.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Tailwind Illustration */}
              <div className="relative w-full h-80 bg-[#fff5f5] rounded-3xl flex items-center justify-center overflow-hidden border border-[#ffe4e6]">
                <Globe2 className="absolute w-64 h-64 text-red-100 -right-10 -bottom-10" />
                <div className="relative z-10 grid grid-cols-2 gap-4">
                   <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-50 flex items-center gap-2">
                     <MessageCircle className="w-4 h-4 text-blue-500" /> <span className="font-medium text-sm">Hello</span>
                   </div>
                   <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-50 flex items-center gap-2 mt-6">
                     <MessageCircle className="w-4 h-4 text-red-500" /> <span className="font-medium text-sm">Hola</span>
                   </div>
                   <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-50 flex items-center gap-2">
                     <MessageCircle className="w-4 h-4 text-green-500" /> <span className="font-medium text-sm">Ciao</span>
                   </div>
                   <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-50 flex items-center gap-2 mt-6">
                     <MessageCircle className="w-4 h-4 text-purple-500" /> <span className="font-medium text-sm">مرحباً</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Brand Tone */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Keep a Consistent Brand Tone Across All Channels</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                With Kas newerax, you can customize the tone of the support AI agent to match your company's brand. Use your logo and brand colors to maintain consistent branding across all channels.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Tailwind Illustration */}
              <div className="relative w-full h-80 bg-[#fdf4ff] rounded-3xl flex flex-col items-center justify-center overflow-hidden border border-[#fae8ff]">
                <Palette className="absolute w-40 h-40 text-fuchsia-100 top-10 right-10" />
                <div className="relative z-10 w-2/3 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-[#6039ea] p-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <Bot className="w-5 h-5 text-[#6039ea]" />
                     </div>
                     <div className="h-3 w-24 bg-white/30 rounded"></div>
                  </div>
                  <div className="p-4 space-y-3">
                     <div className="w-[70%] h-12 bg-gray-100 rounded-lg rounded-tl-sm ml-auto"></div>
                     <div className="w-[70%] h-16 bg-[#eef0ff] rounded-lg rounded-tr-sm border border-[#d6dcff]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 5: Analytics */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Analytics to Analyze and Improve AI Agent Performance</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Take the guesswork out with accurate and actionable insights, and find opportunities to improve bot performance. Enhance your agent performance by identifying low-performing agents and training them to drive revenue with excellent support.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full lg:w-1/2">
              {/* Custom Tailwind Illustration */}
              <div className="relative w-full h-80 bg-[#fffbeb] rounded-3xl flex items-center justify-center overflow-hidden border border-[#fef3c7]">
                <div className="relative z-10 flex items-end gap-4 h-40 border-b-2 border-amber-200 px-6">
                  <div className="w-12 bg-[#6039ea] rounded-t-sm h-16"></div>
                  <div className="w-12 bg-[#6039ea] rounded-t-sm h-24"></div>
                  <div className="w-12 bg-[#6039ea] rounded-t-sm h-12"></div>
                  <div className="w-12 bg-[#6039ea] rounded-t-sm h-32 relative">
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded shadow-sm text-xs font-bold text-gray-800 border border-gray-100">
                        +85%
                     </div>
                  </div>
                </div>
                <TrendingUp className="absolute w-32 h-32 text-amber-200/50 right-10 top-10" />
              </div>
            </motion.div>
          </div>

        </div>
      </motion.section>

      {/* Steps Section (Dark Theme as per reference) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#140f2d] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-16 text-center">
            The Most Easy-to-Use AI Agent Chatbot Builder
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            
            {/* Step 1 */}
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-2xl border border-white/10 flex gap-6 hover:border-[#6039ea] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#6039ea]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6039ea] transition-colors">
                <span className="font-bold text-xl text-[#a58bff] group-hover:text-white">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Sign-up With Kas newerax</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Signup with Kas newerax by clicking on <Link to="/signup" className="text-[#a58bff] underline hover:text-white">this link</Link> and enter the required details to create an account and complete the onboarding process.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-2xl border border-white/10 flex gap-6 hover:border-[#6039ea] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#6039ea]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6039ea] transition-colors">
                <span className="font-bold text-xl text-[#a58bff] group-hover:text-white">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Create AI Agent Chatbot</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Navigate to the 'AI Agent Integration' section on the left panel of the dashboard and click on Kas AI Builder. Instantly train chatbot on your website URLs, documents, and knowledge base with generative AI.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-2xl border border-white/10 flex gap-6 hover:border-[#6039ea] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#6039ea]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6039ea] transition-colors">
                <span className="font-bold text-xl text-[#a58bff] group-hover:text-white">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Add AI Agent Chatbot to Website</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Copy the Javascript code from the install section under Settings and paste it above the closing body tag on the page you want the chat widget to appear.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={fadeInUp} className="bg-[#1e1642] p-8 rounded-2xl border border-white/10 flex gap-6 hover:border-[#6039ea] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-[#6039ea]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6039ea] transition-colors">
                <span className="font-bold text-xl text-[#a58bff] group-hover:text-white">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Activate the AI Agent Chatbot</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Go to Conversation Rules and enable assign new conversations to the bot and select your newly configured bot from the dropdown.
                </p>
              </div>
            </motion.div>

          </div>
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

export default KasAIBuilder;