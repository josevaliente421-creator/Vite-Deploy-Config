import { useEffect } from "react";
import { SITE_URL } from "@/lib/analytics";

function upsertMeta(selector: string, attr: string, value: string, create: () => HTMLElement) {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function upsertCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO(
  title: string,
  description: string,
  options?: { noindex?: boolean },
) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', "content", description, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      return meta;
    });

    const path = window.location.pathname || "/";
    const canonical = `${SITE_URL}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
    upsertCanonical(canonical);

    upsertMeta('meta[property="og:url"]', "content", canonical, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      return meta;
    });
    upsertMeta('meta[property="og:title"]', "content", title, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      return meta;
    });
    upsertMeta('meta[property="og:description"]', "content", description, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      return meta;
    });
    upsertMeta('meta[name="twitter:title"]', "content", title, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:title");
      return meta;
    });
    upsertMeta('meta[name="twitter:description"]', "content", description, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:description");
      return meta;
    });
    upsertMeta('meta[name="robots"]', "content", options?.noindex ? "noindex, nofollow" : "index, follow", () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      return meta;
    });
  }, [title, description, options?.noindex]);
}
