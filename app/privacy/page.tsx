import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">

        <Navbar />
    
      {/* Hero Section */}
      <section className="pt-[100px] sm:pt-40 pb-[40px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Last Updated: December 13, 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-[80px]">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At ApplyToJobs ("we," "us," "our," or "the Company"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our Services.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              By using our Services, you consent to the data practices described in this Privacy Policy. If you do not agree with our policies and practices, please do not use our Services.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">1.</span> Information We Collect
            </h2>
            <div className="pl-6 space-y-4 text-gray-700 leading-relaxed">
              <p>We collect various types of information from and about users of our Services, including:</p>
              
              <div>
                <h3 className="font-semibold text-black mb-2">1.1 Personal Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                  <li><strong>Resume and Career Information:</strong> Work history, education, skills, qualifications, resume/CV documents</li>
                  <li><strong>Job Preferences:</strong> Desired job titles, locations, salary expectations, company preferences, target employers</li>
                  <li><strong>Account Information:</strong> Username, password, Google Voice number, email alias</li>
                  <li><strong>Communication Preferences:</strong> Message templates you approve for recruiter outreach</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through our payment processor)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">1.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Usage Data:</strong> Information about how you interact with our website and services</li>
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to improve your experience</li>
                  <li><strong>Application Data:</strong> Records of jobs applied to, messages sent, dashboard activity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 - Highlighted */}
          <div className="mb-10 bg-green-50 border-l-4 border-green-500 p-6 rounded">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">2.</span> How We Use Your Information
            </h2>
            <div className="pl-6 space-y-4 text-gray-700 leading-relaxed">
              <p className="font-semibold text-green-900">We use your personal information ONLY for the following purposes:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>To Provide Our Services:</strong> Apply to jobs on your behalf, submit your resume to employers, and fill out job applications</li>
                <li><strong>Recruiter Outreach:</strong> Message hiring managers, recruiters, and company representatives on your behalf</li>
                <li><strong>Resume Optimization:</strong> Review and provide feedback on your resume to optimize it for job applications</li>
                <li><strong>Dashboard Services:</strong> Display your job applications, messages sent, and application status</li>
                <li><strong>Account Management:</strong> Create and manage your account, process payments, and provide customer support</li>
                <li><strong>Communication:</strong> Send you service-related notifications, updates about your applications, and respond to your inquiries</li>
                <li><strong>Service Improvement:</strong> Analyze aggregated, anonymized data to improve our Services</li>
                <li><strong>Legal Compliance:</strong> Comply with legal obligations and enforce our Terms and Conditions</li>
              </ul>

              <div className="bg-white border-2 border-green-600 p-4 rounded mt-4">
                <p className="font-bold text-green-900 text-lg mb-2">Our Commitment to You:</p>
                <p className="font-semibold text-green-800">
                  We will NEVER sell, rent, or trade your personal information to third parties for marketing purposes. We will NEVER use your data for any purpose other than providing you with our job application services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">3.</span> How We Share Your Information
            </h2>
            <div className="pl-6 space-y-4 text-gray-700 leading-relaxed">
              <p>We may share your information in the following limited circumstances:</p>
              
              <div>
                <h3 className="font-semibold text-black mb-2">3.1 With Employers and Recruiters</h3>
                <p>We share your resume and application materials with employers and recruiters as part of our job application services. This is the core function of our service and is necessary to apply to jobs on your behalf.</p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">3.2 With Our Freelance Team</h3>
                <p>Our vetted freelancers access your information to apply to jobs and message recruiters on your behalf. However, they NEVER see your real email address or phone number—only the email alias and Google Voice number we create for you.</p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">3.3 With Service Providers</h3>
                <p>We may share information with trusted third-party service providers who assist us in operating our platform, such as:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Payment processors (e.g., Stripe, PayPal)</li>
                  <li>Cloud hosting providers (e.g., AWS, Google Cloud)</li>
                  <li>Email service providers</li>
                  <li>Analytics providers</li>
                </ul>
                <p className="mt-2">These service providers are contractually obligated to protect your data and may only use it to provide services to us.</p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">3.4 For Legal Reasons</h3>
                <p>We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety, or that of our users or the public.</p>
              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">3.5 Business Transfers</h3>
                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>
              </div>

              <div className="bg-blue-50 border-2 border-blue-500 p-4 rounded mt-4">
                <p className="font-bold text-blue-900">What We DO NOT Do:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-blue-800">
                  <li>We DO NOT sell your personal information to data brokers or advertisers</li>
                  <li>We DO NOT share your information with third parties for their marketing purposes</li>
                  <li>We DO NOT use your data for purposes unrelated to job applications</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">4.</span> Data Security
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>4.1 Security Measures.</strong> We implement industry-standard security measures to protect your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit and at rest (SSL/TLS encryption)</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Limited employee access on a need-to-know basis</li>
                <li>Background checks for all freelancers</li>
                <li>Email aliases and Google Voice numbers to protect your real contact information</li>
              </ul>

              <p><strong>4.2 GDPR Compliance.</strong> We comply with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We process your data lawfully, fairly, and transparently.</p>

              <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded mt-4">
                <p className="font-bold text-yellow-900 mb-2">Important Security Disclaimer:</p>
                <p className="text-yellow-800">
                  While we take reasonable precautions to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security. In the event of a data breach, unauthorized access, or hack, we will notify you as required by law, but ApplyToJobs cannot be held liable for any damages resulting from such incidents.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">5.</span> Data Retention and Deletion
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>5.1 Active Use.</strong> We retain your personal information for as long as your account is active or as needed to provide you with our Services.</p>
              
              <p><strong>5.2 After Service Completion.</strong> Once we complete your job application order, we will delete your resume and personal information from our systems within 30 days, unless you have an ongoing service or request otherwise.</p>
              
              <p><strong>5.3 Anonymized Data.</strong> We may retain anonymized, aggregated data that cannot identify you for analytics and service improvement purposes indefinitely.</p>
              
              <p><strong>5.4 Legal Requirements.</strong> We may retain certain information as required by law or for legitimate business purposes (e.g., dispute resolution, fraud prevention, compliance with legal obligations).</p>
              
              <p><strong>5.5 Account Deletion.</strong> You may request deletion of your account and personal information at any time by contacting us at privacy@applytojobs.com. We will delete your data within 30 days of your request, subject to legal retention requirements.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">6.</span> Your Privacy Rights
            </h2>
            <div className="pl-6 space-y-4 text-gray-700 leading-relaxed">
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Right to Restriction:</strong> Request that we limit how we use your information</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format</li>
                <li><strong>Right to Object:</strong> Object to processing of your information for certain purposes</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent to data processing at any time</li>
                <li><strong>Right to Lodge a Complaint:</strong> File a complaint with a supervisory authority</li>
              </ul>

              <p className="mt-4">To exercise any of these rights, please contact us at privacy@applytojobs.com. We will respond to your request within 30 days.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">7.</span> Cookies and Tracking Technologies
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p><strong>7.1 What Are Cookies.</strong> Cookies are small text files stored on your device that help us improve your experience on our website.</p>
              
              <p><strong>7.2 How We Use Cookies.</strong> We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Remember your login information</li>
                <li>Understand how you use our Services</li>
                <li>Improve website functionality and performance</li>
                <li>Analyze traffic and user behavior</li>
              </ul>
              
              <p><strong>7.3 Cookie Control.</strong> You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our Services.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">8.</span> Third-Party Links
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>Our Services may contain links to third-party websites or services (e.g., job boards, company career pages). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing them with any personal information.</p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">9.</span> Children's Privacy
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete it immediately.</p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">10.</span> International Data Transfers
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those of your country. By using our Services, you consent to the transfer of your information to these countries.</p>
              <p>We ensure that appropriate safeguards are in place to protect your data during international transfers, including Standard Contractual Clauses approved by the European Commission.</p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">11.</span> Changes to This Privacy Policy
            </h2>
            <div className="pl-6 space-y-3 text-gray-700 leading-relaxed">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our Services after such changes constitutes your acceptance of the updated Privacy Policy.</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-10 bg-gray-50 border border-gray-200 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
              <span className="text-orange-600">12.</span> Contact Us
            </h2>
            <div className="pl-6 space-y-2 text-gray-700 leading-relaxed">
              <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <p><strong>Email:</strong> privacy@applytojobs.com</p>
              <p><strong>Support Email:</strong> support@applytojobs.com</p>
              <p><strong>Address:</strong> [Your Business Address]</p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-orange-100 border-2 border-orange-500 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-4 text-center">
              Privacy Summary
            </h3>
            <ul className="space-y-3 text-gray-800 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>We use your information ONLY to apply to jobs and message recruiters on your behalf</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>We NEVER sell your personal information to third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>We protect your privacy with email aliases and Google Voice numbers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>We delete your resume after your order is complete</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span>We comply with GDPR and use industry-standard security measures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold text-xl">⚠</span>
                <span>No system is 100% secure—we cannot guarantee absolute protection against hacks</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}