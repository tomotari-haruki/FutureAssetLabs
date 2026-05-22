import { ArticleList } from "../components/ArticleList";
import { PageHeader } from "../components/PageHeader";
import { SEO } from "../components/SEO";

export function ArticlesPage() {
  return (
    <main id="main">
      <SEO
        title="記事一覧 | Future Asset Lab"
        description="新NISA、投資信託、NASDAQ、AIテーマ、宇宙ビジネス、リスク管理の記事を検索・カテゴリ別に閲覧できます。"
      />
      <PageHeader
        eyebrow="CMS Editorial"
        title="金融メディア風の記事一覧。検索、カテゴリ、並び替えに対応。"
        body="記事データはローカルTypeScriptで管理。将来的にmicroCMS、Contentful、WordPress Headless CMSへ移行しやすい構造です。"
      />
      <section className="section-band">
        <div className="lab-container">
          <ArticleList />
        </div>
      </section>
    </main>
  );
}
