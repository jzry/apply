interface Tier {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
  tag: string;
  buttonColor?: string;
}

const tiers: Tier[] = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: 'https://tally.so/r/31z8rW',
    priceMonthly: '$50',
    description: "100 job applications",
    features: [
      "Apply to 100 jobs",
      "We message recruiters on your behalf",
      "Completed in 1-3 business days",
      "Weekly recruiter followup",
      "Status updates right to your email",
      "See your job status on our dashboard",
    ],
    featured: false,
    tag: 'Get Basic',
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: 'https://tally.so/r/m649ve',
    priceMonthly: '$100',
    description: '200 job applications',
    features: [
      "Apply to 200 jobs",
      "We message recruiters on your behalf",
      "Completed in 1-3 business days",
      "Weekly recruiter followup",
      "Status updates right to your email",
      "See your job status on our dashboard",
    ],
    featured: true,
    tag: 'Get Premium',
    buttonColor: 'bg-gradient-to-t from-orange-500 to-red-500 font-semibold text-white px-6 py-2 rounded-full font-large hover:bg-gradient-to-bl from-red-450 to-orange-500',
  },
  {
    name: 'Custom',
    id: 'tier-custom',
    href: 'https://tally.so/r/3jjj74',
    priceMonthly: 'Custom Order',
    description: 'Contact us',
    features: [
      "Custom job order quantity",
      "We message recruiters on your behalf",
      "Completed in 1-3 business days",
      "Weekly recruiter followup",
      "Status updates right to your email",
      "See your job status on our dashboard",
    ],
    featured: false,
    tag: 'Get Custom',
  },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

interface PricingProps {
  id?: string;
}

export default function Pricing({ id }: PricingProps) {
  return (
    <section id={id} className="relative isolate bg-white pt-[70px] px-6 pb-[110px] md:pt-[0px] md:px-[50px] md:pb-[110px]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-black sm:text-5xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-[700px] text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Choose the number of jobs that you would like us to apply to on your behalf.
      </p>

      {/* Used to control the cards */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative border border-[3px] border-orange-500 rounded-3xl bg-white'
              : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'ring-0'
                  : 'rounded-tr-3xl rounded-br-3xl',
              'rounded-3xl p-8 sm:p-10',
              !tier.featured && 'ring-1 ring-black' // only apply ring for non-featured
            )}
          >
            
            {/* Used to control the name of the tier on the card */}
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-black text-[30px]' : 'text-black text-[30px]', 'text-base/7 font-normal')}
            >
              {tier.name}
            </h3>

            {/* Used to control the description of the tier on the card */}
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-black' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
                {/* <span className={classNames(tier.featured ? 'text-black' : 'text-black', 'text-base')}> for 100 jobs</span> */}
              </span>
              {/* <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}> one time payment</span> */}
            </p>
            <p className={classNames(tier.featured ? 'text-black' : 'text-black', 'font-semibold text-xl mt-6 text-base/7')}>
              {tier.description}
            </p>

            {/* Used to control features description bullet list on pricing card*/}
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-black' : 'text-black',
                'mt-8 space-y-3 text-sm/6 sm:mt-10 list-disc list-inside pl-1',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className=" gap-x-1 font-normal text-[16px]">
                  {feature}
                </li>
              ))}
            </ul>

            {/* Used to control buttons on pricing card */}
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.buttonColor
                ? tier.buttonColor
                : tier.featured
                  ? 'bg-white border border-black text-black duration-0 cursor-pointer hover:shadow-gray hover:bg-gray-100 focus-visible:outline-gray-400' // For Non-featured right hand cards
                  : 'text-black shadow-xs duration-0 cursor-pointer hover:shadow-sm hover:shadow-gray hover:bg-gray-100 ring-1 ring-black ring-inset focus-visible:outline-gray-700', // For Non-featured left hand card
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              {tier.tag}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}