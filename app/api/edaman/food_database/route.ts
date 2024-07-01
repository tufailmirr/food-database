import {
  EDAMAN_API_KEY,
  EDAMAN_APP_ID,
  EDAMAN_BASE_URL,
} from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

// https://api.edamam.com/api/food-database/v2/parser

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";

  const session = searchParams.get("session");

  const url = new URL(`${EDAMAN_BASE_URL}/api/food-database/v2/parser`);
  if (!EDAMAN_APP_ID || !EDAMAN_API_KEY)
    return NextResponse.json(
      { error: "Edaman App ID or Api key not provided" },
      { status: 300 }
    );
  url.searchParams.set("app_id", EDAMAN_APP_ID);
  url.searchParams.set("app_key", EDAMAN_API_KEY);
  url.searchParams.set("ingr", query);
  if (session) url.searchParams.set("session", session);
  try {
    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status }
      );
    }
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
