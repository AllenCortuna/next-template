import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();

    //logic here

    return NextResponse.json({
      result: `Data from request: ${data}`
    });
  } catch (error) {
    console.error("ERROR: ", error);
    return NextResponse.json({
      error: "error",
    });
  }
}
