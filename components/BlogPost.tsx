export default function BottomCTA() {
  return (
    <section className="py-20 text-white bg-gradient-to-br from-orange-400 via-red-500 to-yellow-300 animate-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-semibold mb-8">
          Ready to search for jobs differently?
        </h2>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          Start saving time. Let us work to search and apply to jobs for you.
        </p>
        <button className="bg-gray-50 text-gray-900 px-8 py-4 rounded-md text-lg font-semibold transition-shadow duration-0 cursor-pointer hover:shadow-lg hover:shadow-gray hover:bg-gray-200">
          Get Started
        </button>
      </div>
    </section>
  );
}