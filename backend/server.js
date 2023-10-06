const express = require("express");
var cors = require("cors"); //this is needed for allowing any IP address to access this backend
const app = express();

//initialize stripe
const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51NxIMbIIas9tFQMRc0T9EYd6DS8Isn1XF5BctEHFqU9eSS7DtFmm9yt2wOtGdFmyqkYuRvrRRo6zcPOVpgKA7sKG009t3rbFH1"
);

//middleware
app.use(express.static("public")); //this is recommended by stripe docs
app.use(cors());
app.use(express.json());

const my_domain = process.env.vercel_domain || "http://localhost:4000/";

app.post("/checkout", async (req, res) => {
  try {
    const items = req.body.products;
    let lineItems = items.map((item) => ({
      price: item.id,
      quantity: item.quantity,
    }));

    const success_url =
      process.env.NODE_ENV === "production"
        ? "https://react-e-commerce-kappa.vercel.app/success"
        : "http://localhost:5173/success";

    const cancel_url =
      process.env.NODE_ENV === "production"
        ? "https://react-e-commerce-kappa.vercel.app/cancel"
        : "http://localhost:5173/cancel";

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5174/success",
      cancel_url: "http://localhost:5174/failed",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).json({ error: "Error creating Stripe session" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Server running on port 4000"));
