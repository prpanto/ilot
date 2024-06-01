import { useState } from 'react'
import ProductModal from '../components/ProductModal'
import { useCart } from '../contexts/useCartContext'

export default function ProductListItem({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addToCart } = useCart()

  return (
    <>
      <div key={product.id} className="flex flex-col h-full rounded-md shadow-md">
        <button onClick={() => setIsModalOpen(true)} className="group flex-grow">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img src={product.image} className="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          
          <div className="mt-4 px-4 flex flex-col items-start space-y-1">
            <h3 className="text-sm text-gray-700 text-left">{product.title}</h3>
            <p className="text-lg font-medium text-gray-900">${product.price}</p>
          </div>
        </button>
        
        <div className="mt-2 p-2 flex justify-end items-center">
          <button onClick={() => addToCart(product)} className="bg-indigo-600 p-1.5 lg:p-2 rounded-md text-sm lg:text-base text-white hover:bg-indigo-500">Add To Cart</button>
        </div>
      </div>

      <ProductModal key={product.id} open={isModalOpen} setOpen={setIsModalOpen} product={product} />
    </>
  );
}
