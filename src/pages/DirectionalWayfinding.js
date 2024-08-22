import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function DirectionalWayfinding() {
  useEffect(() => {
    document.title =
      "Directional & Wayfinding Signs Sunshine Coast | That Sign Company";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Help your customers, clients or visitors find your business or organisation with directional signage, or navigate your location with wayfinding signs. Call That Sign Company 0467 012 049 for a quote."
      );
  }, []);

  const imageUrls = [
    "../images/DirectionalWayfinding/DWImg9.jpg",
    "../images/DirectionalWayfinding/DWImg21.jpg",
    "../images/DirectionalWayfinding/DWImg23.jpg",
    "../images/DirectionalWayfinding/DWImg10.jpg",
    "../images/DirectionalWayfinding/DWImg15.jpg",
    "../images/DirectionalWayfinding/DWImg12.jpg",
    "../images/DirectionalWayfinding/DWImg22.jpg",
    "../images/DirectionalWayfinding/DWImg19.jpg",
    "../images/DirectionalWayfinding/DWImg2.jpg",
    "../images/DirectionalWayfinding/DWImg5.jpg",
  ];

  const galleryUrls = [
    "../images/DirectionalWayfinding/DWImg2.jpg",
    "../images/DirectionalWayfinding/DWImg5.jpg",
    "../images/DirectionalWayfinding/DWImg8.jpg",
    "../images/DirectionalWayfinding/DWImg21.jpg",
    "../images/DirectionalWayfinding/DWImg22.jpg",
    "../images/DirectionalWayfinding/DWImg9.jpg",
    "../images/DirectionalWayfinding/DWImg10.jpg",
    "../images/DirectionalWayfinding/DWImg11.jpg",
    "../images/DirectionalWayfinding/DWImg3.jpg",
    "../images/DirectionalWayfinding/DWImg4.jpg",
    "../images/DirectionalWayfinding/DWImg16.jpg",
    "../images/DirectionalWayfinding/DWImg12.jpg",
    "../images/DirectionalWayfinding/DWImg6.jpg",
    "../images/DirectionalWayfinding/DWImg13.jpg",
    "../images/DirectionalWayfinding/DWImg14.jpg",
    "../images/DirectionalWayfinding/DWImg17.jpg",
    "../images/DirectionalWayfinding/DWImg18.jpg",
    "../images/DirectionalWayfinding/DWImg19.jpg",
    "../images/DirectionalWayfinding/DWImg15.jpg",
    "../images/DirectionalWayfinding/DWImg23.jpg",
    "../images/DirectionalWayfinding/DWImg99.jpg",
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
            title: "Directional and Wayfinding Signs Sunshine",
            lastWord: "Coast",
            subheading: "Directional Pylons / Wayfinding Signage",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Help your customers find you"
          secondPhrase="Easy to follow directional signage for your business or organisaion"
          descriptionFirst="Our directional and wayfinding signs offer clear and concise guidance. Whether on a sprawling university or school campus, a busy hospital or public venue, our directional signs ensure customers or visitors can find their way quickly and easily."
          descriptionSecond="For a more comprehensive understanding of your surroundings, our wayfinding signs map out routes and highlight key landmarks."
          buttonLink="/window-graphics"
          buttonTitle="View our window graphics & display signage"
        ></ProductDetail>
      </section>

      <section>
        <Gallery
          images={galleryUrls}
          title="Directional & Wayfinding Signage Gallery"
        />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default DirectionalWayfinding;
