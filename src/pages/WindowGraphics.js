import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function WindowGraphics() {
  useEffect(() => {
    document.title =
      "Window Signage & Window Frosting Sunshine Coast";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Looking to add some graphics or signage to your office windows or retail shop? That Sign Company offer a range of window frosting and window signage on the Sunshine Coast."
      );
  }, []);

  const imageUrls = [
    "../images/WindowGraphics/WGImg20.jpg",
    "../images/WindowGraphics/WGImg26.jpg",
    "../images/WindowGraphics/WGImg31.jpg",
    "../images/WindowGraphics/WGImg99.jpg",
    "../images/WindowGraphics/WGImg34.jpg",
    "../images/WindowGraphics/WGImg11.jpg",
    "../images/WindowGraphics/WGImg21.jpg",
    "../images/WindowGraphics/WGImg6.jpg",
    "../images/WindowGraphics/WGImg35.jpg",
    "../images/WindowGraphics/WGImg4.jpg",
  ];

  const galleryUrls = [
    "../images/WindowGraphics/WGImg1.jpg",
    "../images/WindowGraphics/WGImg2.jpg",
    "../images/WindowGraphics/WGImg25.jpg",
    "../images/WindowGraphics/WGImg26.jpg",
    "../images/WindowGraphics/WGImg3.jpg",
    "../images/WindowGraphics/WGImg4.jpg",
    "../images/WindowGraphics/WGImg21.jpg",
    "../images/WindowGraphics/WGImg22.jpg",
    "../images/WindowGraphics/WGImg17.jpg",
    "../images/WindowGraphics/WGImg18.jpg",
    "../images/WindowGraphics/WGImg23.jpg",
    "../images/WindowGraphics/WGImg19.jpg",
    "../images/WindowGraphics/WGImg11.jpg",
    "../images/WindowGraphics/WGImg12.jpg",
    "../images/WindowGraphics/WGImg28.jpg",
    "../images/WindowGraphics/WGImg24.jpg",
    "../images/WindowGraphics/WGImg6.jpg",
    "../images/WindowGraphics/WGImg16.jpg",
    "../images/WindowGraphics/WGImg29.jpg",
    "../images/WindowGraphics/WGImg30.jpg",
    "../images/WindowGraphics/WGImg31.jpg",
    "../images/WindowGraphics/WGImg99.jpg",
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
            title: "Window Signage & Window Frosting Sunshine",
            lastWord: "Coast",
            subheading:
              "Window Frosting / One Way Vision / Privacy Film / Printed Vinyl Graphics / Cut Vinyl Lettering",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Transform your windows"
          secondPhrase="Enhance your storefront"
          descriptionFirst="Our custom-designed window graphics add a touch of vibrancy and intrigue to your business. From eye-catching displays that promote your products or services to elegant window decals that convey your brand message, we offer a variety of creative solutions."
          descriptionSecond="Frosting and signage on your office windows or storefront not only grab the attention of potential customers driving by, but also help to showcase the services and products that your business offers."
          buttonLink="/vehicle-branding"
          buttonTitle="View our vehicle branding signage"
        ></ProductDetail>
      </section>

      <section>
        <Gallery
          images={galleryUrls}
          title="Window Frosting & Window Signage Gallery"
        />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default WindowGraphics;
