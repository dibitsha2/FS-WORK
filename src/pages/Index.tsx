
import AboutSection from "@/components/AboutSection";
import AddReviewForm from "@/components/AddReviewForm";
import ClientReviews from "@/components/ClientReviews";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Services from "@/components/Services";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="bg-luxury-dark">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <Services />
      <ClientReviews />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <AddReviewForm />
    </div>
  );
};

export default Index;
