import paintScratch from '/public/assets/paint-scratch.svg'
import background from '/public/assets/bg1.jpg'
import trainer1 from '/public/assets/trainer-assest/trainer1.png'
import trainer2 from '/public/assets/trainer-assest/trainer2.png'
import trainer3 from '/public/assets/trainer-assest/trainer3.png'
import Image from 'next/image'

import TrainersTemplate from '@/app/components/trainers'

export default function Trainers() {
  return (
    <div className='w-full relative min-h-[100vh] text-black p-6 py-16'>
      <div className='w-full h-full absolute -z-10 top-0 left-0'>
        <Image src={background} alt="background" className='w-full h-full object-cover object-center opacity-10' />
      </div>
      <div className='w-full text-center md:w-[70%] mx-auto'>
        <Image src={paintScratch} alt="paintScratch" className='mx-auto' />
        <span className='font-semibold text-white block mt-[-28px]'>gym trainers</span>
        <h1 className='text-5xl lg:text-6xl font-bold my-3'>Team Of Expert Coaches</h1>
        <p>Empower your fitness journey with our exceptional team of expert coaches. We&apos;re here to provide personalized guidance, support, and expertise, ensuring you achieve your health and wellness goals. Trust in our dedicated team to lead you towards a stronger, healthier, and more resilient version of yourself.</p>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-7 my-10 px-6">
        <TrainersTemplate trainer={trainer1}
          name="Mitchell San"
          job="Personal Fitness Trainer" />
        <TrainersTemplate trainer={trainer2}
          name="Mark Thompson"
          job="Strength and Conditioning Coach" />
        <TrainersTemplate trainer={trainer3}
          name="Jessica Lee"
          job="Cardiovascular Fitness Instructor" />
      </div>
    </div>
  )
}