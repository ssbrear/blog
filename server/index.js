const express = require("express");
const path = require("path");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3001;

// ====================== CAN RESET DATABASE WITH A NEW PASSWORD ==================
// ====================== WARNING: DELETES ALL POSTS ==============================
const database = async () => {
  await sequelize.sync();
  // await sequelize.models.Post.create({
  //   title: "Kahuna Coffee Blend",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
  //   paragraph:
  //     "With this seasonal flavored coffee there's no need to spend big bucks on a ticket to Hawaii, you can enjoy the taste of the tropics right from your kitchen. Put on a lei, find a beach chair, close you eyes and get swept away to coffee paradise with the blissful aroma of creamy white chocolate, perfectly toasted Hawaiian macadamia nuts and freshly ground coffee. Aloha",
  // });
};
database();
const app = express();
app.use(express.json());
app.use(express.text());

// MIDDLEWARE FOR CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.static(path.join(__dirname, "../build")));

app.get("/api", async (req, res) => {
  const backendPosts = await sequelize.models.Post.findAll();
  const postData = [];
  backendPosts.forEach((x) => {
    postData.push({
      title: x.dataValues.title,
      image: x.dataValues.image,
      paragraph: x.dataValues.paragraph,
      id: x.dataValues.id,
    });
  });
  postData.reverse();
  res.json(postData);
});
app.get("/api/pw", async (req, res) => {
  const users = await sequelize.models.User.findAll();
  let backendPw;
  users.forEach((x) => {
    backendPw = x.dataValues.password;
  });
  res.send(backendPw);
});
app.post("/api", async (req, res) => {
  const { title, image, paragraph } = req.body;
  console.log(req.body);
  const newPost = await sequelize.models.Post.create({
    title: title,
    image: image,
    paragraph: paragraph,
  }).then(res.send("Post complete"));
});
app.delete("/api", async (req, res) => {
  const id = parseInt(req.body);
  await sequelize.models.Post.destroy({
    where: {
      id: id,
    },
  });
  res.send("Delete complete");
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
