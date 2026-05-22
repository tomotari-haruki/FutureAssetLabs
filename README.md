# Future Asset Lab

日本在住者向けに、新NISA・投資信託・NASDAQ連動型インデックス投資を学べる金融メディア風Webサイトです。初心者が「投資は怖い」から「少額から理解して比較できそう」へ進めるよう、制度解説、CMS風記事、データ可視化、リスク注記を一体で設計しています。

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- React Router
- Recharts
- lucide-react

## Features

- トップページLP
- 投資信託、新NISA、NASDAQ、AI・宇宙・半導体テーマページ
- CMS風の記事一覧と記事詳細（20本のサンプル記事）
- カテゴリフィルター、検索、人気順 / 新着順 / 読了時間順ソート、保存済み記事フィルター、段階表示
- ファンドタイプ比較カード、比較表、目的別ファンドファインダー
- 学習ロードマップ、コア・サテライト設計、失敗回避ガイド
- 目的別ナビ、最初の30日学習プラン、編集ポリシー、診断結果の3アクション
- スマホ/タブレット向け固定クイックナビ、2列モバイルメニュー、カテゴリ選択UI、トップへ戻るボタン
- カテゴリ別編集部ピックアップ、20語の投資用語集
- 記事詳細の要点ボックス、読後チェック、記事保存、記事構造化データ
- 複利シミュレーター
- 信託報酬差と下落シナリオの可視化
- 新NISA枠のドーナツチャートと進捗バー
- NASDAQ100 / 全世界株式のサンプルデータ可視化
- AI・宇宙・半導体テーマのレーダーチャート
- 投資前チェックリスト
- ダークテーマ切替とlocalStorage保存
- SEO / OGP meta更新、WebSite / Article構造化データ
- 404ページ、canonical、Twitter画像meta、テーマ連動theme-color
- 全ページ共通の投資リスク免責表示

## Data Design

CMS移行しやすいよう、記事・出典・ファンドタイプを分離しています。

- `src/data/articles.ts`: 記事本文、カテゴリ、タグ、バッジ、関連記事、出典ID
- `src/data/sources.ts`: 出典名、URL、確認日、注記
- `src/data/funds.ts`: ファンドタイプ比較データ
- `src/data/glossary.ts`: 用語集データ
- `src/data/visualizations.ts`: サンプル可視化データ

microCMS / Contentful / WordPress Headless CMSへ移行する場合は、`Article`、`Source`、`FundType` の型をCMSスキーマに対応させ、データ取得部分をAPIクライアントへ置き換える想定です。

## Financial Safety Policy

本サイトは情報提供を目的としたポートフォリオデモです。特定の金融商品の売買を推奨せず、断定的な収益表現を避けています。投資には元本割れ、価格変動、為替変動、手数料、税制変更等のリスクがあります。最終的な投資判断は、公式情報・目論見書・金融機関の情報を確認のうえ、ご自身の責任で行ってください。

## Quality Report

最終チェックの内容は `QUALITY_REPORT.md` にまとめています。ビルド、記事データ整合性、関連記事slug、出典ID、金融表現チェック、レスポンシブUX、アクセシビリティ方針を確認済みです。

## Responsive QA

320px / 360px / 390px / 500px / 768px のviewportで、トップ、ファンド比較、記事一覧、リスク、診断、テーマ、用語集、長い記事詳細、シミュレーター周辺を確認しています。幅広テーブルはモバイルカードへ切り替え、グラフはコンパクト軸・凡例に調整し、フォームと主要導線は44px前後のタップ領域を確保する方針です。

## Commands

```bash
npm i
npm run dev
npm run build
npm run preview
```

## Local URL

開発サーバー起動後:

```text
http://localhost:5173/
```

`npm run preview` では通常以下で確認できます。

```text
http://localhost:4173/
```

## Deployment Notes

React Routerの直接URLアクセスに対応するため、Vercel向けに `vercel.json`、Netlify向けに `public/_redirects` を同梱しています。静的ホスティングへ提出する場合も、`/articles/...` や `/funds` などの深いURLを `index.html` へ戻す設定を入れてください。

## Main Sources

- 金融庁 NISA特設ウェブサイト
- 金融庁 2024年からのNISA 早わかりガイドブック
- 政府広報オンライン NISA解説
- 資産運用業協会（旧 投資信託協会）投資信託リスク / コスト情報
- Nasdaq Global Indexes
- Reuters配信のIPO関連報道
