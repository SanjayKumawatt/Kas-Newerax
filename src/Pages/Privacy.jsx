import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Lock, FileText, Server, 
  UserCheck, CreditCard, Bell, ChevronRight
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

const Privacy = () => {
  const primaryColor = "text-[#6039ea]";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "information-collected", title: "Information Collected", icon: Server },
    { id: "using-information", title: "Using the Collected Information", icon: UserCheck },
    { id: "sharing-security", title: "Sharing and Security of Information", icon: ShieldCheck },
    { id: "opting-out", title: "Opting out and Access to Information", icon: Lock },
    { id: "public-forum", title: "Public Forum", icon: Bell },
    { id: "contact-us", title: "Contact Us", icon: CreditCard } // Generic icons for side nav
  ];

  return (
    <div className="w-full bg-[#f8f9fb] font-sans min-h-screen pb-24">
      
      {/* Header Section */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="pt-16 pb-12 lg:pt-24 lg:pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#eef0ff] rounded-2xl flex items-center justify-center shadow-sm border border-[#d6dcff]">
             <ShieldCheck className="w-8 h-8 text-[#6039ea]" />
          </div>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.15] sm:text-5xl font-bold text-[#14142b] tracking-tight mb-4">
          Privacy Policy
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
          KAS NEWERAX TECHNOLOGY PRIVATE LIMITED
        </motion.p>
      </motion.section>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Sticky Sidebar Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4 hidden lg:block"
        >
          <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 ml-2">Contents</p>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button 
                    onClick={() => scrollToSection(section.id)}
                    className="w-full flex items-center justify-between text-left text-sm font-medium text-gray-600 hover:text-[#6039ea] hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors group"
                  >
                    <span>{section.title}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Legal Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-3/4 bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm"
        >
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-8">
            
            {/* Introduction */}
            <div id="introduction" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Introduction</h2>
              <p>
                At Kas newerax (a product of KAS NEWERAX TECHNOLOGY PRIVATE LIMITED), we are committed to the privacy rights of our users. We are aware of the importance of protecting the information we collect about you. This privacy policy has been devised to help you understand what information we collect and how do we use, process and share that information.
              </p>
              <p className="mt-3">
                This privacy policy applies to all our products and services (Hereafter referred as 'Services'), including kasneweraxtech.in (and their subdomains), associated mobile apps owned and controlled by Kas newerax. This Privacy Policy applies to all Services and governs our data collection, processing and usage practices.
              </p>
            </div>

            {/* Information Collected */}
            <div id="information-collected" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Information Collected</h2>
              
              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Personal Information</h3>
              <p>
                We collect information about you when you register to use the Services or otherwise provide us information while interacting with any of our Services. The information you provide may include your username, first and last name, email address, mailing address, phone number or company name. Personal information can also include the information that is publicly available on various online platforms and business directories that we acquire from service providers. We collect this information to identify users for better communication, processing and personalization of the Services provided by Kas newerax.
              </p>
              
              <div className="bg-[#f8f9fb] border border-gray-100 p-5 rounded-xl my-6">
                <p className="font-bold text-gray-900 text-sm mb-2">Data Protection under Indian DPDP Act, 2023</p>
                <p className="text-sm mb-4">
                  As a business operating in India, we align our data practices with the Digital Personal Data Protection (DPDP) Act, 2023 and other applicable global standards. You can choose to avail your data protection rights in the following manner:
                </p>
                <div className="space-y-4 text-sm">
                   <div>
                     <span className="font-bold text-[#6039ea]">1. You have a direct relationship with Kas newerax:</span><br />
                     If you have a direct relationship (you have signed up for availing Kas newerax service/you are a Kas newerax customer/you have subscribed to or downloaded our content) with Kas newerax, you can send an email to <strong className="text-gray-800">contact@kasneweraxtech.in</strong> with your request to exercise your data protection rights.
                   </div>
                   <div>
                     <span className="font-bold text-[#6039ea]">2. You have used an app or website which uses Kas newerax's solutions:</span><br />
                     If you're an end user of Kas newerax's communication solutions, you can exercise your data protection rights by submitting your request to the company which owns the app or website. Since Kas newerax only provides services to the companies and they are responsible for authenticating your request and passing it on to Kas newerax, you must submit your request to the companies. Kas newerax is totally committed to working with our customers to honor data protection rights to the full extent required by Indian law.
                   </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Payment Information</h3>
              <p>
                We collect and process payment information from you when you purchase any of our Services. This information may include your credit card information, billing and mailing address, and other payment-related information. We process it using third-party PCI-compliant and RBI-guideline-compliant service providers.
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">Usage and Technical Information</h3>
              <p>
                We collect the information about how you interact with our Service. This information may include your IP address, geographical location, browser type, referral source, length of visit, pages viewed and items clicked. We may also collect location information, including location information automatically provided by your computer or device. We may use third-party cookies and similar technologies to collect some of this information.
              </p>

              <h3 className="text-lg font-bold text-gray-800 mt-6 mb-2">End User Information</h3>
              <p>
                Your website, app and other property visitors, potential and existing customers (Herein referred to as End Users) may submit information such as personal information including names, email addresses, and phone numbers in the chat or connected email. This information may be input into the Services by you or collected by the Services using our tags, scripts and other code implemented on any of your properties and information contained in communications between you and People using the messaging features of any of the Services.
              </p>
              <p className="mt-3 bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-sm">
                Please note that we store chat history and other information provided by the End Users for the sole purpose of displaying analytics, generating reports, sending data to the chatbot platform you are using for showing and processing chats between you and your End Users, etc. Kas newerax does not expose the personal information of your End Users to any 3rd party. Please note that if you are using Dialogflow, Amazon Lex or any other bot platform, data will be sent to these platforms for the sole purpose of processing the chat.
              </p>
            </div>

            {/* Using the Collected Information */}
            <div id="using-information" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Using the Collected Information</h2>
              <p className="mb-4">We use your information in the following ways:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-[#6039ea]">
                <li>To provide, maintain and improve the Services offered to you.</li>
                <li>To deliver customer service to you.</li>
                <li>To process your payments against our Services used.</li>
                <li>To control unauthorized use or abuse of the Services or otherwise prevent activities that may violate our policies or are illegal.</li>
                <li>To monitor usage or traffic patterns (including to track users' movements around the Services) and gather demographic information.</li>
                <li>To communicate directly with you, including by sending you emails, newsletters, promotions and special offers or information about new products and services.</li>
                <li>To deliver you a personalized experience. May come in the form of messages, emails, delivering tailor-made ads based on your interest and browsing history.</li>
              </ul>
              <p>
                We retain the personal information that you provide us as long as we consider it potentially useful in contacting you about the Services and then we securely delete the information. We will delete this information from the servers at an earlier date if you so request.
              </p>
            </div>

            {/* Sharing and Security */}
            <div id="sharing-security" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Sharing and Security of Information</h2>
              <p>
                The security of your personal information is important to us. We use appropriate technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration, including encryption and access controls.
              </p>
              <p className="font-bold text-gray-900 mt-2 mb-4">
                We do not sell, rent, or trade your personal information to third parties for their own marketing or commercial purposes.
              </p>
              <p className="mb-4">We only share your information in the limited situations described below:</p>
              
              <div className="space-y-4">
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">1. Service Providers</span>
                    We work with trusted third-party providers (such as cloud hosting, analytics, customer support tools, and payment processors) to help us operate and improve our services. These providers are only allowed to use your information to perform services for us and must keep it secure and confidential.
                 </div>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">2. Affiliates</span>
                    We may share information with our affiliated companies to help provide and support our services. These entities are required to protect your information in the same way we do.
                 </div>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">3. Integrations and Customer Instructions</span>
                    If you use integrations or connect third-party tools with our services, we may share information as needed to enable those features.
                 </div>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">4. Legal Requirements</span>
                    We may disclose information if required by law, regulation, or legal process, or if necessary to protect our rights, safety, or the safety of others.
                 </div>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">5. Payments</span>
                    Payment details are processed securely by PCI-compliant payment providers. We do not store full payment information unless necessary for billing and compliance.
                 </div>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">6. Business Transfers</span>
                    If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction, with appropriate safeguards in place.
                 </div>
                 <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <span className="font-bold text-[#6039ea] block mb-1">7. With Your Consent</span>
                    We may share your information when you give us permission to do so.
                 </div>
              </div>
            </div>

            {/* Opting Out */}
            <div id="opting-out" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Opting out and Access to Information</h2>
              <p className="mb-4">
                Kas newerax will provide you with information about whether we hold any of your personal information if you request so. If you provide us with your personal information, you have the following rights with respect to that information:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-[#6039ea]">
                <li>To review the user information that you have supplied to us</li>
                <li>To request that we correct any errors, outdated information, or omissions in user information that you have supplied to us. You may do that by logging into our services.</li>
                <li>To request that your user information not be used to contact you</li>
                <li>To request that your user information be deleted from our records</li>
                <li>To opt out of being contacted by Kas newerax or third parties</li>
              </ul>
              <p>
                To perform any such action, please mail us at <strong className="text-gray-900">contact@kasneweraxtech.in</strong>.
              </p>
            </div>

            {/* Public Forum */}
            <div id="public-forum" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Public Forum</h2>
              <p>
                Our Services provide for message boards. Please remember that any information that is disclosed in these areas becomes public information and you should exercise caution when deciding to disclose your personal information.
              </p>
            </div>

            {/* Upgrades & Changes */}
            <div id="upgrades-changes" className="scroll-mt-28 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Upgrades and Changes in Privacy Policy</h2>
              <p>
                We reserve the right to make updates and changes in this Privacy Policy at any point of time. For your best interest, please revisit the Privacy Policy occasionally.
              </p>
            </div>

            {/* Contact Us */}
            <div id="contact-us" className="scroll-mt-28 mt-8 bg-[#eef0ff] p-6 rounded-2xl border border-[#d6dcff]">
              <h2 className="text-xl font-bold text-[#6039ea] mb-3">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions or need to contact us about this Privacy Policy, please email us at <strong className="text-gray-900">contact@kasneweraxtech.in</strong>.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;