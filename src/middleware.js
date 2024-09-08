export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/catalog",
    "/productAnalytics",
    "/stopLoss",
    "/stopLoss/addRule",
  ],
};
