import Link from "next/link";

export default function FAQSection() {
  return (
    <div className="relative w-full pt-25 pb-15">
      {/* Background Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        viewBox="0 0 800 700"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="warmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="30%" stopColor="#fb923c" />
            <stop offset="70%" stopColor="#ff471a" />
            <stop offset="100%" stopColor="#ffcc00" />
          </linearGradient>
        </defs>

        <path
          d="
            M0,10 
        C500,150 300,0 800,40 
        V600 
        C-100,500 500,400 0,700 
        Z
          "
          fill="url(#warmGradient)"
          transform="scale(1,1.9)"
        />
      </svg>

      {/* FAQ Content */}
      <div className="max-w-[1000px] px-4 pt-[10px] pb-[10px] sm:px-6 lg:max-w-[940px] lg:pt-[10px] lg:pb-[10px] mx-auto relative z-10">
        <div className="max-w-[1000px] mx-auto text-center mb-5 lg:mb-0">
          <h2 className="text-[35px] font-bold md:text-[50px] md:leading-tight">
            Frequently Asked Questions
          </h2>

          <Link
            href="/faq"
            className="bg-white mt-8 text-black px-10 py-4 rounded-md text-lg font-semibold cursor-pointer hover:shadow-sm hover:shadow-gray hover:bg-orange-100 inline-block"
          >
            See FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
