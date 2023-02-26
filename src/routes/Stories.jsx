import FeaturedStoryCard from "../component/FeaturedStoryCard/FeaturedStoryCard";
import StoryCard from "../component/StoryCard/StoryCard";

import FeaturedImage from "../assets/stories/mobile/moon-of-appalacia.jpg";

import storyCards from "../storyCards.json";

const Stories = () => {
  return (
    <>
      <FeaturedStoryCard
        image={FeaturedImage}
        alt="Hazy mountains with full moon"
        heading="HAZY FULL MOON OF APPALACHIA"
        description='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        date="March 2nd 2020"
        author="John Appleseed"
      />
      <ul>
        {storyCards.map((story) => (
          <StoryCard
            image={story.image}
            date={story.date}
            alt={story.alt}
            heading={story.heading}
            author={story.author}
          />
        ))}
      </ul>
    </>
  );
};

export default Stories;
