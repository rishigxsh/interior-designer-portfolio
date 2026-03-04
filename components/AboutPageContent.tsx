"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const DownloadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

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

const capabilities = [
  "Residential Interiors",
  "Space Planning",
  "3D Visualization",
  "Furniture & Finishes",
  "Concept Development",
  "Technical Drawings",
];

const software = ["AutoCAD", "SketchUp", "3ds Max"];

const email = "mruduladhondalay@gmail.com";
const phone = "+1 437-667-6043";

export default function AboutPageContent() {
  const [resumeExists, setResumeExists] = useState(false);
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => setResumeExists(res.ok))
      .catch(() => setResumeExists(false));
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
          About
        </h1>
      </motion.div>

      {/* Background Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-6">
          Background
        </h2>

        <div className="space-y-4 text-base md:text-lg text-muted font-light leading-relaxed">
          <p>
            I&apos;m a Design consultant with over three years of experience shaping residential spaces from concept to on-site execution. My work is grounded in thoughtful space planning, clear technical documentation, and designs that translate seamlessly from drawings to real spaces.
          </p>
          <p>
            Having contributed to more than 60 residential projects, I focus on creating functional, well-resolved interiors through strong AutoCAD detailing, coordination with project teams, and an execution-first approach. Currently based in Toronto, I&apos;m building my career within the Canadian design industry and looking to collaborate with studios that value clarity, practicality, and well-designed spaces.
          </p>

          {/* LinkedIn Link */}
          <div className="pt-4">
            <a
              href="https://www.linkedin.com/in/mrudula-dhondalay-3415a71b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Connect on LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Capabilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-8">
          Capabilities
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <Badge variant="default" className="w-full justify-center py-3">
                {capability}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Software Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-6">
          Software
        </h2>

        <div className="flex flex-wrap gap-3">
          {software.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <span className="text-muted font-light">
                {tool}
                {index < software.length - 1 && <span className="mx-2">•</span>}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-12 lg:mb-16 text-center pb-8 lg:pb-10 border-b border-border/60"
      >
        {resumeExists ? (
          <Button
            href="/resume.pdf"
            variant="primary"
            icon={DownloadIcon}
            className="inline-flex"
          >
            Download Resume
          </Button>
        ) : (
          <div className="space-y-3">
            <Button
              variant="ghost"
              disabled
              icon={DownloadIcon}
              className="inline-flex"
            >
              Resume Not Available
            </Button>
          </div>
        )}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mb-8 lg:mb-10"
      >
        <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-3">
          Contact
        </h2>
        <p className="text-base md:text-lg text-muted font-light mb-8 lg:mb-10">
          Available for hire in Canada. Open to opportunities.
        </p>

        {/* Contact Information */}
        <div className="space-y-8 mb-8 lg:mb-10 pb-8 lg:pb-10 border-b border-border/60">
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-8">
            Send a Message
          </h3>

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
            <Button
              type="submit"
              variant="primary"
              icon={SendIcon}
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 text-green-800 text-sm font-light rounded"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm font-light rounded"
              >
                Failed to send message. Please try again or email me directly at{" "}
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </Container>
  );
}
