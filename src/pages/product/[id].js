 import BasicLayout from '../../components/BasicLayout'

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://fakestoreapi.com/products/${context.query.id}`)
  const product = await res.json()

  return {
    props: { product }
  }
}

export default function Product({ product }) {
  return (
    <BasicLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex gap-4">
          <div>
            <img src={product.image} alt={product.title} className="size-96 object-cover object-center group-hover:opacity-75" />
          </div>

          <div className="p-2 flex flex-col">
            <div className="flex flex-col space-y-2 flex-grow">
              <div className="flex flex-col space-y-1">
                <h1 className="text-4xl font-bold">{product.title}</h1>
                <p className="text-2xl font-medium text-gray-900">${product.price}</p>
              </div>

              <p className="mt-4 text-base/0 font-medium text-gray-700 ">{product.description}</p>
            </div>

            <div className="mt-2 flex justify-end items-center">
              <button className="bg-indigo-600 p-1.5 lg:p-2 rounded-md text-sm lg:text-base text-white hover:bg-indigo-500">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  ) 
}
