const fs = require("node:fs");
const path =
  "/Users/gurharmanjitsingh/Desktop/Try/js-data-structure/output.txt";
fs.appendFileSync(path, "content");
fs.appendFileSync(path, "new content");
