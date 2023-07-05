"use client"
import React from 'react'

export default function CounterPage() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <div>
        <h1>Counter : {count} </h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={increment}> + </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4' onClick={decrement}> - </button>
     </div>
  )
}