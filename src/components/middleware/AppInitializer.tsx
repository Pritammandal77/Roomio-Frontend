"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import { setLoading, setUser } from "@/lib/rtk/features/userSlice";
import { getCurrentUser } from "@/services/auth.api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function AppInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Hit your /me endpoint. If cookie is valid, this succeeds.
        const res = await getCurrentUser();

        if (res.data.success) {
          dispatch(setUser(res.data.data)); // Populates Redux with user info
        }
      } catch (error) {
        console.log("No active session found.");
        dispatch(setLoading(false)); // Just stop the spinner, stay logged out
      }
    };

    checkAuth();
  }, [dispatch]);

  return <>{children}</>;
}
