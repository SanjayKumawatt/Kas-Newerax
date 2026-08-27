import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Mail, Clock, MessageSquare, 
  CheckCircle2, ArrowRight, X, Building2
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

const Contact = () => {
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    subject: '',
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
    // Yahan tu apna actual API call laga sakta hai (jaise fetch ya axios)
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
        role: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="w-full bg-white font-sans relative">
      
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
            <div className="flex-1">
               <h3 className="text-sm font-bold text-gray-900 mb-1">Message Sent Successfully!</h3>
               <p className="text-xs text-gray-600 leading-relaxed">
                 Thank you, <span className="font-semibold text-gray-800">{formData.firstName || 'Guest'}</span>. We have received your query regarding <span className="font-semibold text-gray-800">{formData.subject || 'your request'}</span>. 
                 Our team at Kas newerax will review your details and get back to you at <span className="font-semibold text-gray-800">{formData.email}</span> shortly.
               </p>
            </div>
            <button onClick={() => setShowPopup(false)} className="text-gray-400 hover:text-gray-600 focus:outline-none">
               <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-20 pb-16 lg:pt-28 lg:pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eef0ff] border border-[#d6dcff] mb-6">
           <MessageSquare className={`w-4 h-4 ${primaryColor}`} />
           <span className={`text-[10px] font-bold tracking-widest uppercase ${primaryColor}`}>Get In Touch</span>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.15] sm:text-5xl lg:text-[4rem] font-bold text-[#14142b] tracking-tight mb-6">
          Let's talk about automating your customer support.
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Whether you need a custom AI agent, have a question about our platform, or want to discuss a partnership, our team is ready to help you scale your business.
        </motion.p>
      </motion.section>

      {/* Main Contact Section */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div variants={fadeInUp} className="w-full lg:w-1/3 space-y-8">
             <div className="bg-[#f8f9fb] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                         <Building2 className={`w-5 h-5 ${primaryColor}`} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Company</p>
                         <p className="text-sm font-semibold text-gray-900">KAS NEWERAX TECHNOLOGY PRIVATE LIMITED</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                         <MapPin className={`w-5 h-5 ${primaryColor}`} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Headquarters</p>
                         <p className="text-sm text-gray-700 leading-relaxed">
                            Khasra No.1423, Nand Vihar Fulsungi,<br />
                            Rudarpur, Kichha, Udham Singh Nagar,<br />
                            Uttarakhand, India, 263153.
                         </p>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                         <Mail className={`w-5 h-5 ${primaryColor}`} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                         <a href="mailto:contact@kasneweraxtech.in" className="text-sm font-medium text-gray-900 hover:text-[#6039ea] transition-colors">contact@kasneweraxtech.in</a>
                      </div>
                   </div>

                   <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                         <Clock className={`w-5 h-5 ${primaryColor}`} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Business Hours</p>
                         <p className="text-sm text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div variants={fadeInUp} className="w-full lg:w-2/3">
             <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-sm text-gray-500 mb-8">Please fill out the details below. We'll get back to you as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-xs font-bold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                         <input 
                           type="text" 
                           name="firstName"
                           required
                           value={formData.firstName}
                           onChange={handleChange}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                           placeholder=""
                         />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-gray-700 mb-2">Last Name</label>
                         <input 
                           type="text" 
                           name="lastName"
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
                         <input 
                           type="email" 
                           name="email"
                           required
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                           placeholder=""
                         />
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
                         <input 
                           type="text" 
                           name="company"
                           required
                           value={formData.company}
                           onChange={handleChange}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                           placeholder=""
                         />
                      </div>
                      <div>
                         <label className="block text-xs font-bold text-gray-700 mb-2">Job Role / Title</label>
                         <input 
                           type="text" 
                           name="role"
                           value={formData.role}
                           onChange={handleChange}
                           className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm"
                           placeholder=""
                         />
                      </div>
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">How can we help you? <span className="text-red-500">*</span></label>
                      <select 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm text-gray-700 appearance-none"
                      >
                         <option value="" disabled hidden></option>
                         <option value="Sales Inquiry">I want to learn about pricing and plans</option>
                         <option value="Technical Support">I need technical support for my current setup</option>
                         <option value="Custom AI Agent">I want to build a custom AI Agent</option>
                         <option value="Partnership">I am interested in a partnership</option>
                         <option value="Other">Other</option>
                      </select>
                   </div>

                   <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Your Message <span className="text-red-500">*</span></label>
                      <textarea 
                        name="message"
                        required
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] focus:bg-white transition-colors text-sm resize-none"
                        placeholder=""
                      ></textarea>
                   </div>

                   <button 
                     type="submit"
                     className={`w-full py-4 rounded-lg ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors shadow-sm flex items-center justify-center gap-2`}
                   >
                     Submit Request <ArrowRight className="w-4 h-4" />
                   </button>
                   <p className="text-[10px] text-gray-400 text-center mt-3">
                     By submitting this form, you agree to our Privacy Policy and Terms of Service.
                   </p>
                </form>
             </div>
          </motion.div>

        </div>
      </motion.section>

      {/* What Happens Next Section (Bottom Content) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 bg-[#f8f9fb] border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What happens after you reach out?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We value your time. Our process is designed to be quick, transparent, and focused entirely on solving your customer support challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#6039ea] text-white font-bold flex items-center justify-center shadow-md">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">We review your request</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our system instantly routes your details to the right specialist. Whether it's an enterprise build or technical help, it goes to an expert immediately.
                </p>
             </motion.div>

             <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative mt-8 md:mt-0">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#6039ea] text-white font-bold flex items-center justify-center shadow-md">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">Discovery & Assessment</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We schedule a brief call to understand your existing workflows, helpdesks, and the specific bottlenecks you want to automate with our AI agents.
                </p>
             </motion.div>

             <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative mt-8 md:mt-0">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#6039ea] text-white font-bold flex items-center justify-center shadow-md">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">Tailored Deployment</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We create a roadmap and begin integrating the Kas newerax AI layer into your system, ensuring a smooth transition without breaking your current support.
                </p>
             </motion.div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Contact;