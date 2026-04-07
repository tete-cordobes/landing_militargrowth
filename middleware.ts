import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const APPROVED_CITIES = new Set([
  "cordoba",
  "san-sebastian",
  "caceres",
  "gijon",
  "chiclana-de-la-frontera",
  "aranjuez",
  "torremolinos",
  "jerez-de-la-frontera",
  "barcelona",
  "toledo",
]);

const SERVICE_PREFIXES = [
  "agencia-seo-",
  "posicionamiento-web-",
  "consultor-seo-",
  "experto-seo-",
  "consultoria-ia-",
  "automatizacion-ia-",
  "growth-marketing-",
  "posicionamiento-ia-",
];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if it's a geo slug for a removed city → 301 to home
  const slugMatch = pathname.match(/^\/(?:es\/)?(.+)$/);
  if (slugMatch) {
    const slug = slugMatch[1];
    for (const prefix of SERVICE_PREFIXES) {
      if (slug.startsWith(prefix)) {
        const citySlug = slug.slice(prefix.length);
        if (!APPROVED_CITIES.has(citySlug)) {
          return NextResponse.redirect(
            new URL("/es", request.url),
            301,
          );
        }
        break;
      }
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
