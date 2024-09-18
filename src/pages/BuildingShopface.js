import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function BuildingShopface() {
  useEffect(() => {
    document.title =
      "Building Signs Sunshine Coast | Store front & Shop face signage";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Elevate the visibility of your business on the Sunshine Coast with our expertly crafted building signs. From storefront signage to pylons, we can customise signage uniquely to your business."
      );
  }, []);

  const imageUrls = [
    "../images/BuildingShopface/BSImg45.jpg",
    "../images/BuildingShopface/BSImg98.jpg",
    "../images/BuildingShopface/BSImg46.jpg",
    "../images/BuildingShopface/BSImg21.jpg",
    "../images/BuildingShopface/BSImg22.jpg",
    "../images/BuildingShopface/BSImg7.jpg",
    "../images/BuildingShopface/BSImg23.jpg",
    "../images/BuildingShopface/BSImg9.jpg",
    "../images/BuildingShopface/BSImg10.jpg",
  ];

  const galleryUrls = [
    "../images/BuildingShopface/BSImg7.jpg",
    "../images/BuildingShopface/BSImg9.jpg",
    "../images/BuildingShopface/BSImg10.jpg",
    "../images/BuildingShopface/BSImg21.jpg",
    "../images/BuildingShopface/BSImg22.jpg",
    "../images/BuildingShopface/BSImg23.jpg",
    "../images/BuildingShopface/BSImg30.jpg",
    "../images/BuildingShopface/BSImg99.jpg",
    "../images/BuildingShopface/BSImg98.jpg",
    "../images/BuildingShopface/BSImg97.jpg",
    "../images/BuildingShopface/BSImg40.jpg",
    "../images/BuildingShopface/BSImg41.jpg",
    "../images/BuildingShopface/BSImg42.jpg",
    "../images/BuildingShopface/BSImg43.jpg",
    "../images/BuildingShopface/BSImg44.jpg",
    "../images/BuildingShopface/BSImg45.jpg",
    "../images/BuildingShopface/BSImg46.jpg",
  ];

  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <FixedQuoteBtn />
      </section>

      <section>
        <Header
          isGenericPage={true}
          isContactPage={false}
          heading={{
            title: "Building & Shopface",
            lastWord: "Signs",
            subheading: "Building signage for your Sunshine Coast business",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Elevate the curb appeal of your business"
          secondPhrase="Make a lasting impression"
          descriptionFirst="We specialise in creating eye-catching and professional signage solutions that reflect your brand's identity and capture the attention of passersby and potential customers."
          descriptionSecond="Whether you're looking to enhance your storefront's visibility, promote your business, or create a unique aesthetic, our customised signs are designed to meet your specific needs."
          buttonLink="/illuminated-designs"
          buttonTitle="View our 3D Illuminated Signs"
        ></ProductDetail>
      </section>

      <section>
        <Gallery images={galleryUrls} title="Building Signage Gallery" />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default BuildingShopface;
