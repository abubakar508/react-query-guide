import Image from 'next/image'
import React from 'react'

type CardProps = {
    key: string,
    title: string,
    image: string
}

const Card = ({ key, title, image}: CardProps) => {
  return (
    <div key={key} className=''>
        <div>
            <Image
            width={300}
            height={400}
            alt={title}
            src={`https://image.tmdb.org/t/p/w500/${image}`}
            quality={100}
            title={title}
            priority
            className=' w-[300px] h-[350px]'
            />
            {/* <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt={title} /> */}
        </div>
        <div className=' font-bold p-2'>
          <span className=''>
            {title}
            </span>
        </div>
    </div>
  )
}

export default Card;