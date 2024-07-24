import data from '../assets/data.json'
import ItemCard from "./ItemCard"

function ItemList() {
  return (
    <section className="w-full flex flex-col md:w-3/5">
        <h1 className="text-[2.8rem] text-Rose900 font-bold mt-4 md:mt-11">Desserts</h1>
        <div className="grid grid-cols-1 gap-y-10 mt-8 md:grid-cols-3 md:gap-4">
          {data.map((product) => {
            return <ItemCard key={product.name} {...product} />
          })}
        </div>
    </section>
  )
}

export default ItemList