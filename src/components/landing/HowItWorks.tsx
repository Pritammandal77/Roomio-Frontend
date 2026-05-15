"use client";

import { useAppSelector } from "@/lib/rtk/hooks";
import { motion } from "framer-motion";
import { Home, Search, MessageCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "List Your Space",
    description:
      "Add your flat, room, or PG with rent, facilities, and your preferred housemate lifestyle.",
    icon: Home,
  },
  {
    title: "Discover & Apply",
    description:
      "Browse listings, filter by preferences, and apply to places that match your vibe.",
    icon: Search,
  },
  {
    title: "Connect & Move In",
    description:
      "Chat or call, review profiles, and finalize your stay with the right people.",
    icon: MessageCircle,
  },
];

// Animation Variants for reusability and smoothness
const fadeInUp = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: false, amount: 0.2 }, // amount: 0.2 means it triggers when 20% of the element is visible
  transition: { type: "spring", stiffness: 100, damping: 20 },
};

export default function HowItWorks() {
  const user = useAppSelector((state) => state.user.userData);

  return (
    <section
      className="w-full py-24 bg-linear-to-b from-white to-green-50 px-6 relative overflow-hidden"
      id="working"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-green-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            mass: 1,
          }}
          className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
        >
          How It <span className="text-green-600">Works</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98], // Custom Bezier for a "gentle" float-in
          }}
          className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Find your perfect housemate or list your space in a few simple steps.
        </motion.p>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-green-200 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  initial: { opacity: 0, y: 50 },
                  whileInView: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      delay: index * 0.15, // Staggered effect
                    },
                  },
                }}
                className="relative group"
              >
                {/* Glass Card */}
                <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  {/* Icon with a subtle pulse animation on hover */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-linear-to-br from-green-500 to-green-400 text-white shadow-md"
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold shadow-md">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-semibold text-gray-800">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ type: "spring", delay: 0.4 }}
          className="mt-16 transition flex justify-center"
        >
          {user ? (
            <div className="flex gap-4 flex-wrap">
              <Link href="/listings/all">
                <button className="px-8 py-3 text-lg cursor-pointer rounded-2xl bg-green-600 text-white font-medium shadow-md hover:bg-green-700 transition-colors">
                  Explore
                </button>
              </Link>
            </div>
          ) : (
            <Link
              href="/signup"
              className="px-8 py-3 text-lg cursor-pointer rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors font-medium shadow-md"
            >
              Get Started
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
