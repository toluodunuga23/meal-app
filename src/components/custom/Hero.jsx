import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-16 gap-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="font-extrabold text-[60px] leading-tight text-center">
        The Ultimate Food App with <span className="text-yellow-400">MealBuddy</span>
      </h1>
      <p className="text-lg text-center max-w-xl">
        Your one-stop shop for meal planning, grocery shopping, and recipe management and meal spots near you.
      </p>
      <Link to ={'/create-meal'}>
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full">
        Get Started
      </Button>
      </Link>
    </div>
  )
}

export default Hero;
