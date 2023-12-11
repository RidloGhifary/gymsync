import Image from 'next/image'
import background from '/public/assets/pageBackground.png'

export default function PageBackground({ name }) {
  return (
    <div className='w-full bg-cover bg-center'>
      <div className="relative top-0 left-0 right-0 max-h-[200px]">
        <Image src={background} alt="background"
          className="w-full max-h-[200px] object-cover object-center" />
        <p className='text-center text-2xl font-bold mt-[-50px] text-white uppercase'>
          {name}</p>
      </div>
    </div>
  )
}