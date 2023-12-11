import { Star } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function TestimonialsTemplate(props) {
  return (
    <div className='w-full h-full p-4 shadow-xl bg-black text-white rounded-md'>
      <div className='flex items-center gap-2'>
        <Image src={props.photo} alt="photo-person" className='w-[50px] h-[50px] rounded-full object-cover object-center' />
        <div className="flex flex-col text-white">
          <p className='font-semibold text-lg'>{props.name}</p>
          <p className="text-sm italic">{props.job}</p>
        </div>
      </div>
      <div className='flex items-center my-5'>
        <Star size={25} color="#fdd017" weight="fill" />
        <Star size={25} color="#fdd017" weight="fill" />
        <Star size={25} color="#fdd017" weight="fill" />
        <Star size={25} color="#fdd017" weight="fill" />
        <Star size={25} color="#fdd017" weight="fill" />
      </div>
      <p>{props.comment}</p>
    </div>
  )
}