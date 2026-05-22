import { ArrowRight, Home, LibraryBig, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { SEO } from "../components/SEO";

const links = [
  {
    title: "トップへ戻る",
    body: "制度、シミュレーター、記事カード、リスク注記をまとめて確認できます。",
    href: "/",
    icon: Home,
  },
  {
    title: "記事一覧を探す",
    body: "新NISA、投資信託、NASDAQ、AIテーマ、リスク管理の記事を検索できます。",
    href: "/articles",
    icon: LibraryBig,
  },
  {
    title: "用語集で調べる",
    body: "目論見書や金融記事でつまずきやすい言葉を確認できます。",
    href: "/glossary",
    icon: Search,
  },
];

export function NotFoundPage() {
  return (
    <main id="main">
      <SEO
        title="ページが見つかりません | Future Asset Lab"
        description="Future Asset Labのページが見つかりませんでした。トップ、記事一覧、用語集へ移動できます。"
      />
      <PageHeader
        eyebrow="404"
        title="ページが見つかりませんでした。"
        body="URLが変更されたか、削除された可能性があります。迷子にならないよう、主要な学習導線を用意しました。"
      />
      <section className="section-band">
        <div className="lab-container grid gap-4 md:grid-cols-3">
          {links.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className={`surface-card interactive-lift ${index === 0 ? "surface-cyan" : index === 1 ? "surface-violet" : "surface-emerald"} focus-ring group rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm hover:shadow-lift dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-lift-dark`}
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                <item.icon aria-hidden="true" size={22} />
              </span>
              <h2 className="mt-4 text-xl font-black text-slate-950 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
                {item.title}
              </h2>
              <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-700 dark:text-cyan-200">
                移動する <ArrowRight aria-hidden="true" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
