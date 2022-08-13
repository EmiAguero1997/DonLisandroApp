import Header from "./header";
import Footer from "./footer";
import { Children } from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
