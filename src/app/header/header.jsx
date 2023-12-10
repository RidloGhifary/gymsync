import Image from "next/image";
import headerBg from '/public/assets/header-bg.png'
import paintHeaderBg from '/public/assets/paint-scratch.svg'
import Link from "next/link";
import { CaretRight, InstagramLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";

export default function Header() {
  return (
    <header className="relative w-full min-h-[100vh]">
      <div className="w-full h-[100vh]">
        <Image src={headerBg} alt="headerBg" width={1500} height={1500}
          className="w-full h-full object-cover object-center" />
      </div>

      <div className="w-full absolute left-0 top-0 bottom-0 right-0 p-10 pt-16">
        <div className="w-full sm:w-[100%] md:w-[80%] laptop:w-[60%] h-full flex justify-center items-center gap-20">
          <div className="hidden sm:flex flex-col justify-center items-center gap-5">
            <div className="transform -rotate-90 origin-center text-center mb-5">
              <p className="font-semibold text-xl text-white">SHARE</p>
            </div>
            <hr className="h-[70px] border-l-4 border-red" />
            <div className="flex flex-col gap-4 justify-center items-center">
              <InstagramLogo size={26} color="#ffffff" weight="fill" className="transition hover:scale-110 cursor-pointer" />
              <TwitterLogo size={26} color="#ffffff" weight="fill" className="transition hover:scale-110 cursor-pointer" />
              <LinkedinLogo size={26} color="#ffffff" weight="fill" className="transition hover:scale-110 cursor-pointer" />
            </div>
          </div>

          <div className="bg-transparent">
            <div className="relative">
              <div className="w-full absolute left-[50%] translate-x-[-50%] top-0 text-center">
                <Image src={paintHeaderBg} alt="bg-header" width="100%" height="100%"
                  className="w-[300px] mx-auto" />
                <p className="font-semibold mt-[-35px] text-white">Fitness Meets Inspiration</p>
              </div>
            </div>
            <article className="text-white text-center mt-16">
              <h1 className="my-4 font-bold text-6xl leading-[80px]">Unleash Your Potential at <i className="font-black">GymSync</i></h1>
              <Link href="/classes" className="group relative mt-8 px-8 py-4 bg-white text-lg font-semibold flex text-red items-center justify-center gap-2 mx-auto"
                style={{ maxWidth: "220px" }}>
                Our classes
                <CaretRight size={25} color="#ee2237" weight="bold"
                  className="group-hover:ml-2" style={{ transition: "all .3s ease-in-out" }} />
                <div className="w-full absolute top-[-15px] right-[-15px] left-[15px] bottom-[15px] border border-white group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0"
                  style={{ transition: "all .3s ease-in-out" }}></div>
              </Link>
            </article>
          </div>
        </div>
      </div>
    </header>
  )
}