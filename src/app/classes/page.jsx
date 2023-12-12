import PageBackground from "../components/pageBackground";
import Image from 'next/image'
import cycling from '/public/assets/class/cycling.jpg'
import karate from '/public/assets/class/karate.jpg'
import martial from '/public/assets/class/martial-arts.jpg'
import meditation from '/public/assets/class/meditation.jpg'
import power from '/public/assets/class/power.jpg'
import workout from '/public/assets/class/workout.jpg'
import classes7 from '/public/assets/class/class7.jpg'
import classes8 from '/public/assets/class/class8.jpg'
import classes9 from '/public/assets/class/class9.jpg'
import classes10 from '/public/assets/class/class10.jpg'
import ClassesTemplate from "../components/classesTemplate";

export default function ClassesPage() {
  return (
    <section>
      <PageBackground name="Classes" />
      <div className='p-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={cycling} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Cardio Blast" name="Sarah" schedule="7:00 AM - 8:00 AM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={karate} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Powerlifting Basics" name="Mike Johnson" schedule="5:30 PM - 7:00 PM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={martial} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Yoga Fusion" name="Lisa Martinez" schedule="6:00 PM - 7:00 PM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={meditation} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="High-Intensity Interval Training" name="Alex Davis" schedule="6:30 AM - 7:30 AM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={power} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Spin Cycle" name="Jason Taylor" schedule="5:00 PM - 6:00 PM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={workout} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="CrossFit Challenge" name="Emily White" schedule="6:30 PM - 8:00 PM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={classes7} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Pilates Core" name="Daniel Harris" schedule="7:30 AM - 8:30 AM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={classes8} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Zumba Party" name="Maria Rodriguez" schedule="11:00 AM - 12:00 PM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={classes9} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Bodyweight Bootcamp" name="Ryan Turner" schedule="6:00 AM - 7:00 AM" />
        </div>
        <div className="relative group w-full row-span-3 overflow-hidden shadow-lg rounded-2xl">
          <Image src={classes10} alt="cycling" width={1000} height={1000}
            className="w-full h-full min-h-[450px] object-cover object-center rounded-2xl" />
          <ClassesTemplate nameClass="Mindful Meditation" name="Jessica Lee" schedule="8:00 AM - 9:00 AM" />
        </div>

      </div>
    </section>
  )
}