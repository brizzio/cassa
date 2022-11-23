import React, { useContext, useState } from 'react'
import ProductJSON from '../data/products.json'

const StoreContext = React.createContext()



export function useStore() {
    return useContext(StoreContext)
}




export function StoreProvider({ children }) {

    const [products, setProducts] = useState(ProductJSON)

    

    return (
        <StoreContext.Provider value = {products}>
           
                {children}
            
        </StoreContext.Provider>
    )

}