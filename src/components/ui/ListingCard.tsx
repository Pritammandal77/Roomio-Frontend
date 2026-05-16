// "use client";

// import { motion } from "framer-motion";
// import { MapPin, IndianRupee } from "lucide-react";
// import Link from "next/link";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// export default function ListingCard({ listing, id, index }: any) {
//   const { rent, location, pictures, amenities, matchPercentage, createdAt } =
//     listing;

//   dayjs.extend(relativeTime);
//   console.log(createdAt);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, delay: index * 0.08 }}
//       viewport={{ once: true }}
//       className="group rounded-3xl overflow-hidden bg-white min-w-90 xl:min-w-70 max-w-90 border border-gray-100 shadow-sm hover:shadow-xl transition"
//     >
//       {/* IMAGE */}
//       <div className="relative h-52 overflow-hidden">
//         <img
//           src={pictures?.[0]?.url}
//           alt="room"
//           className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
//         />

//         {/* ROOM TYPE BADGE */}
//         <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs px-3 py-1 rounded-full shadow">
//           {amenities?.roomType}
//         </div>

//         {matchPercentage && (
//           <div
//             className={`absolute top-3 right-3 ${matchPercentage > 50 ? "bg-green-600" : "bg-orange-400"}  text-white text-sm px-3 py-1 rounded-full shadow`}
//           >
//             {matchPercentage}% Match
//           </div>
//         )}
//       </div>

//       {/* CONTENT */}
//       <div className="p-5">
//         {/* TITLE */}
//         <h3
//           className="text-lg font-semibold text-gray-800 truncate"
//           title={`${amenities?.roomType} in ${location?.area}`}
//         >
//           {amenities?.roomType} in {location?.area}
//         </h3>

//         {/* LOCATION */}
//         <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
//           <MapPin size={16} />
//           {location?.city}
//         </div>

//         <div className="flex items-end justify-between mt-4">
//           {/* RENT */}
//           <p className="text-green-600 font-semibold flex items-center gap-1">
//             <IndianRupee size={16} />
//             {rent} / month
//           </p>

//           <p className="text-xs text-gray-500">{dayjs(createdAt).fromNow()}</p>
//         </div>

//         {listing.distanceInKm && (
//           <p className="text-xs text-green-600 font-medium">
//             📍 {listing.distanceInKm} km away
//           </p>
//         )}

//         {/* CTA */}
//         <Link href={`/listings/${id}`}>
//           <button className="mt-4 w-full py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
//             View Details
//           </button>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  IndianRupee,
  MoreVertical,
  Trash2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { deleteListing } from "@/services/rooms.api";
import { toast } from "sonner";

export default function ListingCard({ listing, id, index, onDelete }: any) {
  const { rent, location, pictures, amenities, matchPercentage, createdAt } =
    listing;
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isDashboard = pathname === "/dashboard";
  dayjs.extend(relativeTime);

  const handleDelete = async () => {
    // Call your delete function here
    try{
      const res = await deleteListing(id);
      console.log("Deleting listing:", res);
      toast.success("Listing deleted successfully")
      setShowDeleteModal(false);
      router.push("/")
      if (onDelete) onDelete(id);
    }catch{
      toast.error("Something went wrong, while deleting")
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        viewport={{ once: true }}
        className="group relative rounded-3xl overflow-hidden bg-white min-w-90 xl:min-w-70 max-w-90 border border-gray-100 shadow-sm hover:shadow-xl transition"
      >
        {/* 3-DOTS DROPDOWN */}
        {isDashboard && (
          <div className="absolute top-3 right-3 z-20">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1.5 cursor-pointer bg-white/80 backdrop-blur rounded-full shadow-md hover:bg-white transition text-gray-700"
            >
              <MoreVertical size={20} />
            </button>

            <AnimatePresence>
              {showMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowMenu(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="absolute right-0 mt-2 w-36 bg-white border border-gray-100 rounded-xl shadow-lg z-30 overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        setShowDeleteModal(true);
                        setShowMenu(false);
                      }}
                      className="flex items-center cursor-pointer gap-2 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* IMAGE SECTION */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={pictures?.[0]?.url}
            alt="room"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
          />
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs px-3 py-1 rounded-full shadow font-medium">
            {amenities?.roomType}
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {amenities?.roomType} in {location?.area}
          </h3>
          <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
            <MapPin size={16} />
            {location?.city}
          </div>
          <div className="flex items-end justify-between mt-4">
            <p className="text-green-600 font-semibold flex items-center gap-1">
              <IndianRupee size={16} />
              {rent} / month
            </p>
            <p className="text-xs text-gray-500">
              {dayjs(createdAt).fromNow()}
            </p>
          </div>
          <Link href={`/listings/${id}`}>
            <button className="mt-4 w-full py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </motion.div>

      {/* DELETE CONFIRMATION MODAL */}
      <AnimatePresence>
        {showDeleteModal && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Blurred Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDeleteModal(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full text-center"
            >
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={32} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Are you sure?</h2>
              <p className="text-gray-500 mt-2 text-sm">
                This action cannot be undone. This listing will be permanently
                removed from Roomio.
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="flex-1 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
