import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { FAQS, ROUTES } from "../shared/seo-content";

const SITE_URL = "https://andesplagas.cl";

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Andes Plagas",
  url: SITE_URL,
  telephone: "+56942713144",
  email: "gerencia@andesplagas.cl",
  areaServed: "Santiago, Región Metropolitana",
};

function escapeHtml(value: string): string {
  const amp = "&" + "amp;";
  const lt = "&" + "lt;";
  const gt = "&" + "gt;";
  const quot = "&" + "quot;";
  return value
    .replace(/&/g, amp)
    .replace(/</g, lt)
    .replace(/>/g, gt)
    .replace(/"/g, quot);
}

function buildJsonLd(route: (typeof ROUTES)[number]): string[] {
  const blocks: string[] = [ORGANIZATION];

  if (route.serviceName) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: route.serviceName,
      serviceType: route.serviceType || route.serviceName,
      url: `${SITE_URL}${route.path}`,
      areaServed: "Santiago, Región Metropolitana",
      provider: {
        "@type": "Organization",
        name: "Andes Plagas",
        url: SITE_URL,
      },
    });
  }

  if (route.faqKey && FAQS[route.faqKey]) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS[route.faqKey].map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return blocks.map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`);
}

function applyRoute(baseHtml: string, route: (typeof ROUTES)[number]): string {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  const canonical = `${SITE_URL}${route.path}`;

  let html = baseHtml;

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${description}" />`,
  );
  html = html.replace(
    /<meta name="robots" content="[^"]*" \/>/,
    `<meta name="robots" content="index, follow" />`,
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  const injections: string[] = [];
  if (route.preloadImage) {
    injections.push(
      `<link rel="preload" as="image" href="${route.preloadImage}" fetchpriority="high" />`,
    );
  }
  injections.push(...buildJsonLd(route));

  html = html.replace("</head>", `${injections.join("\n    ")}\n  </head>`);

  return html;
}

export async function prerenderRoutes(): Promise<void> {
  const distPublic = path.resolve("dist", "public");
  const baseHtml = await readFile(path.join(distPublic, "index.html"), "utf-8");

  for (const route of ROUTES) {
    const html = applyRoute(baseHtml, route);

    const destDir =
      route.path === "/" ? distPublic : path.join(distPublic, route.path.replace(/^\//, ""));
    await mkdir(destDir, { recursive: true });
    await writeFile(path.join(destDir, "index.html"), html);

    console.log(`[prerender] ${route.path === "/" ? "index.html" : route.path} -> meta + JSON-LD`);
  }
}
