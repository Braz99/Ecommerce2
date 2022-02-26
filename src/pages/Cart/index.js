import React from "react";
import Header from "../../components/header";
import CartMain from "../../components/CartMain";
import Total from "../../components/total_products";

export default function Cart() {
  return (
    <>
      <Header />
      <CartMain />
      <Total />
    </>
  );
}
