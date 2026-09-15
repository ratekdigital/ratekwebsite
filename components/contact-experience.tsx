"use client";

import { useState } from "react";

import { Footer } from "./Footer";
import { ContactModal } from "./contact-modal";

export function ContactExperience() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  function openContactModal() {
    setIsContactOpen(true);
  }

  function closeContactModal() {
    setIsContactOpen(false);
  }

  return (
    <>
      <Footer onContactClick={openContactModal} />

      <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />
    </>
  );
}
