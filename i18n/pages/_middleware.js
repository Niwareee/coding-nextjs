import { NextResponse } from "next/server";

export function middleware(request) {
  // const locale = request.headers.get('accept-language')?.split(',')?.[0] || 'en-US';
  //
  // request.nextUrl.href = `/${locale}${request.nextUrl.pathname}`;
  // return NextResponse.rewrite(request.nextUrl);
}
