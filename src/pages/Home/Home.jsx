import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartItem/CartItem';
import './Home.scss';

function Home({ items,isFavorite,deleteItem }) {
    return (
        <>
            <Link to="/list" className="place red">Список избранных </Link>
            <div className="cart__items">
                {items.length > 0 ? items.map((item, index) => {
                    return <CartItem key={index} deleteItemBy={deleteItem} isFavoriteBy={isFavorite} {...item} />
                }) : (<div style={{ textAlign: 'center', fontSize: '30px', fontWeight: '600' }}>Пусто</div>)}
            </div>
        </>
    )
}

export default Home



