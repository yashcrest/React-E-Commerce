import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Suspense } from "react";
import { Loader } from "../ui";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
