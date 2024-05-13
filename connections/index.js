const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const absolutePath = path.join(path.resolve(), "config.env");
dotenv.config({ path: absolutePath });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("資料庫連線成功");
  })
  .catch(() => {
    console.log("資料庫連線失敗");
  });
