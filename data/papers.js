// 首頁的論文清單。新增論文 = 在陣列「最前面」加一筆（新的在上面）。
// 欄位規格見 AGENTS.md 第七節；tags 只能用第八節的標籤詞彙。
window.PAPERS = [
  {
    slug: "rl-traffic-steering-dualsteer",
    title: "Reinforcement Learning-based Traffic Steering for TN-NTN Integrated DualSteer Systems",
    title_zh: "以強化學習為基礎的 TN-NTN 整合 DualSteer 系統流量導引",
    venue: "EuCNC/6G Summit 2026",
    year: 2026,
    tags: ["TN-NTN", "衛星通訊", "3GPP", "強化學習", "流量導引"],
    tldr: "用集中式 DQN 決定每個 UE 走地面或衛星，提前分流避免回程塞車，PLR 比 3GPP Smallest Delay 低 79%。",
    read_date: "2026-11-16",
    status: "精讀完成"
  }
];
