import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>

      <div className="bg-[url('/food.svg')] min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center  ">

        <div className="px-10 pt-80 mb-40  flex flex-col items-center justify-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            The Ultimate Food App with <span className="text-yellow-500">MealBuddy</span>
          </h1>
          <p className="text-white text mt-5 ml-20 font-semibold">
            Your one-stop shop for meal planning, grocery shopping, and recipe management and meal spots near you.
          </p>

          <Link to={'/create-meal'}>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full mt-8   ">
              Get Started
            </Button>
          </Link>

        </div>












      </div>


    </>
  )
}

export default Hero;
