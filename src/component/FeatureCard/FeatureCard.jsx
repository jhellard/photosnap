const FeatureCard = ({ image, alt, heading, description }) => {
  return (
    <li className="flex flex-col items-center">
      <img className="mb-12" src={image} alt={alt} />
      <h4 className="mb-4 text-[18px] font-bold leading-[25px]">{heading}</h4>
      <p className="text-[15px] leading-[25px]">{description}</p>
    </li>
  );
};

export default FeatureCard;
