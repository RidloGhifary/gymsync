import Image from "next/image";

export default function PricingTemplate({ title, image, price, features }) {
  return (
    <div className="group bg-white rounded-lg shadow-md text-black">
      <Image src={image} alt={title} className='w-full rounded-t-lg object-cover object-center grayscale group-hover:grayscale-0' />
      <div className='relative z-10 w-[80%] mx-auto bg-white text-black p-4 mt-[-30px]'>
        <h3 className="text-lg font-semibold text-center"
        >{title}</h3>
      </div>
      <div className='w-full px-6 pb-6'>
        <p className="text-2xl font-bold mb-4 text-center">${price}/month</p>
        <ul className="list-disc ml-6 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Choose Plan
        </button>
      </div>
    </div>
  )
}