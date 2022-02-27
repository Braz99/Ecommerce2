import React from "react";
import Header from "../../components/header";
import CartMain from "../../components/CartMain";
import TotalCart from "../../components/TotalCart";

export default function Cart() {
  return (
    <>
      <Header />
      <CartMain />
      <TotalCart />
    </>
  );
}
