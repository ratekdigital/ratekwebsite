"use client";

import { FormEvent, useState } from "react";
import "./contact-modal.css";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div
      className="contact-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>

        <span className="contact-modal-eyebrow">LET'S CONNECT</span>

        <h2 id="contact-modal-title">Tell us about your project.</h2>

        <p className="contact-modal-description">
          Have an idea or need a technology partner? Send us a message and we'll
          get back to you.
        </p>

        {status === "success" ? (
          <div className="contact-success">
            <strong>Message sent.</strong>

            <p>
              Thanks for reaching out to Ratek Digital. We'll get back to you
              shortly.
            </p>

            <button
              type="button"
              className="contact-form-submit"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Full name</label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
              disabled={isSending}
            />

            <label htmlFor="contact-email">Email address</label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@company.com"
              required
              disabled={isSending}
            />

            <label htmlFor="contact-message">How can we help?</label>

            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us a little about your project..."
              rows={5}
              required
              disabled={isSending}
            />

            {status === "error" && (
              <p className="contact-form-error">
                We couldn't send your message. Please try again or email us
                directly at hello@ratekdigital.com.
              </p>
            )}

            <button
              type="submit"
              className="contact-form-submit"
              disabled={isSending}
            >
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  Send message <span aria-hidden="true">↗</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// "use client";

// import { FormEvent } from "react";
// import "./contact-modal.css";

// type ContactModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   if (!isOpen) return null;

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     // Add your form submission logic here.
//     // For example: send the form data to your backend or API.
//   }

//   return (
//     <div
//       className="contact-modal-overlay"
//       role="presentation"
//       onMouseDown={(event) => {
//         if (event.target === event.currentTarget) {
//           onClose();
//         }
//       }}
//     >
//       <div
//         className="contact-modal"
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="contact-modal-title"
//       >
//         <button
//           type="button"
//           className="contact-modal-close"
//           onClick={onClose}
//           aria-label="Close contact form"
//         >
//           ×
//         </button>

//         <span className="contact-modal-eyebrow">LET'S CONNECT</span>

//         <h2 id="contact-modal-title">Tell us about your project.</h2>

//         <p className="contact-modal-description">
//           Have an idea or need a technology partner? Send us a message and we'll
//           get back to you.
//         </p>

//         <form className="contact-form" onSubmit={handleSubmit}>
//           <label htmlFor="contact-name">Full name</label>
//           <input
//             id="contact-name"
//             name="name"
//             type="text"
//             placeholder="Your full name"
//             required
//           />

//           <label htmlFor="contact-email">Email address</label>
//           <input
//             id="contact-email"
//             name="email"
//             type="email"
//             placeholder="you@company.com"
//             required
//           />

//           <label htmlFor="contact-message">How can we help?</label>
//           <textarea
//             id="contact-message"
//             name="message"
//             placeholder="Tell us a little about your project..."
//             rows={5}
//             required
//           />

//           <button type="submit" className="contact-form-submit">
//             Send message <span aria-hidden="true">↗</span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
