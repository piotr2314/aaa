import { request } from "http";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

  export const GET = async (req: NextApiRequest) => {
    const { searchParams } = new URL(req.url)
    console.log(searchParams)
    const movieId = searchParams.get("id");
    if (movieId) {
      const movies = "https://jsonplaceholder.typicode.com/posts/"+movieId
      console.log(movies)
      const value=await (await fetch(movies)).json()
      console.log(value)
      return NextResponse.json({ value }, { status: 200 });
    }};