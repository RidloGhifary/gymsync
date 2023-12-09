import { X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function SideNavbar({ setNavigasibar, navigasibar }) {
  return (
    <div className={navigasibar ?
      "absolute top-0 bottom-0 left-0 right-0 bg-white text-black" :
      "absolute top-0 left-[-200%] right-[200%] bg-white text-black"}
      style={{ transition: "all .3s ease-in-out" }}>
      <div className="relative">
        <div className="absolute right-10 top-10" onClick={() => setNavigasibar(false)}>
          <X size={35} color="#EE2239" weight="bold"
            className="transition hover:scale-110 cursor-pointer" />
        </div>

        <div className="flex flex-col justify-center items-center gap-10 h-[100vh]">
          <Link href="/"
            className="font-semibold transition hover:text-red">Home</Link>
          <Link href="/about"
            className="font-semibold transition hover:text-red">About</Link>
          <Link href="/classes"
            className="font-semibold transition hover:text-red">Classes</Link>
          <Link href="/schedule"
            className="font-semibold transition hover:text-red">Schedule</Link>
          <Link href="/gallery"
            className="font-semibold transition hover:text-red">Gallery</Link>
          <Link href="/pricing"
            className="font-semibold transition hover:text-red">Pricing</Link>
          <Link href="/blog"
            className="font-semibold transition hover:text-red">Blog</Link>
          <Link href="/contact"
            className="font-semibold transition hover:text-red">Contact</Link>
        </div>
      </div>
    </div>
  )
}