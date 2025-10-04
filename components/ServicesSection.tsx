"use client";

import * as motion from "motion/react-client";
import Image from "next/image";

const services = [
  {
    title: "Fertilizer Supply",
    description:
      "Providing high-quality, eco-friendly fertilizers designed to boost soil health and agricultural productivity.",
    icon: "/file.svg",
  },
  {
    title: "Agricultural Consulting",
    description:
      "Expert guidance on modern farming techniques, crop management, and sustainability strategies.",
    icon: "/file.svg",
  },
  {
    title: "Smart Irrigation Systems",
    description:
      "Innovative irrigation solutions to optimize water usage and improve crop yield efficiently.",
    icon: "/file.svg",
  },
  {
    title: "Soil Analysis",
    description:
      "Comprehensive soil testing and data-driven insights to ensure the best fertilizer and crop choices.",
    icon: "/file.svg",
  },
];

export default function ServicesSection() {
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-primary-foreground flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          show: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-7xl w-full"
      >
        {/* Section Title */}
        <motion.h2
          variants={item}
          className="text-4xl font-bold text-center text-foreground mb-14"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-8 bg-white border border-primary rounded-[20px_90px] shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={60}
                height={60}
                className="mb-6"
              />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
