import React from 'react'
import Image from "next/image";
function StoryCard({src,profile,name}) {
  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 hover:animate-pulse'>
         <Image
         className="absolute  opacity-0 lg:opacity-100 rounded-full z-50 top-10"
         src={profile}
         width = {40}
         height= {40}
         layout = "fixed"
         alt='profile'
         />
          <Image
         className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
         src={src}
         layout = "fill"
         alt="src"
         />
         
    </div>
  )
}

export default StoryCard