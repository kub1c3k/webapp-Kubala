const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const colorCode = document.getElementById("colorCode");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}

generateBtn.addEventListener("click", () => {
  const color = getRandomColor();
  document.body.style.backgroundColor = color;
  colorCode.textContent = color;
});
copyBtn.addEventListener("click", ()=> {
  const hex = colorCode.textContent;
  navigator.clipboard.writeText(hex)
    .then(() => {
      alert("Skopírované: " + hex);
    })
    .catch(() => {
      alert("Nepodarilo sa skopírovať");
    });
});