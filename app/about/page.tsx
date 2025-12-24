import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GradientWave from "@/components/GradientWave";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">


    <Navbar />
      {/* Hero Section */}
      <section className="pt-[100px] sm:pt-40 pb-[40px] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-black mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're on a mission to simplify job searching and help you land your dream job faster.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-4 pb-[0px]">
        <div className="max-w-[940px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Apply was founded on a simple observation: job searching is broken. Talented professionals spend countless hours filling out redundant applications, only to hear nothing back.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We knew there had to be a better way. By combining human expertise with custom built automation software, we've created a service to help you save time maintaining the quality and personal touch that gets results.
              </p>
            </div>
            <div className="flex-1">
              <img 
                src="/images/OurStory.png" 
                alt="Our Story"
                width="500" 
                height="500" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      {/* <section className="px-4 py-[80px]">
        <div className="max-w-[940px] mx-auto">
          <h2 className="text-4xl font-semibold text-black text-center mb-12">
            Meet the Team
          </h2>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <Link href="https://www.linkedin.com/in//" className="cursor-pointer text-xl font-semibold text-blue-500 mb-1 hover:underline">
                LinkedIn
              </Link>
              <p className="text-orange-600 font-semibold mb-2">Owner</p>
            </div>
        </div>
      </section> */}

      {/* Mission & Values Section */}
      <section className="px-4 pb-[80px] bg-white">
        <div className="max-w-[940px] mx-auto">
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
                To empower every job seeker to land their dream job, eliminating the tedious parts of job searching so they can focus on what matters most.
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
                  Select Preferences
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Select the job preferences that you have, upload your resume, and approve messages we can send out on your behalf.
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
                  Resume Review
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We review your resume, provide feedback, and work with you to optimize it.
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
                  Application Phase
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We use our own custom job scraper to crawl every job board, company website, and LinkedIn post to help you find relevant roles that match your job preferences.
                  We apply directly on company websites and reach out to HR and email the relevant recruiter.
                  You can keep an update of where we apply and what messages we send out on our dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="px-4 py-[80px] bg-gradient-to-br from-orange-400 via-red-500 to-yellow-400">
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
      </section> */}

      <section>
        <Footer />
      </section>
    </div>
  );
}