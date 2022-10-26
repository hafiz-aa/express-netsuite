var express = require("express");
var request = require("supertest");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

test("Test ExpressJS", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello world!");
});
