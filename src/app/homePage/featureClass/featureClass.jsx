import Image from 'next/image'
import cycling from '/public/assets/class/cycling.jpg'
import karate from '/public/assets/class/karate.jpg'
import martial from '/public/assets/class/martial-arts.jpg'
import meditation from '/public/assets/class/meditation.jpg'
import power from '/public/assets/class/power.jpg'
import workout from '/public/assets/class/workout.jpg'
import PaintScratch from '/public/assets/paint-scratch.svg'

export default function FeatureClass() {
  return (
    <section className="relative w-full p-8 py-16">
      <div className='mx-auto'>
        <Image src={PaintScratch} alt="paint-scrtch" width={250} height={250} className='mx-auto' />
        <p className='font-bold text-center text-white mt-[-30px]'>OUR FEATURED CLASS</p>
      </div>
      <h1 className='my-10 text-center font-bold text-black text-4xl'>We Are Offering Best Flexible Classes</h1>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <div className="realtive lg:col-span-2 group w-full overflow-hidden grayscale hover:grayscale-0">
          <Image src={cycling} alt="cycling" width={500} height={500}
            className="w-full h-full max-h-[300px] object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-125" />
          <div className='absolute z-[1] bottom-5 left-5'>
            <p className='font-bold text-2xl text-white mb-3'>Cycling</p>
            <p className='bg-red text-white text-sm p-2'>Monday: 9:00am-10:00am</p>
          </div>
        </div>
        <div className="realtive group w-full overflow-hidden grayscale hover:grayscale-0">
          <Image src={karate} alt="cycling" width={500} height={500}
            className="w-full h-full max-h-[300px] object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-125" />
          <div className='absolute z-[1] bottom-5 left-5'>
            <p className='font-bold text-2xl text-white mb-3'>Karate</p>
            <p className='bg-red text-white text-sm p-2'>Tuesday: 10:00am-11:00am</p>
          </div>
        </div>
        <div className="realtive group w-full overflow-hidden grayscale hover:grayscale-0">
          <Image src={martial} alt="cycling" width={500} height={500}
            className="w-full h-full max-h-[300px] object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-125" />
          <div className='absolute z-[1] bottom-5 left-5'>
            <p className='font-bold text-2xl text-white mb-3'>Martial Art</p>
            <p className='bg-red text-white text-sm p-2'>Tuesday: 11:00am-12:00am</p>
          </div>
        </div>
        <div className="realtive group w-full overflow-hidden grayscale hover:grayscale-0">
          <Image src={meditation} alt="cycling" width={500} height={500}
            className="w-full h-full max-h-[300px] object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-125" />
          <div className='absolute z-[1] bottom-5 left-5'>
            <p className='font-bold text-2xl text-white mb-3'>Meditation</p>
            <p className='bg-red text-white text-sm p-2'>Thuesday: 12:00am-13:00am</p>
          </div>
        </div>
        <div className="realtive group w-full overflow-hidden grayscale hover:grayscale-0">
          <Image src={power} alt="cycling" width={500} height={500}
            className="w-full h-full max-h-[300px] object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-125" />
          <div className='absolute z-[1] bottom-5 left-5'>
            <p className='font-bold text-2xl text-white mb-3'>Power</p>
            <p className='bg-red text-white text-sm p-2'>Friday: 13:00am-14:00am</p>
          </div>
        </div>
        <div className="realtive lg:col-span-2 group w-full overflow-hidden grayscale hover:grayscale-0">
          <Image src={workout} alt="cycling" width={500} height={500}
            className="w-full h-full max-h-[300px] object-cover object-center transition-transform duration-300 transform scale-100 group-hover:scale-125" />
          <div className='absolute z-[1] bottom-5 left-5'>
            <p className='font-bold text-2xl text-white mb-3'>Workout</p>
            <p className='bg-red text-white text-sm p-2'>Thuesday: 14:00am-15:00am</p>
          </div>
        </div>

      </div>
    </section>
  )
}