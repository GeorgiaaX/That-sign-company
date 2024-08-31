import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CustomFooter from "../components/CustomFooter";
import ProductsSlide from "../components/ProductsSlide";
import ProductsServices from "../components/ProductsServices";
import FixedQuoteBtn from "../components/FixedQuoteBtn";
import About from "../components/About";

export default function Home() {
  useEffect(() => {
    document.title = "That Sign Company | Signs Sunshine Coast | Signage Sunshine Coast";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "That Sign Company offers building signs, vehicle signs, 3D illuminated signs, reception signage and much more. Get a quote for signage for your business in the Sunshine Coast"
      );
  }, []);

  const productsServicesRef = useRef(null);
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <section>
        <FixedQuoteBtn />
      </section>
      <section>
        <Hero
          isHomePage={true}
          heading={{
            title: "Elevate your brand on the Sunshine Coast",
            // lastWord: "Brand",
            body: "Want your business to stand out with eye-catching, bold signage? That Sign Company offer the perfect blend of local expertise and global standards to deliver you with a range of high-quality signs to increase your visibility within the Sunshine Coast region.",
          }}
        />
      </section>

      <section>
        <ProductsSlide />
      </section>

      <section>
        <About isAboutSection={true} targetRef={productsServicesRef} />
      </section>

      <section ref={productsServicesRef}>
        <ProductsServices />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}
