

import React, { useState } from 'react'
import { useStore } from '../context/Store'

export default function SearchProducts (){
    
    const [query, setQuery] = useState("")
    
    const products = useStore()

    /* const data = new Array(100).fill().map(
        (value, index) => (
        { id: index, title: `prodotto ${index}`, UPC: Math.random()*10000 }
        )
        )
    console.log(data) */


    return (
        
    <div>
        {products.map(((item) => (
          <div key={item.id} className="post">
            <span>{item.title} - {item.price}</span>
          </div>
        )))}
    </div>
    )
  }