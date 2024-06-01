import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon, LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ProductModal({ open, setOpen, product }) {
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="z-10 absolute top-2 right-2">
                  <div className="flex items-center space-x-2">
                    <Link href={`/product/${product.id}`}>
                      <LinkIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                    </Link>
                    
                    <XMarkIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)} />
                  </div>
                </div>

                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="div" className="flex justify-center items-center">
                        <img src={product.image} className="size-96 object-cover object-center rounded-lg" />
                      </DialogTitle>

                     <div className="flex flex-col mt-4">
                      <h3 className="text-xl font-semibold leading-6 text-gray-900">{product.title}</h3>
                      <span className="text-gray-900">${product.price}</span>
                     </div>
                      <p className="mt-2 text-sm text-gray-500">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
