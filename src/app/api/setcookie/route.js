import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json(
    {},

    {
      headers: {
        "Set-Cookie": "theme=dark;Path=/;",
      },
    }
  );
}

// const response = NextResponse.redirect();

// response.cookies.set({
//   name: "NextJs",
//   value: "Resposive",
// });

// return response;
