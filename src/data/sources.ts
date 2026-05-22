export type Source = {
  id: string;
  name: string;
  publisher: string;
  url: string;
  checkedAt: string;
  note: string;
};

export const sources: Source[] = [
  {
    id: "fsa-nisa",
    name: "NISAを知る：NISA特設ウェブサイト",
    publisher: "金融庁",
    url: "https://www.fsa.go.jp/policy/nisa2/know/",
    checkedAt: "2026-05-19",
    note: "2024年以降の新NISA制度、年間投資枠、非課税保有限度額の確認に使用。",
  },
  {
    id: "fsa-guidebook",
    name: "2024年からのNISA 早わかりガイドブック",
    publisher: "金融庁",
    url: "https://www.fsa.go.jp/policy/nisa2/about/nisa2024/guidebook_202307.pdf",
    checkedAt: "2026-05-19",
    note: "つみたて投資枠、成長投資枠、非課税保有期間、売却後の枠再利用の制度説明に使用。",
  },
  {
    id: "gov-nisa",
    name: "「NISA」って何？わかりやすく解説",
    publisher: "政府広報オンライン",
    url: "https://www.gov-online.go.jp/article/202401/entry-5555.html",
    checkedAt: "2026-05-19",
    note: "NISAの概要と制度理解の補助情報として使用。",
  },
  {
    id: "toushin-risk",
    name: "投資信託が持つリスク",
    publisher: "資産運用業協会（旧 投資信託協会）",
    url: "https://www.imaj.or.jp/study/investmenttrust/meritrisk/risk.html",
    checkedAt: "2026-05-20",
    note: "元本は保証されないこと、価格変動リスク、為替変動リスクの説明に使用。",
  },
  {
    id: "toushin-cost",
    name: "投資信託のコスト",
    publisher: "資産運用業協会（旧 投資信託協会）",
    url: "https://www.imaj.or.jp/study/investmenttrust/costtax/cost.html",
    checkedAt: "2026-05-20",
    note: "信託報酬など、投資信託の費用確認に使用。",
  },
  {
    id: "toushin-distribution",
    name: "基準価額と分配金",
    publisher: "資産運用業協会（旧 投資信託協会）",
    url: "https://www.imaj.or.jp/study/investmenttrust/about/navdividends.html",
    checkedAt: "2026-05-20",
    note: "投資信託の基準価額と分配金の仕組みの確認に使用。",
  },
  {
    id: "nasdaq-ndx",
    name: "Overview for NDX",
    publisher: "Nasdaq Global Indexes",
    url: "https://indexes.nasdaq.com/Index/Overview/NDX",
    checkedAt: "2026-05-19",
    note: "NASDAQ100の概要説明に使用。",
  },
  {
    id: "reuters-space",
    name: "SpaceX weighs June 2026 IPO at $1.5 trillion valuation, FT says",
    publisher: "Reuters / Investing.com配信",
    url: "https://www.investing.com/news/stock-market-news/spacex-weighs-june-2026-ipo-at-15-trillion-valuation-ft-reports-4469159",
    checkedAt: "2026-05-19",
    note: "SpaceXのIPO期待は報道ベースであり、確定情報ではないことの確認に使用。",
  },
  {
    id: "reuters-anthropic",
    name: "Anthropic plans an IPO as early as 2026, FT reports",
    publisher: "Reuters / Investing.com配信",
    url: "https://www.investing.com/news/-market-news/anthropic-plans-an-ipo-as-early-as-2026-ft-reports-4387279",
    checkedAt: "2026-05-19",
    note: "AnthropicのIPO準備報道は未確定であることの確認に使用。",
  },
  {
    id: "reuters-openai",
    name: "OpenAI is not working on an IPO yet, CFO says",
    publisher: "Reuters / TradingView配信",
    url: "https://www.tradingview.com/news/reuters.com%2C2025%3Anewsml_L4N3WH1WU%3A0-openai-is-not-working-on-an-ipo-yet-cfo-says/",
    checkedAt: "2026-05-19",
    note: "OpenAIのIPO時期について、近い将来の計画ではないとの報道確認に使用。",
  },
];

export const getSource = (id: string) => sources.find((source) => source.id === id);
