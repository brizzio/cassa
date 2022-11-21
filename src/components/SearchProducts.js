

import React, { useState } from 'react'

export default function SearchProducts (){
    
    const [query, setQuery] = useState("")
    


    const data = new Array(100).fill().map(
        (value, index) => (
        { id: index, title: `prodotto ${index}`, UPC: Math.random()*10000 }
        )
        )
    console.log(data)
    return (
        
    <div>
        {data.map(((item) => (
          <div key={item.id} className="post">
            <span>{item.title} - {item.UPC}</span>
          </div>
        )))}
    </div>
    )
  }