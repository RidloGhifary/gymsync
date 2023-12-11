import Link from 'next/link'
import NavLogo from '/public/assets/myLogo.png'
import Image from 'next/image'
import facebook from '/public/assets/social-media-icons/facebook.png'
import instagram from '/public/assets/social-media-icons/instagram.png'
import twitter from '/public/assets/social-media-icons/twitter.png'
import telegram from '/public/assets/social-media-icons/telegram.png'

export default function Footer() {

  const classesList = [
    'Cardio Workouts',
    'Strength Training',
    'Yoga Sessions',
    'HIIT (High-Intensity Interval Training)',
    'Pilates',
    'Spinning',
    'Zumba',
    'Functional Fitness',
  ];

  return (
    <footer className="w-full p-6 py-16 bg-white text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="col-span-1 md:col-span-2 mb-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src={NavLogo} alt="NavLogo" className="w-[120px]" />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-black text-xl">GymSync</p>
            <p className="uppercase font-light text-black text-[10px] indent-4">GYM CENTER</p>
          </div>
        </Link>
        <p className="text-secBlack font-medium my-4">
          Elevate your fitness journey with GymSync, your dedicated partner in achieving your health and wellness goals. Join us today and experience the best in fitness and community.
        </p>
        <div className='flex items-center gap-4 mb-4'>
          <Image src={facebook} alt={facebook} width={30} height={30} className='opacity-70' />
          <Image src={instagram} alt={instagram} width={30} height={30} className='opacity-70' />
          <Image src={twitter} alt={twitter} width={30} height={30} className='opacity-70' />
          <Image src={telegram} alt={telegram} width={30} height={30} className='opacity-70' />
        </div>
        <p className="text-secBlack font-medium">&copy; 2023 GymSync. All rights reserved.</p>
        <Link href="/https://github.com/RidloGhifary" className='text-blue-500'>Creator`s Github</Link>
      </div>

      <div className="col-span-1 mb-8">
        <h3 className="text-2xl font-bold">Classes</h3>
        <hr className='border-b-4 border-red w-[20%] mb-4' />
        <ul className="text-secBlack">
          {classesList.map((className, index) => (
            <li key={index} className='mb-3'>{className}</li>
          ))}
        </ul>
      </div>

      <div className="col-span-1 mb-8">
        <h3 className="text-2xl font-bold">Open Hours</h3>
        <hr className='border-b-4 border-red w-[20%] mb-4' />
        <ul className='text-secBlack'>
          <li className='mb-3 font-semibold'>Monday - Friday:</li>
          <li className='mb-3'>6:00 AM - 9:00 PM</li>
          <li className='mb-3 font-semibold'>Saturday - Sunday:</li>
          <li className='mb-3'>8:00 AM - 6:00 PM</li>
        </ul>
      </div>
    </footer>
  )
}