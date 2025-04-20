// theme.js

// 套用儲存中的模式（若有）
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
  }

  const toggleBtn = document.getElementById("modeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const currentMode = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", currentMode);
    });
  }
});
