import Link from "next/link";

export default function Footers() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-5">
          <div>
            <h3 className="flex items-center gap-1">
              <a href="/" className="text-xl font-bold text-black bg-clip-text mb-2">
                ApplyToJobs
              </a>
              <img src="/images/icon.svg" alt="Company Logo" className="w-5 h-5 mb-2" />
            </h3>
            <p className="text-gray-700">Made in 🇺🇸 with ❤️</p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Product</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/features" className="text-gray-600 hover:underline">
                  Features
                </Link>
              </li>
              <li>
              </li>
              <li><a href="#pricing" className="text-gray-600 hover:underline">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Company</h4>
            <ul className="space-y-1">
              <li>
              <Link href="/about" className="text-gray-600 hover:underline">
                About
              </Link>
              </li>
              <li>
              <Link href="/blog" className="text-gray-600 hover:underline">
                Blog
              </Link>
              </li>
              <li>
              <Link href="/contact" className="text-gray-600 hover:underline">
                Contact
              </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Legal</h4>
            <ul className="space-y-1">
              <li>
              <Link href="/privacy" className="text-gray-600 hover:underline">
                Privacy
              </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:underline">
                Terms
              </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2025 ApplyToJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}