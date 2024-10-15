import Header from '@/components/custom/Header';
import React from 'react';
import 'tailwindcss/tailwind.css';

const FindRestaurant = () => {
    return (
        <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <h1 className="text-6xl font-bold mb-4 animate-bounce">Coming Soon</h1>
            <p className="text-xl text-center max-w-md">
                We are working hard to bring you this feature. Stay tuned!
            </p>
            <div className="mt-8">
            
            </div>
        </div>
        </>
    );
};

export default FindRestaurant;