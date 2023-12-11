import FeatureClass from "./featureClass/featureClass";
import Header from "./header/header";
import WhoWeAre from "./whoWeAre/whoWeAre";
import WhyChooseUs from "./whyChooseUs/whyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <FeatureClass />
      <WhyChooseUs />
    </>
  )
}