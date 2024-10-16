import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '../components/custom/Header';
import { useNavigate } from 'react-router-dom';
import {Card} from '@/components/ui/card';
import { MealType } from '@/constants/options';

function CreateMeal() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState([]) // Get context state

  const handleInputChange = (value) => {
    setActiveCategory(value); // Update context state
    console.log('Selected Outing:', value);
  };

  return (
    <>
      <Header />
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10  ">
        <h2 className="font-bold text-3xl  flex flex-col items-center">Choose the following Meal Options</h2>
        <div className="grid grid-cols-2 gap-10 mt-7 bg-color flex flex-col items-center">
          {MealType.map((option) => (
            <Card
              key={option.id}
              className={`p-3 cursor-pointer bg-green  ${
                activeCategory === option.title ? 'border-rose-600 border-4' : ''
              }`}
              onClick={() => handleInputChange(option.title)}
            >
              <Typography variant="h6">{option.icon}</Typography>
              <Typography variant="h6">{option.title}</Typography>
              <Typography variant="body2">{option.desc}</Typography>
            </Card>
          ))}
        </div>


        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
          <Button
            className="mt- font-20"
            onClick={() => {
        
            activeCategory?(
                navigate(
                    `/create-meal/${
                    activeCategory === 'Home Cooked'
                        ? 'home-cooked'
                        : activeCategory === 'Restaurant'
                        ? 'restaurant'
                        : ''
                    }`
                )
            ):(
                alert('Please select meal type')
            )
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateMeal;
