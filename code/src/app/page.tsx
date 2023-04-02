'use client';
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Example() {
  const [isShowing, setIsShowing] = useState(true)
  return (
    <div className="flex flex-col items-center py-16">
      <button onClick={() => setIsShowing((isShowing) => !isShowing)} className='px-5 py-1.5 bg-primary-900 text-white rounded hover:bg-[#000] hover:shadow active:scale-95 transition-all duration-300'>
        Toggle
      </button>
      <Transition
        show={isShowing}
        className='text-white text-xl my-4'
        as='p'
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        unmount={false}
      >
        I will fade in and out
      </Transition>
    </div>
  )
}