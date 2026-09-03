import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, CheckCircle2, XCircle, 
  Bot, Zap, ShieldCheck, ArrowRight, X, User, Mail, Lock, Building2
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AuthPage = () => {
  const navigate = useNavigate();
  const primaryColor = "text-[#6039ea]";
  const bgPrimary = "bg-[#6039ea]";

  // Toggle between Login and Signup
  const [isLoginView, setIsLoginView] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    password: ''
  });

  // Toast Notification State
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Local Storage Authentication Logic
  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('kas_users')) || [];

    if (isLoginView) {
      // Handle Login
      const existingUser = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (existingUser) {
        // Set active user session and redirect to home
        localStorage.setItem('kas_active_session', JSON.stringify(existingUser));
        navigate('/');
      } else {
        // Show Error
        showToast("Invalid email or password. Please check your credentials and try again.", "error");
      }
    } else {
      // Handle Sign Up
      const userExists = users.some((u) => u.email === formData.email);

      if (userExists) {
        showToast("An account with this email already exists. Please login.", "error");
      } else {
        // Save new user to local storage
        const newUser = {
          fullName: formData.fullName,
          companyName: formData.companyName,
          email: formData.email,
          password: formData.password
        };
        users.push(newUser);
        localStorage.setItem('kas_users', JSON.stringify(users));

        // Show Success Message requested by you
        showToast("Our team will review your request and connect with you on email to activate your account after verification.", "success");
        
        // Optionally switch to login view and clear form
        setIsLoginView(true);
        setFormData({ fullName: '', companyName: '', email: '', password: '' });
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans flex relative overflow-hidden">
      
      {/* Custom Top-Middle Popup Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className={`fixed top-6 left-1/2 z-[100] w-[90%] max-w-md bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border p-5 flex items-start gap-4 ${toast.type === 'error' ? 'border-red-100' : 'border-green-100'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${toast.type === 'error' ? 'bg-red-100' : 'bg-green-100'}`}>
               {toast.type === 'error' ? <XCircle className="w-6 h-6 text-red-600" /> : <CheckCircle2 className="w-6 h-6 text-green-600" />}
            </div>
            <div className="flex-1 pt-0.5">
               <h3 className="text-sm font-bold text-gray-900 mb-1">
                 {toast.type === 'error' ? 'Authentication Failed' : 'Registration Successful'}
               </h3>
               <p className="text-xs text-gray-600 leading-relaxed font-medium">
                 {toast.message}
               </p>
            </div>
            <button onClick={() => setToast({ show: false, message: '', type: '' })} className="text-gray-400 hover:text-gray-600 focus:outline-none">
               <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Panel: Value Proposition & Branding */}
      <div className="hidden lg:flex w-1/2 bg-[#f8f9fb] border-r border-gray-100 flex-col justify-between p-12 xl:p-20 relative">
         <div className="absolute top-0 right-0 w-96 h-96 bg-[#6039ea]/5 rounded-full blur-3xl"></div>
         
         <div className="relative z-10">

            <h1 className="text-4xl font-bold text-[#14142b] tracking-tight leading-tight mb-6">
              AI-powered customer support automation.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Automate repetitive customer conversations across web, email, and messaging apps while keeping human agents in control.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                     <Bot className={`w-6 h-6 ${primaryColor}`} />
                  </div>
                  <div>
                     <h3 className="text-base font-bold text-gray-900 mb-1">Automate the Safe Stuff</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">Train AI on your knowledge base to resolve high-volume, repetitive queries instantly.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                     <Zap className={`w-6 h-6 ${primaryColor}`} />
                  </div>
                  <div>
                     <h3 className="text-base font-bold text-gray-900 mb-1">Seamless Human Handoff</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">Let AI resolve routine requests and automatically route complex issues to your human support team.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                     <ShieldCheck className={`w-6 h-6 ${primaryColor}`} />
                  </div>
                  <div>
                     <h3 className="text-base font-bold text-gray-900 mb-1">Security & Privacy Focus</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">Designed with security and compliance requirements in mind to protect your customer data.</p>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="relative z-10 mt-auto pt-12">
            <p className="text-xs text-gray-400 font-medium">Currently in early access and pilot stage.</p>
         </div>
      </div>

      {/* Right Panel: Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-20 relative bg-white">
         
         {/* Mobile Logo (visible only on small screens) */}
         <Link to="/" className={`absolute top-8 left-8 flex lg:hidden items-center gap-2 font-bold text-xl ${primaryColor}`}>
           <MessageCircle className="w-6 h-6 fill-current" />
           <span className="tracking-tight">Kas newerax</span>
         </Link>

         <motion.div 
           initial="hidden" animate="visible" variants={fadeInUp}
           className="w-full max-w-md"
         >
            <div className="mb-10 text-center lg:text-left">
               <h2 className="text-3xl font-bold text-gray-900 mb-3">
                 {isLoginView ? 'Welcome back' : 'Request Early Access'}
               </h2>
               <p className="text-gray-500 text-sm">
                 {isLoginView 
                   ? 'Enter your details to access your workspace.' 
                   : 'Join our pilot program to start automating your customer support.'}
               </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               
               {/* Sign Up Fields */}
               {!isLoginView && (
                 <>
                   <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-gray-400" />
                         </div>
                         <input 
                           type="text" 
                           name="fullName"
                           required={!isLoginView}
                           value={formData.fullName}
                           onChange={handleChange}
                           className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] transition-colors text-sm"
                           placeholder="e.g. John Doe"
                         />
                      </div>
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-gray-700 mb-2">Company Name</label>
                      <div className="relative">
                         <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Building2 className="h-4 w-4 text-gray-400" />
                         </div>
                         <input 
                           type="text" 
                           name="companyName"
                           required={!isLoginView}
                           value={formData.companyName}
                           onChange={handleChange}
                           className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] transition-colors text-sm"
                           placeholder="e.g. Acme Corp"
                         />
                      </div>
                   </div>
                 </>
               )}

               {/* Common Fields (Email & Password) */}
               <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Work Email</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-gray-400" />
                     </div>
                     <input 
                       type="email" 
                       name="email"
                       required
                       value={formData.email}
                       onChange={handleChange}
                       className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] transition-colors text-sm"
                       placeholder="name@company.com"
                     />
                  </div>
               </div>

               <div>
                  <div className="flex items-center justify-between mb-2">
                     <label className="block text-xs font-bold text-gray-700">Password</label>
                     {isLoginView && (
                       <Link to="#" className="text-xs font-medium text-[#6039ea] hover:underline">Forgot password?</Link>
                     )}
                  </div>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Lock className="h-4 w-4 text-gray-400" />
                     </div>
                     <input 
                       type="password" 
                       name="password"
                       required
                       value={formData.password}
                       onChange={handleChange}
                       className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#6039ea] focus:ring-1 focus:ring-[#6039ea] transition-colors text-sm"
                       placeholder="••••••••"
                     />
                  </div>
               </div>

               <button 
                 type="submit"
                 className={`w-full py-3.5 mt-2 rounded-lg ${bgPrimary} text-white font-bold text-sm hover:bg-[#502cd1] transition-colors shadow-sm flex items-center justify-center gap-2`}
               >
                 {isLoginView ? 'Sign In to Workspace' : 'Submit Access Request'} <ArrowRight className="w-4 h-4" />
               </button>

            </form>

            <div className="mt-8 text-center">
               <p className="text-sm text-gray-600">
                 {isLoginView ? "Don't have an account yet?" : "Already have an account?"}
                 <button 
                   onClick={() => {
                     setIsLoginView(!isLoginView);
                     setFormData({ fullName: '', companyName: '', email: '', password: '' });
                   }}
                   className="ml-2 font-bold text-[#6039ea] hover:underline focus:outline-none"
                 >
                   {isLoginView ? 'Request Access' : 'Log in here'}
                 </button>
               </p>
            </div>

            {!isLoginView && (
               <p className="text-[10px] text-gray-400 text-center mt-8 px-4 leading-relaxed">
                 By submitting a request, you agree to Kas newerax's <Link to="/terms" className="underline hover:text-gray-600">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
               </p>
            )}

         </motion.div>
      </div>
    </div>
  );
};

export default AuthPage;