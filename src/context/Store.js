import React, { useContext, useState, useEffect } from 'react'
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
    const [currentCartItems, setCurrentCartItems] = useState()

    const [carts, setCarts] = useState([])

    const formatDate =(date) => {
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        return day + "/" + month + "/" + year;
    }

    const openCart = (data) =>{

        const index = carts?carts.length++:1
        let oDate = new Date()

        const cartItems= []
        const cartInfo = {
            id: crypto.randomUUID(),
            index:index,
            dateISO:oDate.toISOString(),
            date:formatDate(oDate),
            time:oDate.toISOString().substring(11,19),
            active:true
        }

        const buyerInfo = {
            id:crypto.randomUUID(),
            fiscalCode:data.form.taxCode,
            lotteryCode:data.form.lotteryCode,
            firstName:data.form.firstName,
            lastName:data.form.lastName,
            address:data.form.address,
            email:data.form.email,
            mobile:data.form.mobile,
            phone:data.form.phone,
            loyaltyCode:data.form.loyaltyCode

        }

        const cc = {

            items:cartItems,
            info:cartInfo,
            buyer:buyerInfo,
            authenticated:data.authenticated,
            session:data.session,
            loggedUser:data.loggedUser       
        
        }

        setCurrentCart(cc)
        setCurrentCartItems([])
    
        console.log('current cart')
        console.log(cc)

        console.log('todos os carrinhos')
        console.log(carts)

    }

    const closeCart = () =>{
        
        alert("chiudere il carrello " + currentCart.info.id)
        
        const cart = {
            ...currentCart,
            items:currentCartItems,
            total:summary()
        }
        cart.info.active=false

        
        
        setCarts(current => current.concat(cart), ()=>{
           
            console.log('resumo', carts)
        });

        console.log('no fechamento')
        console.log(cart)

    }

    useEffect(() => {
        console.log('resumo use effect ', carts);
    }, [carts])
    
    
    
    
    const handleAddItem = (item)=>{

        console.log('vai adicionar na lista...')
        

        setCurrentCartItems(current => current.concat(
            {
                id: item.id, 
                title:item.title,
                price:item.price
            }
        ));

        console.log({
            id: item.id, 
            title:item.title,
            price:item.price
        })
    }


    const handleRemoveItem= (item) => {

        var list = [...currentCartItems]
        list = list.filter(x => x.id !== item.id);
        setCurrentCartItems(list)

    }

    const summary = () =>{

        console.log('summary currentCartItems> ', currentCartItems)

        const totalPrice = currentCartItems?currentCartItems.map(i=>i.price).reduce((a,b)=>a+b,0):0
        const iCount = currentCartItems?currentCartItems.length:0
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