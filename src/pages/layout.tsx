import { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Layout: FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
