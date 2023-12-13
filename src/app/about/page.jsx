import Link from "next/link";
import PageBackground from "../components/pageBackground";
import { AnchorSimple, Barbell, CaretRight, ShareNetwork } from "@phosphor-icons/react/dist/ssr";
import person from '/public/assets/whoweare/person-without-bg.png'
import textRunning from '/public/assets/whoweare/running.png'
import recHalf from '/public/assets/whoweare/rec-half.svg'
import background from '/public/assets/bg1.jpg'
import aboutPhoto1 from '/public/assets/about/aboutphoto1.jpg'
import aboutPhoto2 from '/public/assets/about/aboutphoto2.jpg'
import aboutPhoto3 from '/public/assets/about/aboutphoto3.jpg'
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full relative">
      <Image src={background} alt="background" className='w-full h-full object-cover object-center absolute -z-10 opacity-5 top-0 left-0' />
      <PageBackground name="about" />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center p-8 my-16'>
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
            className='w-[70px] absolute bottom-0 left-[20%] object-cover object-center' />
          <Image src={recHalf} alt='rec-half' width={240} height="100%"
            className='w-[40%] absolute right-[20%] bottom-0 object-cover object-center' />
          <Image src={person} alt="person" width={500} height={500}
            className='w-[70%] absolute left-20 top-0 object-cover object-center' />
        </div>
      </section>

      <section className='bg-white grid grid-cols-1 lg:grid-cols-2 justify-center p-8 my-16'>
        <div className="text-center p-6">
          <AnchorSimple size={90} color="#ee2239" weight="fill" className="mx-auto" />
          <h1 className='text-black font-bold text-5xl md:text-6xl'>Our Fitness Journey</h1>
          <p className='text-secBlack text-sm md:text-base mt-5'>Since 2018, GymSync has been on a dedicated mission to inspire healthier lives. From our modest start, we&apos;ve grown into a thriving fitness community, fostering transformations and celebrating milestones. Our commitment to excellence and innovation has made GymSync a hub for wellness.</p>
        </div>
        <div className='w-full hidden lg:block'>
          <Image src={aboutPhoto1} alt="aboutphoto1" className="w-full object-cover object-center" />
        </div>
        <div className='w-full hidden lg:block'>
          <Image src={aboutPhoto2} alt="aboutphoto1" className="w-full object-cover object-center" />
        </div>
        <div className="text-center p-6">
          <Barbell size={90} color="#ee2239" weight="fill" className="mx-auto" />
          <h1 className='text-black font-bold text-5xl md:text-6xl'>Our Thriving Members</h1>
          <p className='text-secBlack text-sm md:text-base mt-5'>Discover the impact of GymSync through the stories of our members. Real people, real transformations. Their journeys speak volumes about the supportive community and transformative experiences awaiting you at GymSync.</p>
        </div>
        <div className="text-center p-6">
          <ShareNetwork size={90} color="#ee2239" weight="fill" className="mx-auto" />
          <h1 className='text-black font-bold text-5xl md:text-6xl'>Stronger Community</h1>
          <p className='text-secBlack text-sm md:text-base mt-5'>At GymSync, we believe in the power of community. Beyond workouts, we actively engage with our members and the local community. From fitness challenges and events to partnerships with local businesses, we&apos;re dedicated to creating a vibrant, supportive network.</p>
        </div>
        <div className='w-full hidden lg:block'>
          <Image src={aboutPhoto3} alt="aboutphoto1" className="w-full object-cover object-center" />
        </div>
      </section>
    </section>
  )
}