import Image from 'next/image'
import background from '/public/assets/bg1.jpg'
import paintScratch from '/public/assets/paint-scratch.svg'
import photo1 from '/public/assets/pricing/bg1.jpg'
import photo2 from '/public/assets/pricing/bg2.jpg'
import photo3 from '/public/assets/pricing/bg3.jpg'
import PricingTemplate from '@/app/components/pricing'

export default function Pricing() {
  const plans = [
    {
      title: 'Basic Plan',
      image: photo1,
      price: 19.99,
      features: ['Access to basic gym facilities', 'Monthly fitness assessments', 'Limited group classes'],
    },
    {
      title: 'Standard Plan',
      image: photo2,
      price: 29.99,
      features: ['Full gym access', 'Weekly personal training session', 'Unlimited group classes'],
    },
    {
      title: 'Premium Plan',
      image: photo3,
      price: 39.99,
      features: ['24/7 gym access', 'Bi-weekly personal training sessions', 'Access to premium amenities'],
    },
  ];

  return (
    <section className="relative w-full p-6 py-16 min-h-[100vh] bg-black/95 text-white">
      <div className='w-full h-full absolute -z-10 top-0 left-0'
        style={{ mixBlendMode: 'color-burn', opacity: 0.5 }}>
        <Image src={background} alt="background" className='h-full object-cover object-center' />
      </div>

      <div className="text-center mb-8 md:w-[70%] lg:w-[50%] mx-auto">
        <div className='w-full text-center md:w-[70%] mx-auto'>
          <Image src={paintScratch} alt="paintScratch" className='mx-auto' />
          <span className='font-semibold text-white block mt-[-28px]'>pricing plans</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-white my-6">Our Flexible Pricing Plans</h2>
        <p className="text-white">
          Choose the perfect plan that fits your fitness journey. We offer flexible pricing options designed to meet your unique needs, whether you&apos;re just starting or looking to level up your fitness routine.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-4'>
        {plans.map((plan, index) => (
          <PricingTemplate key={index} title={plan.title} image={plan.image} price={plan.price} features={plan.features} />
        ))}
      </div>
    </section>
  )
}