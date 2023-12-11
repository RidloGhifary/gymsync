import Image from "next/image";
import PageBackground from "../components/pageBackground";
import gallery1 from '/public/assets/gallery/photo1.jpg'
import gallery2 from '/public/assets/gallery/photo2.jpg'
import gallery3 from '/public/assets/gallery/photo3.jpg'
import gallery4 from '/public/assets/gallery/photo4.jpg'
import gallery5 from '/public/assets/gallery/photo5.jpg'
import gallery6 from '/public/assets/gallery/photo6.jpg'

export default function Gallery() {
  return (
    <section className="w-full">
      <PageBackground name="gallery" />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-3 w-full max-w-[1140px] mx-auto py-16">
        {[
          { src: gallery1, alt: 'gallery1' },
          { src: gallery2, alt: 'gallery2' },
          { src: gallery3, alt: 'gallery3' },
          { src: gallery4, alt: 'gallery4' },
          { src: gallery5, alt: 'gallery5' },
          { src: gallery6, alt: 'gallery6' },
          { src: gallery1, alt: 'gallery1' },
          { src: gallery2, alt: 'gallery2' },
          { src: gallery3, alt: 'gallery3' },
          { src: gallery4, alt: 'gallery4' },
          { src: gallery5, alt: 'gallery5' },
          { src: gallery6, alt: 'gallery6' },
        ].map((logo, index) => (
          <div key={index} className='flex items-center justify-center'>
            <Image src={logo.src} alt={logo.alt}
              className='w-full h-full object-cover object-center' />
          </div>
        ))}
      </div>
    </section>
  )
}