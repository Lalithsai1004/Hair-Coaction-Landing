// app/Providers.tsx
"use client";

import { ClerkProvider } from "@clerk/nextjs";
export const dynamic = "force-dynamic";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
}
