import React from 'react'
import './Generate.css'
import { useState } from 'react';
import useFetch from './useFetch';

export default function Generate() {
    const [slug, setSlug] = useState(1);
    const { error, isPending, data: blogs } = useFetch(`https://jsonplaceholder.typicode.com/todos/${slug}`)
    
    const handleSubmit = () => {
        const value = Math.floor(Math.random() * 100);
        setSlug(value)
    }
    return (
      <div className="home">
        <h2>{blogs?.title}</h2>
        <button onClick={handleSubmit} className='button'>Next Quote</button>
      </div>
    )
}