import { SlideOver } from './SlideOver'
import { useCart } from '../contexts/useCartContext'

export default function Cart({ open, setOpen }) {
  const { cart } = useCart()
  
  return (
    <SlideOver open={open} setOpen={setOpen} title="Cart">
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        {cart.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {cart.map((product) => (
              <div key={product.id} className="py-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <img src={product.image} className="h-10 w-10 object-cover object-center" />
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                    <p className="text-sm text-gray-500">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-lg text-gray-500">No items in cart</p>
          </div>
        )}
      </div>
    </SlideOver>
  )
}
