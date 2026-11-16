// 論文頁共用腳本：畫 Mermaid 圖、目錄跟隨捲動。不要在個別論文頁另寫腳本。
(function () {
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      securityLevel: "loose",
      flowchart: { htmlLabels: true, curve: "basis" },
      themeVariables: {
        fontFamily: '"Noto Sans TC", sans-serif',
        fontSize: "14px",
        primaryColor: "#FFFFFF",
        primaryBorderColor: "#111111",
        primaryTextColor: "#111111",
        lineColor: "#444444",
        clusterBkg: "#F4F4F4",
        clusterBorder: "#CCCCCC"
      }
    });
  }

  // 目錄：捲到哪一節就亮哪一節
  var links = document.querySelectorAll(".toc a");
  if (!links.length || !("IntersectionObserver" in window)) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        links.forEach(function (a) { a.classList.remove("on"); });
        var a = map[e.target.id];
        if (a) a.classList.add("on");
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  document.querySelectorAll(".section[id]").forEach(function (s) { io.observe(s); });
})();
