import React, { useState, useRef } from "react";
import "./styles.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("nI-NKrj3OE4YecWjS");

    emailjs.sendForm("service_zmfyhzv", "template_ebob4qa", form.current).then(
      () => {
        toast.success("Email sent successfully!");
        console.log("Email is sent!!!");
        form.current.reset();
      },
      (error) => {
        toast.error("Failed to send email..");
        console.error("Email error:", error);
      }
    );
  };

  return (
    <div>
      <form
        className="contact-form textStyle shadow-xl"
        onSubmit={sendEmail}
        ref={form}
      >
        <div>
          <label className="text-left text-sm" htmlFor="user_name">
            Full Name
          </label>
          <input type="text" id="user_name" name="user_name" required />
        </div>
        <div>
          <label className="text-left text-sm" htmlFor="user_email">
            Your Email
          </label>
          <input type="email" id="user_email" name="user_email" required />
        </div>
        <div>
          <label className="text-left text-sm" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="min-h-[120px] border border-red-50"
            required
          />
        </div>
        <button className="text-lg font-normal" type="submit">
          Submit form
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
