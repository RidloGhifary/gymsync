import Image from 'next/image'
import background from '/public/assets/bg1.jpg'
import paintBrush from '/public/assets/paint-brush.jpg'
import bag from '/public/assets/whychooseus/bag.png'
import bootle from '/public/assets/whychooseus/bootle.png'
import equipment from '/public/assets/whychooseus/equipment.png'
import free from '/public/assets/whychooseus/free.png'
import mainBg from '/public/assets/whychooseus/main-bg.png'
import paintScratch from '/public/assets/paint-scratch.svg'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export default function WhyChooseUs() {
  return (
    <section className='relative w-full min-h-[100vh] bg-black text-white'>
      <div className='w-full h-full absolute top-0 left-0'
        style={{ mixBlendMode: 'color-burn' }}>
        <Image src={background} alt="background" className='h-full object-cover object-center' />
      </div>

      <div className='relative w-full lg:px-[300px] bg-red p-6 pt-[-100px]'>
        <div className='absolute top-0 left-[50%] translate-x-[-50%]'
          style={{ mixBlendMode: 'color-burn' }}>
          <Image src={paintBrush} alt="paintBrush" width={300} height={300} />
        </div>
        <h1 className='text-2xl md:text-4xl font-bold text-center'>We Are Always Providing Best Fitness Service For You</h1>
        <Link href="/contact" className="group relative mt-6 px-8 py-4 uppercase bg-white text-base font-semibold flex text-red items-center justify-center gap-2 mx-auto"
          style={{ maxWidth: "240px" }}>
          Join with us
          <CaretRight size={25} color="#ee2237" weight="bold"
            className="group-hover:ml-2" style={{ transition: "all .3s ease-in-out" }} />
          <div className="w-full absolute top-[-15px] right-[-15px] left-[15px] bottom-[15px] border border-white group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0"
            style={{ transition: "all .3s ease-in-out" }}></div>
        </Link>
      </div>

      <div className='relative grid grid-cols-1 laptop:grid-cols-3 justify-center items-center z-10 w-full p-6 py-16'>
        <div className='w-full mx-auto'>
          <Image src={mainBg} alt="mainBg" className='w-full md:w-[70%] lg:w-full mx-auto' />
        </div>
        <div className='md:col-span-2 text-white text-center lg:text-left py-12 px-8'>
          <Image src={paintScratch} alt="paintScratch" className='mx-auto lg:mx-0' />
          <span className='font-semibold block mt-[-28px] lg:ml-[30px]'>WHY CHOOSE US</span>
          <h1 className='text-4xl lg:text-6xl font-semibold my-3'>We Can Give A Shape Of Your Body Here!</h1>
          <p className=''>At <b>GymSync</b> our dedicated establishment, we take pride in offering expert services tailored to your unique needs. Whether you aspire to tone, sculpt, or transform your body, our skilled professionals are here to guide you on a personalized journey, helping you attain the ideal shape that aligns with your vision of physical well-being and confidence. Experience a transformative process with us, where your body&apos;s potential is brought to life!</p>
          <div className='grid grid-cols-2 gap-4 my-3'>
            <div className='flex items-center gap-3'>
              <div className='bg-secBlack rounded-full p-2'>
                <Image src={bag} alt="bag" width={40} height={40} />
              </div>
              <p className='font-bold md:text-lg'>Free Fitness Training</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-secBlack rounded-full p-2'>
                <Image src={bootle} alt="bag" width={40} height={40} />
              </div>
              <p className='font-bold md:text-lg'>Fresh Bottle Watter</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-secBlack rounded-full p-2'>
                <Image src={equipment} alt="bag" width={40} height={40} />
              </div>
              <p className='font-bold md:text-lg'>Modern Gym Equipments</p>
            </div>
            <div className='flex items-center gap-3'>
              <div className='bg-secBlack rounded-full p-2'>
                <Image src={free} alt="bag" width={40} height={40} />
              </div>
              <p className='font-bold md:text-lg'>Gym Bag Equipments</p>
            </div>
          </div>
          <Link href="/classes" className="group relative mt-10 px-8 py-4 uppercase bg-secBlack text-base font-semibold flex text-white items-center justify-center gap-2 mx-auto lg:mx-0"
            style={{ maxWidth: "240px" }}>
            Our Classes
            <CaretRight size={25} color="#ffffff" weight="bold"
              className="group-hover:ml-2" style={{ transition: "all .3s ease-in-out" }} />
            <div className="w-full absolute top-[-15px] right-[-15px] left-[15px] bottom-[15px] border border-secBlack group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0"
              style={{ transition: "all .3s ease-in-out" }}></div>
          </Link>
        </div>
      </div>
    </section>
  )
}