import Hero from "./Hero";
import Hero2 from "./Hero2";
import BestSellProduct from "./BestSellproduct";
import Shipping from "./Shipping";
import CostomerReview from "./CustomerReview";
import Instagram from "./Instagram";
const MainHomePage = () => {
  const design = (
    <>
      <div>
        <Hero />
        <Hero2 />
        <BestSellProduct />
        <Shipping />
        <CostomerReview />
        <Instagram />
      </div>
    </>
  );
  return design;
};
export default MainHomePage;
