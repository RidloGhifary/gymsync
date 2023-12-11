'use client'

import Image from 'next/image'
import background from '/public/assets/calculate-bmi/bg.jpg'
import { useRef, useState } from 'react'

export default function CalculateBMI() {
  const [handleBMI, sethandleBMI] = useState()
  const [handleWeight, setHandleWeight] = useState("")
  const inputWeight = useRef(null)
  const inputHeight = useRef(null)

  const handleCalculate = (e) => {
    e.preventDefault()
    const height = inputHeight.current.value
    const weight = inputWeight.current.value

    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters)
    let weightCategory = "";

    if (bmi < 18.5) {
      weightCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      weightCategory = "Normal Weight";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      weightCategory = "Overweight";
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      weightCategory = "Obesity Class I";
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      weightCategory = "Obesity Class II";
    } else {
      weightCategory = "Obesity Class III";
    }

    setHandleWeight(weightCategory);
    sethandleBMI(bmi.toFixed(1))
  }

  return (
    <section className='relative w-full'>
      <div className='w-full h-full'>
        <Image src={background} alt="background" className='w-full h-[500px] lg:max-h-[400px] object-cover md:object-right object-center' />
      </div>
      <div className='w-full h-full absolute top-0 left-0 bg-black/60 md:bg-transparent md:bg-gradient-to-r from-black to-black/50'>
        <div className='w-full lg:w-[50%] h-full flex flex-col justify-center md:pl-10 pl-6'>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Calculate Your BMI</h2>
          <p className="text-white my-5">
            Discover your Body Mass Index (BMI) to assess your general health based on your weight and height. Use the calculator below to find your BMI and gain insights into your body composition.
          </p>
          <form>
            <div className='flex justify-start items-center'>
              <input type="number" name="weight" id="weight" placeholder='Weight/kg' required
                ref={inputWeight} className='w-[45%] p-4 focus:outline-none rounded-md bg-secBlack text-white shadow-md' />
              <input type="number" name="height" id="height" placeholder='Height/cm' required
                ref={inputHeight} className='w-[45%] p-4 focus:outline-none rounded-md bg-secBlack text-white shadow-md ml-3' />
            </div>
            <div className='flex items-center gap-10 my-4'>
              <p className='text-lg text-white font-semibold'>Your BMI :
                <span className='text-red'> {handleBMI}</span></p>
              <p className='text-lg text-white font-semibold'>Your Weight :
                <span className='text-red'> {handleWeight}</span>
              </p>
            </div>
            <button type='submit'
              onClick={handleCalculate}
              className='bg-secBlack hover:bg-red p-4 px-6 rounded-md text-white transition font-semibold'>
              Calculate
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 