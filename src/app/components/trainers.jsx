import bgTrainer from '/public/assets/trainer-assest/bg-trainer.png'
import Image from 'next/image'
import { FacebookLogo, InstagramLogo, TiktokLogo, TwitterLogo } from
  '@phosphor-icons/react/dist/ssr'

export default function TrainersTemplate({ trainer, name, job }) {
  return (
    <div className='relative'>
      <div className='w-full h-full group'>
        <Image src={bgTrainer} alt="bgTrainer" width={300} height={300}
          className=" object-cover object-center mx-auto" />
        <Image src={trainer} alt="bgTrainer" width={200} height={200}
          className=" object-cover object-center absolute top-0 left-[50%] translate-x-[-50%] grayscale group-hover:grayscale-0" />
      </div>
      <div className="w-full group absolute z-10 bottom-0 left-0 bg-white shadow-lg rounded-md">
        <div className='text-black p-5 text-center'>
          <p className="text-xl font-bold">{name}</p>
          <p className='my-1 text-sm'>{job}</p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <InstagramLogo size={20} color="#4d4d4d" weight="fill" />
            <FacebookLogo size={20} color="#4d4d4d" weight="fill" />
            <TwitterLogo size={20} color="#4d4d4d" weight="fill" />
            <TiktokLogo size={20} color="#4d4d4d" weight="fill" />
          </div>
        </div>
        <hr className='border-t-2 border-red mx-auto transition-all duration-300 ease-in-out w-[20%] origin-center group-hover:w-full' />
      </div>
    </div>
  )
}