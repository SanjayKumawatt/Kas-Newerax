import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, HeartHandshake, Eye, Lightbulb, 
  Zap, TrendingUp, MapPin, Mail, Globe, 
  UserCircle2, Building2, Flag
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

const AboutUs = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  const coreValues = [
    {
      icon: Target,
      title: "Customer Outcomes First",
      desc: "We design for measurable results such as higher CSAT, faster first response time, and stronger self service."
    },
    {
      icon: HeartHandshake,
      title: "Human + AI Harmony",
      desc: "We believe AI should empower people, not replace them. Our products balance automation with empathy."
    },
    {
      icon: Eye,
      title: "Transparency Always",
      desc: "We communicate openly-with our customers, partners, and team-because trust is built on honesty."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      desc: "We constantly push boundaries in AI and automation, but always with the goal of solving real problems."
    },
    {
      icon: Zap,
      title: "Automation for Impact",
      desc: "Efficiency is not just about speed; it's about freeing people to focus on what truly matters."
    },
    {
      icon: TrendingUp,
      title: "Relentless Improvement",
      desc: "We never settle. Every interaction, every product update, every feature is an opportunity to do better."
    }
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-20 pb-16 lg:pt-32 lg:pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eef0ff] border border-[#d6dcff] mb-8">
           <Flag className={`w-4 h-4 ${primaryColor}`} />
           <span className={`text-[10px] font-bold tracking-widest uppercase ${primaryColor}`}>Our Mission</span>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="text-[3rem] leading-[1.15] sm:text-5xl lg:text-[4.5rem] font-bold text-[#14142b] tracking-tight mb-8">
          Making Customer Service Effortless with AI
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          A true AI-first customer service automation platform for businesses of all sizes.
        </motion.p>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-[#f8f9fb] border-y border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
             <h2 className="text-3xl font-bold text-gray-900 mb-6">About Kas newerax</h2>
             <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Kas newerax is an AI-first customer service automation platform. With its AI agents, chatbots, live chat, help center, ticketing, and shared inbox features, it enables businesses to deliver instant, accurate, and personalized customer service across all channels.
                </p>
                <p>
                  Today, Kas newerax's AI agents are helping businesses scale their customer service across websites, web apps, mobile apps, WhatsApp, Telegram, Instagram, and all major messaging platforms.
                </p>
             </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3 sticky top-24">
             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
             <div className="w-20 h-1.5 bg-[#6039ea] rounded-full"></div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3 space-y-8 text-lg text-gray-600 leading-relaxed">
            <p className="text-2xl text-gray-900 font-medium leading-snug">
              Kas newerax was incorporated on 17th June, 2026 with a simple vision: to make customer service effortless with AI.
            </p>
            <p>
              Founders Shahrukh and Kasim saw that non-technical people found it very difficult to build and deploy AI chatbots and AI agents to automate customer service. Most AI tools on the market were either scripted chatbots or simply failed to help customers effectively.
            </p>
            <p>
              That's when they built Kas newerax, a true no-code customer service automation platform where AI resolves basic repetitive queries and hands off complex tasks to a human support agent.
            </p>
            <p>
              Kas newerax is one of India's first AI companies to be selected by Google for its AI first accelerator program. At Kas newerax, we're proud of how far we've come, but our mission remains the same: to empower businesses with AI that feels natural, personal, and always available.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Founders Section (Requested) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#1e153b] text-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founders</h2>
            <p className="text-gray-400">The visionaries behind Kas newerax.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
             {/* Founder 1 */}
             <motion.div variants={fadeInUp} className="bg-[#2d1b6e] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                   <UserCircle2 className="w-12 h-12 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold mb-1">Shahrukh</h3>
                <p className="text-[#a58bff] font-medium text-sm tracking-wide uppercase">Co-Founder</p>
             </motion.div>

             {/* Founder 2 */}
             <motion.div variants={fadeInUp} className="bg-[#2d1b6e] border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
                   <UserCircle2 className="w-12 h-12 text-white/80" />
                </div>
                <h3 className="text-2xl font-bold mb-1">Kasim</h3>
                <p className="text-[#a58bff] font-medium text-sm tracking-wide uppercase">Co-Founder</p>
             </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">The principles that guide everything we build.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm hover:border-[#6039ea] transition-colors group"
            >
              <div className="w-12 h-12 bg-[#eef0ff] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6039ea] transition-colors">
                 <value.icon className="w-6 h-6 text-[#6039ea] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Company Details Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 bg-[#f8f9fb] border-t border-gray-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-200">
             <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-8 h-8 text-[#6039ea]" />
                <h2 className="text-2xl font-bold text-gray-900">Company Information</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                   <div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Company Name</p>
                     <p className="text-gray-900 font-semibold text-lg">KAS NEWERAX TECHNOLOGY PRIVATE LIMITED</p>
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Date of Incorporation</p>
                     <p className="text-gray-900 font-medium">17th June, 2026</p>
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Digital Presence</p>
                     <div className="space-y-3">
                        <div className="flex items-center gap-3">
                           <Globe className="w-4 h-4 text-[#6039ea]" />
                           <a href="https://kasneweraxtech.in" className="text-gray-700 hover:text-[#6039ea] font-medium">kasneweraxtech.in</a>
                        </div>
                        <div className="flex items-center gap-3">
                           <Mail className="w-4 h-4 text-[#6039ea]" />
                           <a href="mailto:contact@kasneweraxtech.in" className="text-gray-700 hover:text-[#6039ea] font-medium">contact@kasneweraxtech.in</a>
                        </div>
                     </div>
                   </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 h-full flex flex-col justify-center">
                   <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#6039ea] mt-1 shrink-0" />
                      <div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Headquarters</p>
                         <p className="text-gray-700 leading-relaxed font-medium">
                            Khasra No.1423, Nand Vihar Fulsungi,<br />
                            Rudarpur, Kichha, Udham Singh Nagar,<br />
                            Uttarakhand, India, 263153.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-white text-center px-4 sm:px-6 lg:px-8 border-t border-gray-100"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to transform your customer support?
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Join Kas newerax and start automating your repetitive queries with our AI-first platform today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/try-for-free" className={`w-full sm:w-auto px-8 py-3.5 rounded-md ${bgPrimary} text-white font-semibold text-base hover:bg-[#502cd1] transition-colors`}>
              Try for Free
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

export default AboutUs;