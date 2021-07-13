import React from 'react';
import { useCart } from '../provider/cart';

export default function CartMain(){
    let {cart} = useCart()
    cart = cart[0]
    
    return(
        <main id='container'>

            Carrinho

        </main>
    )
}