import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const toneClasses = {
  cyan: "from-cyan-500/18 to-blue-500/12 text-cyan-700 dark:text-cyan-200",
  emerald: "from-emerald-500/18 to-teal-500/12 text-emerald-700 dark:text-emerald-200",
  violet: "from-violet-500/18 to-fuchsia-500/12 text-violet-700 dark:text-violet-200",
  gold: "from-amber-400/22 to-yellow-500/12 text-amber-700 dark:text-amber-200",
  slate: "from-slate-400/18 to-cyan-500/10 text-slate-700 dark:text-slate-100",
  rose: "from-rose-400/18 to-violet-500/12 text-rose-700 dark:text-rose-200",
};

export type Tone = keyof typeof toneClasses;

const surfaceToneClasses: Record<Tone, string> = {
  cyan: "surface-cyan",
  emerald: "surface-emerald",
  violet: "surface-violet",
  gold: "surface-gold",
  slate: "surface-slate",
  rose: "surface-rose",
};

export function StatCard({
  label,
  value,
  note,
  tone = "cyan",
}: {
  label: string;
  value: string;
  note?: string;
  tone?: Tone;
}) {
  return (
    <div
      className={`surface-card ${surfaceToneClasses[tone]} animate-fade-up rounded-lg border border-white/60 bg-gradient-to-br ${toneClasses[tone]} p-4 shadow-sm backdrop-blur dark:border-slate-700/70`}
    >
      <p className="break-anywhere text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">{label}</p>
      <p className="break-anywhere mt-2 text-2xl font-black text-slate-950 dark:text-white">{value}</p>
      {note ? <p className="break-anywhere mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{note}</p> : null}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  body,
  tone = "cyan",
  href,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  body: string;
  tone?: Tone;
  href?: string;
}) {
  const content = (
    <article
      className={`surface-card ${surfaceToneClasses[tone]} group h-full rounded-lg border border-slate-200/75 bg-white/78 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/68 ${
        href ? "interactive-lift cursor-pointer hover:shadow-lift dark:hover:shadow-lift-dark" : ""
      }`}
    >
      <div
        className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${toneClasses[tone]}`}
      >
        <Icon aria-hidden="true" size={22} />
      </div>
      <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
      <h3 className="break-anywhere mt-2 text-xl font-black leading-snug text-slate-950 dark:text-white">{title}</h3>
      <p className="break-anywhere mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p>
      {href ? (
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-700 dark:text-cyan-200">
          詳しく見る <ArrowRight aria-hidden="true" size={16} />
        </span>
      ) : null}
    </article>
  );

  if (href) {
    return (
      <Link className="focus-ring rounded-lg" to={href}>
        {content}
      </Link>
    );
  }

  return content;
}
