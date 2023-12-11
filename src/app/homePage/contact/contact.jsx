import Link from "next/link";
import background from '/public/assets/contact/bg.jpg'
import Image from "next/image";

export default function Contact() {
  return (
    <section className="w-full p-6 py-16 bg-cover bg-center relative">
      <div className="absolute inset-0 max-h-[700px]">
        <Image src={background} alt="background"
          className="w-full h-full object-cover object-center" />
      </div>
      <div className="relative z-10 text-white text-center md:text-left">
        <h2 className="text-4xl font-bold">Have a Question?</h2>
        <p className="text-lg my-5">Feel free to reach out to our team. We&apos;re here to assist you on your fitness journey.</p>
        <p className="text-2xl font-semibold mb-6">Contact us at: <span className="text-red">+1 (555) 123-4567</span></p>
        <Link href="/contact" className="bg-red text-white px-6 py-3 rounded-full hover:bg-yellow-500 transition duration-300">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}