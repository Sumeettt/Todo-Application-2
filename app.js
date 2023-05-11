const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const { format } = require("date-fns");
const path = require("path");

const app = express();

const dbPath = path.join(__dirname, "todoApplication.db");

app.use(express.json());

let db;

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error ${e.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

//API 1 GET
app.get("/todos/", async (request, response) => {
  const requestQuery = request.query;
  console.log(requestQuery);
});
