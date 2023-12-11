import Image from 'next/image'
import logo1 from '/public/assets/logo/logo1.png'
import logo2 from '/public/assets/logo/logo2.png'
import logo3 from '/public/assets/logo/logo3.png'
import logo4 from '/public/assets/logo/logo4.png'
import logo5 from '/public/assets/logo/logo5.png'
import logo6 from '/public/assets/logo/logo6.png'
import gallery1 from '/public/assets/gallery/photo1.jpg'
import gallery2 from '/public/assets/gallery/photo2.jpg'
import gallery3 from '/public/assets/gallery/photo3.jpg'
import gallery4 from '/public/assets/gallery/photo4.jpg'
import gallery5 from '/public/assets/gallery/photo5.jpg'
import gallery6 from '/public/assets/gallery/photo6.jpg'
import paintScratch from '/public/assets/paint-scratch.svg'

export default function GymGallery() {
  return (
    <section className='w-full'>
      <div className="p-6 flex flex-wrap items-center justify-center gap-6 w-full">
        {[
          { src: logo1, alt: 'Logo 1' },
          { src: logo2, alt: 'Logo 2' },
          { src: logo3, alt: 'Logo 3' },
          { src: logo4, alt: 'Logo 4' },
          { src: logo5, alt: 'Logo 5' },
          { src: logo6, alt: 'Logo 6' },
        ].map((logo, index) => (
          <div key={index} className='flex items-center justify-center'>
            <Image src={logo.src} alt={logo.alt} width={150} height={150}
              className='opacity-50 hover:opacity-100' />
          </div>
        ))}
      </div>
      <hr className='border-t-2 border-gray-400F my-16' />
      <div className='p-6 mb-16'>
        <div className='w-full text-center md:w-[70%] mx-auto'>
          <Image src={paintScratch} alt="paintScratch" className='mx-auto' />
          <span className='font-semibold text-white block mt-[-28px]'>gym gallery</span>
        </div>
        <div className="text-center my-6 md:w-[70%] lg:w-[60%] mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4">Explore Our Gym Gallery</h2>
          <p className="text-secBlack">Discover the vibrant atmosphere and state-of-the-art facilities at our fitness center through a visual journey in our gallery.</p>
        </div>
        <div className='w-full max-w-[1000px] mx-auto grid gap-4 md:grid-flow-row md:grid-cols-4'>
          <Image src={gallery1} alt='gallery1' className='w-full h-full object-cover object-center col-span-2 row-span-2' />
          <Image src={gallery2} alt='gallery2' className='w-full h-full object-cover object-center col-span-2' />
          <Image src={gallery3} alt='gallery3' className='w-full h-full object-cover object-center row-start-3' />
          <Image src={gallery4} alt='gallery4' className='w-full h-full object-cover object-center row-start-3 col-start-2' />
          <Image src={gallery5} alt='gallery5' className='w-full h-full object-cover object-center row-span-2 col-span-2' />
        </div>

      </div>
    </section>
  )
}