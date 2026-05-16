"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  MessageCircle,
  Zap,
  SlidersHorizontal,
  IndianRupee,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="text-4xl md:text-6xl font-bold text-gray-900"
          >
            Why Choose <span className="text-green-600">Roomio</span>?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Everything you need to find the perfect housemate — faster, safer,
            and smarter.
          </motion.p>
        </div>

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT BIG CARD - Slide in from Left with Scale */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ 
              type: "spring", 
              stiffness: 40, 
              damping: 15,
              mass: 1.2
            }}
            className="p-10 rounded-3xl bg-linear-to-br from-green-500 to-green-400 text-white shadow-xl relative overflow-hidden group"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Users size={28} />
            </div>

            <h3 className="text-2xl font-bold">Smart Lifestyle Matching</h3>

            <p className="mt-4 text-green-50/90 leading-relaxed">
              Don’t live with random people. Match with housemates based on
              habits, routine, cleanliness, and vibe — so you actually enjoy
              living together.
            </p>
          </motion.div>

          {/* RIGHT FEATURES LIST - Staggered Slide from Right */}
          <div className="space-y-6">
            <Feature icon={IndianRupee} title="Zero Brokerage" index={0} />
            <Feature icon={ShieldCheck} title="Verified Profiles" index={1} />
            <Feature icon={MessageCircle} title="Direct Chat & Call" index={2} />
          </div>
        </div>

        {/* BOTTOM GRID - Pop in from Bottom */}
        <div className="hidden xl:grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <MiniCard icon={SlidersHorizontal} title="Smart Filters" index={0} />
          <MiniCard icon={Zap} title="Quick Process" index={1} />
          <MiniCard icon={Users} title="Community Driven" index={2} />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, index }: { icon: any; title: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      whileHover={{ x: 10, backgroundColor: "rgba(240, 253, 244, 0.5)" }}
      className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
        <Icon size={24} />
      </div>
      <p className="text-gray-800 text-sm">{title}</p>
    </motion.div>
  );
}

function MiniCard({ icon: Icon, title, index }: { icon: any; title: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ 
        delay: index * 0.15, 
        type: "spring", 
        stiffness: 80, 
        damping: 15 
      }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
      }}
      className="p-6 rounded-3xl border border-gray-100 bg-white shadow-xs transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-50 text-green-600 mb-4">
        <Icon size={24} />
      </div>
      <p className="text-gray-900 text-sm">{title}</p>
    </motion.div>
  );
}