// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Protect everything except the homepage and static files
  publicRoutes: ["/", "/sign-in", "/sign-up", "/favicon.ico"],

  // Optional: Only run on specific paths (good for performance)
  ignoredRoutes: ["/api/webhook(.*)"], // example if you want to ignore some API routes too
});

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"], // Match everything except static files
};
