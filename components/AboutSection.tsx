"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

export default function AboutSection() {
  const img = { src: "/hero1.jpeg", radius: "90px 20px" };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-16 ">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="max-w-7xl w-full shadow-xl bg-primary-foreground rounded-2xl"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-4xl font-bold text-center text-primary mb-10 pt-8"
        >
          About Our Company
        </motion.h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 pb-10">
          {/* Left: Image */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="overflow-hidden w-full h-[350px] md:h-[450px]"
          >
            <Image
              src={img.src}
              alt="About section image"
              className="w-full h-full object-cover hover:border-secondary shadow-lg"
              style={{ borderRadius: img.radius }}
              width={500}
              height={500}
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            variants={item}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to innovation, sustainability, and excellence in
              everything we do. Our mission is to shape the future by providing
              top-notch services and solutions that empower communities and
              businesses worldwide.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
