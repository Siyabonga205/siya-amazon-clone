/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Nlm02J3G7iMnVd7Q9B8HD7xct1jASiaz1iZfpjRHL8NE13Ubw6XZ2pv3VtUtjXw02fPKed9YFzUzLzWv4tJQrd200qBJtIEBf")


// -API

// - APP Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send ("Hello World!"));

app.post("/payment/create", async (req, res) => {
    const total = req.query.total;

    console.log("Payment request received", total);

    const paymentIntent = await stripe.paymentIntent.create({amount: total, currency: "usd",});
    res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - listen commands
exports.api = functions.https.onRequest(app)
