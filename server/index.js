const ex = require("express");
const path = require("path");
const app = ex();

app.use(ex.static(path.join(__dirname, "..", "build")));

app.listen(3000);
