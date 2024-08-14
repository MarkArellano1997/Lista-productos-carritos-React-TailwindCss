import Header from "./components/Header"
import Meal from "./components/Meal"
import Cart from "./components/Cart"
import { useCart } from "./hooks/useCart"

function App() {

  const {data, cart, addMealCart, deleteItemCart, isEmpty, totalCart} = useCart()
  

  return (
    <>
      <div className="w-full flex px-2">

        <div className="sm:w-3/4 px-10 container">

          <Header />

          <main className="mt-4 flex flex-wrap">

            {data.map((meal) => (
              <Meal
                key={meal.id}
                meal={meal}
                addMealCart={addMealCart}
              />
            ))}
          </main>

        </div>

        <Cart 
          cart={cart}
          deleteItemCart={deleteItemCart}
          isEmpty={isEmpty}
          totalCart={totalCart}
        />

      </div>

    </>
  )
}

export default App
