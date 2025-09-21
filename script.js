const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const colorCode = document.getElementById("colorCode");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

generateBtn.addEventListener("click", () => {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  colorCode.textContent = color;

  colorCode.style.opacity = 0;
  setTimeout(() => {
    colorCode.style.opacity = 1;
  }, 150);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(colorCode.textContent);
    copyBtn.textContent = "✅ Skopírované!";
    setTimeout(() => {
      copyBtn.textContent = "Skopíruj HEX";
    }, 1500);
  } catch {
    copyBtn.textContent = "❌ Chyba";
  }
});
