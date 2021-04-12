const express = require("express");

const PORT = process.env.PORT || 3001;

const postData = [
  {
    Title: "Kahuna Coffee Blend",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    Paragraph:
      "With this seasonal flavored coffee there's no need to spend big bucks on a ticket to Hawaii, you can enjoy the taste of the tropics right from your kitchen. Put on a lei, find a beach chair, close you eyes and get swept away to coffee paradise with the blissful aroma of creamy white chocolate, perfectly toasted Hawaiian macadamia nuts and freshly ground coffee. Aloha",
  },
  {
    Title: "Kahuna Coffee Blend",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
    Paragraph:
      "With this seasonal flavored coffee there's no need to spend big bucks on a ticket to Hawaii, you can enjoy the taste of the tropics right from your kitchen. Put on a lei, find a beach chair, close you eyes and get swept away to coffee paradise with the blissful aroma of creamy white chocolate, perfectly toasted Hawaiian macadamia nuts and freshly ground coffee. Aloha",
  },
];

const app = express();
app.use(express.json());
app.use(express.text());

// MIDDLEWARE FOR CORS ERROR
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/api", (req, res) => {
  res.json({ postData });
});
app.post("/api", (req, res) => {
  postData.unshift(req.body);
  res.send("Post complete");
});
app.delete("/api", (req, res) => {
  const index = parseInt(req.body);
  postData.splice(index, 1);
  res.send("Delete complete");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
