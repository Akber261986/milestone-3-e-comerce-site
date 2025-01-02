import { NextResponse } from "next/server";

    const DATA_URL = "https://jsonplaceholder.typicode.com/todos";

    // const quary = `*[_type == "product"][0...3] | order(_createdAt asc){
    //     title,
    //     "slug": slug.current,
    //     "image": image.asset->url,
    //     price,
    //   }
    //       `
export async function GET() {
    const res = await fetch(DATA_URL)
    const data = await res.json()

    return NextResponse.json(data)
    
}