const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const colorCode = document.getElementById("colorCode");

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function getContrastColor({ r, g, b }) {
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000000" : "#ffffff";
}

generateBtn.addEventListener("click", () => {
  const hex = getRandomColor();
  const rgb = hexToRgb(hex);

  document.body.style.backgroundColor = hex;
  colorCode.textContent = `${hex} | rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  const contrast = getContrastColor(rgb);
  colorCode.style.color = contrast;

  colorCode.style.opacity = 0;
  setTimeout(() => {
    colorCode.style.opacity = 1;
  }, 150);
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(colorCode.textContent.split("|")[0].trim());
    copyBtn.textContent = "✅ Skopírované!";
    setTimeout(() => {
      copyBtn.textContent = "Skopíruj HEX";
    }, 1500);
  } catch {
    copyBtn.textContent = "❌ Chyba";
  }
});
