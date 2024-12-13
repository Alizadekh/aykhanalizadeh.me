import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import style from "../style/Contact.module.css";
import smsIcon from "../assets/decorations/sms.svg";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("xbljevor");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(event).then(() => {
      setIsFormSubmitted(true);
    });
  };

  return (
    <section id="contact" className={style.contactSection}>
      <div className={style.contactContent}>
        <h2>
          Have an Awesome Project Idea? <span>Let’s Discuss</span>
        </h2>
        {isFormSubmitted ? (
          <p className={style.successMessage}>
            Thank you! I'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className={style.form}>
            <div>
              <img src={smsIcon} alt="Email Icon" />
            </div>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              title="input"
              className={style.input}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button
              type="submit"
              title="button"
              disabled={state.submitting}
              className={style.button}
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
