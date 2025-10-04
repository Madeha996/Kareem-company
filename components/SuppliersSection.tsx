"use client";

import * as motion from "motion/react-client";
import { Badge } from "./ui/badge";

const suppliers = [
  {
    name: "Fertilizer Supplier",
    icon: "<svg fill='currentColor' viewBox='0 0 24 24'><path d='M12 2L2 7l10 5 10-5-10-5zm0 6v12' /></svg>",
    count: 12,
    gradient: "bg-gradient-to-br from-[#00c000] to-[#70ff70]", // Green gradient
  },
  {
    name: "Agricultural Consulting",
    icon: "<svg fill='currentColor' viewBox='0 0 24 24'><path d='M12 2l6 6-6 6-6-6 6-6zm0 8v10' /></svg>",
    count: 8,
    gradient: "bg-gradient-to-br from-[#ff990a] to-[#ffc580]", // Orange gradient
  },
  {
    name: "Smart Irrigation Systems",
    icon: "<svg fill='currentColor' viewBox='0 0 24 24'><path d='M4 4h16v16H4z' /></svg>",
    count: 5,
    gradient: "bg-gradient-to-br from-[#00c000] to-[#70ff70]", // Green gradient
  },
  {
    name: "Soil Analysis",
    icon: "<svg fill='currentColor' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' /></svg>",
    count: 9,
    gradient: "bg-gradient-to-br from-[#ff990a] to-[#ffc580]", // Orange gradient
  },
];

export default function SuppliersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Suppliers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our trusted suppliers who ensure the highest quality products
            for sustainable agriculture.
          </p>
        </motion.div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {suppliers.map((supplier, index) => (
            <motion.div
              key={supplier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`group cursor-pointer rounded-xl p-6 text-center ${supplier.gradient} 
                           hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50`}
              >
                {/* Icon */}
                <div
                  dangerouslySetInnerHTML={{ __html: supplier.icon }}
                  className="w-12 h-12 mx-auto text-white mb-4 group-hover:scale-110 transition-transform duration-300"
                ></div>

                {/* Supplier Name */}
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                  {supplier.name}
                </h3>

                {/* Posts Badge */}
                <Badge
                  variant="outline"
                  className="text-xs text-white border-white/50"
                >
                  {supplier.count} posts
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
