"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const CopyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
  </svg>
);

const CheckIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const SendIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

const email = "mruduladhondalay@gmail.com";
const phone = "+1 437-667-6043";

export default function ContactPageContent() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    // If any errors, don't submit
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <Container className="py-10 lg:py-12" size="narrow">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 lg:mb-10"
      >
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
          Contact
        </h1>
        <p className="text-lg md:text-xl text-muted font-light">
          Available for hire in Canada. Open to opportunities.
        </p>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60"
      >
        <div className="space-y-8">
          {/* Email */}
          <div>
            <div className="text-xs uppercase tracking-wider text-muted/70 mb-3 font-medium">
              Email
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={`mailto:${email}`}
                className="text-xl md:text-2xl font-medium hover:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {email}
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-2 border border-border/60 hover:border-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
              >
                {copied ? (
                  <>
                    {CheckIcon}
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    {CopyIcon}
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="text-xs uppercase tracking-wider text-muted/70 mb-3 font-medium">
              Phone
            </div>
            <a
              href={`tel:${phone}`}
              className="text-xl md:text-2xl font-medium hover:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
            >
              {phone}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-8">
          Send a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-foreground transition-colors font-light ${
                errors.name ? "border-red-500" : "border-border/60"
              }`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="contact-email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-foreground transition-colors font-light ${
                errors.email ? "border-red-500" : "border-border/60"
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {!formData.email.trim() ? "Email is required" : "Please enter a valid email"}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={6}
              className={`w-full px-4 py-3 border bg-transparent focus:outline-none focus:border-foreground transition-colors resize-none font-light ${
                errors.message ? "border-red-500" : "border-border/60"
              }`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1">Message is required</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" variant="primary" icon={SendIcon} className="w-full">
            Send Message
          </Button>

          <p className="text-xs text-muted/70 font-light text-center">
            This will open your email client with a pre-filled message.
          </p>
        </form>
      </motion.div>
    </Container>
  );
}
