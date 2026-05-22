export type GlossaryCategory = "制度" | "商品" | "費用" | "リスク" | "指数" | "運用";

export type GlossaryEntry = {
  term: string;
  reading: string;
  category: GlossaryCategory;
  description: string;
  checkPoint: string;
};

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: "新NISA",
    reading: "しんニーサ",
    category: "制度",
    description: "2024年から開始された少額投資非課税制度。つみたて投資枠と成長投資枠を併用できます。",
    checkPoint: "年間投資枠、生涯非課税保有限度額、対象商品、損益通算できない点を確認します。",
  },
  {
    term: "投資信託",
    reading: "とうししんたく",
    category: "商品",
    description: "投資家から集めた資金を、運用会社が株式や債券などに分散投資する金融商品です。",
    checkPoint: "投資対象、運用方針、信託報酬、純資産総額、為替ヘッジの有無を見ます。",
  },
  {
    term: "信託報酬",
    reading: "しんたくほうしゅう",
    category: "費用",
    description: "投資信託を保有している間に日々差し引かれる運用管理費用です。",
    checkPoint: "長期保有では小さな差も積み重なるため、同じ投資対象の商品で比較します。",
  },
  {
    term: "NASDAQ100",
    reading: "ナスダックひゃく",
    category: "指数",
    description: "NASDAQ市場に上場する大型非金融企業を中心とした株価指数です。",
    checkPoint: "米国大型成長企業やテック比率が高くなりやすく、値動きの大きさを確認します。",
  },
  {
    term: "複利",
    reading: "ふくり",
    category: "運用",
    description: "運用益が次の運用元本に加わり、利益が利益を生むように計算される考え方です。",
    checkPoint: "一定利回りを仮定したシミュレーションは、将来の成果を保証しない点に注意します。",
  },
  {
    term: "為替リスク",
    reading: "かわせリスク",
    category: "リスク",
    description: "外貨建て資産の価格が、円高・円安によって変動するリスクです。",
    checkPoint: "外国株式や外貨建て資産を含む場合、円換算の評価額が変動します。",
  },
  {
    term: "目論見書",
    reading: "もくろみしょ",
    category: "運用",
    description: "投資信託の投資方針、費用、リスクなどを確認するための重要書類です。",
    checkPoint: "購入前に交付目論見書、保有中に月報や運用報告書を確認します。",
  },
  {
    term: "インデックスファンド",
    reading: "インデックスファンド",
    category: "商品",
    description: "日経平均、S&P500、NASDAQ100など、特定の指数への連動を目指す投資信託です。",
    checkPoint: "連動対象、実質コスト、乖離、分配方針、為替ヘッジの有無を確認します。",
  },
  {
    term: "アクティブファンド",
    reading: "アクティブファンド",
    category: "商品",
    description: "指数を上回る成果などを目指し、運用会社が銘柄選定や配分を判断する投資信託です。",
    checkPoint: "信託報酬が高めになる場合があるため、運用方針と長期実績を確認します。",
  },
  {
    term: "基準価額",
    reading: "きじゅんかがく",
    category: "運用",
    description: "投資信託の1口または1万口あたりの価値を示す価格です。",
    checkPoint: "分配金の有無や再投資、為替、組入資産の値動きで変動します。",
  },
  {
    term: "分配金",
    reading: "ぶんぱいきん",
    category: "運用",
    description: "投資信託の収益などから投資家へ支払われるお金です。",
    checkPoint: "分配金が出ても資産が増えたとは限らず、基準価額の変化と合わせて見ます。",
  },
  {
    term: "トータルリターン",
    reading: "トータルリターン",
    category: "運用",
    description: "値上がり益や分配金などを含めた、投資全体の収益率を示す考え方です。",
    checkPoint: "手数料、税金、為替の影響も含めて、実質的な成果を確認します。",
  },
  {
    term: "ドルコスト平均法",
    reading: "ドルコストへいきんほう",
    category: "運用",
    description: "一定額を定期的に購入し、購入タイミングを分散する考え方です。",
    checkPoint: "下落時にも購入を続ける設計ですが、損失を防ぐ仕組みではありません。",
  },
  {
    term: "ボラティリティ",
    reading: "ボラティリティ",
    category: "リスク",
    description: "価格変動の大きさを表す言葉です。大きいほど上下に動きやすい傾向があります。",
    checkPoint: "リターン期待だけでなく、下落時に耐えられる値動きかを確認します。",
  },
  {
    term: "為替ヘッジ",
    reading: "かわせヘッジ",
    category: "リスク",
    description: "為替変動の影響を抑えるための仕組みです。ヘッジコストが発生する場合があります。",
    checkPoint: "円高・円安の影響、ヘッジコスト、商品ごとの方針を確認します。",
  },
  {
    term: "信託財産留保額",
    reading: "しんたくざいさんりゅうほがく",
    category: "費用",
    description: "投資信託を換金するときに、信託財産内に残す費用として差し引かれる場合がある金額です。",
    checkPoint: "すべての商品にあるわけではないため、目論見書で確認します。",
  },
  {
    term: "純資産総額",
    reading: "じゅんしさんそうがく",
    category: "運用",
    description: "投資信託が保有する資産全体の時価総額から負債を差し引いた金額です。",
    checkPoint: "極端に小さい場合、繰上償還や運用効率の観点で確認が必要です。",
  },
  {
    term: "繰上償還",
    reading: "くりあげしょうかん",
    category: "リスク",
    description: "投資信託が予定より早く運用を終了し、資金が返還されることです。",
    checkPoint: "純資産総額や運用方針、信託期間を確認します。",
  },
  {
    term: "S&P500",
    reading: "エスアンドピーごひゃく",
    category: "指数",
    description: "米国を代表する大型株式500社程度で構成される株価指数です。",
    checkPoint: "米国一国への比率が高くなるため、全世界株式との違いを比較します。",
  },
  {
    term: "全世界株式",
    reading: "ぜんせかいかぶしき",
    category: "指数",
    description: "日本を含む、または除く世界の株式市場へ幅広く投資する考え方です。",
    checkPoint: "地域配分、米国比率、為替、信託報酬を確認します。",
  },
];

export const glossary = Object.fromEntries(glossaryEntries.map((entry) => [entry.term, entry.description])) as Record<string, string>;

export type GlossaryTerm = keyof typeof glossary;
