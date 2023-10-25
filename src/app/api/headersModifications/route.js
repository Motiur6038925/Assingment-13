import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(NextRequest) {
  const headerList = headers();
  const token = headerList.get("Authorization");
  if (token) {
    const response = NextResponse.json({
      message: "Welcome ",
      version: "1.0",
      success: true,
    });

    response.headers.set("Authorization", `Bearer ${token}`);
    return response;
  } else {
    return NextResponse.json({ success: false });
  }
}
