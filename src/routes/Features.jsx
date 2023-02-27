import InfoCard from "../component/InfoCard";
import FeaturesContainer from "../component/FeaturesContainer";
import BetaCard from "../component/BetaCard";

import Hero from "../assets/features/mobile/hero.jpg";

const Features = () => {
  return (
    <>
      <InfoCard
        image={Hero}
        headingType="h1"
        heading="FEATURES"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        bgColor="bgBlack"
        textColor="textWhite"
        line
      />
      <FeaturesContainer padding allFeatures />
      <BetaCard />
    </>
  );
};

export default Features;
