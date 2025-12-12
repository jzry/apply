import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';
import Pricing from '@/components/Pricing';
import FAQSection from '@/components/FAQSection';
import BottomCTA from '@/components/BottomCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <CTA />
      <Pricing id="pricing" />
      <FAQSection />
      <Footer />
    </>
  );
}