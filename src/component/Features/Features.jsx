import FeatureCard from "../FeatureCard/FeatureCard";

import Responsive from "../../assets/features/desktop/responsive.svg";
import NoLimit from "../../assets/features/desktop/no-limit.svg";
import Embed from "../../assets/features/desktop/embed.svg";

const Features = () => {
  return (
    <ul className="mb-20 flex flex-col gap-14 px-8 text-center">
      <FeatureCard
        image={Responsive}
        alt="Depiction of laptops and computers"
        heading="100% Responsive"
        description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
      />
      <FeatureCard
        image={NoLimit}
        alt="infinity symbol"
        heading="No Photo Upload Limit"
        description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />
      <FeatureCard
        image={Embed}
        alt="Mixture of social media logos"
        heading="Available to Embed"
        description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
      />
    </ul>
  );
};

export default Features;
