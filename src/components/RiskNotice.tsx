import { AlertTriangle } from "lucide-react";

export const fullDisclaimer =
  "本サイトの内容は情報提供を目的としたものであり、特定の金融商品の売買を推奨するものではありません。投資には元本割れ、価格変動、為替変動、手数料、税制変更等のリスクがあります。最終的な投資判断は、公式情報・目論見書・金融機関の情報を確認のうえ、ご自身の責任で行ってください。";

export function RiskNotice({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      className="surface-card surface-gold rounded-lg border border-amber-300/70 bg-amber-50/85 p-4 text-amber-950 shadow-sm dark:border-amber-300/25 dark:bg-amber-400/10 dark:text-amber-100"
      aria-label="投資リスクに関する注意"
    >
      <div className="flex gap-3">
        <AlertTriangle className="mt-1 shrink-0 text-amber-600 dark:text-amber-300" aria-hidden="true" size={21} />
        <div>
          <p className="font-black">{compact ? "リスク注記" : "投資判断の前に確認したいこと"}</p>
          <p className="mt-1 text-sm leading-7">{fullDisclaimer}</p>
        </div>
      </div>
    </aside>
  );
}
