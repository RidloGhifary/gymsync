'use client'

import paintScratch from '/public/assets/paint-scratch.svg'
import photo from '/public/assets/testimonial/photo.jpg'
import photo2 from '/public/assets/testimonial/photo2.jpg'
import photo3 from '/public/assets/testimonial/photo3.jpg'
import person1 from '/public/assets/testimonial/person1.jpg'
import person2 from '/public/assets/testimonial/person2.jpg'
import person3 from '/public/assets/testimonial/person3.jpg'
import person4 from '/public/assets/testimonial/person4.jpg'
import person5 from '/public/assets/testimonial/person5.jpg'
import Image from 'next/image'
import { ShootingStar, Star } from '@phosphor-icons/react/dist/ssr'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialsTemplate from '@/app/components/tertimonials'

export default function Testimonials() {
  return (
    <section className="w-full p-6 py-16">
      <div className='w-full text-center md:w-[70%] mx-auto mb-8'>
        <Image src={paintScratch} alt="paintScratch" className='mx-auto' />
        <span className='font-semibold text-white block mt-[-28px]'>gym tertimonials</span>
      </div>
      <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 my-6 mt-20">
        <div className='w-full'>
          <h1 className='text-5xl lg:text-6xl font-bold my-3'>What they say about us</h1>
          <p>Explore the thoughts and experiences shared by others about our services. Read through testimonials to gain insights into the positive impact we&apos;ve had on our clients&apos; lives and how we&apos;ve earned their trust and satisfaction.</p>
          <div className='flex items-center mt-3'>
            <Image src={person1} alt="testimonial-photo" className="w-[40px] h-[40px] rounded-full object-cover object-center shadow-lg" />
            <Image src={person2} alt="testimonial-photo" className="w-[40px] h-[40px] rounded-full object-cover object-center shadow-lg -ml-4" />
            <Image src={person3} alt="testimonial-photo" className="w-[40px] h-[40px] rounded-full object-cover object-center shadow-lg -ml-4" />
            <Image src={person4} alt="testimonial-photo" className="w-[40px] h-[40px] rounded-full object-cover object-center shadow-lg -ml-4" />
            <Image src={person5} alt="testimonial-photo" className="w-[40px] h-[40px] rounded-full object-cover object-center shadow-lg -ml-4" />
            <ShootingStar size={35} color="#fdd017" weight="fill" className='ml-6' />
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialsTemplate
              photo={photo}
              name="John"
              job="Software Engineer"
              comment="The variety of classes and top-notch equipment make every workout exciting. The trainers' expertise and encouragement push me to achieve my fitness goals. It's more than a gym; it's a community that motivates and uplifts." />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsTemplate
              photo={photo2}
              name="Catherine"
              job="Marketing Executive"
              comment="Joining this gym has been a game-changer for me. The personalized workouts, motivating atmosphere, and friendly staff have made fitness an enjoyable journey. I've seen remarkable progress and appreciate the supportive community. Highly recommend it!" />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialsTemplate
              photo={photo3}
              name="Samantha "
              job="Graphic Designer"
              comment="I love the positive energy here! The diverse classes cater to different fitness levels, and the trainers genuinely care about our progress. It's not just a workout; it's an empowering experience. Grateful to be part of this fitness family!" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}