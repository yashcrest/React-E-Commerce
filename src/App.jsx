import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Footer, Layout } from "./components/Layout";
import { Loader } from "./components/UI";
import { Login, Register } from "./pages";
import ProtectedRoute from "./auth/ProtectedRoute";

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
            <Route path="*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:id" element={<Product />} />

            {/* Protected routes */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/success"
              element={
                <ProtectedRoute>
                  <Success />
                </ProtectedRoute>
              }
            />
            <Route
              path="/failed"
              element={
                <ProtectedRoute>
                  <Failed />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
