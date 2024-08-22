import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function ReceptionInterior() {
  useEffect(() => {
    document.title = "Reception & Interior Signage Sunshine Coast";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Transform your office or building on the Sunshine Coast with reception and interior signage that can be tailored to your branding and colours. Call for a quote 0467 012 049."
      );
  }, []);

  //gallerySlide Urls
  const imageUrls = [
    "../images/ReceptionInterior/RIImg12.jpg",
    "../images/ReceptionInterior/RIImg9.jpg",
    "../images/ReceptionInterior/RIImg3.jpg",
    "../images/ReceptionInterior/RIImg13.jpg",
    "../images/ReceptionInterior/RIImg1.jpg",
    "../images/ReceptionInterior/RIImg10.jpg",
    "../images/ReceptionInterior/RIImg4.jpg",
    "../images/ReceptionInterior/RIImg11.jpg",
    "../images/ReceptionInterior/RIImg8.jpg",
    "../images/ReceptionInterior/RIImg6.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/ReceptionInterior/RIImg1.jpg",
    "../images/ReceptionInterior/RIImg3.jpg",
    "../images/ReceptionInterior/RIImg4.jpg",
    "../images/ReceptionInterior/RIImg6.jpg",
    "../images/ReceptionInterior/RIImg8.jpg",
    "../images/ReceptionInterior/RIImg9.jpg",
    "../images/ReceptionInterior/RIImg10.jpg",
    "../images/ReceptionInterior/RIImg11.jpg",
    "../images/ReceptionInterior/RIImg12.jpg",
    "../images/ReceptionInterior/RIImg13.jpg",
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
            title: "Reception & Interior",
            lastWord: "Signage",
            subheading:
              "Wall graphics / 3D lettering & Signs / Illuminated Signs & Lettering",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Reception signage that makes a lasting impression"
          secondPhrase="Impress customers with elegant signage"
          descriptionFirst="From elegant reception desk signs that convey professionalism to interior signs that guide visitors seamlessly through your office, shop or warehouse, we offer a range of customisable solutions."
          descriptionSecond="Our attention to detail ensures your brand identity is consistently reinforced throughout your space, leaving a lasting and positive impression on all customers and visitors."
          buttonLink="/structural-signage"
          buttonTitle="View our structural signage"
        ></ProductDetail>
      </section>

      <section>
        <Gallery images={galleryUrls} title="Reception & Interior Signage" />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default ReceptionInterior;
