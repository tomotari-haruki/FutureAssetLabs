export type FundType = {
  id: string;
  name: string;
  label: string;
  tone: "cyan" | "emerald" | "violet" | "gold" | "slate" | "rose";
  target: string;
  risk: number;
  feeGuide: string;
  diversification: string;
  currencyImpact: string;
  beginnerFit: string;
  longTermFit: string;
  suitedFor: string;
  caution: string;
  tags: string[];
};

export const fundTypes: FundType[] = [
  {
    id: "global-equity",
    name: "全世界株式インデックス型",
    label: "分散重視",
    tone: "cyan",
    target: "日本を含む、または除く世界の株式市場へ幅広く投資",
    risk: 3,
    feeGuide: "低コスト商品では年0.1%台からが比較対象",
    diversification: "地域・通貨・業種を広く分散しやすい",
    currencyImpact: "外貨資産比率が高く、為替の影響を受ける",
    beginnerFit: "高い",
    longTermFit: "向きやすい",
    suitedFor: "投資対象を広く分散し、コア資産として考えたい人",
    caution: "米国比率が高くなる場合があるため、中身の地域配分を確認する。",
    tags: ["初心者向け", "長期投資", "コア候補"],
  },
  {
    id: "sp500",
    name: "S&P500インデックス型",
    label: "米国大型株",
    tone: "emerald",
    target: "米国を代表する大型株式へ投資",
    risk: 3,
    feeGuide: "低コスト商品では年0.1%台からが比較対象",
    diversification: "米国内では分散しやすいが、国の集中度は高い",
    currencyImpact: "米ドル資産のため為替影響あり",
    beginnerFit: "中から高",
    longTermFit: "向きやすい",
    suitedFor: "米国経済の成長をポートフォリオに取り入れたい人",
    caution: "米国一国集中になるため、全世界株式との違いを確認する。",
    tags: ["米国株", "長期投資", "比較対象"],
  },
  {
    id: "nasdaq100",
    name: "NASDAQ100インデックス型",
    label: "成長寄り",
    tone: "violet",
    target: "NASDAQ上場の大型非金融企業を中心に投資",
    risk: 4,
    feeGuide: "商品により差があり、S&P500型より高い場合がある",
    diversification: "大型成長企業へ偏りやすい",
    currencyImpact: "米ドル資産のため為替影響あり",
    beginnerFit: "中",
    longTermFit: "目的次第",
    suitedFor: "AI、クラウド、半導体など成長テーマを一部取り入れたい人",
    caution: "値動きが大きく、セクター集中になりやすい。",
    tags: ["NASDAQ", "AI", "テーマ投資"],
  },
  {
    id: "developed-equity",
    name: "先進国株式インデックス型",
    label: "海外分散",
    tone: "slate",
    target: "日本を除く先進国株式へ投資するタイプが多い",
    risk: 3,
    feeGuide: "低コスト商品では年0.1%台からが比較対象",
    diversification: "米国中心になりやすいが、欧州なども含む",
    currencyImpact: "外貨資産のため為替影響あり",
    beginnerFit: "中から高",
    longTermFit: "向きやすい",
    suitedFor: "日本以外の先進国株式へ分散したい人",
    caution: "新興国を含めたい場合は全世界株式との比較が必要。",
    tags: ["海外株", "分散", "比較対象"],
  },
  {
    id: "balanced",
    name: "バランス型ファンド",
    label: "安定寄り",
    tone: "gold",
    target: "株式、債券、REITなど複数資産を組み合わせる",
    risk: 2,
    feeGuide: "株式インデックス型より高い商品もあるため要確認",
    diversification: "資産クラスを分散しやすい",
    currencyImpact: "投資対象により異なる",
    beginnerFit: "中から高",
    longTermFit: "向きやすい",
    suitedFor: "値動きを抑えながら資産配分を任せたい人",
    caution: "債券が入っても元本は保証されず、費用も確認が必要。",
    tags: ["安定寄り", "分散", "資産配分"],
  },
  {
    id: "ai-semiconductor-theme",
    name: "AI・半導体テーマ型ファンド",
    label: "テーマ投資",
    tone: "rose",
    target: "AI、GPU、半導体製造装置、データセンター関連などへ投資",
    risk: 5,
    feeGuide: "テーマ型は年0.7%以上など高めの場合がある",
    diversification: "テーマ内では分散しても業種集中になりやすい",
    currencyImpact: "海外株中心の場合は為替影響あり",
    beginnerFit: "低から中",
    longTermFit: "小さな比率なら検討対象",
    suitedFor: "成長テーマを学び、ポートフォリオの一部で検討したい人",
    caution: "話題性、手数料、急な資金流出、値動きの大きさに注意。",
    tags: ["AI", "半導体", "高リスク"],
  },
];
