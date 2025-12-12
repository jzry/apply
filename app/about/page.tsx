import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientWave from "@/components/GradientWave";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">


    <Navbar />
      {/* Hero Section */}
      <section className="pt-[100px] sm:pt-40 pb-[60px] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6">
            About ApplyToJobs
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're on a mission to simplify job searching and help you land your dream job faster.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 pb-[80px]">
        <div className="max-w-[940px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                ApplyToJobs was founded on a simple observation: job searching is broken. Talented professionals spend countless hours filling out redundant applications, only to hear nothing back.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We knew there had to be a better way. By combining human expertise with efficient processes, we've created a service that applies to hundreds of jobs on your behalf while maintaining the quality and personal touch that gets results.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we've helped thousands of job seekers save time and increase their interview rates by up to 5x.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/our-story.svg" 
                alt="Our Story"
                width="500" 
                height="500" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="px-4 pb-[80px] bg-gray-50">
        <div className="max-w-[940px] mx-auto py-16">
          <h2 className="text-4xl font-semibold text-black text-center mb-12">
            Our Mission & Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white rounded-3xl shadow-xl ring-1 ring-black p-8">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower every job seeker with the tools and support they need to land their dream job, eliminating the tedious parts of job searching so they can focus on what matters most.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-3xl shadow-xl ring-1 ring-black p-8">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                A world where talented professionals spend less time applying and more time interviewing, where job searching is efficient, effective, and stress-free for everyone.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">
                Privacy First
              </h4>
              <p className="text-gray-700">
                Your data is sacred. We protect your information with the highest security standards and never sell your data.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">
                Quality Over Quantity
              </h4>
              <p className="text-gray-700">
                Every application is handled with care. We don't just spray and pray—we apply strategically to maximize your success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-t from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-3">
                Your Success is Ours
              </h4>
              <p className="text-gray-700">
                We're not satisfied until you land the job you want. Your success drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="px-4 py-[80px]">
        <div className="max-w-[940px] mx-auto">
          <h2 className="text-4xl font-semibold text-black text-center mb-12">
            How We Work
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Vetted Freelance Team
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We work with a carefully vetted team of freelancers from around the world. Each team member undergoes extensive background checks and training to ensure they meet our high standards for quality and professionalism.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Privacy-First Approach
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Your privacy is paramount. We create email aliases and use Google Voice numbers so our freelancers never have access to your real contact information. Once your order is complete, we delete your resume entirely.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black mb-3">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Before we begin, our team reviews your resume to ensure it's ready for mass applications. We provide feedback and work with you to optimize it. Our freelancers are incentivized based on your success—they earn more when you get interviews and job offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-[80px] bg-gradient-to-br from-orange-400 via-red-500 to-yellow-400">
        <div className="max-w-[940px] mx-auto">
          <h2 className="text-4xl font-semibold text-white text-center mb-16">
            Our Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">10,000+</div>
              <p className="text-xl text-white font-semibold">Jobs Applied To</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">1,000+</div>
              <p className="text-xl text-white font-semibold">Happy Customers</p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">5x</div>
              <p className="text-xl text-white font-semibold">Average Interview Rate Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="px-4 py-[80px]">
        <div className="max-w-[940px] mx-auto">
          <h2 className="text-4xl font-semibold text-black text-center mb-12">
            Meet the Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-1">John Smith</h4>
              <p className="text-orange-600 font-semibold mb-2">CEO & Founder</p>
              <p className="text-gray-700 text-sm">
                Former recruiter with 10+ years of experience in talent acquisition.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-1">Sarah Johnson</h4>
              <p className="text-orange-600 font-semibold mb-2">Head of Operations</p>
              <p className="text-gray-700 text-sm">
                Oversees our freelance team and ensures quality standards are met.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h4 className="text-xl font-semibold text-black mb-1">Mike Chen</h4>
              <p className="text-orange-600 font-semibold mb-2">Head of Technology</p>
              <p className="text-gray-700 text-sm">
                Builds the tools and systems that power our application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}