import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArticleDetail } from "../components/ArticleDetail";
import { PageHeader } from "../components/PageHeader";
import { SEO } from "../components/SEO";
import { type Article, getArticleBySlug } from "../data/articles";

export function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <main id="main">
        <SEO title="記事が見つかりません | Future Asset Lab" description="指定された記事は見つかりませんでした。" />
        <PageHeader eyebrow="Not Found" title="記事が見つかりませんでした。" body="URLが変更されたか、記事がまだ公開されていない可能性があります。" />
        <div className="lab-container py-12">
          <Link className="focus-ring rounded-lg bg-cyan-600 px-5 py-3 text-sm font-black text-white" to="/articles">
            記事一覧へ戻る
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main">
      <SEO title={`${article.title} | Future Asset Lab`} description={article.excerpt} type="article" />
      <ArticleStructuredData article={article} />
      <ArticleDetail article={article} />
    </main>
  );
}

function ArticleStructuredData({ article }: { article: Article }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.excerpt,
      inLanguage: "ja",
      articleSection: article.category,
      keywords: article.tags.join(", "),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      isAccessibleForFree: true,
      publisher: {
        "@type": "Organization",
        name: "Future Asset Lab",
      },
      author: {
        "@type": "Organization",
        name: "Future Asset Lab Editorial",
      },
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [article]);

  return null;
}
