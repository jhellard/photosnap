const TableEntry = ({ heading, basic, pro, business }) => {
  return (
    <>
      <tr>
        <th colSpan="3">{heading}</th>
      </tr>
      <tr className="w-full">
        <td>Basic</td>
        <td>Pro</td>
        <td>Business</td>
      </tr>
      <tr>
        <td>{basic && <span>&#x2713;</span>}</td>
        <td>{pro && <span>&#x2713;</span>}</td>
        <td>{business && <span>&#x2713;</span>}</td>
      </tr>
      <tr>
        <td colSpan="3">
          <hr />
        </td>
      </tr>
    </>
  );
};

const PricingTable = () => {
  return (
    <section className="mx-[30px]">
      <table className="w-full text-left">
        <thead className="mb-[23px]">
          <tr colSpan="3" className="border-b-[2px] border-b-pureBlack">
            <th colSpan="3">The Features</th>
          </tr>
        </thead>
        <tbody className="min-w-full">
          <TableEntry heading="UNLIMITED STORY POSTING" basic pro business />
          <TableEntry heading="UNLIMITED PHOTO UPLOAD" basic pro business />
          <TableEntry heading="EMBEDDING CUSTOM CONTENT" pro business />
          <TableEntry heading="CUSTOMIZE METADATA" pro business />
          <TableEntry heading="ADVANCED METRICS" business />
          <TableEntry heading="PHOTO DOWNLOADS" business />
          <TableEntry heading="SEARCH ENGINE INDEXING" business />
          <TableEntry heading="CUSTOM ANALYTICS" business />
        </tbody>
      </table>
    </section>
  );
};

export default PricingTable;
