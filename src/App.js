import React, { useState } from "react";
import "./App.scss";
import brochure from "./assets/brochure.webp";
import social from "./assets/social-media.webp";
import website from "./assets/internet.webp";
import contact from "./assets/communicate.webp";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { TfiFacebook } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const App = () => {
  const [data, setData] = useState({
    social: false,
    websites: false,
    contact: true,
    brochure: false,
  });

  const openWithIndex = (key) => {
    setData((index) => ({
      ...index,
      social: false,
      websites: false,
      contact: false,
      brochure: false,
      [key]: true,
    }));
  };

  const saveContact = () => {
    // vCard content
    const vCardData = `
    BEGIN:VCARD
    VERSION:3.0
    FN:DIwise
    ORG:DIwise
    TITLE:DIwise
    TEL:+918482936866
    EMAIL:contact@diwiseglobal.com
    URL:https://www.diwiseglobal.com/
    URL:https://www.diwise.in/
    URL:https://diwise.uk/
    END:VCARD`;

    // Create a Blob for the vCard file
    const blob = new Blob([vCardData], { type: "text/vcard" });

    // Create a link element
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "DIwise.vcf"; // vCard file name
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    document.body.removeChild(link);
  };

  return (
    <>
      <div class="card_parent">
        <div class="card">
          <div class="top_section">
            <div class="profile">
              <h4>DIwise Global Management Consultant</h4>

              <div class="btn" onClick={saveContact}>
                Save Contact
              </div>
            </div>
          </div>
          <div class="bottom_section">
            <div class="tabs">
              <div
                class={data.social ? "active icon " : "icon"}
                onClick={() => openWithIndex("social")}
              >
                <img src={social} alt="" />
                <p>Social</p>
              </div>
              <div
                class={data.websites ? "active icon " : "icon"}
                onClick={() => openWithIndex("websites")}
              >
                <img src={website} alt="" />
                <p>Website</p>
              </div>
              <div
                class={data.brochure ? "active icon " : "icon"}
                onClick={() => openWithIndex("brochure")}
              >
                <img src={brochure} alt="" />
                <p>Brochure</p>
              </div>
              <div
                class={data.contact ? "active icon " : "icon"}
                onClick={() => openWithIndex("contact")}
              >
                <img src={contact} alt="" />
                <p>Contact</p>
              </div>
            </div>

            <div class="content">
              {data.social && (
                <div class="social_medi">
                  <div class="insta cont">
                    <div class="icon">
                      <FaInstagram />
                    </div>
                    <a
                      href="https://www.instagram.com/diwiseltd/"
                      target="blank"
                    >
                      diwiseltd
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <TfiFacebook />
                    </div>
                    <a href="https://www.facebook.com/DIwiseLtd" target="blank">
                      DIwise
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <FaLinkedinIn />
                    </div>
                    <a
                      href="https://www.linkedin.com/company/diwiseltd/"
                      target="blank"
                    >
                      DIwise
                    </a>
                  </div>

                  <div class="insta cont">
                    <div class="icon">
                      <FaXTwitter />
                    </div>
                    <a href="https://x.com/MarwahaPrajakta?mx=2" target="blank">
                      DIwise
                    </a>
                  </div>
                </div>
              )}
              {data.websites && (
                <div class="social_medi">
                  <div class="insta cont">
                    <div class="icon">
                      <TfiWorld />
                    </div>
                    <a href="https://www.diwiseglobal.com/" target="blank">
                      diwiseglobal.com
                    </a>
                  </div>
                </div>
              )}
              {data.brochure && (
                <div class="social_medi">
                  <div class="insta cont">
                    <div class="icon">
                      <TfiWorld />
                    </div>
                    <a href="https://www.diwiseglobal.com/" target="blank">
                      diwiseglobal.com
                    </a>
                  </div>
                </div>
              )}
              {data.contact && (
                <div class="social_medi">
                  <div class="insta cont">
                    <div class="icon">
                      <IoCall />
                    </div>
                    <a href="tel:+918482936866" target="blank">
                      +91 8482936866
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <IoCall />
                    </div>
                    <a href="tel:+971508060418" target="blank">
                      +971-50-8060418
                    </a>
                  </div>
                  <div class="insta cont">
                    <div class="icon">
                      <IoCall />
                    </div>
                    <a href="tel:+447398814161" target="blank">
                      +44 7398 814161
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
