"use client";

import * as motion from "motion/react-client";
import { Button } from "./ui/button";

export default function ContactSection() {
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Left: Contact Form */}
        <motion.div
          variants={item}
          className="p-8 sm:p-12 flex flex-col justify-center bg-primary/5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center lg:text-left">
            Contact Us
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg text-center lg:text-left">
            Have questions? Wed love to hear from you. Fill out the form and our
            team will get back to you shortly.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              placeholder="Your Message"
              className="border border-border rounded-xl p-4 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <Button size="lg" className="mt-2 self-center lg:self-start">
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          variants={item}
          className="p-8 sm:p-12 flex flex-col justify-center bg-primary/20 text-center lg:text-left"
        >
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <p className="mb-4">
            <span className="font-semibold">Address:</span> 123 Agriculture
            Road, City, Country
          </p>
          <p className="mb-4">
            <span className="font-semibold">Phone:</span> +123 456 7890
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email:</span> contact@kareemco.com
          </p>

          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="text-primary hover:text-secondary transition"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-primary hover:text-secondary transition"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-primary hover:text-secondary transition"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
