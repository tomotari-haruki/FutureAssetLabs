export function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/50 py-12 dark:border-slate-800/70 sm:py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-violet-50 dark:from-midnight dark:via-slate-950 dark:to-violet-950/40" />
      <div className="absolute inset-0 bg-lab-grid bg-[length:38px_38px] opacity-40 dark:opacity-20" aria-hidden="true" />
      <div className="lab-container relative">
        <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
        <h1 className="break-anywhere mt-3 max-w-4xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="break-anywhere mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-9">{body}</p>
      </div>
    </section>
  );
}
