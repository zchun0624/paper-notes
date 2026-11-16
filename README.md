# 論文筆記庫 Paper Notes

我讀過的通訊／訊號處理論文，每篇都整理成同一套格式的筆記網頁：

① 一句話總結　② 問題卡　③ 架構圖　④ 方法重點
⑤ 結果解讀　⑥ 術語表　⑦ 先備知識　⑧ 跟我研究的關係

🔗 網站：https://zchun0624.github.io/paper-notes/

## 怎麼新增一篇

這個專案的規則寫在 [`AGENTS.md`](AGENTS.md)（Claude 從 [`AGENTS.md`](AGENTS.md) 被導過去）。
把論文 PDF 放進 `raw/`，對 AI 說：

> 先讀 AGENTS.md，然後新增論文：raw/xxx.pdf

AI 會先寫內容稿 `notes/<slug>.md` 給我確認，定稿後再產生 `papers/<slug>/index.html`，並更新首頁。

## 結構

| 路徑 | 內容 |
|---|---|
| `index.html` | 首頁（卡片、搜尋、標籤篩選） |
| `data/papers.js` | 首頁論文清單 |
| `templates/paper.html` | 論文頁範本 |
| `notes/` | 筆記內容稿（Markdown） |
| `papers/` | 筆記網頁 |
| `assets/` | 共用 CSS、JS |

筆記為個人閱讀摘要，原文版權屬原作者與出版單位。
