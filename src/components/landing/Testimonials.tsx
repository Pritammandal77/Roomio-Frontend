"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: "Seeker" | "Lister";
  rating: number;
  review: string;
  img: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aman Verma",
    role: "Seeker",
    rating: 5,
    review: "Found my perfect flatmate within 2 days. Super smooth experience!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    role: "Lister",
    rating: 4,
    review: "Listing rooms is so easy. Got multiple genuine requests instantly.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Karan Mehta",
    role: "Seeker",
    rating: 5,
    review: "Filters are insane. Found exactly what I needed in my budget.",
    img: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Lister",
    rating: 5,
    review: "Best platform for genuine users. No spam at all.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Rahul Singh",
    role: "Seeker",
    rating: 4,
    review: "UI is super clean and easy to use. Loved the experience.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    id: 6,
    name: "Priya Nair",
    role: "Lister",
    rating: 5,
    review: "Got a perfect tenant within 24 hours. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 7,
    name: "Arjun Patel",
    role: "Seeker",
    rating: 5,
    review: "Way better than other apps. Everything feels premium.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 8,
    name: "Sneha Iyer",
    role: "Lister",
    rating: 4,
    review: "Loved the verification system. Feels safe and reliable.",
    img: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 9,
    name: "Vikram Desai",
    role: "Seeker",
    rating: 5,
    review: "Found a flat near my office easily. Saved a lot of time!",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: 10,
    name: "Ananya Gupta",
    role: "Lister",
    rating: 5,
    review: "Roomio made listing and managing tenants super simple.",
    img: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: 11,
    name: "Aditya Joshi",
    role: "Seeker",
    rating: 5,
    review: "Moving to a new city was scary, but I found a great flatmate who shares the same food preferences. The profile tags are a lifesaver!",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 12,
    name: "Meera Reddy",
    role: "Lister",
    rating: 4,
    review: "The horizontal scroll format for listings makes it so easy to look through profiles quickly. Got a great response on my 2BHK list.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    id: 13,
    name: "Rohan Das",
    role: "Seeker",
    rating: 5,
    review: "No broker intervention, no random extra charges. Just direct connection with people who actually want to share a space.",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 14,
    name: "Kriti Malhotra",
    role: "Lister",
    rating: 5,
    review: "As a working professional, I didn't want random people calling me all day. The in-app chat let me filter out serious seekers first.",
    img: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    id: 15,
    name: "Devendra Choudhury",
    role: "Seeker",
    rating: 4,
    review: "Found a room walking distance from my office in Hitech City. Budget was tight, but splitting it made it totally affordable.",
    img: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    id: 16,
    name: "Shalini Saxena",
    role: "Lister",
    rating: 5,
    review: "I was looking for a specific kind of roommate who respects privacy and cleanliness. Roomioo's lifestyle filters worked like a charm.",
    img: "https://randomuser.me/api/portraits/women/82.jpg",
  },
  {
    id: 17,
    name: "Pranav Rao",
    role: "Seeker",
    rating: 5,
    review: "Highly interactive platform. Found guys from my own university to rent a 3BHK together. Saved us massive brokerage.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 18,
    name: "Tanvi Bhatia",
    role: "Lister",
    rating: 4,
    review: "Super clean dashboard. I could easily toggle my room listing status to 'Filled' once I found a flatmate so I didn't get extra spams.",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 19,
    name: "Siddharth Mishra",
    role: "Seeker",
    rating: 5,
    review: "The maps feature and area-specific filters are top-notch. Found a room exactly where I wanted in less than a week.",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: 20,
    name: "Ishita Dutta",
    role: "Seeker",
    rating: 5,
    review: "Very smooth verification process. It gives you peace of mind knowing that the profiles you are chatting with are genuine.",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 21,
    name: "Varun Hegde",
    role: "Lister",
    rating: 4,
    review: "Got my flat filled up in Bangalore's peak rush season without talking to a single broker. Absolutely love the design paradigm.",
    img: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    id: 22,
    name: "Anjali Pillai",
    role: "Seeker",
    rating: 5,
    review: "The UI layout makes it highly scannable. I found a flatmate who matches my sleep cycle and habits perfectly. Incredible app!",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    id: 23,
    name: "Manish Sharma",
    role: "Seeker",
    rating: 5,
    review: "Best experience so far. The responsiveness of the platform on both desktop and mobile layouts is brilliant.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    id: 24,
    name: "Deepika Joshi",
    role: "Lister",
    rating: 4,
    review: "Extremely useful platform for house owners and existing flatmates alike. Finding a replacement tenant didn't feel like a chore.",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: 25,
    name: "Abhishek Nair",
    role: "Seeker",
    rating: 5,
    review: "Found an absolute gem of a place and a great group of guys to live with. 10/10 would use Roomioo again if I move cities.",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-yellow-400 text-sm">
      {"★".repeat(rating)}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="min-w-80 max-w-80 bg-white border border-green-100 p-5 rounded-2xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={t.img}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-green-600 font-medium">{t.role}</p>
        </div>
      </div>

      <StarRating rating={t.rating} />

      <p className="text-sm text-gray-600 mt-3 leading-relaxed">{t.review}</p>
    </div>
  );
}

function MarqueeRow({ direction = "left" }: { direction?: "left" | "right" }) {
  const [isPaused, setIsPaused] = useState(false);

  // triple copy for seamless loop
  const loopData = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: 70,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {loopData.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-green-100 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          What People Say About Roomio
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Real experiences from seekers & listers
        </p>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-6">
        <MarqueeRow direction="right" />
        <MarqueeRow direction="left" />
      </div>
    </section>
  );
}
