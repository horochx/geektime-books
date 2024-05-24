const fs = require("fs");

const files = fs.readdirSync("./").filter((path) => path.includes(".epub") || path.includes(".7z"));

files.forEach((path) => {
    if (/^\d{2}\s*-\s*/.test(path)) {
        fs.renameSync(path, path.replace(/^(\d{2})\s*-\s*/, "0$1-"))
    }
})
