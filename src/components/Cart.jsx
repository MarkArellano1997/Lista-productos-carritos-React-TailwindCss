/* eslint-disable react/prop-types */
import { useMemo } from "react"

export default function Cart({ cart,deleteItemCart, isEmpty, totalCart }) {

    return (
        <div className="sm:w-1/3 md:w-1/5 bg-white h-full mt-20 rounded-md p-4 mx-5">
            <h2 className="text-orange-600 text-2xl font-bold">Your Cart ({cart.length})</h2>
            <div className="flex flex-col">

                {isEmpty
                    ? (
                        <>
                            <div className="justify-center items-center flex">
                                <img src="\img\illustration-empty-cart.svg" alt="" className="w-40" />
                            </div>

                            <p className="text-center">Your added items will appear here</p>
                        </>
                    ) : (
                        <>
                            {
                                cart.map((meal) => (
                                    <div
                                        key={meal.id}
                                        className="flex justify-between pt-2 border-b"
                                    >
                                        <div className="">
                                            <h4 className="font-bold py-2">{meal.name}</h4>
                                            <div className="flex">
                                                <div className="flex gap-2 pb-4">
                                                    <p className="text-orange-600 font-bold">{meal.quantity}x</p>
                                                    <p>@${meal.price}</p>
                                                    <p className="font-bold">${meal.price * meal.quantity}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="items-center flex justify-center">
                                            <button
                                                className="w-6 h-6 border-2 rounded-full flex justify-center items-center"
                                                onClick={()=>deleteItemCart(meal.id)}
                                            >X</button>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="flex justify-between py-4">
                                <p>Order Total</p>
                                <p className="font-bold">${totalCart}</p>
                            </div>
                        </>


                    )}




            </div>


        </div >
    )
}
