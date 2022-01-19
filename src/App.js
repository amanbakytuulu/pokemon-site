import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Loader from './assets/Loader/Loader';
import AddItem from './components/AddItem/AddItem';
import { addItem, deleteItem, fetchItems, isFavorite } from './redux/actions/itemsAction';
import ListFavorite from './pages/FavoriteList/ListFavorite';
import './App.css';


function App() {

  const dispatch = useDispatch();
  const { items } = useSelector(({ items }) => items)

  const handleOnClickAddItem = (obj) => {
    dispatch(addItem(obj));
  }

  const handleOnClickDeleteItem = (id) => {
    dispatch(deleteItem(id))
  }

  const handleOnClickFavorite = (obj) => {
    dispatch(isFavorite(obj))
  }

  useEffect(() => {
    dispatch(fetchItems());
  }, [])


  return (
    <>
      <div className="container">
        <section className="cart">
          <h1 className="cart__title">
            <Link to="/"><img width="300px" height="150px" src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-logo.jpg" alt="Pokemon" /></Link>
          </h1>
          <Route path="/" exact>
            {items.length ? <Home items={items} isFavorite={handleOnClickFavorite} deleteItem={handleOnClickDeleteItem} /> :
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50px,-50px)' }}><Loader /></div>}
            <AddItem addItem={handleOnClickAddItem} />
          </Route>
          <Route path="/list" component={() => <ListFavorite items={items} onDeleteItemBy={handleOnClickDeleteItem} isFavoriteBy={handleOnClickFavorite} />} exact />
        </section>
      </div>
    </>
  )
}

export default App;
