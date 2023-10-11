import { Outlet } from "react-router-dom";

import "primereact/resources/themes/soho-dark/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "primeicons/primeicons.css";

import { Footer } from "../components/shared/Footer";
import { Header } from "../components/shared/Header";

export default function Root() {
  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <div className="flex flex-grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
