import React from 'react'
import { useEffect, useState, useRef } from "react";
import { MealTime, Recipes } from '@/constants/options';
import { IoMdTrendingUp } from "react-icons/io";
import { Sidebar } from '../ui/sidebar';
import { SidebarContent } from '../ui/sidebar';


const Dashboard = () => {


    return (
        <div className='bg-gray-100'>
            <header className="bg-white shadow">
                <div className="flex justify-end px-7 py-1">
                    <a href="/create-meal" className="text-black font-bold py-3 px-6 rounded-full mt-8">
                        Recipes
                    </a>
                    <a href="/create-meal" className="text-black font-bold py-3 px-6 rounded-full mt-8">
                        Meal Plan
                    </a>
                    <a href="/create-meal" className="text-black font-bold py-3 px-6 rounded-full mt-8">
                        Groceries
                    </a>
                    <a href="/create-meal" className="text-black font-bold py-3 px-6 rounded-full mt-8">
                        Restaurants
                    </a>
                </div>
            </header>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <p className="text-gray-600 mb-8">Here you can manage your meals, recipes, and more!</p>             
            </div>

    
            <div className="flex flex-col items-start bg-slate-500 h-full w-64 fixed z-1 top-0 left-0 p-4">
                <div>
                <p className="text-white text-lg font-semibold mb-4">Meal Planner</p>
                </div>
                <div className='gap-4 mt-20 '>
                <ul className="space-y-12">
                   <li className="text-white hover:text-gray-300">
                        <a href="/create-meal" className="flex items-center ">
                            <span className="mr-2">🍽️</span> Create Meal
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-300">
                        <a href="/create-meal" className="flex items-center">
                            <span className="mr-2">📅</span> Meal Plan
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-300">
                        <a href="/create-meal" className="flex items-center">
                            <span className="mr-2">🛒</span> Groceries
                        </a>
                    </li>
                    <li className="text-white hover:text-gray-300">
                        <a href="/create-meal" className="flex items-center">
                            <span className="mr-2">🏪</span> Restaurants
                        </a>
                    </li>
                </ul>
                </div>
                </div>
        

    
                {/* <div className="flex flex-row mt-20 ml-20 ">
                <h1 className="text-black font-bold text-xl">Top Trending Recipes</h1>
                <IoMdTrendingUp/>
                </div> */}
          

            {/* <div className="grid grid-cols-3 gap-3 ml-20">
                {Recipes.map((item) => (
                    <div key={item.title} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="relative p-2.5 h-48 overflow-hidden rounded-xl bg-clip-border">
                            <img src={item.image} alt={item.title} className="object-cover h-full w-full" />
                        </div>
                        <div className="p-4">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-slate-800 text-lg font-semibold">
                                    {item.title}
                                </p>
                            </div>
                            <p className="text-slate-600 leading-normal font-light text-sm">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
            </div>
  
    )
}

export default Dashboard




