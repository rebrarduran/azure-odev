const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <body style="background-color:#cdc0f0; text-align:center;">
    <h1>Rumeysa Ebrar Duran - Bulut Bilişim ödev</h1>
    <h2> 221002053 (iö) </h2>
    
  `);
});

app.listen(PORT, () => {
  console.log("Server çalışıyor...");
});
