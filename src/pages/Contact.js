import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import Header from "../components/Header";
import CustomFooter from "../components/CustomFooter";
import ContactDetails from "../components/ContactDetails";
import Form from "../components/Form";

export default function Contact() {
  useEffect(() => {
    document.title =
      "Contact That Sign Company | Your local sign experts in Sunshine Coast";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Get in touch with our expert sign writers who can help your business stand out with quality signage for your building, office, retail store or vehicle. Contact us today - 0467 012 049."
      );
  }, []);

  const [, forceUpdate] = React.useState();

  React.useEffect(() => {
    forceUpdate({});
  }, []);

  const contactFormRef = React.createRef();

  return (
    <div>
      <header>
        <NavBar />
      </header>

      <section>
        <Header
          isGenericPage={false}
          isContactPage={true}
          heading={{
            title: "Contact That Sign",
            lastWord: "Company",
            subheading:
              "Get in touch for expert signage advice for your Sunshine Coast business",
          }}
          contactFormRef={contactFormRef}
        />
      </section>

      <section>
        <ContactDetails />
      </section>

      <section>
        <Form ref={contactFormRef} />
      </section>

      <section>
        <CustomFooter />
      </section>
    </div>
  );
}
