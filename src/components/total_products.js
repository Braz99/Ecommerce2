import React from 'react';
import './styles/total_s.css'

export default function Total(){
    return(
        <div id='total_area'>

            <h2>O total dos produtos foi: <span id='total_price'>R$ 3909997,00</span> </h2>
            
            <button id='total_button'>Finalizar a compra</button>

        </div>
    )
}