(function () {
  var key = "imagef-guide-language";
  var root = document.documentElement;
  var titles = {
    bi: "Image F · 修 MJ，还气质",
    zh: "Image F · 修 MJ，还气质",
    en: "Image F · Fix MJ, keep the look"
  };

  function setMode(mode) {
    if (mode !== "bi" && mode !== "zh" && mode !== "en") mode = "bi";
    root.dataset.mode = mode;
    root.lang = mode === "en" ? "en" : "zh-CN";
    document.title = titles[mode];
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.dataset.lang === mode ? "true" : "false");
    });
    try {
      localStorage.setItem(key, mode);
    } catch (e) {}
  }

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      setMode(button.dataset.lang);
    });
  });

  setMode(root.dataset.mode || "bi");
})();
