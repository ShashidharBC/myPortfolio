import React from "react";
import "./styles.css";
import ContactForm from "../ContactForm/ContactForm";
import LINKEDIN from "../../assests/linkedin.png";
import GITHUB_ICON from "../../assests/github.png";
import MAIL_ICON from "../../assests/mail.png";
import TWITTER_ICON from "../../assests/twitter.png";

const Contact = () => {
  const renderSocialsContainer = () => {
    return (
      <div className="contact-socials-box">
        <img
          src={LINKEDIN}
          alt="linked-icon"
          className="hover:cursor-pointer hover:opacity-40"
          width={30}
          height={30}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shashidhara-b-challamarada-656117218/",
              "_blank",
            )
          }
        />
        <img
          src={GITHUB_ICON}
          alt="github-icon"
          className="hover:cursor-pointer hover:opacity-40"
          width={30}
          height={30}
          onClick={() =>
            window.open("https://github.com/ShashidharBC", "_blank")
          }
        />
        <img
          src={MAIL_ICON}
          alt="mail-icon"
          className="hover:cursor-pointer hover:opacity-40"
          width={30}
          height={30}
          onClick={() =>
            (window.location.href = "mailto:shashidharbc.1dt17is079@gmail.com")
          }
        />
        <img
          src={TWITTER_ICON}
          alt="twitter-icon"
          className="hover:cursor-pointer hover:opacity-40"
          width={30}
          height={30}
          onClick={() => window.open("https://x.com/BChallamarada", "_blank")}
        />
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-10 pb-[4%]">
      <div className="flex flex-col textStyle gap-2">
        <span className="text-md">Get In Touch</span>
        <span className="contact-heading text-5xl font-semibold text-[#3c5b6f]">
          Contact Me
        </span>
      </div>
      {renderSocialsContainer()}
      <div className="textStyle flex flex-col rounded-xl gap-2">
        <span className="text-md">Or</span>
        <span className="contact-heading text-5xl font-semibold text-[#3c5b6f]">
          Message Me
        </span>
      </div>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
