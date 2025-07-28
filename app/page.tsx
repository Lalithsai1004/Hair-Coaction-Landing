// app/page.tsx (server component — no hooks, no "use client")
import ClientPageWrapper from "@/components/ui/ClientPageWrapper";

export default function HomePage() {
  return (
    <main>
      {/* other SSR content */}
      <ClientPageWrapper />
    </main>
  );
}
