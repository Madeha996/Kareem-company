"use client";

import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { Button } from "./ui/button";

export default function AboutSection() {
  return (
    <section className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-6xl bg-primary/10 rounded-3xl py-12 md:py-16 px-6 sm:px-8 text-center flex flex-col items-center gap-8"
      >
        {/* Description Text */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          We are driven by a passion for innovation and sustainability. Our
          mission is to empower communities and businesses by providing smart,
          forward-thinking solutions that make a lasting impact on the world
          around us.
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button size="lg" className="group">
            Read About Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
