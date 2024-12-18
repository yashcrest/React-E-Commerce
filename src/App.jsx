import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import { Success, Failed, Product, PageNotFound } from "./pages";
import { Home } from "./pages";
// import { Product } from "./pages";
// import { Success } from "./pages";
// import { Failed } from "./pages";
// import { PageNotFound } from "./pages";
import { Footer, Loader } from "./components";
import Layout from "./pages/Layout";

// Lazy Loading
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const Success = lazy(() => import("./pages/Success"));
const Failed = lazy(() => import("./pages/Failed"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/success" element={<Success />} />
            <Route path="/failed" element={<Failed />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
