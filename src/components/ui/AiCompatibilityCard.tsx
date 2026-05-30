import React from "react";
import { Sparkles, Loader2, UserCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

interface AiCompatibilityCardProps {
  loading: boolean;
  reviewData: {
    hasPreferences: boolean;
    score?: number;
    review?: string;
    message?: string;
  } | null;
}

export default function AiCompatibilityCard({ loading, reviewData }: AiCompatibilityCardProps) {
  return (
    <div className="bg-linear-to-br from-indigo-50 via-white to-purple-50 p-6 rounded-2xl border border-indigo-100 shadow-xs">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 bg-green-600 text-white rounded-lg">
          <Sparkles size={16} />
        </div>
        <h2 className="font-bold text-md text-gray-800">Roomio AI Match Review</h2>
      </div>

      {loading ? (
        <div className="flex items-center gap-3 py-4 text-indigo-600">
          <Loader2 className="animate-spin" size={20} />
          <p className="text-sm font-medium text-gray-500">Analyzing lifestyle parameters...</p>
        </div>
      ) : reviewData ? (
        !reviewData.hasPreferences ? (
          /* Case 1: Preferences are missing */
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 text-sm">
            <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="font-medium">{reviewData.message}</p>
              <Link href="/preferences" className="text-indigo-600 hover:underline font-semibold block mt-1.5">
                Setup room preferences →
              </Link>
            </div>
          </div>
        ) : (
          /* Case 2: Success Review State */
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-black text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-xl border border-indigo-100">
                {reviewData.score}%
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Overall Vibe Match
              </p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {reviewData.review}
            </p>
          </div>
        )
      ) : (
        <p className="text-xs text-gray-400">Log in or activate profile parameters to see review metrics.</p>
      )}
    </div>
  );
}