import Footer from "@/components/Footer";
import ListSVG from "@/components/ListSVG";
import Navbar from "@/components/Navbar";
import RecruiterSVG from "@/components/RecruiterSVG";
import ResumeSVG from "@/components/ResumeSVG";
import StatusSVG from "@/components/StatusSVG";
import VoiceSVG from "@/components/VoiceSVG";

export default function Features() {
  return (
    <section className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-[940px] mx-[auto] pt-30 pb-20 px-[30px] space-y-16">

            {/* Feature 1: Direct Recruiter Outreach */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Direct Recruiter Outreach
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  We don't just submit applications. We actively message hiring managers and recruiters on your behalf.
                  This personal touch significantly increases your response rate and helps you stand out from the crowd.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Personalized messages to hiring managers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>LinkedIn outreach when applicable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Weekly follow-up messages to boost visibility</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                {/* <img 
                  src="/images/card-1.svg" 
                  alt="Recruiter Outreach"
                  width="400" 
                  height="400" 
                  className="w-full max-w-md"
                /> */}
                <RecruiterSVG />
              </div>
            </div>

            {/* Feature 2: Customizable Messaging */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Your Voice, Our Execution
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Tailor every message we send to match your personal brand and communication style. You have full control over what messages we send out on your behalf, ensuring authenticity in every outreach.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Pre-approve all message templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Multiple message variations for different scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Edit and refine messages anytime</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                {/* <img 
                  src="/images/custom-messages.svg" 
                  alt="Custom Messages"
                  width="400" 
                  height="400" 
                  className="w-full max-w-md"
                /> */}
                <VoiceSVG />
              </div>
            </div>

            {/* Feature 3: Target Your Dream Companies */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Target Your Dream Companies
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Have a list of companies you're passionate about?
                  Upload your target employers and we'll prioritize applications to those organizations, maximizing your chances at landing your dream job.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Upload company lists, spreadsheets, or Airtables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>We apply to your preferred employers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Better ROI with focused applications</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                {/* <img 
                  src="/images/target-companies.svg" 
                  alt="Target Companies"
                  width="400" 
                  height="400" 
                  className="w-full max-w-md"
                /> */}
                <ListSVG />
              </div>
            </div>

            {/* Feature 4: Real-Time Dashboard */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Track Applications in Real Time
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our dashboard shows you exactly which jobs we've applied to, who we've contacted, and all messages sent on your behalf, updated as we finish your batch in real time.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>See every job application as it happens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>View all recruiter messages and contacts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Track application status and responses</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                {/* <img 
                  src="/images/dashboard.svg" 
                  alt="Dashboard"
                  width="400" 
                  height="400" 
                  className="w-full max-w-md"
                /> */}
                <StatusSVG />
              </div>
            </div>

            {/* Feature 5: Resume Tailoring */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1 text-left">
                <h2 className="text-3xl font-semibold text-black mb-4">
                  Resume Tailoring
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Before we start applying, our team works with you directly to ensure your resume is optimized. We review, provide feedback, and help you make improvements for maximum impact.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Personal resume review and consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Tailored suggestions for your industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>Ensure your resume is application-ready</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                {/* <img 
                  src="/images/resume-review.svg" 
                  alt="Resume Review"
                  width="400" 
                  height="400" 
                  className="w-full max-w-md"
                /> */}
                <ResumeSVG />
              </div>
            </div>
        </div>

      <Footer />
    </section>
  );
}