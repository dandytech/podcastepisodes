import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Access cookies from the request
  const token = req.cookies.get("auth-token")?.value;

  if (!token) {
    // Redirect to the Login page if no token is found
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Proceed with the request if authenticated
  return NextResponse.next();
}

// Apply the middleware only to specific routes
export const config = {
  matcher: ["/ssrproduct"],
  //matcher: ["/ssrproduct", "/ssgproduct"], // Add routes to protect
};
