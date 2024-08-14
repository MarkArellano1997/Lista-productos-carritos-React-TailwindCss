import { useEffect, useMemo, useState } from "react"
import { db } from "../data/db"

export const useCart = () => {

    const initialCart = ()=>{
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart):[]
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const addMealCart = (meal) => {

        const itemExits = cart.findIndex(item => item.id === meal.id)

        if (itemExits >= 0) {
            const updateCart = [...cart]
            updateCart[itemExits].quantity++
            setCart(updateCart)

        } else {
            meal.quantity = 1

            setCart([...cart, meal])

        }
    }

    function deleteItemCart(id) {
        setCart(prevCart => prevCart.filter(meal => meal.id !== id))

    }

    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const totalCart = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return {
        data,
        cart,
        addMealCart,
        deleteItemCart,
        isEmpty,
        totalCart
    }
}