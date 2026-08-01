const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "InventarioApp", "app.html");
const outDir = path.join(__dirname, "public");
const dest = path.join(outDir, "index.html");

if (!fs.existsSync(src)) {
  console.error("No se encontro InventarioApp/app.html");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log("Build OK -> public/index.html");
