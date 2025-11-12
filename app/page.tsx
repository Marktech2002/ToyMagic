import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoWeAre from "@/components/sections/WhoWeAre";
import OurCommitment from "@/components/sections/OurCommitment";
import TopDestinations from "@/components/sections/TopDestinations";
import ExclusiveDeals from "@/components/sections/ExclusiveDeals";
import TravelStories from "@/components/sections/TravelStories";
import Testimonials from "@/components/sections/Testimonials";
import PreFooter from "@/components/sections/PreFooter";
import Footer from "@/components/sections/Footer";
import {
  mockDestinations,
  mockDeals,
  mockStories,
  mockTestimonials,
} from "@/lib/mockData";

export default function Home() {
  return (
    <div className="min-h-screen overflow-y-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        {/* <OurCommitment commitments={mockCommitments} /> */}
        {/* <TopDestinations destinations={mockDestinations} /> */}
        {/* <ExclusiveDeals deals={mockDeals} /> */}
        {/* <TravelStories stories={mockStories} /> */}
        <Testimonials testimonials={mockTestimonials} />
        <PreFooter />
        <Footer />
      </main>
    </div>
  );
}