import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ProductDetail from "../components/ProductDetail";
import GallerySlide from "../components/GallerySlide";
import Gallery from "../components/Gallery";
import FixedQuoteBtn from "../components/FixedQuoteBtn";

function TruckLining() {
  useEffect(() => {
    document.title =
      "Truck Lining & Scrolling Sunshine Coast | Truck & trailer signage";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Want to add a personalised touch to your truck or trailer? That Sign Company can design creative truck and trailer lining and scrolling, as well as vinyl graphics and signage. Call for a quote - 0467 012 049."
      );
  }, []);

  //gallerySlide Urls
  const imageUrls = [
    "../images/TruckLining/TLImg1.jpg",
    "../images/TruckLining/TLImg4.jpg",
    "../images/TruckLining/TLImg7.jpg",
    "../images/TruckLining/TLImg2.jpg",
    "../images/TruckLining/TLImg10.jpg",
    "../images/TruckLining/TLImg6.jpg",
    "../images/TruckLining/TLImg3.jpg",
    "../images/TruckLining/TLImg9.jpg",
    "../images/TruckLining/TLImg8.jpg",
    "../images/TruckLining/TLImg5.jpg",
  ];

  //gallery stills urls
  const galleryUrls = [
    "../images/TruckLining/TLImg1.jpg",
    "../images/TruckLining/TLImg2.jpg",
    "../images/TruckLining/TLImg3.jpg",
    "../images/TruckLining/TLImg4.jpg",
    "../images/TruckLining/TLImg5.jpg",
    "../images/TruckLining/TLImg6.jpg",
    "../images/TruckLining/TLImg7.jpg",
    "../images/TruckLining/TLImg8.jpg",
    "../images/TruckLining/TLImg9.jpg",
    "../images/TruckLining/TLImg10.jpg",
    "../images/TruckLining/TLImg11.jpg",
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
            title: "Truck Lining & Scrolling Sunshine",
            lastWord: "Coast",
            subheading:
              "Truck & Trailer Lining & Scrolling / Printed Vinyl Graphics / Cut Vinyl Lettering",
          }}
        />
      </section>

      <section>
        <GallerySlide images={imageUrls} />
      </section>

      <section>
        <ProductDetail
          firstPhrase="Truck & trailer signage"
          secondPhrase="Signage for your fleet of transport"
          descriptionFirst="Specialising in truck lining and scrolling, your transport fleet will become mobile works of art that capture attention wherever they go. Our custom designs provide a sleek and modern way to showcase your business and transport services."
          descriptionSecond="Add your own style and branding to your truck or trailer, or have a design created that will capture the attention of customers on the Sunshine Coast and throughout Australia."
          buttonLink="/building-shopface"
          buttonTitle="View our building and shopface signage"
        ></ProductDetail>
      </section>

      <section>
        <Gallery
          images={galleryUrls}
          title="Truck Lining & Scrolling Gallery"
        />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}

export default TruckLining;
