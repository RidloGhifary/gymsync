import { CaretRight, Stack } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageTemplate({ img, title, desc, date, category }) {
  return (
    <div className="w-full mb-5">
      <Image src={img} width={1000} height={1000} alt="imgBlog1" className="w-auto h-auto object-cover object-center" />
      <p className="flex items-center gap-1 my-4">
        <Stack size={15} color="#ee2239" weight="fill" />
        By <b>Admin</b> | {date} | {category}
      </p>
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-secBlack my-4">{desc}</p>
      <Link href="/classes" className="group relative mt-10 px-6 py-4 uppercase bg-secBlack text-base font-semibold flex text-white items-center justify-center gap-2 mx-auto lg:mx-0"
        style={{ maxWidth: "240px" }}>
        Purchase Now
        <CaretRight size={25} color="#ffffff" weight="bold"
          className="group-hover:ml-2" style={{ transition: "all .3s ease-in-out" }} />
        <div className="w-full absolute top-[-15px] right-[-15px] left-[15px] bottom-[15px] border border-secBlack group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0"
          style={{ transition: "all .3s ease-in-out" }}></div>
      </Link>
    </div>
  )
}