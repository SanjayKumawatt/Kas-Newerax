import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Zap, BarChart3, CheckCircle2, 
  X, ArrowRight, Calendar, Video, ShieldCheck,
  Building2, Users, Mail, User
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

const BookDemo = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    useCase: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    
    // Auto hide popup after 5 seconds and reset form
    setTimeout(() => {
      setShowPopup(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        useCase: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans flex flex-col lg:flex-row relative">
      
      {/* Custom Top-Middle Popup Notification */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-6 left-1/2 z-[100] w-[90%] max-w-md bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-green-100 p-5 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
               <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1 pt-0.5">
               <h3 className="text-sm font-bold text-gray-900 mb-1">Demo Request Received!</h3>
               <p className="text-xs text-gray-600 leading-relaxed font-medium">
                 Thank you, {formData.firstName || 'Guest'}. Our product experts will review your details and send a calendar link to <span className="text-gray-800 font-bold">{formData.email}</span> shortly.
               </p>
            </div>
            <button onClick={() => setShowPopup(false)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
               <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Panel: Value Proposition (Dark Theme) */}
      <div className="w-full lg:w-[45%] bg-[#1e153b] text-white p-8 sm:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#6039ea]/20 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
         
         <motion.div 
           initial="hidden" animate="visible" variants={staggerContainer}
           className="relative z-10"
         >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
               <Video className="w-4 h-4 text-[#a58bff]" />
               <span className="text-[10px] font-bold tracking-widest uppercase text-[#a58bff]">Live Walkthrough</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              See Kas newerax in action
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed mb-12 max-w-lg">
              Discover how our AI agents can automate your customer support, reduce resolution times, and integrate seamlessly with your existing tools.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-8">
               <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">What to expect</h3>
               
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="text-base font-bold text-white mb-1">Tailored AI Demonstration</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">We'll show you how Kas newerax can be trained on your specific knowledge base and FAQs.</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="text-base font-bold text-white mb-1">Integration Deep-Dive</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">See how easily we connect with your existing CRM, ticketing system, and messaging channels.</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                     <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                     <h4 className="text-base font-bold text-white mb-1">ROI & Pricing Discussion</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">Get a clear picture of expected cost savings, resolution rates, and the best plan for your scale.</p>
                  </div>
               </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-16 pt-8 border-t border-white/10 flex items-center gap-4">
               <ShieldCheck className="w-8 h-8 text-green-400" />
               <p className="text-xs text-gray-400 font-medium">SOC 2 & ISO 27001 aligned. Your data is strictly protected and never used to train public models.</p>
            </motion.div>
         </motion.div>
      </div>

      {/* Right Panel: Booking Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 lg:p-16 xl:p-24 bg-[#f8f9fb]">
         <motion.div 
           initial="hidden" animate="visible" variants={fadeInUp}
           className="w-full max-w-xl bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200"
         >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book your free demo</h2>
            <p className="text-sm text-gray-500 mb-8">Fill out the form below and our team will get in touch to schedule a time that works for you.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-xs font-bold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <User className="h-4 w-4 text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                          placeholder=""
                        />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-gray-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                     <input 
                       type="text" 
                       name="lastName"
                       required
                       value={formData.lastName}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                       placeholder=""
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-xs font-bold text-gray-700 mb-2">Work Email <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                          placeholder=""
                        />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-gray-700 mb-2">Phone Number</label>
                     <input 
                       type="tel" 
                       name="phone"
                       value={formData.phone}
                       onChange={handleChange}
                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                       placeholder=""
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-xs font-bold text-gray-700 mb-2">Company Name <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Building2 className="h-4 w-4 text-gray-400" />
                        </div>
                        <input 
                          type="text" 
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                          placeholder=""
                        />
                     </div>
                  </div>
                  <div>
                     <label className="block text-xs font-bold text-gray-700 mb-2">Company Size <span className="text-red-500">*</span></label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                           <Users className="h-4 w-4 text-gray-400" />
                        </div>
                        <select 
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm text-gray-700 appearance-none"
                        >
                           <option value="" disabled hidden>Select size</option>
                           <option value="1-50">1 - 50 employees</option>
                           <option value="51-200">51 - 200 employees</option>
                           <option value="201-500">201 - 500 employees</option>
                           <option value="501-1000">501 - 1000 employees</option>
                           <option value="1000+">1000+ employees</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Primary Use Case</label>
                  <select 
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm text-gray-700 appearance-none"
                  >
                     <option value="" disabled hidden>What do you want to automate?</option>
                     <option value="Customer Support">Customer Support / IT Helpdesk</option>
                     <option value="Sales/Lead Gen">Sales & Lead Qualification</option>
                     <option value="Internal HR">Internal HR / Employee queries</option>
                     <option value="E-commerce">E-commerce order tracking & returns</option>
                     <option value="Other">Other Custom Workflow</option>
                  </select>
               </div>

               <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Anything specific you'd like to see?</label>
                  <textarea 
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm resize-none"
                    placeholder="Tell us about your current challenges..."
                  ></textarea>
               </div>

               <button 
                 type="submit"
                 className={`w-full py-4 mt-2 rounded-lg ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors shadow-sm flex items-center justify-center gap-2`}
               >
                 <Calendar className="w-4 h-4" /> Request Demo
               </button>
               
               <p className="text-[10px] text-gray-400 text-center mt-4">
                 By submitting this form, you agree to our Terms of Service.
               </p>
            </form>
         </motion.div>
      </div>

    </div>
  );
};

export default BookDemo;