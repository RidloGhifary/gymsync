"use client"

import Image from "next/image";
import Link from "next/link";
import NavLogo from '/public/assets/myLogo.png'
import gallery1 from '/public/assets/gallery/photo1.jpg'
import gallery2 from '/public/assets/gallery/photo2.jpg'
import gallery3 from '/public/assets/gallery/photo3.jpg'
import gallery4 from '/public/assets/gallery/photo4.jpg'
import gallery5 from '/public/assets/gallery/photo5.jpg'
import gallery6 from '/public/assets/gallery/photo6.jpg'
import SideNavbar from "./sideNavbar";
import { AlignLeft, EnvelopeSimpleOpen, FacebookLogo, InstagramLogo, List, MapPin, Phone, Plus, TwitterLogo, User, X } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";

export default function Navbar() {
  const [navigasibar, setNavigasibar] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false)
  const [positionNavbar, setPositionNavbar] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const bodyClick = (event) => {
      if (!sectionRef.current.contains(event.target)) {
        if (showSideBar === true) setShowSideBar(false)
      }
    }

    if (navigasibar) {
      document.body.classList.add("hide-scrollbar");
    } else {
      document.body.classList.remove("hide-scrollbar");
    }

    document.addEventListener('click', bodyClick)
    return () => {
      document.removeEventListener('click', bodyClick)
      document.body.classList.remove("hide-scrollbar");
    }
  }, [showSideBar, navigasibar])

  useEffect(() => {
    const handleScrollNavbar = () => {
      const scrollHeight = document.documentElement.scrollTop
      if (scrollHeight > 10) {
        setPositionNavbar(true)
      } else if (scrollHeight <= 10) {
        setPositionNavbar(false)
      }
    }

    document.addEventListener('scroll', handleScrollNavbar)
    return () => {
      document.removeEventListener('scroll', handleScrollNavbar)
    }
  }, [positionNavbar])

  const today = dayjs().format('dddd')

  return (
    <nav className={positionNavbar ? "fixed z-50 w-full mx-auto p-6 bg-black"
      : "fixed z-50 w-full mx-auto p-6 bg-transparent"}>
      <div className="flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image src={NavLogo} alt="NavLogo" className="w-[90px]" />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-white text-xl">GymSync</p>
            <p className="uppercase font-light text-white text-[10px] indent-4">GYM CENTER</p>
          </div>
        </Link>

        <div className="hidden laptop:flex items-center justify-center gap-4">
          <Link href="/"
            className="font-semibold text-white transition hover:text-red">Home</Link>
          <Link href="/about"
            className="font-semibold text-white transition hover:text-red">About</Link>
          <Link href="/classes"
            className="font-semibold text-white transition hover:text-red">Classes</Link>
          <Link href={`/schedule/days?day=${today.toLowerCase()}`}
            className="font-semibold text-white transition hover:text-red">Schedule</Link>
          <Link href="/gallery"
            className="font-semibold text-white transition hover:text-red">Gallery</Link>
          <Link href="/pricing"
            className="font-semibold text-white transition hover:text-red">Pricing</Link>
          <Link href="/blog"
            className="font-semibold text-white transition hover:text-red">Blog</Link>
          <Link href="/contact"
            className="font-semibold text-white transition hover:text-red">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <button title="Side-navbar"
            className="block laptop:hidden"
            onClick={() => setNavigasibar(!navigasibar)}>
            <List size={28} color="#ffffff" weight="bold" />
          </button>
          <Link href="/signup" title="Sign-up">
            <User size={28} color="#ffffff" weight="bold" />
          </Link>
          <button title="Side-Bar" onClick={() => setShowSideBar(!showSideBar)}>
            <AlignLeft size={28} color="#ffffff" weight="bold" />
          </button>

          <Link href='/contact' className="hidden sm:flex items-center gap-2 border border-white rounded-md p-2">
            <button className="bg-red p-2 rounded-md hover:animate-spin">
              <Plus size={20} color="#ffffff" weight="bold" />
            </button>
            <p className="font-semibold text-white">Join class now</p>
          </Link>
        </div>
      </div>

      {/* NAVIGASIBAR MOBILE */}
      <SideNavbar setNavigasibar={setNavigasibar} navigasibar={navigasibar} />

      {/* SIDE NAVIGASI BAR */}
      <section className={showSideBar ? "absolute left-0 top-0 w-[400px] min-h-[100vh] h-[calc(100vh-100px)] p-7 bg-white text-black overflow-y-scroll"
        : "absolute left-[-200%] top-0 w-[400px] min-h-[100vh] h-[calc(100vh-100px)] p-7 bg-white text-black overflow-y-scroll"}
        style={{ transition: "all .3s ease-in-out" }}
        ref={sectionRef}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src={NavLogo} alt="NavLogo" className="w-[90px]" />
            <div className="flex flex-col justify-center">
              <p className="font-bold  text-black text-xl">GymSync</p>
              <p className="uppercase font-light  text-black text-[10px] indent-4">GYM CENTER</p>
            </div>
          </div>
          <X size={35} color="#EE2239" weight="bold" className="cursor-pointer transition hover:scale-110" onClick={() => setShowSideBar(false)} />
        </div>

        <section className="my-16">
          <h1 className="text-black font-bold text-2xl">About Us</h1>
          <p className="text-secBlack mt-8">Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.</p>
        </section>

        <section className="my-16">
          <h1 className="text-black font-bold text-2xl">Gallery</h1>
          <div className="text-secBlack mt-8 grid grid-cols-3 gap-3">
            <Image src={gallery1} alt="gallery1" width={200} height={200} className="w-[100px] h-[100px] rounded-md object-cover object-center" />
            <Image src={gallery2} alt="gallery2" width={200} height={200} className="w-[100px] h-[100px] rounded-md object-cover object-center" />
            <Image src={gallery3} alt="gallery3" width={200} height={200} className="w-[100px] h-[100px] rounded-md object-cover object-center" />
            <Image src={gallery4} alt="gallery4" width={200} height={200} className="w-[100px] h-[100px] rounded-md object-cover object-center" />
            <Image src={gallery5} alt="gallery5" width={200} height={200} className="w-[100px] h-[100px] rounded-md object-cover object-center" />
            <Image src={gallery6} alt="gallery6" width={200} height={200} className="w-[100px] h-[100px] rounded-md object-cover object-center" />
          </div>
        </section>

        <section className="my-16">
          <h1 className="text-black font-bold text-2xl">Contact Info</h1>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <MapPin size={25} color="#ee2239" weight="fill" />
              <p className="font-medium text-black">12 Street, House Newyork City</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Phone size={25} color="#ee2239" weight="fill" />
              <p className="font-medium text-black">+123-456-789-234</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <EnvelopeSimpleOpen size={25} color="#ee2239" weight="fill" />
              <p className="font-medium text-black">gymsync@gmail.com</p>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h1 className="text-black font-bold text-2xl">Follow Us</h1>
          <div className="mt-8 flex items-center gap-4">
            <InstagramLogo size={28} color="#fcfcfc" weight="bold" className="bg-red p-2 rounded-full w-[50px] h-[50px]" />
            <FacebookLogo size={28} color="#fcfcfc" weight="fill" className="bg-red p-2 rounded-full w-[50px] h-[50px]" />
            <TwitterLogo size={28} color="#fcfcfc" weight="fill" className="bg-red p-2 rounded-full w-[50px] h-[50px]" />

          </div>
        </section>
        {/* END OF SIDE NAVIGASI BAR */}
      </section>
    </nav>
  )
}