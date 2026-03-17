import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FluidDivider from "@/components/FluidDivider";
import StorytellingSection from "@/components/StorytellingSection";
import PersonificationSection from "@/components/PersonificationSection";
import MentalHealthSection from "@/components/MentalHealthSection";
import AuthoritySection from "@/components/AuthoritySection";
import ScheduleSection from "@/components/ScheduleSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FluidDivider fromColor="hsl(200,7%,16%)" toColor="hsl(30,60%,78%)" variant="wave" />
      <StorytellingSection />
      <FluidDivider fromColor="hsl(30,77%,69%)" toColor="hsl(200,7%,16%)" variant="blob" />
      <PersonificationSection />
      <FluidDivider fromColor="hsl(200,7%,16%)" toColor="hsl(30,77%,69%)" variant="drip" />
      <MentalHealthSection />
      <FluidDivider fromColor="hsl(30,60%,78%)" toColor="hsl(252,27%,92%)" variant="wave" />
      <AuthoritySection />
      <FluidDivider fromColor="hsl(252,27%,88%)" toColor="hsl(200,7%,16%)" variant="blob" />
      <ScheduleSection />
      <FluidDivider fromColor="hsl(200,7%,20%)" toColor="hsl(30,60%,78%)" variant="drip" />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
