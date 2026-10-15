import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLangForPath, parseLang } from "@/lib/seo";

// Forwards the resolved page language to the root layout so <html lang/dir>
// matches the rendered content (pages pick their language from ?lang=).
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return NextResponse.next();

  const lang = parseLang(searchParams.get("lang") ?? undefined, defaultLangForPath(pathname));
  const headers = new Headers(request.headers);
  headers.set("x-site-lang", lang);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|api/).*)"],
};
