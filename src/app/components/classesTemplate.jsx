import { CaretRight, Clock, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function ClassesTemplate({ nameClass, name, schedule }) {
  return (
    <div className='absolute bottom-7 left-7 text-white'>
      <p className="font-bold text-3xl mb-1">{nameClass}</p>
      <div className="flex items-center gap-1 my-2">
        <p className="flex items-center gap-[2px] drop-shadow-md">
          <User size={25} color="#ffffff" weight="bold" />{name}</p>
        <p className="flex items-center gap-[2px] drop-shadow-md">
          <Clock size={25} color="#ffffff" weight="fill" />{schedule}</p>
      </div>
      <Link href="/contact" className="group relative mt-9 px-6 py-4 uppercase bg-white text-base font-semibold flex text-red items-center justify-center gap-2 mx-auto"
        style={{ maxWidth: "220px" }}>
        Join Now
        <CaretRight size={25} color="#ee2237" weight="bold"
          className="group-hover:ml-2" style={{ transition: "all .3s ease-in-out" }} />
        <div className="w-full absolute top-[-15px] right-[-15px] left-[15px] bottom-[15px] border border-white group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0"
          style={{ transition: "all .3s ease-in-out" }}></div>
      </Link>
    </div>
  )
}