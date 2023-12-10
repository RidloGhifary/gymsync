import Image from 'next/image'
import background from '/public/assets/bg1.jpg'
import timeIcon from '/public/assets/icons/time-icon.png'
import listIcon from '/public/assets/icons/list-icon.png'
import weightIcon from '/public/assets/icons/weight-icon.png'
import photo1 from '/public/assets/gallery/photo1.jpg'
import photo2 from '/public/assets/gallery/photo2.jpg'
import photo3 from '/public/assets/gallery/photo3.jpg'
import person from '/public/assets/whoweare/person-without-bg.png'
import textRunning from '/public/assets/whoweare/running.png'
import recHalf from '/public/assets/whoweare/rec-half.svg'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

export default function WhoWeAre() {
  return (
    <div className='relative w-full min-h-[100vh]'>
      <Image src={background} alt="background" className='w-full h-full object-cover object-center absolute -z-10 opacity-5 top-0 left-0' />

      <div className='grid md:grid-cols-3 gap-6 justify-center p-6 md:p-10 mt-[-90px]'>
        <div className='h-[350px] relative z-10 overflow-hidden rounded-tl-3xl rounded-br-3xl text-center shadow-lg group cursor-pointer'>
          <Image src={photo1} alt="photo1" className='w-full h-full object-cover object-center' />
          <div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center p-6 transition bg-white group-hover:bg-black/50'>
            <Image src={timeIcon} alt="time-icon" width="100%" height="100%" />
            <h1 className='font-bold my-5 text-2xl text-black transition group-hover:text-white'>PROGRESSION</h1>
            <p className='font-normal text-base text-secBlack transition group-hover:text-gray-100'>Transform your fitness at GymSync. Elevate every workout, redefine your limits, and join a community committed to your success.</p>
          </div>
        </div>
        <div className='h-[350px] relative z-10 overflow-hidden rounded-tl-3xl rounded-br-3xl text-center shadow-lg group cursor-pointer'>
          <Image src={photo2} alt="photo1" className='w-full h-full object-cover object-center' />
          <div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center p-6 transition bg-white group-hover:bg-black/50'>
            <Image src={listIcon} alt="list-icon" width="100%" height="100%" />
            <h1 className='font-bold my-5 text-2xl text-black group-hover:text-white'>NUTRITION</h1>
            <p className='font-normal text-base text-secBlack group-hover:text-gray-100'>Revitalize your fitness journey at GymSync. Elevate your workout routine, fuel your body with precision nutrition, and join a community committed to your holistic well-being.</p>
          </div>
        </div>
        <div className='h-[350px] relative z-10 overflow-hidden rounded-tl-3xl rounded-br-3xl text-center shadow-lg group cursor-pointer'>
          <Image src={photo3} alt="photo1" className='w-full h-full object-cover object-center' />
          <div className='absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center p-6 transition bg-white group-hover:bg-black/50'>
            <Image src={weightIcon} alt="weight-icon" width="100%" height="100%" />
            <h1 className='font-bold my-5 text-2xl text-black group-hover:text-white'>WORKOUT</h1>
            <p className='font-normal text-base text-secBlack group-hover:text-gray-100'>Elevate your workout game at GymSync. Unleash your potential, redefine your limits, and join a community committed to your fitness journey.</p>
          </div>
        </div>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center p-8 my-8'>
        <div>
          <h1 className='text-black font-bold text-5xl lg:text-7xl'>Get ready to react your future goal</h1>
          <p className='text-secBlack text-base mt-5 lg:text-lg'>Prepare to conquer your future goals with a fitness journey at its core. Energize your workouts, nourish your body with precision nutrition, and become part of a supportive community dedicated to helping you surpass your limits and achieve lasting well-being.</p>
          <Link href="/classes" className="group relative mt-12 px-8 py-4 bg-black text-lg font-semibold flex text-white items-center justify-center gap-2"
            style={{ maxWidth: "220px" }}>
            Take a tour
            <CaretRight size={25} color="#ffffff" weight="bold"
              className="group-hover:ml-2" style={{ transition: "all .3s ease-in-out" }} />
            <div className="w-full absolute top-[-15px] right-[-15px] left-[15px] bottom-[15px] border border-black group-hover:top-0 group-hover:right-0 group-hover:left-0 group-hover:bottom-0"
              style={{ transition: "all .3s ease-in-out" }}></div>
          </Link>
        </div>
        <div className='relative md:block hidden'>
          <Image src={textRunning} alt='running text' width="100%" height="100%"
            className='absolute bottom-0 left-[20%] object-cover object-center' />
          <Image src={recHalf} alt='rec-half' width={240} height="100%"
            className='w-[50%] absolute right-[15%] bottom-0 object-cover object-center' />
          <Image src={person} alt="person" width={500} height={500}
            className='w-[80%] absolute left-20 top-0 object-cover object-center' />
        </div>
      </section>
    </div>
  )
}