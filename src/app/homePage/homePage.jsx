import CalculateBMI from "./calculateBMI/calculateBMI";
import Contact from "./contact/contact";
import FeatureClass from "./featureClass/featureClass";
import GymGallery from "./gymGallery/gymGallery";
import Header from "./header/header";
import LatestBlog from "./latestBlog/latestBlog";
import Pricing from "./pricing/pricing";
import Testimonials from "./testimonials/testimonials";
import Trainers from "./trainers/trainers";
import WhoWeAre from "./whoWeAre/whoWeAre";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <FeatureClass />
      <WhyChooseUs />
      <Trainers />
      <Testimonials />
      <GymGallery />
      <CalculateBMI />
      <Pricing />
      <LatestBlog />
      <Contact />
    </>
  )
}