import React, { useState } from 'react';
import './AddItem.scss';

function AddItem({ addItem }) {

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState('');

    const clearInputs = () => {
        setName('');
        setDesc('');
        setPhoto('');
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !desc || !photo) {
            return alert('поля должны быть заполнены');
        }
        const newItem = {
            id: Math.ceil(Math.random() * 1000),
            name: name,
            desc: desc,
            photoURL: photo,
            isFavorite: false
        };
        addItem(newItem);
        clearInputs();
    }

    return (
            <div className="form">
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }} >
                    <h2>
                        <img width="250px" height="150" src="https://images.squarespace-cdn.com/content/v1/599327e56b8f5b29a7f66773/1507929238284-2DEQARV6L9G58BSUH2SO/CREATE_LOGO.png" alt="CREATE" />
                    </h2>
                    <label htmlFor="name">Pokemon name</label>
                    <input type="text" id="name" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="description">Pokemon description</label>
                    <input type="text" id="description" placeholder="Description..." value={desc} onChange={(e) => setDesc(e.target.value)} />
                    <label htmlFor="photoURL">Pokemon image URL</label>
                    <input type="text" id="photoURL" placeholder="PhotoUrl..." value={photo} onChange={(e) => setPhoto(e.target.value)} />

                    <button type="submit">Add pokemon</button>
                </form>
            </div>
    )
}

export default AddItem
