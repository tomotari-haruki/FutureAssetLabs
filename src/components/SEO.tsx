import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

const setMeta = (selector: string, attribute: "content", value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/property="(.+?)"/)?.[1] ?? "");
    } else {
      element.setAttribute("name", selector.match(/name="(.+?)"/)?.[1] ?? "");
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

const setCanonical = (value: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = value;
};

export function SEO({
  title,
  description,
  image = `${import.meta.env.BASE_URL}images/og-future-asset-lab.png`,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:locale"]', "content", "ja_JP");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    setCanonical(window.location.href.split("#")[0]);
  }, [description, image, title, type]);

  return null;
}
