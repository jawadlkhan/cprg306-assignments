
import React from 'react';

export default function Item({name, quantity, category, }) {
    return (
        <div className='bg-gray-950 p-6 m-4 rounded-lg shadow-md' >
            <h2 >Item Details</h2>
            <ul className='bg-sky-950'>
                <li>Name: {name}</li>
                <li>Quantity: {quantity}</li>
                <li>Category: {category}</li>
            </ul>
        </div>

    )}