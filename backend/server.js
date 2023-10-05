const express = require("express");
const app = express();

//initialize stripe
const stripe = require("stripe")(process.env.secret_key);
