const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Rumeysa Ebrar Duran</h1>
    <h2> 221002053 (iö) denmeee </h2>
    
  `);
});

app.listen(PORT, () => {
  console.log("Server çalışıyor...");
});
