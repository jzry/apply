'use client'

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How is my privacy protected?",
    answer:
      "We comply with GDPR and handle personal information with extreme care. Once we finish your order, we delete your resume entirely. We promise to never sell your information to third parties.",
  },
  {
    question: "Why would I use this service?",
    answer:
      "Searching and applying for jobs takes lots of time and effort. If you apply to 100 jobs manually, it would take you 20-30 hours. We help you apply to jobs fast. We also message the recruiters associated with a job position and follow up with them on your behalf to make your application stand out.",
  },
  {
    question: "What do you do with my resume?",
    answer:
      "We use your resume to mass apply to job applications. Before we begin the service, the Apply administration team reviews each resume to ensure that it is prepared for mass applications. We use one resume to apply to each job, and tailor it to each job function. If we have any concerns of your resume we will reach out to work with you.",
  },
  {
    question: "What messages do you send to hiring departments or hiring managers?",
    answer:
      "If the hiring manager for the job we apply to is available, we will contact them directly. However, if they're not then we'll go to the company website and send an email on your behalf, notifying them that you're interested in a specific position. In your onboarding we will ask you to pre-create and pre-approve a variety of messages that you give us permission to send to hiring managers and hiring departments on your behalf.",
  },
  {
    question: "How can I know what jobs I'm being applied to and what messages are being sent out?",
    answer:
      "You can access our dashboard to check what messages are sent to who, which address they are sent to, and what jobs you have been applied to in real time.",
  },
  {
    question: "What is the quality of each job application?",
    answer:
      "Our goal is for each job application to be of the highest quality - just like you would send them out on your own. We verify that all your information is correct manually and forms are filled semi-manually with automated form filling tools we've developed.",
  },
  {
    question: "Can I give you the exact companies or jobs that I want you to apply for me?",
    answer:
      "We accept a list of companies that you would like us to search from, airtables, and spreadsheets of job positions that you would like us to apply to. In fact, we welcome it because you would receive a better return on investment. We will finnish faster and you'll likely be more satisfied with the jobs we apply you to.",
  },
  {
    question: "What jobs do you apply to?",
    answer:
      "We'll apply to jobs where all your preferred criteria are met. Including, but not limited to, minimum salary, location, job types, companies, benefits, etc. In certain cases it may be impossible to find 100 jobs for you and we will need to wait for new positions open up, for example in non-metropolitan areas it may be more difficult to find jobs that match your preferences.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "If you are dissatisfied with our service, we can offer to apply to more jobs or we will refund you 100% of your money back. Please understand before using our service that simply applying for jobs does not guarantee job placement or interviews.",
  },
  {
    question: "Where do you search and apply for jobs?",
    answer:
      "We search for jobs either from the list of companies that you give us or various job boards, like LinkedIn, Indeed, Handshake, and others. We apply through corporate websites, company websites, or email your application directly to hiring departments. We've developed private tools to crawl job boards to search faster for relevant roles that match your job preferences.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Body */}
      <div className="max-w-[1000px] px-4 pt-[10px] pb-[80px] sm:px-6 lg:max-w-[940px] lg:pt-[10px] lg:pb-[50px] mx-auto">
        <div className="max-w-[1000px] mx-auto text-center mt-[120px] mb-10 lg:mb-14">
          <h2 className="text-[35px] font-bold md:text-[50px] md:leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl mb-2 p-6 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="cursor-pointer w-full flex justify-between items-center text-left text-gray-800 font-semibold text-lg focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    } w-5 h-5 text-gray-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-screen mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}