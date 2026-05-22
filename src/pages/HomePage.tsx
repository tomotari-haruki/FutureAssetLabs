import {
  ArrowRight,
  Banknote,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Compass,
  FileSearch,
  GraduationCap,
  Layers3,
  PiggyBank,
  Rocket,
  Shield,
  Sparkles,
  Telescope,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ArticleList } from "../components/ArticleList";
import { FeatureCard } from "../components/Cards";
import { ChartSection } from "../components/ChartSection";
import { CompoundSimulator } from "../components/CompoundSimulator";
import { CostAndShockLab } from "../components/CostAndShockLab";
import { CTASection } from "../components/CTASection";
import { FundCard } from "../components/FundCard";
import { FundComparisonTable } from "../components/FundComparisonTable";
import { GoalNavigator } from "../components/GoalNavigator";
import { HeroSection } from "../components/HeroSection";
import { NisaLimitVisualizer } from "../components/NisaLimitVisualizer";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";
import { articles, categories } from "../data/articles";
import { fundTypes } from "../data/funds";
import { glossaryEntries } from "../data/glossary";

const surfaceToneCycle = ["surface-cyan", "surface-emerald", "surface-violet", "surface-gold", "surface-slate", "surface-rose"] as const;
const surfaceTone = (index: number) => surfaceToneCycle[index % surfaceToneCycle.length];

