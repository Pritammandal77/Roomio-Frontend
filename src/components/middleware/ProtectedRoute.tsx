"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { RootState } from "@/lib/rtk/store";
import { toast } from "sonner";
import RoomiooLoader from "../loaders/RoomiooLoader";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  // Update these names to match your slice
  const { userData, isLoggedIn, loading } = useSelector(
    (state: RootState) => state.user,
  );

  useEffect(() => {
    // Only redirect if loading is finished AND user is not logged in
    if (!loading && !isLoggedIn) {
      router.replace("/signin");
      toast.error("Please login");
    }
  }, [isLoggedIn, loading, router]);

  if (loading) {
    return <RoomiooLoader isAddBg={true} textContent="" />;
  }

  return isLoggedIn ? <>{children}</> : null;
}
