import Link from "next/link";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-30">
            <Pricing />
        </div>
        <Footer />
    </div>
  );
}
