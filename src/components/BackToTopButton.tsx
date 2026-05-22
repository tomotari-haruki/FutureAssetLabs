import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > 720);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="focus-ring interactive-lift fixed right-4 z-50 grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white/92 text-slate-800 shadow-lg backdrop-blur hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900/92 dark:text-slate-100 dark:hover:text-cyan-200"
      style={{ bottom: "calc(5.8rem + env(safe-area-inset-bottom))" }}
      aria-label="ページ上部へ戻る"
      onClick={() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }}
    >
      <ArrowUp aria-hidden="true" size={19} />
    </button>
  );
}
