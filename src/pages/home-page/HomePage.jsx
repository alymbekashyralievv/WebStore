import Category from "../../components/category/Category";
import HeroSection from "../../components/hero/HeroSection";
import Install from "../../components/install-app/Install";
import NewProducts from "../../components/new-products/NewProducts";
import { useRef } from "react";
const HomePage = () => {
  const categoryRef = useRef(null);
  const scrollToCategories = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <HeroSection scrollToCategories={scrollToCategories} />
      <div ref={categoryRef}>
        <Category />
      </div>
      <Install />
      {/* <NewProducts /> */}
    </div>
  );
};

export default HomePage;
