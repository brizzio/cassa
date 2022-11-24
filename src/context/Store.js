import React, { useContext, useState } from 'react'
import ProductJSON from '../data/products.json'

const StoreContext = React.createContext()

const items = [
    {
      id:1111,
      title:"Pane Bianco Naturale",
      price:3.56,
      letter:"TFA"
    },
    {
      id:2111,
      title:"Latte Scremato",
      price:3.56,
      letter:"FA"
    },
    {
      id:3111,
      title:"12 Uova Grandi",
      price:3.56,
      letter:"FC"
    },
    {
      id:4111,
      title:"Carta Stangnola",
      price:3.56,
      letter:"C"
    },
    {
      id:5111,
      title:"Coca Cola",
      price:3.56,
      letter:"PR"
    }
  ]

//information about the current machine, referencing itself among other equipments in the network
const metadata={
    store:"253",
    cashier:"056-A"
}

export function useStore() {
    return useContext(StoreContext)
}





export function StoreProvider({ children }) {

    

    const [products, setProducts] = useState(ProductJSON)
    const [meta, setMeta] = useState(metadata)
    const [currentCart, setCurrentCart] = useState({})
    const [currentCartItems, setCurrentCartItems] = useState(items)

    const [carts, setCarts] = useState([])

    const formatDate =(date) => {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return day + "/" + month + "/" + year;
    }

    const openCart = () =>{

        const index = carts.length++
        let oDate = new Date()

        setCurrentCartItems([{}])
        const cartInfo = {
            id: crypto.randomUUID(),
            index:index,
            dateISO:oDate.toISOString(),
            date:formatDate(oDate),
            time:oDate.toISOString().substring(11,19)
        }

        const buyerInfo = {
            id:crypto.randomUUID(),
            fiscalCode:"",
            lotteryCode:"",
            name:"",
            address:"",
            email:"",
            mobile:"",
            phone:"",
            loyaltyCode:""

        }

        const cc = {
                        items:currentCartItems,
                        info:cartInfo,
                        buyer:buyerInfo
                    }

        setCurrentCart(cc)
    
        console.log('current cart')
        console.log(cc)
    }

    const closeCart = () =>{
        
        alert("chiudere il carrello " + currentCart.info.id)

    }
    
    const handleAddItem = (item)=>{
        console.log('vai adicionar na lista...')
        
        const newCart=[
            ...currentCartItems,
            {
            id: item.id, 
            title:item.title,
            price:item.price
            }
        ]

        setCurrentCartItems(newCart)

    }


    const handleRemoveItem= (item) => {

        var list = [...currentCartItems]
        list = list.filter(x => x.id !== item.id);
        setCurrentCartItems(list)

    }

    const summary = () =>{

        const totalPrice = currentCartItems.map(i=>i.price).reduce((a,b)=>a+b,0);
        const iCount = currentCartItems.length;
        const weight = 13.5
        const bags = 0

        return {
            total:totalPrice,
            count:iCount,
            weight:weight,
            bags:bags
        }
    }
    
    console.log('summary===> ' , summary())

    return (
        <StoreContext.Provider value = {{
            products:products,
            metadata:meta,
            currentCartItems:currentCartItems,
            addItemToCart:handleAddItem,
            removeItemFromCart:handleRemoveItem,
            summary:summary,
            open:openCart,
            close:closeCart
        }}>
           
                {children}
            
        </StoreContext.Provider>
    )

}