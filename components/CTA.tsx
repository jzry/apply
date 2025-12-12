'use client'

import GradientWave from '@/components/GradientWave';

export default function CTA() {
  return (
    <section className="relative w-full min-h-[700px] overflow-hidden pb-16">
      {/* Block gradient background for small + medium screens */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-400 via-red-500 to-yellow-400 animate-gradient lg:hidden z-0" />

      {/* SVG wave background for large+ screens */}
      <div className="hidden lg:block absolute inset-0 w-full h-full z-0">
        <GradientWave />
      </div>
      <div className="max-w-[1250px] mx-[auto] px-4 pt-[40px] relative z-10">
        <div className="text-center text-black">
          <h2 className="text-[45px] text-white tracking-tight text-balance font-bold mb-4 lg:text-5xl pb-[10px] md:pb-[30px] md:text-white lg:text-black">
            How it works
          </h2>
        </div>

        {/* Cards with descriptions (visible on small screens) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="flex items-center gap-4 mb-6 w-full">
              <div className="w-12 h-12 rounded-full bg-orange-200 flex items-center justify-center text-pink-800 text-2xl">
                <img 
                  src="/images/user.svg"
                  alt="User"
                  width="1000" 
                  height="800" 
                />
              </div>
              <div className="text-gray-800 font-bold text-lg">John Appleseed</div>
            </div>
            <div className="border-b border-gray-200 py-3 flex justify-between text-sm text-gray-600 w-full">
              <span>Email</span>
              <span>john@gmail.com</span>
            </div>
            <div className="py-3 flex justify-between text-sm text-gray-600 w-full">
              <span className="font-bold">Upload</span>
              <img 
                src="/images/upload.svg"
                alt="Upload"
                width="15" 
                height="15" 
              />
            </div>
          </div>

          {/* Outside description - only on small screens */}
          <p className="text-center text-white font-bold text-base text-[25px] md:hidden">
            1. Upload your resume
          </p>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="bg-orange-200 text-gray-800 text-sm font-bold py-2 px-4 rounded text-center mb-4">
              Cities you want to work in
            </div>
            <ul className="text-sm text-gray-600 divide-y divide-gray-200 w-full">
              <li className="py-2 px-4">San Francisco</li>
              <li className="py-2 px-4">New York</li>
              <li className="py-2 px-4">Remote</li>
              <li className="py-2 px-4">Austin</li>
            </ul>
          </div>

          {/* Outside description - only on small screens */}
          <p className="text-center text-white font-bold text-base text-[25px] md:hidden">
            2. Set job preferences
          </p>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center">
            <div className="bg-orange-200 text-black text-sm font-bold py-2 px-4 rounded text-center mb-4">
              &quot;Can you speak tomorrow?&quot;
            </div>
            <div className="space-y-2 w-full">
              <div className="bg-gray-100 rounded px-4 py-2">
                <div className="h-2 w-1/3 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 w-2/3 bg-gray-400 rounded"></div>
              </div>
              <div className="bg-gray-100 rounded px-4 py-2">
                <div className="h-2 w-1/2 bg-gray-300 rounded mb-1"></div>
                <div className="h-2 w-1/3 bg-gray-400 rounded mb-1"></div>
                <div className="h-2 w-1/3 bg-gray-400 rounded"></div>
              </div>
            </div>
          </div>

          {/* Outside description - only on small screens */}
          <p className="text-center text-white font-bold text-[18px] md:hidden">
            3. Check dashboard or email for responses
          </p>
        </div>

        {/* Step descriptions - visible only on medium+ screens */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-10 text-center md:text-white lg:text-black font-bold text-[20px]">
          <p>1. Upload your resume</p>
          <p>2. Set job preferences</p>
          <p className="text-[18px]">3. Check dashboard or email for responses</p>
        </div>
      </div>
    </section>
  );
}