const express = require("express");
const app = express();

//initialize stripe
const stripe = require("stripe")(process.env.secret_key);

app.use(express.static("public")); //not sure what this line does

const Your_Domain = process.env.vercel_domain || "http://localhost:4000";

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
