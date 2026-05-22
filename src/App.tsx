import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { BackToTopButton } from "./components/BackToTopButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MobileQuickActions } from "./components/MobileQuickActions";
import { ThemeProvider } from "./components/ThemeProvider";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { DiagnosisPage } from "./pages/DiagnosisPage";
import { FundsPage } from "./pages/FundsPage";
import { GlossaryPage } from "./pages/GlossaryPage";
import { HomePage } from "./pages/HomePage";
import { InvestmentTrustPage } from "./pages/InvestmentTrustPage";
import { NasdaqPage } from "./pages/NasdaqPage";
import { NisaPage } from "./pages/NisaPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { RiskPage } from "./pages/RiskPage";
import { ThemesPage } from "./pages/ThemesPage";

export default function App() {
  return (
    <ThemeProvider>
      <StructuredData />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investment-trusts" element={<InvestmentTrustPage />} />
        <Route path="/nisa" element={<NisaPage />} />
        <Route path="/nasdaq" element={<NasdaqPage />} />
        <Route path="/themes" element={<ThemesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/funds" element={<FundsPage />} />
        <Route path="/risk" element={<RiskPage />} />
        <Route path="/diagnosis" element={<DiagnosisPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <BackToTopButton />
      <MobileQuickActions />
    </ThemeProvider>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, [location.pathname]);

  return null;
}

function StructuredData() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Future Asset Lab",
      description: "日本から始める、未来志向の資産形成を学ぶ金融メディア風Webサイト",
      inLanguage: "ja",
      educationalUse: "Financial literacy",
      publisher: {
        "@type": "Organization",
        name: "Future Asset Lab",
      },
    });
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return null;
}
