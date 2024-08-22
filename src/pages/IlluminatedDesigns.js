import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function IlluminatedDesigns() {
  useEffect(() => {
    document.title = "3D Illuminated Letters & Display Signage Sunshine Coast";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Light up your Sunshine Coast business with 3D illuminated letters and signs. Available in a range of sizes and colours, we can design signage to grab the attention of your customers."
      );
  }, []);

  //gallerySlide Urls
  const imageUrls = [
    "../images/IlluminatedDesigns/IDImg12.jpg",
    "../images/IlluminatedDesigns/IDImg21.jpg",
    "../images/IlluminatedDesigns/IDImg9.jpg",
    "../images/IlluminatedDesigns/IDImg19.jpg",
    "../images/IlluminatedDesigns/IDImg16.jpg",
    "../images/IlluminatedDesigns/IDImg11.jpg",
    "../images/IlluminatedDesigns/IDImg18.jpg",
    "../images/IlluminatedDesigns/IDImg10.jpg",
    "../images/IlluminatedDesigns/IDImg6.jpg",
    "../images/IlluminatedDesigns/IDImg15.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/IlluminatedDesigns/IDImg12.jpg",
    "../images/IlluminatedDesigns/IDImg15.jpg",
    "../images/IlluminatedDesigns/IDImg7.jpg",
    "../images/IlluminatedDesigns/IDImg21.jpg",
    "../images/IlluminatedDesigns/IDImg8.jpg",
    "../images/IlluminatedDesigns/IDImg9.jpg",
    "../images/IlluminatedDesigns/IDImg18.jpg",
    "../images/IlluminatedDesigns/IDImg11.jpg",
    "../images/IlluminatedDesigns/IDImg23.jpg",
    "../images/IlluminatedDesigns/IDImg13.jpg",
    "../images/IlluminatedDesigns/IDImg10.jpg",
    "../images/IlluminatedDesigns/IDImg16.jpg",
    "../images/IlluminatedDesigns/IDImg17.jpg",
    "../images/IlluminatedDesigns/IDImg19.jpg",
    "../images/IlluminatedDesigns/IDImg20.jpg",
    "../images/IlluminatedDesigns/IDImg6.jpg",
    "../images/IlluminatedDesigns/IDImg22.jpg",
    "../images/IlluminatedDesigns/IDImg14.jpg",
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
            title: "3D Illuminated Letters & Display",
            lastWord: "Signage",
            subheading: "Fabricated Letters / Lightboxes / 3D Signage",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Illuminate your brand in the Sunshine Coast region"
          secondPhrase="Put your business up in lights"
          descriptionFirst="These striking illuminated signs light up your business and brand, day or night. Our customisable 3D letters are designed to showcase your brand's personality, with a variety of colours, styles and sizes available to suit your business and location."
          descriptionSecond="From sleek sophistication to eye-catching vibrancy, our 3D illuminated letters and display signage add a touch of elegance and professionalism to your business, leaving a lasting impression on customers."
          buttonLink="/reception-interior"
          buttonTitle="View our reception and interior signage"
        ></ProductDetail>
      </section>

      <section>
        <Gallery images={galleryUrls} title="3D Illuminated Signage Gallery" />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default IlluminatedDesigns;
