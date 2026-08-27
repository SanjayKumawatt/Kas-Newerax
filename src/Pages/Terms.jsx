import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, FileText, CheckSquare, Activity, 
  HelpCircle, Settings, XOctagon, CreditCard, 
  Lock, Copyright, CheckCircle2, ShieldAlert, 
  AlertTriangle, List, ChevronRight 
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

const Terms = () => {
  const primaryColor = "text-[#6039ea]";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: "definitions", title: "A. Definitions", icon: List },
    { id: "acceptance", title: "B. Acceptance", icon: CheckSquare },
    { id: "service-level", title: "C. Service Level Terms", icon: Activity },
    { id: "support", title: "D. Support", icon: HelpCircle },
    { id: "additional-services", title: "E. Additional Services", icon: Settings },
    { id: "term-termination", title: "F. Term and Termination", icon: XOctagon },
    { id: "payment-terms", title: "G. Payment Terms", icon: CreditCard },
    { id: "confidentiality", title: "H. Confidentiality", icon: Lock },
    { id: "intellectual-property", title: "I. Intellectual Property", icon: Copyright },
    { id: "representations", title: "J. Representations and Warranties", icon: CheckCircle2 },
    { id: "indemnity", title: "K. Indemnity", icon: ShieldAlert },
    { id: "limitation", title: "L. Limitation of Liability", icon: AlertTriangle },
    { id: "miscellaneous", title: "M. Miscellaneous", icon: FileText }
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
             <Scale className="w-8 h-8 text-[#6039ea]" />
          </div>
        </motion.div>
        <motion.h1 variants={fadeInUp} className="text-[2.5rem] leading-[1.15] sm:text-5xl font-bold text-[#14142b] tracking-tight mb-4">
          Terms of Service
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
          By signing up, you (the "Customer") accept to be bound by the terms and conditions given hereunder.
        </motion.p>
      </motion.section>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Sticky Sidebar Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
          className="w-full lg:w-1/4 hidden lg:block"
        >
          <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 ml-2">Table of Contents</p>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button 
                    onClick={() => scrollToSection(section.id)}
                    className="w-full flex items-center justify-between text-left text-sm font-medium text-gray-600 hover:text-[#6039ea] hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors group"
                  >
                    <span className="truncate pr-2">{section.title}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
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
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-10">
            
            {/* A. DEFINITIONS */}
            <div id="definitions" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">A. Definitions</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li><strong className="text-gray-900">“Kas newerax”</strong> is a product from KAS NEWERAX TECHNOLOGY PRIVATE LIMITED, located at Khasra No.1423, Nand Vihar Fulsungi, Rudarpur, Kichha, Udham Singh Nagar, Uttarakhand, India, 263153 and its subsidiaries or affiliates.</li>
                <li>The Customer and Kas newerax shall hereinafter be individually referred to as "Party" and collectively as "Parties".</li>
                <li><strong className="text-gray-900">"Kas newerax Platform"</strong> shall mean the set of client and server software applications licensed to the Customer by Kas newerax.</li>
                <li><strong className="text-gray-900">"Monthly Uptime Percentage"</strong> is calculated by subtracting from 100% the percentage of minutes during the month in which the Kas newerax Platform, as applicable, was in the state of "Unavailable." Monthly Uptime Percentage measurements exclude downtime resulting directly or indirectly from any Kas newerax Exclusion (as defined below).</li>
                <li><strong className="text-gray-900">"Kas newerax Exclusions"</strong> shall mean any unavailability, suspension or termination of Kas newerax Platform performance:
                  <ul className="list-circle pl-5 mt-2 space-y-1 text-sm text-gray-600">
                    <li>caused by factors outside of Kas newerax's reasonable control, including any force majeure event or Internet access or related problems beyond the demarcation point of the Kas newerax Platform;</li>
                    <li>that result from any actions or inactions of the Customer or any third party, including failure to acknowledge a recovery volume;</li>
                    <li>that result from the Customer's equipment, software or other technology and/or third party equipment, software or other technology (other than third party equipment within direct control of Kas newerax);</li>
                    <li>that result from any maintenance provided; or</li>
                    <li>arising from Kas newerax's suspension and termination of the Customer's right to use Kas newerax Platform in accordance with the Service Level Agreement or Proposal (collectively, the "Kas newerax Exclusions").</li>
                  </ul>
                </li>
                <li><strong className="text-gray-900">"Unavailable"</strong> means that Kas newerax servers servicing traffic either do not respond at all or respond erroneously with unexpected results. Any word which has not expressly been defined in these Terms and Conditions shall have the meaning ascribed to it in the Proposal and/or the relevant Proposal.</li>
                <li><strong className="text-gray-900">Proposal:</strong> Proposal stands for initial Proposal or quote shared with the Customer that defined the SOW and the subscription details.</li>
              </ul>
            </div>

            {/* B. ACCEPTANCE */}
            <div id="acceptance" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">B. Acceptance</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>The Kas newerax Platform shall be subject to acceptance testing by the Customer to verify that it satisfies the acceptance criteria mutually agreed to by Kas newerax and the Customer in writing before work commences, where possible, but no later than twenty (20) business days in advance of the date identified for completion of the Kas newerax Platform in the Proposal.</li>
                <li>Acceptance testing for the Kas newerax Platform shall commence within five (5) business days of the date on which Kas newerax notifies the Customer that Kas newerax Platform has been completed and is ready for acceptance testing by the Customer, failing which Kas newerax Platform shall be deemed to be accepted by the Customer.</li>
                <li>Acceptance testing shall continue for the period of time specified in the acceptance criteria or, if no such time period has been agreed upon by the parties, for a period of fifteen (15) business days ("the Initial Acceptance Period") from the date of commencement of the testing.</li>
                <li>Customer will give Kas newerax detailed written notification of the deficiency or non-conformance within the Initial Acceptance Period, failing which Kas newerax Platform shall be deemed to be accepted by the Customer. Kas newerax then shall, within ten (10) business days of receipt of such written notification, either correct the deficiency or non-conformance or provide Customer with a plan acceptable for correcting the deficiency or non-conformance.</li>
              </ul>
            </div>

            {/* C. SERVICE LEVEL TERMS */}
            <div id="service-level" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">C. Service Level Terms</h2>
              <p>
                Kas newerax will use commercially reasonable efforts to make Kas newerax Platform available with a Monthly Uptime Percentage of at least 99.0%, in each case during any monthly billing cycle.
              </p>
            </div>

            {/* D. SUPPORT */}
            <div id="support" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">D. Support</h2>
              <p className="mb-4">
                Effective support of in-scope services is a result of maintaining consistent service levels. The following sections provide relevant details on service availability, monitoring of in-scope services and related components.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mb-6">
                 <h3 className="font-bold text-gray-900 mb-2">Service Availability</h3>
                 <p className="font-semibold text-sm text-[#6039ea] mb-1">Enterprise and Business plan customers:</p>
                 <p className="text-sm mb-4">All business and technical support are provided through email, live chat, remote connections/access share, and phone. Kas newerax provides one (1) named contact for priority support to all its “Enterprise and Business plan Customers”.</p>
                 
                 <p className="font-semibold text-sm text-[#6039ea] mb-1">Non enterprise customers:</p>
                 <p className="text-sm mb-2">Coverage parameters specific to the service(s) covered in this Agreement are as follows:</p>
                 <ul className="list-disc pl-5 text-sm space-y-1 marker:text-gray-400">
                    <li>Email support</li>
                    <li>Chat support</li>
                    <li>Knowledge Base</li>
                    <li>Service Requests</li>
                 </ul>
              </div>

              <p className="font-bold text-gray-900 mb-2 text-sm">In support of services outlined in this Agreement, Kas newerax will respond to service-related incidents and/or requests submitted by the Customer within the following time frames:</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-[#6039ea] text-sm">
                <li>0-12 hours for issues classified as High priority.</li>
                <li>Within 48 hours for issues classified as Medium priority.</li>
                <li>Within 3 working days for issues classified as Low priority.</li>
              </ul>

              <p className="font-bold text-gray-900 mb-3 text-sm">The available support channels as per Customer's chosen plan are given in the table below:</p>
              <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                      <th className="p-4 font-bold">Support Channel</th>
                      <th className="p-4 font-bold">Start / Growth / Lite</th>
                      <th className="p-4 font-bold">Pro / Scale / Advanced</th>
                      <th className="p-4 font-bold">Enterprise / Business</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Knowledge Base</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Email</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Live Chat</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">On-call</td>
                      <td className="p-4 text-gray-400">-</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-gray-800">Dedicated Account Manager</td>
                      <td className="p-4 text-gray-400">-</td>
                      <td className="p-4 text-gray-400">-</td>
                      <td className="p-4 text-green-600 font-medium">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* E. ADDITIONAL SERVICES */}
            <div id="additional-services" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">E. Additional Services</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>During the term, Customer and/or Kas newerax may desire a change in the scope of the Kas newerax Platform. Customer's and/or Kas newerax's requests for changes shall be made in writing and delivered to the Customer and Kas newerax. The parties will review the proposed change and determine the effect that the implementation of the change will have on price, schedule, and other terms and conditions of the relevant Proposal in question.</li>
                <li>Upon completion of the review, any changes in price, schedule, or other terms will be documented, as the Parties select, either by an amendment to or a sequentially numbered replacement of the relevant Proposal in question.</li>
                <li>No change to any Service Terms shall be binding on the Parties unless the change order has been signed by authorized representatives of each Party.</li>
              </ul>
            </div>

            {/* F. TERM AND TERMINATION */}
            <div id="term-termination" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">F. Term and Termination</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>Any Proposal shall continue for the Initial Term set forth in such Proposal unless terminated earlier in accordance with this Clause F.</li>
                <li>This Agreement shall unless otherwise terminated as provided in this Clause F, commence on the Effective Date and shall continue for a period of Twelve (12) months from the Effective Date hereof. Thereafter, this Agreement shall be automatically renewed for successive periods of Twelve (12) months unless either party may terminate the Agreement by providing a prior written notice of thirty (30) days to the other party, provided however that in the event, the Customer terminates the Agreement before completion of the Renewal Period of that Agreement, the Customer shall pay Kas newerax all fees due under the SOW for the remaining term of the Agreement.</li>
                <li><strong className="text-gray-900">No Early Termination; No Refunds:</strong> The Subscription Term will end on the expiration date and the subscription cannot be canceled early. We do not provide refunds if you decide to stop using the Kas newerax subscription during your Subscription Term.</li>
              </ul>
            </div>

            {/* G. PAYMENT TERMS */}
            <div id="payment-terms" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">G. Payment Terms</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>Customer's subscription fee is based on the number of agents/seats, the number of users who interact with chatbots and additional services requested (such as Professional Services and Add-ons), as agreed upon by both parties.</li>
                <li>If the due payment is not received post 30 days of the subscription renewal date, Kas newerax may terminate the services provided to Customer.</li>
                <li><strong className="text-gray-900">Subscription Fees:</strong> The Subscription Fee will remain fixed during the Subscription Term unless you: (i) add more agents/seats (ii) cross the cap of users which can interact with bots in the given plan (iii) upgrade products or base packages, (iv) subscribe to additional features or products, or (v) unless otherwise agreed to in the Proposal.</li>
                <li>Kas newerax may increase or add new fees and charges for any existing Services the Customer is using by giving at least 30 days' prior notice to the Customer.</li>
                <li>All payment obligations are non-cancelable and all amounts paid are non-refundable, except as specifically provided for in this Agreement. All fees are due and payable in advance throughout the Subscription Term.</li>
                <li><strong className="text-gray-900">Payment by credit card:</strong> If you are paying by credit card, you authorize us to charge your credit card or bank account for all fees payable during the Subscription Term. You further authorize us to use a third party to process payments and consent to the disclosure of your payment information to such third parties.</li>
              </ul>
            </div>

            {/* H. CONFIDENTIALITY */}
            <div id="confidentiality" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">H. Confidentiality</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>Neither Party shall disclose to any third party, any Confidential Information that a Party disclosures ("Disclosure"), in writing, orally, visually or in any other medium, to the other Party ("Recipient") or to which Recipient obtains access and that relates to Disclosure. Confidential Information shall mean all data, trade secrets, business information and other information of any kind whatsoever and includes, without limitation, the financial records of the Disclosure, its Customer information and its consumer information. ("Confidential Information")</li>
                <li>This obligation of confidentiality shall not apply to information which (a) is published by the Disclosure or otherwise becomes available to the public other than by a breach of an Proposal, (b) is rightfully received by the Recipient from a third party, not under an obligation of confidentiality, (c) is known by the Recipient prior to disclosure, or independently developed by the recipient at any time, or (d) is required to be disclosed pursuant to a lawful summons from a court of competent jurisdiction or in response to a valid request by a governmental agency, so long as the Recipient uses reasonable efforts to notify the owner prior to such disclosure.</li>
                <li>Upon expiration or termination of an Proposal for any reason or at the written request of either Party during the term of an Proposal, the other Party shall promptly return or destroy all the Confidential Information.</li>
              </ul>
            </div>

            {/* I. INTELLECTUAL PROPERTY */}
            <div id="intellectual-property" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">I. Intellectual Property</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>Each party acknowledges that ownership of all Intellectual Property Rights existing prior to the date of an Proposal or acquired independent of its obligations under an Proposal and any additions, modifications or enhancements made thereto will remain with the owner or licensor of such intellectual property rights ("Pre-existing Rights"). "Intellectual Property Rights" shall mean and include copyrights, patents, mask works, trademarks, service marks, trade secrets, inventions (whether or not patentable), know-how, authors rights, rights of attribution, and other proprietary rights and all applications and rights to apply for registration or protection of such rights anywhere in the world;</li>
                <li>Except for any Pre-existing Rights, Customer understands and agrees that Kas newerax is the sole and exclusive owner of all the Intellectual Property Rights used in rendering the Kas newerax Platform and arising in connection with the solutions and/or services provided under an Proposal. The Customer agrees that it shall not have any right, title or interest in such Intellectual Property Rights.</li>
                <li>The Customer agrees that all applications created or developed by Kas newerax specifically for the Customer pursuant to an Proposal along with any derivatives, additions, upgrades, modifications or enhancements made thereto (the "Applications"), together with any associated copyright and other Intellectual Property Rights, shall be the sole and exclusive property of Kas newerax. The same shall be licensed to Customer with a restricted right to sub-license it to the end-users of the Kas newerax Platform for the sole purpose of using such Applications to access and use the Customer's online content services and solely for the term of the relevant Proposal.</li>
                <li>Customer shall have the option of purchasing the Applications at any time from Kas newerax at a price mutually agreed upon by the parties.</li>
              </ul>
            </div>

            {/* J. REPRESENTATIONS AND WARRANTIES */}
            <div id="representations" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">J. Representations and Warranties</h2>
              <p className="mb-2">Each party represents and warrants to the other party that, as of the date of the relevant Proposal that:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-[#6039ea]">
                <li>It has full authorization and power to execute and perform its obligations under the Proposal;</li>
                <li>It has all licenses, authorizations, consents, approvals and permits required by all applicable laws to perform its obligations under the Proposal; and</li>
                <li>It shall comply with all applicable laws in performing its obligations under the Proposal.</li>
              </ul>
              <p>
                Except as specifically set forth in this clause J, Kas newerax disclaims all other warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, non-infringement and those arising from a course of dealing.
              </p>
            </div>

            {/* K. INDEMNITY */}
            <div id="indemnity" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">K. Indemnity</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>Kas newerax shall indemnify, defend, and hold harmless the Customer from and against any damages arising out of any claim that the Kas newerax Platform infringes any patent, copyright, trademark, or trade secret of a third party, provided the Customer provides prompt notice of such claim and allows Kas newerax sole control of the defense or settlement of such claim.</li>
                <li>For the avoidance of doubt, Kas newerax shall have no liability under this Clause K for any claim arising in connection with any information, software, content, designs, details, specifications or other data provided to Kas newerax by the Customer.</li>
              </ul>
            </div>

            {/* L. LIMITATION OF LIABILITY */}
            <div id="limitation" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">L. Limitation of Liability</h2>
              <ul className="list-disc pl-5 space-y-3 marker:text-[#6039ea]">
                <li>The Customer agrees, to the fullest extent permitted by law, that notwithstanding anything to the contrary elsewhere contained, the maximum aggregate liability of Kas newerax, under any theory of law, whether for breach of contract, breach of warranty or in tort, including but not limited to negligence, will be limited to The amount of fees paid under the Proposal to which the claim relates in the immediate twelve (12) months preceding the claim.</li>
                <li>Notwithstanding anything to the contrary elsewhere contained, Kas newerax shall not be liable in respect of any claim for any indirect, special punitive, exemplary Or consequential losses or damages or others costs or liabilities (whether foreseeable or unforeseeable), including but not be limited to loss of profit, loss of data, loss of contracts or loss of business.</li>
              </ul>
            </div>

            {/* M. MISCELLANEOUS */}
            <div id="miscellaneous" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">M. Miscellaneous</h2>
              <ul className="list-disc pl-5 space-y-4 marker:text-[#6039ea]">
                <li><strong className="text-gray-900">Independent Contractor.</strong> Kas newerax is an Independent Contractor, and not an employee, agent, or partner of the Customer. Kas newerax is solely responsible for the payment of all remuneration, taxes, benefits, and expenses of its employees, agents, and subcontractors.</li>
                <li><strong className="text-gray-900">Waiver.</strong> Any failure or delay in enforcing rights or remedies by a party hereto shall not be deemed a waiver unless the waiving party states it as a waiver in writing.</li>
                <li><strong className="text-gray-900">Severability.</strong> In the event that any provision of these Terms and Conditions is declared illegal or unenforceable by a competent court or administrative agency, the parties shall in good faith try to promptly mutually agree on a substitute provision which accomplishes the same objectives as the original provision.</li>
                <li><strong className="text-gray-900">Survival.</strong> Rights and obligations under a Proposal, which by their nature should survive the termination or expiry of a Proposal, including Clauses G (ii), H, I, K, L and Customer's payment obligations shall survive expiry or termination of a Proposal.</li>
                <li><strong className="text-gray-900">Simple Dispute Resolution.</strong> In the event of any dispute, claim, question, or disagreement arising from or relating to this Agreement, whether arising in contract, tort or otherwise, the Parties shall first use their best efforts to resolve the Dispute. If a Dispute arises, the complaining party shall provide email/written notice to the other party. Following this, the parties shall consult and negotiate with each other in good faith and, recognizing their mutual interest, attempt to reach a just and equitable solution of the Dispute that is satisfactory to both parties ("Simple Dispute Resolution").</li>
                <li><strong className="text-gray-900">Governing Law.</strong> These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Courts of Uttarakhand, India.</li>
                <li><strong className="text-gray-900">Jurisdiction.</strong> Any dispute arising in connection with an Proposal shall be subject to the sole and compulsory jurisdiction to Courts of Uttarakhand, India.</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;