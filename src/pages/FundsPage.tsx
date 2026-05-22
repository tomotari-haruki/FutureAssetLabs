import { FundCard } from "../components/FundCard";
import { FundComparisonTable } from "../components/FundComparisonTable";
import { FundFinder } from "../components/FundFinder";
import { PageHeader } from "../components/PageHeader";
import { RiskNotice } from "../components/RiskNotice";
import { SEO } from "../components/SEO";
import { fundTypes } from "../data/funds";

export function FundsPage() {
  return (
    <main id="main">
      <SEO
        title="ファンド比較 | Future Asset Lab"
        description="全世界株式、S&P500、NASDAQ100、先進国株式、バランス型、AI・半導体テーマ型のファンドタイプを比較。"
      />
      <PageHeader
        eyebrow="Fund Comparison"
        title="決め打ちせず、タイプを知って比較する。"
        body="実在ファンドを断定的に推奨せず、投資対象、リスク、費用目安、分散性、為替影響、向いている人で整理します。"
      />
      <section className="section-band">
        <div className="lab-container grid gap-8">
          <FundFinder />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {fundTypes.map((fund) => (
              <FundCard key={fund.id} fund={fund} />
            ))}
          </div>
          <FundComparisonTable />
          <RiskNotice />
        </div>
      </section>
    </main>
  );
}
