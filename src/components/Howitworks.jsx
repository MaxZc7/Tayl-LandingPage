import InfoCard from '../recourse/InfoCard';
import brandOPUX from '../assets/data-visualization.jpg';
import iconOptimization from '../assets/optimization-icon.jpg';
import colabVisual from '../assets/colaborations-visualization-lg.jpg';
import marketIcon from '../assets/market-icon.jpg';
import marketVisual from '../assets/market-visualization.jpg';
import colabIcon from '../assets/colaborations-icon.jpg';

function Howitworks() {
  return (
    <div className=" w-full mt-3 " id="HowWorks">
      <div className="flex md:flex-row flex-col gap-10 text-center justify-between max-w-[1450px] mx-auto">
        <div className="">
          <h3 className="text-5xl  font-bold text-slate-700 uppercase">
            No results
          </h3>
          <h3 className="text-5xl gradient-txt mt-3 font-bold uppercase">
            No pay
          </h3>
        </div>
        <div className="text-xl text-slate-600">
          <p>
            <strong className="text-slate-700">W</strong>elcome to our safety
            and guarantee of results section! At our company.
          </p>
          <p>
            <strong className="text-slate-700">W</strong>e pride ourselves on
            providing a reliable and secure service to improve your sales.
          </p>
          <p>
            <strong className="text-slate-700">W</strong>e value the trust you
            place in us and we are committed to guaranteeing tangible results.
          </p>
          <p className="text-slate-500 font-light text-lg">
            x3 w like what you can do on your sales with us
          </p>
        </div>
      </div>
      <div className="mt-20 md:hover:translate-x-0 md:-translate-x-36 duration-300 ">
        <InfoCard
          title="Brand Optimization"
          description="We do a exhaustive analysis to find and improve the deficiencys on your brand "
          image={brandOPUX}
          icon={iconOptimization}
        ></InfoCard>
      </div>
      <div className="mt-14 ">
        <InfoCard
          title="Check And Paint Numbers"
          description='"Paint the new brand" and make new collaborations , contancts, opening to the market'
          image={colabVisual}
          icon={marketIcon}
        ></InfoCard>
      </div>
      <div className="mt-14 md:hover:translate-x-0 md:-translate-x-36 duration-300 ">
        <InfoCard
          title="Best Revenues"
          description="Calculate prices and costs to get the best quality/price level of your product/service for maximize sales"
          image={marketVisual}
          icon={colabIcon}
        ></InfoCard>
      </div>
    </div>
  );
}

export default Howitworks;
