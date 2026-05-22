import { useCallback, useEffect, useState } from "react";

const storageKey = "future-asset-saved-articles";
const eventName = "future-asset-saved-articles-change";

function readSavedArticles() {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function writeSavedArticles(slugs: string[]) {
  window.localStorage.setItem(storageKey, JSON.stringify(slugs));
  window.dispatchEvent(new CustomEvent(eventName));
}

export function useSavedArticles() {
  const [savedSlugs, setSavedSlugs] = useState<string[]>(() => readSavedArticles());

  useEffect(() => {
    const sync = () => setSavedSlugs(readSavedArticles());
    window.addEventListener("storage", sync);
    window.addEventListener(eventName, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(eventName, sync);
    };
  }, []);

  const toggleSaved = useCallback((slug: string) => {
    const current = readSavedArticles();
    const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
    writeSavedArticles(next);
    setSavedSlugs(next);
  }, []);

  return {
    savedSlugs,
    isSaved: useCallback((slug: string) => savedSlugs.includes(slug), [savedSlugs]),
    toggleSaved,
  };
}
