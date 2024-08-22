import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function RetailPOS() {
  useEffect(() => {
    document.title =
      "Retail Point of Sale Signs Sunshine Coast | A frame signs, banners, flags, counter signs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Looking to capture the attention of your customers when they visit your shop, office or business premises? We create, a frame signs, pull up banners, stickers, counter signs and much more"
      );
  }, []);

  //gallerySlide Urls
  const imageUrls = [
    "../images/RetailPOS/POSImg1.jpg",
    "../images/RetailPOS/POSImg12.jpg",
    "../images/RetailPOS/POSImg3.jpg",
    "../images/RetailPOS/POSImg9.jpg",
    "../images/RetailPOS/POSImg14.jpg",
    "../images/RetailPOS/POSImg13.jpg",
    "../images/RetailPOS/POSImg10.jpg",
    "../images/RetailPOS/POSImg2.jpg",
    "../images/RetailPOS/POSImg5.jpg",
    "../images/RetailPOS/POSImg16.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/RetailPOS/POSImg1.jpg",
    "../images/RetailPOS/POSImg2.jpg",
    "../images/RetailPOS/POSImg7.jpg",
    "../images/RetailPOS/POSImg4.jpg",
    "../images/RetailPOS/POSImg5.jpg",
    "../images/RetailPOS/POSImg10.jpg",
    "../images/RetailPOS/POSImg11.jpg",
    "../images/RetailPOS/POSImg8.jpg",
    "../images/RetailPOS/POSImg9.jpg",
    "../images/RetailPOS/POSImg3.jpg",
    "../images/RetailPOS/POSImg13.jpg",
    "../images/RetailPOS/POSImg12.jpg",
    "../images/RetailPOS/POSImg16.jpg",
    "../images/RetailPOS/POSImg6.jpg",
    "../images/RetailPOS/POSImg14.jpg",
    "../images/RetailPOS/POSImg15.jpg",
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
            title: "Retail Point of Sale Signs Sunshine",
            lastWord: "Coast",
            subheading:
              "A Frames / Pull Up Banners / Stickers / Shop Hoardings / Banners / Flags / Counter Signs",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Elevate your retail space"
          secondPhrase="Boost your sales"
          descriptionFirst="These eye-catching displays are strategically positioned to captivate shoppers' attention and influence their purchasing decisions. From enticing product promotions to showcasing your products or services, our custom-designed signs enhance the overall shopping experience for your customers."
          descriptionSecond="With a focus on clarity and aesthetics, our POS signage adds a professional touch to your retail store, office or workshop, helping you to maximise sales and keep your customers engaged."
          buttonLink="/truck-lining"
          buttonTitle="View our truck lining & scrolling signage"
        ></ProductDetail>
      </section>

      <section>
        <Gallery images={galleryUrls} title="Retail POS Gallery" />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default RetailPOS;
