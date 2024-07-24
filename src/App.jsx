import Cart from "./components/Cart"
import ItemList from "./components/ItemList"

function App() {
  

  return (
    <main className="w-screen flex items-center justify-center px-6 md:gap-8 md:my-12 max-md:flex-col">
      <ItemList />
      <Cart />
    </main>
  )
}

export default App
