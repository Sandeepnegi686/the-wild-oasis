// import { NextResponse } from "next/server";
// export function middleware(req) {
//   return NextResponse.redirect(new URL("/about", req.url));
// }
// if we go to /account it will redirect to /about page.

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = { matcher: ["/account"] };