export function HomePage() {
  return (
    <>
      <SEO
        title="Future Asset Lab | 日本から始める、未来志向の資産形成"
        description="新NISA・投資信託・NASDAQ連動型インデックス投資を、データと図解で学べる金融メディア風サイト。"
      />
      <HeroSection />

      <main id="main">
        <section className="section-band">
          <div className="lab-container grid gap-8">
            <SectionIntro
              eyebrow="Why invest"
              title="投資を怖いものから、理解できる選択肢へ。"
              body="最初の一歩は、大きく賭けることではありません。制度、商品タイプ、リスクを分けて理解すると、少額から検討しやすくなります。"
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <FeatureCard
                icon={Banknote}
                eyebrow="Small start"
                title="少額から経験を積める"
                body="毎月の積立で市場の上下に慣れながら、家計に無理のない範囲で続けやすい設計を作れます。"
                tone="cyan"
                href="/articles/monthly-30000-compound-simulation"
              />
              <FeatureCard
                icon={Shield}
                eyebrow="NISA"
                title="非課税制度を活用できる"
                body="新NISAでは非課税保有期間が無期限化され、長期で資産形成を考えやすくなりました。"
                tone="emerald"
                href="/nisa"
              />
              <FeatureCard
                icon={ChartNoAxesCombined}
                eyebrow="Index"
                title="分散投資を作りやすい"
                body="投資信託やインデックス型商品は、複数企業・地域に投資しやすく、個別株より管理負担を下げやすい面があります。"
                tone="violet"
                href="/investment-trusts"
              />
              <FeatureCard
                icon={Rocket}
                eyebrow="Future themes"
                title="成長テーマを学べる"
                body="AI、宇宙、半導体、NASDAQなど、未来の産業構造を投資テーマとして理解する入口になります。"
                tone="gold"
                href="/themes"
              />
            </div>
          </div>
        </section>

        <LearningRoadmap />

        <GoalNavigator />

        <ThirtyDayPlan />

        <section className="section-band pt-0">
          <div className="lab-container grid gap-6 lg:grid-cols-2">
            <NisaLimitVisualizer />
            <div className="grid gap-6">
              <div className="surface-card surface-emerald rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-sm font-black uppercase tracking-normal text-emerald-700 dark:text-emerald-300">NISA Benefits</p>
                <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">新NISAの制度メリット</h2>
                <div className="mt-5 grid gap-3">
                  {[
                    ["年間投資枠", "最大360万円。つみたて投資枠120万円と成長投資枠240万円を併用可能。"],
                    ["非課税保有期間", "2024年以降の制度では無期限化。長期保有を考えやすい。"],
                    ["生涯枠", "最大1,800万円。売却後の枠再利用も制度上用意されています。"],
                    ["注意点", "損失が出ても課税口座との損益通算はできません。制度変更リスクも確認が必要です。"],
                  ].map(([title, body]) => (
                    <div key={title} className="surface-soft rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/45">
                      <p className="font-black text-slate-950 dark:text-white">{title}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <RiskNotice compact />
            </div>
          </div>
        </section>

        <PortfolioBlueprint />

        <section className="section-band pt-0">
          <div className="lab-container grid gap-6">
            <SectionIntro
              eyebrow="Deposit vs Fund vs Stock"
              title="預金・投資信託・個別株を、向いている人で比べる。"
              body="ここでは特定商品を示さず、資産形成の選択肢としての性質を比較します。"
            />
            <ComparisonMatrix />
          </div>
        </section>

        <MistakeGuide />

        <section className="section-band pt-0">
          <div className="lab-container">
            <CompoundSimulator />
          </div>
        </section>

        <CostAndShockLab />

        <ChartSection />

        <section className="section-band pt-0">
          <div className="lab-container grid gap-8">
            <SectionIntro
              eyebrow="Growth themes"
              title="NASDAQ、AI、宇宙、半導体を“期待”ではなく“構造”で見る。"
              body="報道や話題性をそのまま投資判断にせず、どの産業ドライバーが企業価値に影響しうるのかを分解して見ます。"
            />
            <div className="grid gap-5 md:grid-cols-3">
              <FeatureCard
                icon={BrainCircuit}
                eyebrow="AI"
                title="生成AIとクラウド需要"
                body="モデル開発、推論、業務ソフト、クラウド基盤が半導体やデータセンター需要とつながります。"
                tone="cyan"
                href="/themes"
              />
              <FeatureCard
                icon={Telescope}
                eyebrow="Space"
                title="衛星通信と宇宙インフラ"
                body="SpaceXなどは報道ベースで注目されていますが、上場や直接投資の可否は確定していません。"
                tone="slate"
                href="/articles/spacex-openai-anthropic-ipo-theme"
              />
              <FeatureCard
                icon={Building2}
                eyebrow="Semiconductor"
                title="GPUとデータセンター"
                body="AI推論、クラウド、産業自動化の広がりが半導体関連企業のテーマ理解につながります。"
                tone="emerald"
                href="/nasdaq"
              />
            </div>
          </div>
        </section>

        <ThemeDeepDive />

        <section className="section-band pt-0">
          <div className="lab-container grid gap-6">
            <SectionIntro
              eyebrow="Editorial"
              title={`${articles.length}本の記事で、制度・商品・テーマ・リスクを横断する。`}
              body="記事データはローカルTypeScriptで管理し、カテゴリ、タグ、バッジ、出典をCMSへ移行しやすい形にしています。"
            />
            <EditorialCollections />
            <ArticleList limit={6} />
          </div>
        </section>

        <EditorialPolicy />

        <section className="section-band pt-0">
          <div className="lab-container grid gap-6">
            <SectionIntro
              eyebrow="Fund comparison"
              title="ファンドは決め打ちせず、タイプで比較する。"
              body="全世界株式、S&P500、NASDAQ100、バランス型、テーマ型などの特徴を目的別に整理します。"
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {fundTypes.slice(0, 3).map((fund) => (
                <FundCard key={fund.id} fund={fund} />
              ))}
            </div>
            <FundComparisonTable />
          </div>
        </section>

        <GlossaryPreview />

        <section className="section-band pt-0">
          <div className="lab-container grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Risk first"
                title="ワクワクするほど、リスクを先に読む。"
                body="未来の成長テーマは魅力的ですが、価格変動、為替、手数料、制度変更を理解してこそ、長く続けやすい投資計画になります。"
              />
            </div>
            <RiskNotice />
          </div>
        </section>

        <NewsletterPanel />

        <CTASection />
      </main>
    </>
  );
}

function ComparisonMatrix() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:hidden">
        {comparisonColumns.map((column, index) => (
          <article
            key={column.key}
            className={`surface-card ${surfaceTone(index)} rounded-lg border border-slate-200 bg-white/82 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
          >
            <h3 className="text-lg font-black text-slate-950 dark:text-white">{column.label}</h3>
            <dl className="mt-3 grid gap-3">
              {comparisonRows.map((row) => (
                <div key={`${column.key}-${row.item}`} className="border-t border-slate-100 pt-3 dark:border-slate-800">
                  <dt className="text-xs font-black uppercase tracking-normal text-slate-500 dark:text-slate-400">{row.item}</dt>
                  <dd className="mt-1 text-sm leading-7 text-slate-700 dark:text-slate-200">{row[column.key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <div className="surface-card surface-slate hidden overflow-hidden rounded-lg border border-slate-200 bg-white/82 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:block">
        <div className="chart-scroll overflow-x-auto">
                <table className="min-w-[760px] text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                    <tr>
                      <th className="px-4 py-3">項目</th>
                      <th className="px-4 py-3">預金</th>
                      <th className="px-4 py-3">投資信託</th>
                      <th className="px-4 py-3">個別株</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {comparisonRows.map((row) => (
                      <tr key={row.item}>
                        <th className="px-4 py-3 font-black text-slate-800 dark:text-slate-100">{row.item}</th>
                        <td className="px-4 py-3 leading-7 text-slate-600 dark:text-slate-300">{row.deposit}</td>
                        <td className="px-4 py-3 leading-7 text-slate-600 dark:text-slate-300">{row.fund}</td>
                        <td className="px-4 py-3 leading-7 text-slate-600 dark:text-slate-300">{row.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
        </div>
      </div>
    </div>
  );
}

function LearningRoadmap() {
  return (
    <section className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <SectionIntro
          eyebrow="Learning path"
          title="迷わないための、4ステップ学習ロードマップ。"
          body="制度から商品、シミュレーション、リスク管理へ。初心者が読み進めやすい順番でコンテンツを配置しました。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {learningSteps.map((step, index) => (
            <Link
              key={step.title}
              to={step.href}
              className={`surface-card interactive-lift ${surfaceTone(index)} focus-ring group rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm hover:shadow-lift dark:border-slate-800 dark:bg-slate-900/70 dark:hover:shadow-lift-dark`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                  <step.icon aria-hidden="true" size={22} />
                </span>
                <span className="text-3xl font-black text-slate-200 dark:text-slate-800">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-5 text-xl font-black leading-snug text-slate-950 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
                {step.title}
              </h3>
              <p className="break-anywhere mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{step.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-700 dark:text-cyan-200">
                読みに行く <ArrowRight aria-hidden="true" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThirtyDayPlan() {
  return (
    <section id="first-30-days" className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <SectionIntro
          eyebrow="First 30 days"
          title="最初の30日で、“なんとなく怖い”を分解する。"
          body="口座開設や商品選びを急ぐ前に、制度・家計・商品タイプ・リスクを順番に確認。小さく学ぶほど、投資判断を他人任せにしにくくなります。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {thirtyDayPlan.map((item, index) => (
            <article
              key={item.week}
              className={`surface-card ${surfaceTone(index + 1)} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-lg bg-slate-950 px-3 py-1 text-xs font-black text-white dark:bg-white dark:text-slate-950">
                  {item.week}
                </span>
                <item.icon className="text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={22} />
              </div>
              <h3 className="break-anywhere mt-4 text-lg font-black leading-snug text-slate-950 dark:text-white">{item.title}</h3>
              <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs font-bold leading-6 text-slate-500 dark:text-slate-400">
                {item.checks.map((check) => (
                  <li key={check} className="surface-soft w-fit max-w-full rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-950/45">
                    {check}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioBlueprint() {
  return (
    <section className="section-band pt-0">
      <div className="lab-container grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="surface-card surface-cyan rounded-lg border border-slate-200 bg-white/82 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
          <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Portfolio blueprint</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white">
            新NISAの使い方を、目的別の“置き場所”で考える。
          </h2>
          <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-300">
            ひとつの商品に答えを求めるより、資金の目的を分けるほうが続けやすくなります。下の比率は学習用サンプルであり、特定配分を推奨するものではありません。
          </p>
          <div className="mt-6 grid gap-4">
            {allocationLayers.map((layer) => (
              <div key={layer.name}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-black text-slate-950 dark:text-white">{layer.name}</span>
                  <span className="font-bold text-slate-500 dark:text-slate-400">{layer.sample}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-sm bg-slate-100 dark:bg-slate-950">
                  <div className={layer.barClass} style={{ width: layer.width }} />
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">{layer.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {portfolioModels.map((model, index) => (
            <article
              key={model.title}
              className={`surface-card ${surfaceTone(index + 2)} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200">
                  <model.icon aria-hidden="true" size={20} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-normal text-emerald-700 dark:text-emerald-300">{model.eyebrow}</p>
                  <h3 className="mt-1 font-black leading-snug text-slate-950 dark:text-white">{model.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{model.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MistakeGuide() {
  return (
    <section className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <SectionIntro
          eyebrow="Avoid mistakes"
          title="初心者がつまずきやすいポイントを、先に見える化する。"
          body="資産形成は商品選びだけでは決まりません。よくある失敗を先に知ることで、下落時にも計画を守りやすくなります。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {mistakeItems.map((item, index) => (
            <article
              key={item.title}
              className={`surface-card ${surfaceTone(index + 3)} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <item.icon className="text-amber-600 dark:text-amber-300" aria-hidden="true" size={24} />
              <h3 className="mt-4 text-lg font-black leading-snug text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
              <p className="mt-3 rounded-lg bg-cyan-50 px-3 py-2 text-xs font-bold leading-6 text-cyan-900 dark:bg-cyan-400/10 dark:text-cyan-100">
                {item.action}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeDeepDive() {
  return (
    <section className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <SectionIntro
          eyebrow="Theme research"
          title="未来テーマを、ニュース・指数・ファンドの3層で読む。"
          body="SpaceX、OpenAI、Anthropicのような未上場企業の話題は、報道ベースの期待として扱い、直接投資できる公開市場の商品とは分けて理解します。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {themeResearch.map((item, index) => (
            <article
              key={item.title}
              className={`surface-card ${surfaceTone(index + 2)} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <p className="text-xs font-black uppercase tracking-normal text-violet-700 dark:text-violet-300">{item.eyebrow}</p>
              <h3 className="mt-2 text-xl font-black leading-snug text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
              <Link
                className="focus-ring interactive-lift mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-black text-white dark:bg-white dark:text-slate-950"
                to={item.href}
              >
                深掘りする <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EditorialCollections() {
  const categoryCards = categories
    .map((category) => ({
      category,
      count: articles.filter((article) => article.category === category).length,
      lead: categoryLead[category],
    }))
    .filter((item) => item.count > 0);

  return (
    <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
      {categoryCards.map((item, index) => (
        <Link
          key={item.category}
          to="/articles"
          className={`surface-card interactive-lift ${surfaceTone(index)} focus-ring rounded-lg border border-slate-200 bg-white/82 p-4 shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900/70`}
        >
          <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{item.count} articles</p>
          <h3 className="mt-2 font-black text-slate-950 dark:text-white">{item.category}</h3>
          <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">{item.lead}</p>
        </Link>
      ))}
    </div>
  );
}

function EditorialPolicy() {
  return (
    <section id="editorial-policy" className="section-band pt-0">
      <div className="lab-container grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionIntro
          eyebrow="Editorial policy"
          title="金融メディアらしく、期待とリスクを同じ温度で扱う。"
          body="Future Asset Labでは、初心者がワクワクしながらも誤認しないよう、編集ルールをUI上にも明示しています。将来CMSへ移行しても、この方針を記事データに紐づけられる設計です。"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {editorialPolicy.map((item, index) => (
            <article
              key={item.title}
              className={`surface-card ${surfaceTone(index)} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                  <item.icon aria-hidden="true" size={20} />
                </span>
                <div>
                  <h3 className="break-anywhere font-black leading-snug text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlossaryPreview() {
  return (
    <section className="section-band pt-0">
      <div className="lab-container grid gap-6">
        <SectionIntro
          eyebrow="Glossary"
          title="投資用語を、読める言葉に翻訳する。"
          body="専門用語がわかると、目論見書や記事の読み方が変わります。まずは頻出語から押さえましょう。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {glossaryEntries.slice(0, 8).map((entry, index) => (
            <article
              key={entry.term}
              className={`surface-card ${surfaceTone(index)} rounded-lg border border-slate-200 bg-white/82 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70`}
            >
              <p className="text-xs font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{entry.category}</p>
              <p className="break-anywhere mt-1 text-lg font-black text-slate-950 dark:text-white">{entry.term}</p>
              <p className="break-anywhere mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.description}</p>
            </article>
          ))}
        </div>
        <Link
          to="/glossary"
          className="focus-ring interactive-lift inline-flex w-fit items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-black text-white dark:bg-white dark:text-slate-950"
        >
          用語集を開く <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}

function NewsletterPanel() {
  return (
    <section className="section-band pt-0">
      <div className="lab-container">
        <div className="surface-card surface-violet grid gap-6 rounded-lg border border-slate-200 bg-white/82 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">Weekly research note</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white">
              週次レポート風に、制度・相場・テーマをまとめ読み。
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 dark:text-slate-300">
              実運用では、制度変更、ファンド月報、手数料、テーマ報道を定期確認します。このデモでは、CMS拡張時に週次レポート化できる編集導線を想定しています。
            </p>
          </div>
          <div className="grid gap-3">
            {weeklyItems.map((item) => (
              <Link
                key={item.title}
                className="surface-soft focus-ring interactive-lift flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50 p-4 hover:bg-cyan-50 dark:border-slate-800 dark:bg-slate-950/45 dark:hover:bg-cyan-400/10"
                to={item.href}
              >
                <span>
                  <span className="block text-sm font-black text-slate-950 dark:text-white">{item.title}</span>
                  <span className="mt-1 block text-xs leading-6 text-slate-500 dark:text-slate-400">{item.body}</span>
                </span>
                <ArrowRight className="shrink-0 text-cyan-600 dark:text-cyan-300" aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-normal text-cyan-700 dark:text-cyan-300">{eyebrow}</p>
      <h2 className="break-anywhere mt-2 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      <p className="break-anywhere mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{body}</p>
    </div>
  );
}

const comparisonRows = [
  {
    item: "期待リターン",
    deposit: "低め。元本の安定性を重視しやすい",
    fund: "投資対象により中から高。市場平均を狙うタイプもある",
    stock: "企業次第で高い可能性もあるが、下落幅も大きい",
  },
  {
    item: "リスク",
    deposit: "インフレで実質価値が下がる可能性",
    fund: "価格変動、為替、手数料、制度変更リスク",
    stock: "企業固有リスク、集中リスク、流動性リスク",
  },
  {
    item: "手間",
    deposit: "少ない",
    fund: "商品比較と定期確認が必要",
    stock: "企業分析、決算確認、売買判断が必要",
  },
  {
    item: "分散性",
    deposit: "資産運用としての分散効果は限定的",
    fund: "1本で複数資産に分散しやすい",
    stock: "自分で銘柄数と業種を増やす必要",
  },
  {
    item: "向いている人",
    deposit: "生活防衛資金や近い将来使う資金を守りたい人",
    fund: "少額から長期・分散・積立を検討したい人",
    stock: "企業分析を学び、リスクを管理できる人",
  },
  {
    item: "税制メリット",
    deposit: "通常は利息に課税",
    fund: "NISA対象商品なら非課税メリットを検討可能",
    stock: "NISA対象なら配当・譲渡益の非課税枠を検討可能",
  },
];

const comparisonColumns = [
  { key: "deposit", label: "預金" },
  { key: "fund", label: "投資信託" },
  { key: "stock", label: "個別株" },
] as const;

const learningSteps = [
  {
    icon: GraduationCap,
    title: "制度を知る",
    body: "まずは新NISAの年間枠、生涯枠、非課税保有期間、売却後の枠再利用を押さえます。",
    href: "/nisa",
  },
  {
    icon: Layers3,
    title: "商品タイプを比べる",
    body: "投資信託、ETF、個別株、全世界株式、NASDAQ100などの違いを比較します。",
    href: "/funds",
  },
  {
    icon: CircleDollarSign,
    title: "積立額を試算する",
    body: "毎月いくらなら続けられるかを、元本・運用益・期間の関係で確認します。",
    href: "/diagnosis",
  },
  {
    icon: Shield,
    title: "リスクを先に読む",
    body: "元本割れ、価格変動、為替、手数料、税制変更を理解してから比較に進みます。",
    href: "/risk",
  },
];

const allocationLayers = [
  {
    name: "生活防衛資金",
    sample: "まず確保",
    width: "100%",
    barClass: "h-full rounded-sm bg-gradient-to-r from-slate-400 to-slate-500",
    body: "近い将来使うお金や緊急資金。投資資金と分けて管理します。",
  },
  {
    name: "コア資産",
    sample: "例: 60%から80%",
    width: "78%",
    barClass: "h-full rounded-sm bg-gradient-to-r from-cyan-500 to-emerald-500",
    body: "全世界株式、S&P500、先進国株式、バランス型など、長く持ちやすい土台。",
  },
  {
    name: "サテライト資産",
    sample: "例: 5%から20%",
    width: "32%",
    barClass: "h-full rounded-sm bg-gradient-to-r from-violet-500 to-cyan-500",
    body: "NASDAQ100、AI、半導体、宇宙など、学びたい成長テーマを小さく扱う枠。",
  },
];

const thirtyDayPlan = [
  {
    week: "Week 1",
    icon: GraduationCap,
    title: "制度と言葉に慣れる",
    body: "新NISA、投資信託、インデックス、信託報酬など、判断に必要な言葉を先に整理します。",
    checks: ["金融庁のNISA情報を確認", "頻出用語を5つ覚える", "損益通算など制度の注意点を見る"],
  },
  {
    week: "Week 2",
    icon: WalletCards,
    title: "家計と積立額を分ける",
    body: "生活防衛資金、近い将来使うお金、長期で置けるお金を分けて、無理のない積立額を試算します。",
    checks: ["生活費と緊急資金を分ける", "毎月1万円・3万円を比較", "途中で減額できる前提を確認"],
  },
  {
    week: "Week 3",
    icon: FileSearch,
    title: "比較軸を作る",
    body: "全世界株式、米国株式、NASDAQ100、バランス型、テーマ型を、費用と値動きの違いで比較します。",
    checks: ["投資対象を見る", "信託報酬の目安を見る", "為替影響と集中度を見る"],
  },
  {
    week: "Week 4",
    icon: Shield,
    title: "リスク時の行動を決める",
    body: "下落時に慌てないため、売却・減額・継続・再確認の条件を事前に言語化します。",
    checks: ["元本割れを想定する", "見直し頻度を決める", "公式情報と目論見書を再確認"],
  },
];

const portfolioModels = [
  {
    icon: PiggyBank,
    eyebrow: "Stable learner",
    title: "安定寄りに学びたい人",
    body: "生活防衛資金を厚めに残し、バランス型や全世界株式を中心に比較。テーマ投資は急がず学習から始めます。",
  },
  {
    icon: Compass,
    eyebrow: "Balanced builder",
    title: "分散を軸に育てたい人",
    body: "全世界株式や米国株式をコアにし、NASDAQ100やテーマ型を小さく加える設計を検討します。",
  },
  {
    icon: Sparkles,
    eyebrow: "Theme explorer",
    title: "未来テーマも学びたい人",
    body: "AI・半導体・宇宙のニュースを追いながら、費用と値動きに注意してサテライト枠で比較します。",
  },
];

const mistakeItems = [
  {
    icon: TrendingDown,
    title: "下落時に全額売却してしまう",
    body: "値動きに驚いて計画を崩すと、長期積立の前提が失われやすくなります。",
    action: "対策: 見直し条件を事前に決める",
  },
  {
    icon: WalletCards,
    title: "生活費まで投資に回す",
    body: "近い将来使うお金を投資すると、下落時に取り崩しが必要になる場合があります。",
    action: "対策: 生活防衛資金を先に分ける",
  },
  {
    icon: FileSearch,
    title: "手数料を見ずに選ぶ",
    body: "信託報酬や為替ヘッジコストは、長期保有で効いてくる重要な比較材料です。",
    action: "対策: 目論見書と月報を見る",
  },
  {
    icon: Rocket,
    title: "テーマに集中しすぎる",
    body: "AIや宇宙は魅力的ですが、テーマ集中は値動きが大きくなりやすい点に注意が必要です。",
    action: "対策: コアとサテライトを分ける",
  },
];

const themeResearch = [
  {
    eyebrow: "News layer",
    title: "報道ベースの期待を読む",
    body: "大型IPO期待やAI投資ニュースは、確定情報と未確定情報を分けて読みます。話題性だけで判断しません。",
    href: "/articles/spacex-openai-anthropic-ipo-theme",
  },
  {
    eyebrow: "Index layer",
    title: "指数でテーマの偏りを見る",
    body: "NASDAQ100や米国株インデックスは、どの業種や企業に比率が偏るのかを確認します。",
    href: "/articles/us-stock-index-first-guide",
  },
  {
    eyebrow: "Fund layer",
    title: "ファンドで費用と集中度を見る",
    body: "テーマ型ファンドは、信託報酬、上位組入銘柄、為替、値動きの大きさを比較します。",
    href: "/articles/ai-semiconductor-theme-fund-cost-risk",
  },
];

const categoryLead: Record<string, string> = {
  新NISA: "制度枠、非課税、口座選びを理解する",
  投資信託: "少額分散、費用、分配金を学ぶ",
  米国株: "S&P500、NASDAQ100、全米株式を比較",
  NASDAQ: "AI・クラウド・半導体の成長テーマを見る",
  AIテーマ: "生成AIと半導体の期待とリスクを読む",
  宇宙ビジネス: "衛星通信、未上場企業、テーマ投資を整理",
  初心者向け: "家計、積立、複利をやさしく確認",
  リスク管理: "為替、暴落、手数料、集中を先に見る",
  比較レビュー: "商品タイプとポートフォリオを比較",
};

const weeklyItems = [
  {
    title: "制度アップデートを確認",
    body: "新NISAの公式情報、年間枠、生涯枠、金融機関の案内を確認する導線。",
    href: "/nisa",
  },
  {
    title: "ファンド月報の読み方へ",
    body: "投資対象、費用、為替、上位組入銘柄を見るための比較ページ。",
    href: "/funds",
  },
  {
    title: "テーマ報道をリスク込みで読む",
    body: "IPO期待、AI、宇宙、半導体を学習用サンプルとして整理。",
    href: "/themes",
  },
];

const editorialPolicy = [
  {
    icon: Shield,
    title: "断定的な推奨を避ける",
    body: "特定商品を購入するよう促す表現ではなく、注目候補、比較対象、学習用サンプル、投資判断の材料として整理します。",
  },
  {
    icon: FileSearch,
    title: "出典と確認日を持たせる",
    body: "制度やリスクの説明は、金融庁、政府広報、資産運用業協会などの情報源と確認日をデータで管理します。",
  },
  {
    icon: ChartNoAxesCombined,
    title: "サンプルデータを明記する",
    body: "市場データを実APIに差し替える前提で分離し、未確認の数値はサンプルとして表示します。",
  },
  {
    icon: Compass,
    title: "目的と許容度で比較する",
    body: "利回り期待だけでなく、投資期間、家計、為替、費用、集中度、制度変更リスクを同じ画面で確認します。",
  },
];
