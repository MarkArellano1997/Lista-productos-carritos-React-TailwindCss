import { useMemo } from "react"

export default function Meal({ meal, addMealCart }) {

    const { name, category, price, image: { desktop } } = meal 

    return (
        <div className="sm:w-1/3 p-4 relative">
            <div className="flex flex-col items-center justify-center">
                <img src={`${desktop}`} alt="" className="rounded-md" />
                <button
                    className="flex border border-orange-800 py-2 px-6 rounded-3xl items-center justify-center absolute md:bottom-24 bg-white"
                    onClick={() => addMealCart(meal)}
                    id="button"
                >
                    
                    <img src="\img\icon-add-to-cart.svg" alt="" />
                    <p><strong>Add to Cart</strong></p>
                </button>
            </div>
            <div className="mt-8">
                <p className="opacity-45">{category}</p>
                <p><strong>{name}</strong></p>
                <p className="text-orange-600"><strong>${price}</strong></p>
            </div>
        </div>
    )
}
