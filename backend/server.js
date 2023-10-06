const express = require("express");
var cors = require("cors"); //this is needed for allowing any IP address to access this backend
const app = express();

//initialize stripe
const stripe = require("stripe")(process.env.secret_key);

//middleware
app.use(express.static("public")); //this is recommended by stripe docs
app.use(cors);
app.use(express.json());

const my_domain = process.env.vercel_domain || "http://localhost:4000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.session.create({
    line_items: [
      {
        // Provide the exact price ID
        price: "{{}}",
        quantity: 1,
      },
    ],
    mode: "payment",
    success,
  });
});

app.listen(4000, () => console.log("Server running on port 4000"));
