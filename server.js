const express = require("express");
const path = require('path');
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ark of Safety Backend Running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.get('/tv', (req, res) => {
  res.sendFile(path.join(__dirname, 'tv.html'));
});
