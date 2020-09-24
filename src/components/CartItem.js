import React from 'react';
import { Link } from 'react-router-dom';

function CartItem() {
    return (
        <div>
            <li className="cards__item">
                <Link className="cards__item__link">
                    <figure className="cards__item__pic-wrap">
                        <img src="/" alt="traveler"
                        className="cards__item__img"/>
                    </figure>
                    <div>
                        
                    </div>
                </Link>
            </li>
        </div>
    )
}

export default CartItem
