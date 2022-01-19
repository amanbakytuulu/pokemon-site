import React from 'react'
import CartItem from '../../components/cartItem/CartItem'

function ListFavorite({ items, isFavoriteBy, onDeleteItemBy }) {
    let empty=[];
    return (
            <div className="cart__items">
                {items.map((item, index) => {
                    if (item.isFavorite) {
                        return (
                            <CartItem key={index} isFavoriteBy={isFavoriteBy} deleteItemBy={onDeleteItemBy} {...item} />
                        )
                    }
                    return empty.push('пусто');
                })}
                {
                    empty.length>=items.length &&
                    <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: '600'}}>Список избранных пуст</div>
                }
            </div>
    )
}

export default ListFavorite
