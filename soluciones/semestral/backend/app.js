require("dotenv").config();

const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const express = require("express");
const { createClient, YappyPayment } = require("yappy-node-back-sdk");
const app = express();

let yappyClient = createClient(process.env.MERCHANT_ID, process.env.SECRET_KEY);

const payment = {
  total: null,
  subtotal: null,
  shipping: 0.0,
  discount: 0.0,
  taxes: null,
  orderId: null,
  successUrl: "https://www.yappy.peqa.dev",
  failUrl: "https://www.yappy.peqa.dev",
  tel: process.env.TEL || "66666666",
  domain: process.env.DOMAIN || "https://yappy.peqa.dev",
};

app.use(cors());
app.use(express.json());

app.post("/api/pagosbg", async (req, res) => {
  const { name, price: subtotal } = req.body;
  const uuid = uuidv4();
  const taxes = Number((subtotal * 0.07).toFixed(2));
  const total = subtotal + taxes;
  const newPayment = {
    ...payment,
    subtotal,
    taxes,
    total,
    orderId: uuid.split("-").join("").slice(0, 10),
  };
  const response = await yappyClient.getPaymentUrl(newPayment);
  res.json(response);
});

app.get("/api/v1/status", async (req, res) => {
  const response = yappyClient.validateHash(req.query);
  console.log({ response });
  res.json("pasodkapsodkapsodkapsodkapsok");
});

app.listen(3000);
