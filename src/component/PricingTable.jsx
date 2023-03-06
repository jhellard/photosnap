import Check from "../assets/shared/desktop/check.svg";

const TableEntry = ({ heading, basic, pro, business }) => {
  return (
    <li className="border-b-[1px]">
      <h4 className="mb-4 text-[12px] font-bold tracking-[2px] text-pureBlack">
        {heading}
      </h4>
      <div className="flex pb-[24px] text-[10px] font-bold tracking-[1.67px] text-pureBlack">
        <div className="mr-[68px] flex flex-col gap-2">
          <span className="opacity-50">BASIC</span>
          <span>{basic && <img src={Check} alt="Checkmark" />}</span>
        </div>
        <div className="mr-[82px] flex flex-col gap-2">
          <span className="opacity-50">PRO</span>
          <span>{pro && <img src={Check} alt="Checkmark" />}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="opacity-50">BUSINESS</span>
          <span>{business && <img src={Check} alt="Checkmark" />}</span>
        </div>
      </div>
    </li>
  );
};

const PricingTable = () => {
  return (
    <ul className="mx-[30px] mb-16 flex flex-col gap-[23px]">
      <h3 className="text-[12px] font-bold tracking-[2px] text-pureBlack">
        THE FEATURES
      </h3>
      <hr className="border-pureBlack" />
      <TableEntry heading="UNLIMITED STORY POSTING" basic pro business />
      <TableEntry heading="UNLIMITED PHOTO UPLOAD" basic pro business />
      <TableEntry heading="EMBEDDING CUSTOM CONTENT" pro business />
      <TableEntry heading="CUSTOMIZE METADATA" pro business />
      <TableEntry heading="ADVANCED METRICS" business />
      <TableEntry heading="PHOTO DOWNLOADS" business />
      <TableEntry heading="SEARCH ENGINE INDEXING" business />
      <TableEntry heading="CUSTOM ANALYTICS" business />
    </ul>
  );
};

export default PricingTable;
