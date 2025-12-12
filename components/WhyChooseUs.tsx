export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="px-4 pb-[10px] lg:pb-[10px] bg-white">
      <div className="max-w-[940px] mx-auto space-y-1 mb-[70px] lg:mb-[65px]">

        {/* Top Section: Text + SVG */}
        <div className="flex flex-col lg:flex-row gap-5 items-center">

          {/* Left: Text */}
          <div className="flex-1 text-left pt-20">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Why use Apply?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We apply to 100+ jobs for you in just a few days, using your preferences or target companies. When possible, we contact hiring managers directly to boost your chances.
            </p>
          </div>

          {/* Right: SVG Illustration */}
          <div className="flex-1 py-10">
            <div className="w-full h-auto">
              <img 
                src="/images/selectors.svg" 
                alt="Selectors"
                width="600" 
                height="600" 
                className="..."
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h5 className="text-xl font-semibold text-black mb-2">
              Save time
            </h5>
            <p className="text-gray-700">
              Job searching is a numbers game. Let us handle the applications while you focus on your life.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-black mb-2">
              Security and Privacy
            </h5>
            <p className="text-gray-700">
              Your resume is deleted after your order. We have the highest safety standards with the data you entrust us with.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-black mb-2">
              Money Back Guarantee
            </h5>
            <p className="text-gray-700">
              Not satisfied? Get a full refund or we'll apply to more jobs. Your success is our priority.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}