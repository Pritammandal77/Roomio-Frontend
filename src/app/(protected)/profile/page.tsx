"use client";

import { useAppSelector } from "@/lib/rtk/hooks";
import { getPreference } from "@/services/preference.api";
import { PreferenceData } from "@/types/preference";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  Pencil,
  LayoutDashboard,
  Banknote,
  BriefcaseBusiness,
  Laugh,
  Laptop,
  UtensilsCrossed,
  MoonStar,
  Sparkles,
  Cigarette,
  Wine,
  PawPrint,
  Users,
  BadgeCheck,
  SlidersHorizontal,
  ArrowRight,
  Mail,
  Phone,
  CalendarDays,
  Venus,
  ShieldCheck,
} from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [userPreference, setUserPreference] = useState<PreferenceData | null>(
    null,
  );
  const [isPreferenceAdded, setIsPreferenceAdded] = useState(false);
  const user = useAppSelector((state: any) => state.user.userData);

  useEffect(() => {
    const fetchPreference = async () => {
      try {
        const res = await getPreference();
        setUserPreference(res.data);
        if (res.data) setIsPreferenceAdded(true);
      } catch {
        toast.error("Failed to load preferences");
      }
    };
    fetchPreference();
  }, []);
 
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6fdf6]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-9 h-9 rounded-full border-[3px] border-green-400 border-t-transparent animate-spin" />
          <p className="text-sm text-gray-400">Loading your profile…</p>
        </div>
      </div>
    );
  } else {
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div
      className="min-h-screen bg-[#f4fbf4] pt-17"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ══════════════════════════════════
          COVER BANNER
      ══════════════════════════════════ */}
      <div className="relative h-40 sm:h-54 lg:h-52 w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-green-400 via-emerald-500 to-teal-500" />
        <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-white/10" />
        <div className="absolute top-8 left-1/3 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 right-10 w-48 h-48 rounded-full bg-white/10" />
        <div className="absolute top-4 right-1/4 w-20 h-20 rounded-full bg-emerald-300/30" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-linear(rgba(255,255,255,0.4) 1px, transparent 1px), linear-linear(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* action buttons on banner */}
        <div className="absolute top-5 right-5 flex gap-2">
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black text-xs font-semibold border border-white/30 transition-all"
          >
            <LayoutDashboard size={13} />
            Dashboard
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.4 }}
            onClick={() => router.push("/profile/edit")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm text-black text-xs font-semibold border border-white/30 transition-all"
          >
            <Pencil size={12} />
            Edit Profile
          </motion.button>
        </div>
      </div>

      {/* ══════════════════════════════════
          IDENTITY STRIP (avatar overlaps banner)
      ══════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-14 sm:-mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-5 border-b border-green-100">
          {/* avatar + name */}
          <div className="flex items-end gap-4">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative shrink-0"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl ring-4 ring-white overflow-hidden shadow-xl">
                <img
                  src={user.profilePicture}
                  alt={user.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center ring-2 ring-white shadow">
                <BadgeCheck size={14} className="text-white" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="pb-1"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight">
                {user.fullName}
              </h1>
              <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-1.5">
                <Mail size={13} className="text-green-500" />
                {user.email}
              </p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1.5">
                <CalendarDays size={11} className="text-green-400" />
                Joined {formatDate(user.createdAt)}
              </p>
            </motion.div>
          </div>

          {/* preferences CTA */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
            onClick={() => router.push("/preferences")}
            className="group flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 rounded-2xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <SlidersHorizontal size={15} />
            {isPreferenceAdded ? "Edit Preferences" : "Set Preferences"}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </motion.button>
        </div>

        {/* ══════════════════════════════════
            BODY GRID
        ══════════════════════════════════ */}
        <div className="mt-6 pb-20 grid lg:grid-cols-[300px_1fr] gap-6">
          {/* LEFT: info sidebar */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <InfoCard
                title="About"
                icon={<ShieldCheck size={15} className="text-green-600" />}
              >
                {user.gender && (
                  <InfoRow
                    icon={<Venus size={13} />}
                    label="Gender"
                    value={user.gender}
                  />
                )}
                {user.dob && (
                  <InfoRow
                    icon={<CalendarDays size={13} />}
                    label="Birthday"
                    value={formatDate(user.dob)}
                  />
                )}
                {user.email && (
                  <InfoRow
                    icon={<Mail size={13} />}
                    label="Email"
                    value={user.email}
                  />
                )}
                {
                  user.mobileNumber &&
                  <InfoRow
                  icon={<Phone size={13} />}
                  label="Mobile"
                  value={user.mobileNumber}
                />
                }
              </InfoCard>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.24,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-green-500 to-emerald-600 p-5 text-white shadow-lg">
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute bottom-2 left-2 w-12 h-12 rounded-full bg-white/10" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} />
                    <span className="text-sm font-bold">Roomio</span>
                  </div>
                  <p className="text-xs text-green-100 leading-relaxed">
                    Your preferences power smarter roommate matches. Keep them
                    updated for the best results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: preferences */}
          <div>
            <AnimatePresence mode="wait">
              {userPreference ? (
                <motion.div
                  key="prefs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-lg font-extrabold text-gray-800 tracking-tight">
                      Lifestyle & Preferences
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      Set
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <BigTile
                      delay={0.05}
                      icon={<Banknote size={28} />}
                      iconBg="bg-emerald-500"
                      label="Monthly Budget"
                      value={`₹${userPreference.budget.min} – ₹${userPreference.budget.max}`}
                      accent="from-emerald-50 to-green-50"
                      border="border-emerald-100"
                    />

                    <BigTile
                      delay={0.1}
                      icon={<BriefcaseBusiness size={28} />}
                      iconBg="bg-blue-500"
                      label="Occupation"
                      value={userPreference.occupation}
                      accent="from-blue-50 to-indigo-50"
                      border="border-blue-100"
                    />

                    <BigTile
                      delay={0.15}
                      icon={<Laugh size={28} />}
                      iconBg="bg-amber-500"
                      label="Personality"
                      value={userPreference.personality}
                      accent="from-amber-50 to-yellow-50"
                      border="border-amber-100"
                    />

                    {userPreference.workStyle && (
                      <BigTile
                        delay={0.2}
                        icon={<Laptop size={28} />}
                        iconBg="bg-violet-500"
                        label="Work Style"
                        value={userPreference.workStyle}
                        accent="from-violet-50 to-purple-50"
                        border="border-violet-100"
                      />
                    )}

                    <BigTile
                      delay={0.22}
                      icon={<UtensilsCrossed size={28} />}
                      iconBg="bg-orange-500"
                      label="Food"
                      value={userPreference.lifestyle.foodPreference}
                      accent="from-orange-50 to-red-50"
                      border="border-orange-100"
                    />

                    <BigTile
                      delay={0.26}
                      icon={<MoonStar size={28} />}
                      iconBg="bg-indigo-500"
                      label="Sleep Schedule"
                      value={userPreference.lifestyle.sleepSchedule}
                      accent="from-indigo-50 to-blue-50"
                      border="border-indigo-100"
                    />

                    {/* Cleanliness bar tile */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="col-span-2 md:col-span-1 relative overflow-hidden rounded-2xl border border-green-100 bg-linear-to-br from-green-50 to-teal-50 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
                    >
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/40" />
                      <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-md">
                        <Sparkles size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-2">
                          Cleanliness
                        </p>
                        <div className="flex gap-1.5">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <div
                              key={n}
                              className={`flex-1 h-2.5 rounded-full ${
                                n <= userPreference.lifestyle.cleanliness
                                  ? "bg-green-500"
                                  : "bg-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm font-bold text-gray-700 mt-1.5">
                          {
                            [
                              "",
                              "Messy",
                              "Below avg",
                              "Average",
                              "Clean",
                              "Very Clean",
                            ][userPreference.lifestyle.cleanliness]
                          }
                        </p>
                      </div>
                    </motion.div>

                    {/* Habits wide tile */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.35,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="col-span-2 relative overflow-hidden rounded-2xl border border-rose-100 bg-linear-to-br from-rose-50 to-pink-50 p-5 hover:shadow-md transition-shadow"
                    >
                      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">
                        Habits
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        <HabitChip
                          icon={<Cigarette size={14} />}
                          label={
                            userPreference.lifestyle.smoking
                              ? "Smoking OK"
                              : "No Smoking"
                          }
                          active={userPreference.lifestyle.smoking}
                        />
                        <HabitChip
                          icon={<Wine size={14} />}
                          label={
                            userPreference.lifestyle.drinking
                              ? "Drinking OK"
                              : "No Drinking"
                          }
                          active={userPreference.lifestyle.drinking}
                        />
                        <HabitChip
                          icon={<PawPrint size={14} />}
                          label={
                            userPreference.lifestyle.pets
                              ? "Pets OK"
                              : "No Pets"
                          }
                          active={userPreference.lifestyle.pets}
                        />
                      </div>
                    </motion.div>

                    <BigTile
                      delay={0.4}
                      icon={<Users size={28} />}
                      iconBg="bg-teal-500"
                      label="Preferred Gender"
                      value={userPreference.gender}
                      accent="from-teal-50 to-cyan-50"
                      border="border-teal-100"
                    />
                  </div>
                </motion.div>
              ) : (
                /* EMPTY STATE */
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-3xl border-2 border-dashed border-green-200 bg-white gap-6"
                >
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-green-100 to-emerald-200 flex items-center justify-center shadow-inner">
                      <SlidersHorizontal size={34} className="text-green-600" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow">
                      <span className="text-white text-[10px] font-black">
                        !
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                      No Preferences Yet
                    </h2>
                    <p className="text-sm text-gray-500 mt-2 max-w-sm leading-relaxed">
                      Share your lifestyle, habits, and living style to unlock
                      smarter, more compatible roommate matches on Roomio.
                    </p>
                  </div>
                  <button
                    onClick={() => router.push("/preferences")}
                    className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  >
                    <Sparkles size={16} />
                    Setup Preferences
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════ */

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white border border-green-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-500">
          {title}
        </h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-1">
      {/* Label section: Fixed width or shrink-0 prevents the email from squeezing it out */}
      <div className="flex items-center gap-1.5 text-gray-400 text-xs shrink-0">
        <span className="text-green-500 shrink-0">{icon}</span>
        <span>{label}</span>
      </div>
      
      {/* Value section: Fully visible, responsive wrapping */}
      <span className="text-xs font-bold text-gray-700 text-right break-all sm:break-word max-w-[60%]">
        {value}
      </span>
    </div>
  );
}

function BigTile({
  icon,
  iconBg,
  label,
  value,
  accent,
  border,
  delay,
}: {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  accent: string;
  border: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-2xl border ${border} bg-linear-to-br ${accent} p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
    >
      <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/40" />
      <div
        className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center text-white shadow-md shrink-0`}
      >
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-0.5">
          {label}
        </p>
        <p className="text-base font-bold text-gray-800 leading-snug">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

function HabitChip({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold border transition-all ${
        active
          ? "bg-green-600 text-white border-green-600 shadow-sm"
          : "bg-white text-gray-500 border-gray-200"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}












// old working , profile page code

// "use client";

// import { useAppSelector } from "@/lib/rtk/hooks";
// import { getPreference } from "@/services/preference.api";
// import { PreferenceData } from "@/types/preference";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import { motion } from "framer-motion";
// import { LucideBadgeQuestionMark } from "lucide-react";

// export default function Page() {
//   const router = useRouter();

//   const [userPreference, setUserPreference] = useState<PreferenceData | null>(
//     null,
//   );
//   const [isPreferenceAdded, setIsPreferenceAdded] = useState(false);

//   const user = useAppSelector((state: any) => state.user.userData);

//   useEffect(() => {
//     const fetchPreference = async () => {
//       try {
//         const res = await getPreference();
//         console.log("preferences", res.data);
//         setUserPreference(res.data);
//         if (res.data) setIsPreferenceAdded(true);
//       } catch (error) {
//         toast.error("Failed to load preferences");
//       }
//     };

//     fetchPreference();
//   }, []);

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500">Loading profile...</p>
//       </div>
//     );
//   }

//   const formatDate = (date: string) =>
//     new Date(date).toLocaleDateString("en-IN", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });

//   return (
//     <div className="min-h-screen pt-20 xl:pt-30 bg-linear-to-br from-green-100 via-[#c7f9c6] to-emerald-100 text-gray-800">
//       <div className="max-w-7xl mx-auto p-3 space-y-3 md:space-y-6 md:px-20">
//         {/* TOP PROFILE STRIP */}
//         <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
//           <div className="flex items-center gap-5">
//             <img
//               src={user.profilePicture}
//               className="w-20 h-20 rounded-full object-cover border-2 border-green-400"
//             />

//             <div>
//               <h1 className="text-2xl font-bold">{user.fullName}</h1>
//               <p className="text-sm text-gray-500">{user.email}</p>
//               <p className="text-xs text-gray-400 mt-1">
//                 Joined {formatDate(user.createdAt)}
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-3 w-full md:w-auto">
//             <div className="flex gap-4">
//               <button
//                 onClick={() => router.push("/dashboard")}
//                 className="w-[50%] md:w-auto px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition shadow"
//               >
//                 Dashboard
//               </button>

//               <button
//                 onClick={() => router.push("/profile/edit")}
//                 className="w-[50%] md:w-auto px-4 py-2 rounded-xl border border-green-500 text-green-600 hover:bg-green-50 transition"
//               >
//                 Edit Profile
//               </button>
//             </div>

//             <button
//               onClick={() => router.push("/preferences")}
//               className="w-full xl:hidden py-2 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 text-white font-semibold hover:scale-[1.02] transition shadow"
//             >
//               {isPreferenceAdded ? "Edit Preferences" : "Add Preferences"}
//             </button>
//           </div>
//         </div>

//         {/* MAIN LAYOUT */}
//         <div className="grid xl:grid-cols-4 gap-0 xl:gap-6">
//           {/* SIDEBAR */}
//           <div className="lg:col-span-3 xl:col-span-1 space-y-3 md:space-y-6">
//             <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 space-y-3 shadow-sm">
//               <h3 className="text-lg text-gray-700 font-semibold">
//                 Basic Info
//               </h3>
//               <Info label="Gender" value={user.gender} />
//               <Info label="DOB" value={formatDate(user.dob)} />
//             </div>

//             <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-5 space-y-3 shadow-sm">
//               <h3 className="text-lg text-gray-700 font-semibold">Contact</h3>
//               <Info label="Email" value={user.email} />
//               <Info label="Mobile" value={user.mobileNumber} />
//             </div>

//             <button
//               onClick={() => router.push("/preferences")}
//               className="hidden : xl:inline w-full py-2 rounded-xl bg-linear-to-r from-green-500 to-emerald-500 text-white font-semibold hover:scale-[1.02] transition shadow"
//             >
//               {isPreferenceAdded ? "Edit Preferences" : "Add Preferences"}
//             </button>
//           </div>

//           {/* MAIN CONTENT */}
//           <div className="lg:col-span-3 space-y-3 md:space-y-6">
//             {userPreference ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//               >
//                 <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm">
//                   <h2 className="text-xl font-semibold mb-6">
//                     Your Preferences
//                   </h2>

//                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                     <GlassCard title="Budget">
//                       ₹{userPreference.budget.min} - ₹
//                       {userPreference.budget.max}
//                     </GlassCard>

//                     <GlassCard title="Occupation">
//                       {userPreference.occupation}
//                     </GlassCard>

//                     <GlassCard title="Personality">
//                       {userPreference.personality}
//                     </GlassCard>

//                     {userPreference.workStyle && (
//                       <GlassCard title="Work Style">
//                         {userPreference.workStyle}
//                       </GlassCard>
//                     )}

//                     <GlassCard title="Food">
//                       {userPreference.lifestyle.foodPreference}
//                     </GlassCard>

//                     <GlassCard title="Sleep">
//                       {userPreference.lifestyle.sleepSchedule}
//                     </GlassCard>

//                     <GlassCard title="Cleanliness">
//                       <div className="flex gap-1 mt-1">
//                         {[1, 2, 3, 4, 5].map((n) => (
//                           <div
//                             key={n}
//                             className={`w-3 h-3 rounded-full ${
//                               n <= userPreference.lifestyle.cleanliness
//                                 ? "bg-green-500"
//                                 : "bg-gray-300"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     </GlassCard>

//                     <GlassCard title="Lifestyle">
//                       <div className="flex flex-wrap gap-2">
//                         {userPreference.lifestyle.smoking && (
//                           <Tag text="Smoking" />
//                         )}
//                         {userPreference.lifestyle.drinking && (
//                           <Tag text="Drinking" />
//                         )}
//                         {userPreference.lifestyle.pets && <Tag text="Pets" />}
//                       </div>
//                     </GlassCard>

//                     <GlassCard title="Preferred Gender">
//                       {userPreference.gender}
//                     </GlassCard>
//                   </div>
//                 </div>
//               </motion.div>
//             ) : (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-10 py-15 shadow-sm flex flex-col items-center justify-center text-center"
//               >
//                 {/* Icon */}
//                 <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
//                   <LucideBadgeQuestionMark size={28} />
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   No Preferences Added
//                 </h2>

//                 {/* Description */}
//                 <p className="text-gray-500 text-sm mt-2 max-w-md leading-relaxed">
//                   You haven’t set your preferences yet. Add your lifestyle and
//                   choices to get better matches.
//                 </p>

//                 {/* CTA */}
//                 <button
//                   onClick={() => router.push("/preferences")}
//                   className="mt-6 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium shadow-md hover:shadow-lg transition"
//                 >
//                   Setup Preferences
//                 </button>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* COMPONENTS */

// function Info({ label, value }: any) {
//   return (
//     <div className="flex justify-between text-sm">
//       <span className="text-gray-500">{label}</span>
//       <span className="font-medium text-gray-800">{value}</span>
//     </div>
//   );
// }

// function GlassCard({ title, children }: any) {
//   return (
//     <div className="bg-white/80 border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
//       <p className="text-xs text-gray-500 mb-1">{title}</p>
//       <div className="font-semibold text-[13px] md:text-[16px] text-gray-800">
//         {children}
//       </div>
//     </div>
//   );
// }

// function Tag({ text }: { text: string }) {
//   return (
//     <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
//       {text}
//     </span>
//   );
// }
