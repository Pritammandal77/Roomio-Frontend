import { ReactNode } from "react";
import Navbar from "@/components/shared/Navbar";
import ProtectedRoute from "@/components/middleware/ProtectedRoute";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <ProtectedRoute>{children}</ProtectedRoute>
    </div>
  );
}
