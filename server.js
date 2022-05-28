const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
