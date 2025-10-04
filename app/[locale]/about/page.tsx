"use client";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <main className=" min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-4 relative z-10"
          >
            {["about1.jpeg", "hero1.jpeg", "about3.jpeg", "about4.jpeg"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="overflow-hidden w-70 h-70 border-primary"
                  style={{ borderRadius: "20px" }}
                >
                  <Image
                    src={`/${src}`}
                    alt={`Hero image ${index + 1}`}
                    className="w-full h-full object-cover shadow-lg border-2 border-primary hover:border-secondary"
                    width={200}
                    height={200}
                  />
                </motion.div>
              )
            )}
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center lg:text-left"
          >
            {/* Decorative leaf pattern */}
            <motion.img
              src="/leaf-pattern.svg"
              alt=""
              className="absolute right-0 top-0 w-48 opacity-10 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Title */}
            <h2 className="text-primary text-3xl md:text-5xl font-serif relative inline-block mb-4">
              Who We Are?
              <span className="absolute left-0 top-12 w-full h-1 bg-primary rounded-full"></span>
            </h2>

            {/* Subtitle */}
            <h4 className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl">
              Leading the future of global agriculture
            </h4>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              We are committed to developing sustainable agricultural solutions
              that enrich the soil and nurture life from seed to harvest. Our
              team works hand-in-hand with farmers and partners to grow a
              greener future.
            </p>

            {/* Vision and Mission */}
            <div className="space-y-4 mb-10 max-w-2xl mx-auto lg:mx-0">
              {/* Vision and Mission as Cards */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                {/* Vision Card */}
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-gradient-to-br from-primary/5 to-secondary/10 p-6 rounded-2xl shadow-sm hover:shadow-md border border-primary/10 transition-all duration-300"
                >
                  <h5 className="text-orange-300 font-semibold text-xl mb-2">
                    Our Vision
                  </h5>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To lead the transformation of agriculture through
                    innovation, sustainability, and care for future generations.
                  </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-gradient-to-br from-primary/5 to-secondary/10 p-6 rounded-2xl shadow-sm hover:shadow-md border border-primary/10 transition-all duration-300"
                >
                  <h5 className="text-orange-300 font-semibold text-xl mb-2">
                    Our Mission
                  </h5>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To provide farmers with reliable, eco-friendly fertilizer
                    solutions that enhance productivity while preserving nature.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Company Values */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10"
            >
              <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-primary text-4xl mb-2">🌿</span>
                <p className="font-semibold">Sustainability</p>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-primary text-4xl mb-2">💡</span>
                <p className="font-semibold">Innovation</p>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="text-primary text-4xl mb-2">👥</span>
                <p className="font-semibold">Community</p>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button size="lg" className="group">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
