const express = require("express");
const cors = require("cors");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/feed", feedRoutes);

app.listen(8080);
