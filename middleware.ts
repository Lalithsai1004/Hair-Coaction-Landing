import {authMiddleWare} from "@clerk/nextjs/server";

export default authMiddleWare({
  publicRoutes: ["/"], // Only '/' is public, rest are protected
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
