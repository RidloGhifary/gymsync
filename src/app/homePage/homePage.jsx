import FeatureClass from "./featureClass/featureClass";
import Header from "./header/header";
import WhoWeAre from "./whoWeAre/whoWeAre";

export default function HomePage() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <FeatureClass />
    </>
  )
}