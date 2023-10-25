import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/headersModifications")) {
    console.log("This is  inside HeadersModifications Route");

    return NextResponse.next();
  } else if (req.nextUrl.pathname.startsWith("/")) {
    console.log("This is  inside Home Route");

    return NextResponse.next();
  } else if (req.nextUrl.pathname.startsWith("/Getcookie")) {
    console.log("This is  inside Getcookie Route");

    return NextResponse.next();
  }
}
