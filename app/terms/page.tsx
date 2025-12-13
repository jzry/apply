import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
        
        <Navbar />
        
      {/* Hero Section */}
      <section className="pt-[100px] sm:pt-40 pb-[40px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: December 13, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-[80px]">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to ApplyToJobs ("we," "us," "our," or "the Service"). These Terms and Conditions ("Terms") govern your access to and use of our website, platform, and related services. By accessing or using ApplyToJobs, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">1.</span> Definitions
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>1.1 "Platform"</strong> refers to our website and any related software or applications that provide the Services.</p>
              <p><strong>1.2 "User," "you," or "your"</strong> refers to the individual accessing or using our Services.</p>
              <p><strong>1.3 "User Content"</strong> means any information or materials you upload, submit, or otherwise provide to ApplyToJobs, including your resume, job search parameters, contact information, and any other data or content.</p>
              <p><strong>1.4 "Services"</strong> refers to our job application services, including applying to jobs on your behalf, messaging recruiters and hiring managers, resume optimization, and dashboard access.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">2.</span> Acceptance of Terms
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>2.1 Agreement to Terms.</strong> By creating an account, purchasing our services, or using our platform, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
              <p><strong>2.2 Age Requirement.</strong> You must be at least 18 years old to use our Services.</p>
              <p><strong>2.3 Changes to Terms.</strong> We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">3.</span> Description of Services
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>3.1 Job Application Services.</strong> ApplyToJobs will apply to jobs on your behalf based on your preferences, resume, and target criteria. Our team of vetted freelancers will submit applications through various job boards, company websites, and direct email.</p>
              <p><strong>3.2 Recruiter Outreach.</strong> We will message recruiters, hiring managers, and company contacts on your behalf to increase your visibility and response rates.</p>
              <p><strong>3.3 Resume Optimization.</strong> Our team will review your resume and provide feedback to ensure it is optimized for mass applications.</p>
              <p><strong>3.4 Dashboard Access.</strong> You will have access to a dashboard where you can view all job applications, messages sent, and track your application status in real-time.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10 bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">4.</span> Collection and Use of Personal Information
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>4.1 Consent to Data Collection.</strong> By using our Services, you expressly consent to our collection, use, and storage of your personal information, including but not limited to your name, email address, phone number, resume, work history, education, and job preferences.</p>
              <p><strong>4.2 Grant of License.</strong> You grant ApplyToJobs a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your resume, personal information, and other User Content for the sole purpose of providing the Services.</p>
              <p><strong>4.3 Email Alias and Google Voice.</strong> To protect your privacy, we create an email alias and request that you provide a Google Voice number for use in job applications. Our freelancers will never have access to your real email address or phone number.</p>
              <p><strong>4.4 Data Retention and Deletion.</strong> Once your order is complete, we will delete your resume and personal information from our systems. However, we may retain aggregated and anonymized data for analytics and service improvement purposes.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10 bg-red-50 border-l-4 border-red-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">5.</span> Data Security and Limitation of Liability
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>5.1 Security Measures.</strong> We take reasonable precautions to protect your personal information using industry-standard security measures, including encryption, secure data storage, and access controls. We comply with GDPR and other applicable data protection regulations.</p>
              <p className="font-semibold text-red-700"><strong>5.2 No Guarantee of Security.</strong> However, you acknowledge and agree that no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data. In the event of a data breach, hack, or unauthorized access to your information, ApplyToJobs shall not be held liable for any damages, losses, or consequences resulting from such breach.</p>
              <p><strong>5.3 Your Responsibility.</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">6.</span> Authorization to Act on Your Behalf
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>6.1 Authority to Apply.</strong> By using our Services, you authorize ApplyToJobs and our freelance team to apply to jobs on your behalf, submit your resume to employers, and fill out job applications using your personal information.</p>
              <p><strong>6.2 Authority to Message.</strong> You authorize us to message recruiters, hiring managers, and company representatives on your behalf. You may pre-approve message templates and customize the messaging we send.</p>
              <p><strong>6.3 Representation Disclaimer.</strong> While we strive to represent you fairly and with integrity, you acknowledge that we are acting as your agent in submitting applications and communications. We will make reasonable efforts to ensure accuracy and professionalism, but we cannot control how employers perceive or respond to your applications.</p>
              <p className="font-semibold"><strong>6.4 Limitation of Liability for Representation.</strong> ApplyToJobs is not liable for any mishaps, misunderstandings, errors, or negative outcomes that may occur as a result of our representation of you. This includes, but is not limited to, incorrect information submitted, miscommunication with employers, or any actions taken by employers based on our applications on your behalf.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">7.</span> No Guarantee of Employment
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p className="font-semibold text-yellow-900"><strong>7.1 Service Nature.</strong> ApplyToJobs provides a job application service. We apply to jobs and message recruiters on your behalf to increase your chances of receiving interviews and job offers.</p>
              <p className="font-semibold text-yellow-900"><strong>7.2 No Employment Guarantee.</strong> You acknowledge and agree that payment for our Services does NOT guarantee that you will receive job interviews, job offers, or employment. The job market is competitive, and hiring decisions are made solely by employers. We cannot control employer hiring practices, market conditions, or other factors that influence employment outcomes.</p>
              <p><strong>7.3 Best Efforts.</strong> We will make our best efforts to apply you to relevant positions and maximize your chances of success, but results may vary based on factors including your qualifications, experience, resume quality, job market conditions, and employer preferences.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">8.</span> User Responsibilities
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>8.1 Accurate Information.</strong> You agree to provide accurate, current, and complete information when creating your account and using our Services. You are responsible for updating your information as needed.</p>
              <p><strong>8.2 Compliance with Laws.</strong> You agree to comply with all applicable laws, regulations, and third-party terms when using our Services.</p>
              <p><strong>8.3 Google Voice Number.</strong> You agree to create and provide a Google Voice number for use in job applications, as we cannot use your personal phone number.</p>
              <p><strong>8.4 Resume Quality.</strong> You agree to work with our team during the resume review process to ensure your resume meets quality standards before we begin applications.</p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">9.</span> Prohibited Conduct
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide false, misleading, or fraudulent information in your resume or profile</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Violate any job board terms of service or employer application policies</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Use the Services to harass, abuse, or harm others</li>
                <li>Interfere with or disrupt the Services or servers</li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">10.</span> Payment and Refunds
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>10.1 Fees.</strong> You agree to pay all fees associated with your selected service plan. All fees are non-refundable unless otherwise stated in our refund policy.</p>
              <p><strong>10.2 Refund Policy.</strong> If you are dissatisfied with our Services, we may offer to apply to additional jobs or provide a full refund at our discretion. Refund requests must be submitted within 30 days of service completion.</p>
              <p><strong>10.3 No Chargebacks.</strong> You agree not to initiate chargebacks or payment disputes without first contacting us to resolve the issue.</p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">11.</span> Limitation of Liability
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>11.1 Disclaimer of Warranties.</strong> THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
              <p><strong>11.2 Limitation of Damages.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, APPLYTOJOBS AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, OR OTHER INTANGIBLE LOSSES ARISING FROM:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use or inability to use the Services</li>
                <li>Any unauthorized access, use, or alteration of your content or data</li>
                <li>Any errors or omissions in job applications submitted on your behalf</li>
                <li>Any interactions with employers or third parties resulting from our Services</li>
                <li>Data breaches, hacks, or security incidents beyond our control</li>
                <li>Your failure to secure employment despite using our Services</li>
              </ul>
              <p><strong>11.3 Maximum Liability.</strong> In no event shall our total liability to you exceed the amount you paid for the Services.</p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">12.</span> Indemnification
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>You agree to indemnify, defend, and hold harmless ApplyToJobs, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Any false or misleading information you provide</li>
              </ul>
            </div>
          </div>

          {/* Section 13 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">13.</span> Termination
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>13.1 Termination by You.</strong> You may delete your account at any time. Upon termination, you must stop using our Services.</p>
              <p><strong>13.2 Termination by Us.</strong> We reserve the right to suspend or terminate your access to the Services at any time for any reason, including if we believe you have violated these Terms.</p>
              <p><strong>13.3 Effect of Termination.</strong> Upon termination, we will delete your personal information in accordance with our data retention policies. The provisions of these Terms that by their nature should survive termination (e.g., indemnification, limitation of liability) shall continue to apply.</p>
            </div>
          </div>

          {/* Section 14 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">14.</span> Privacy Policy
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy carefully to understand how we handle your data.</p>
            </div>
          </div>

          {/* Section 15 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">15.</span> Governing Law and Dispute Resolution
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>15.1 Governing Law.</strong> These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.</p>
              <p><strong>15.2 Arbitration.</strong> Any disputes arising from these Terms or your use of the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court.</p>
              <p><strong>15.3 Class Action Waiver.</strong> You agree to resolve disputes with us on an individual basis and waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
            </div>
          </div>

          {/* Section 16 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">16.</span> Miscellaneous
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>16.1 Entire Agreement.</strong> These Terms constitute the entire agreement between you and ApplyToJobs regarding the Services and supersede all prior agreements.</p>
              <p><strong>16.2 Severability.</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
              <p><strong>16.3 Waiver.</strong> Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision.</p>
              <p><strong>16.4 Assignment.</strong> You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-10 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">17.</span> Contact Information
            </h2>
            <div className="pl-6 space-y-2 text-gray-700 leading-relaxed">
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p><strong>Email:</strong> support@applytojobs.com</p>
              <p><strong>Address:</strong> [Your Business Address]</p>
            </div>
          </div>

          {/* Acknowledgment Box */}
          <div className="bg-orange-100 border-2 border-orange-500 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-black mb-4">
              Acknowledgment
            </h3>
            <p className="text-gray-800 leading-relaxed">
              BY USING APPLYTOJOBS, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT YOU UNDERSTAND THE RISKS ASSOCIATED WITH SHARING YOUR PERSONAL INFORMATION, THE LIMITATIONS ON OUR LIABILITY FOR DATA SECURITY, AND THAT PAYMENT FOR OUR SERVICES DOES NOT GUARANTEE EMPLOYMENT OUTCOMES.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}