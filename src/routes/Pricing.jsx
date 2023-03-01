import { useState } from "react";

import InfoCard from "../component/InfoCard";

import Hero from "../assets/pricing/mobile/hero.jpg";
import BetaCard from "../component/BetaCard";
import PlanCard from "../component/PlanCard";
import PricingTable from "../component/PricingTable";

const Pricing = () => {
  // Sim
  const [planToggle, setPlanToggle] = useState(true);

  return (
    <>
      <InfoCard
        image={Hero}
        alt="Person taking photos at sunset"
        headingType="h1"
        heading="PRICING"
        bgColor="bgBlack"
        textColor="textWhite"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        line
      />
      <section className="pt-16">
        <div className="mb-12 flex items-center justify-center gap-8">
          <span>Monthly</span>
          <div className="flex">
            <input
              type="checkbox"
              id="switch"
              onClick={() => setPlanToggle(!planToggle)}
            />
            <label htmlFor="switch">Toggle</label>
          </div>
          <span>Yearly</span>
        </div>

        <ul className="mb-16 flex flex-col gap-6">
          <PlanCard
            heading="Basic"
            description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={planToggle ? "$19.00" : "$190.00"}
            type="normal"
          />

          <PlanCard
            heading="Pro"
            description="More advanced features available. Recommended for photography veterans and professionals."
            price={planToggle ? "$39.00" : "$390.00"}
            type="pro"
          />

          <PlanCard
            heading="Business"
            description="Additional features available such as more detailed metrics.
          Recommended for business owners."
            price={planToggle ? "$99.00" : "$990.00"}
            type="normal"
          />
        </ul>
        <PricingTable />
      </section>
      <BetaCard />
    </>
  );
};

export default Pricing;
