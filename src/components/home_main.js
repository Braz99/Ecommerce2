import React from 'react';
import { useCart } from '../provider/cart';

export default function HomeMain(){
    let {cart} = useCart()
    cart = cart[0]
    
    return(
        <main id='container'>

            Home

        </main>
    )
}