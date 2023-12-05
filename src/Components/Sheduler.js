import React from 'react'
import { GrNext,GrPrevious } from "react-icons/gr";

const Sheduler = () => {
  return (
    <div className=' w-full'>
        <div className="">
        <div className="Carousal w-full flex">
    <div className="Previous w-1/2"><GrPrevious className=' text-xl' /></div>
    <div className="Next w-1/2"><GrNext className=' text-xl'/></div>
</div>
<div className='TableData w-full bg-black'>
    </div>   
        </div>
  
    </div>
  )
}

export default Sheduler