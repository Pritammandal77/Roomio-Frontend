import { Ban, DoorClosed } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-green-100 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* bg decorations */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-green-200 opacity-40" />
      <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-green-300 opacity-30" />

      {/* logo */}
      <div className="flex items-center gap-2 mb-8 z-10">
        <span className="text-4xl md:text-5xl font-bold text-green-600 tracking-tight">
          Roomio
        </span>
      </div>

      {/* card */}
      <div className="bg-white rounded-3xl border border-green-100 p-10 max-w-md w-full text-center z-10">
        {/* 404 illustration */}
        <div className="flex items-center justify-center mb-6">
          <span className="text-8xl font-bold text-green-600 tracking-tighter leading-none">
            4
          </span>
          <div className="w-20 h-20 bg-green-50 rounded-2xl border-2 border-green-200 flex items-center justify-center mx-3">
            <span className="text-4xl text-green-600">
              <Ban size={45} />
            </span>
          </div>
          <span className="text-8xl font-bold text-green-600 tracking-tighter leading-none">
            4
          </span>
        </div>

        {/* badge */}
        <span className="inline-block bg-green-50 text-green-700 text-sm font-medium border border-green-200 rounded-full px-4 py-1 mb-4">
          Page not found
        </span>

        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Oops! Wrong door
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-7">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-xl py-3 px-6 w-full mb-3 transition-colors"
        >
          Back to Home
        </Link>

        <Link
          href="/listings/all"
          className="flex items-center justify-center gap-2 bg-white hover:bg-green-50 text-green-600 text-sm font-medium border border-green-300 rounded-xl py-3 px-6 w-full transition-colors"
        >
          Browse Listings
        </Link>

        <div className="flex items-center justify-center gap-6 mt-5 pt-5 border-t border-green-50">
          <Link
            href="/contact"
            className="text-xs text-gray-400 hover:text-green-600 transition-colors"
          >
            Contact us
          </Link>
          <Link
            href="/about"
            className="text-xs text-gray-400 hover:text-green-600 transition-colors"
          >
            About Roomio
          </Link>
        </div>
      </div>
    </div>
  );
}
