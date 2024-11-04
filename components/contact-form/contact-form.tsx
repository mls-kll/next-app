"use client";

import { useForm, ValidationError } from "@formspree/react";
import styles from "./contact-form.module.scss";
import { Button } from "react-bootstrap";

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("xdkoeepp");
  if (state.succeeded) {
    return <div>Thank you for your message</div>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.contactFormRoot}>
      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        name="name"
        id="full-name"
        placeholder="First and Last"
        required
        control-id="ControlID-2"
      />
      <ValidationError field="full-name" prefix="Name" errors={state.errors} />

      <label htmlFor="email-address">Email Address</label>
      <input
        type="email"
        name="_replyto"
        id="email-address"
        placeholder="email@domain.tld"
        required
        control-id="ControlID-3"
      />
      <ValidationError
        field="email-address"
        prefix="Email"
        errors={state.errors}
      />
      <label htmlFor="message">Message</label>
      <textarea
        rows={5}
        name="message"
        id="message"
        placeholder="Your message"
        required
        control-id="ControlID-4"
      />
      <ValidationError field="message" prefix="Message" errors={state.errors} />

      <Button
        className={styles.submitButton}
        variant="primary"
        size="sm"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
    </form>
  );
};
