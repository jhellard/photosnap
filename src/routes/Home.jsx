import Create from "../assets/home/mobile/create-and-share.jpg";
import Stories from "../assets/home/mobile/beautiful-stories.jpg";
import Designed from "../assets/home/mobile/designed-for-everyone.jpg";

import InfoCard from "../component/InfoCard/InfoCard";
import StoryCard from "../component/StoryCard/StoryCard";
import Features from "../component/Features/Features";

import Mountains from "../assets/stories/mobile/mountains.jpg";
import Cityscapes from "../assets/stories/mobile/cityscapes.jpg";
import Voyage from "../assets/stories/mobile/18-days-voyage.jpg";
import Architecturals from "../assets/stories/mobile/architecturals.jpg";

const Home = () => {
  return (
    <>
      <InfoCard
        image={Create}
        headingType="h1"
        heading="CREATE AND SHARE YOUR PHOTO STORIES."
        description="Photosnap is a platform for photographers and visual storytellers. We
  make it easy to share photos, tell stories and connect with others."
        button="GET AN INVITE"
        bgColor="bgBlack"
        textColor="textWhite"
        line
      />
      <InfoCard
        image={Stories}
        headingType="h2"
        heading="BEAUTIFUL STORIES EVERY TIME"
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        button="VIEW THE STORIES"
        bgColor="bgWhite"
        textColor="textBlack"
        padding
      />
      <InfoCard
        image={Designed}
        headingType="h2"
        heading="DESIGNED FOR EVERYONE"
        description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
        button="VIEW THE STORIES"
        bgColor="bgWhite"
        textColor="textBlack"
      />
      <ul className="mb-[80px]">
        <StoryCard
          image={Mountains}
          alt="Mountains"
          heading="The Mountains"
          author="John Appleseed"
        />
        <StoryCard
          image={Cityscapes}
          alt="Cityscape"
          heading="Sunset Cityscapes"
          author="Benjamin Cruz"
        />
        <StoryCard
          image={Voyage}
          alt="Man walking at sunset"
          heading="18 Days Voyage"
          author="Alexei Borodin"
        />
        <StoryCard
          image={Architecturals}
          alt="Large building with many windows"
          heading="Architecturals"
          author="Samantha Brooke"
        />
      </ul>
      <Features />
    </>
  );
};

export default Home;
