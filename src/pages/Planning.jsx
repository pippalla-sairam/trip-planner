import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import destinationsData from '../data/destinationsData';

const Planning = () => {
  const [destination, setDestination] = useState("choose");
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    if (destination === "choose") {
      alert("Please select a valid destination.");
      return;
    }

    navigate(`/plan/${destination}`);
  };
  return (
    <div className="mb-10 mx-4 sm:mx-10 md:mx-20">
      <div className="mt-6 mx-auto w-full md:w-[70vw] lg:w-[50vw] rounded-lg p-6 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className='text-3xl md:text-3xl text-blue-600 font-bold'>Plan Your Indian Adventure</h1>
        <p className="text-gray-600 text-sm md:text-base">Select a destination to start planning your perfect trip, complete with daily itineraries, accommodation options, and more</p>
      </div>
      <div className="mt-5 border-2 border-gray-200 p-6 rounded-lg w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto flex flex-col space-y-5 shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">Select a Destination:</h1>

        <select
          name="destination"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="choose">Choose your destination</option>
          {destinationsData.map((dest) => (
            <option key={dest.id} value={dest.name.toLowerCase()}>
              {dest.name}
            </option>
          ))}
        </select>


        <button
          onClick={handleStartPlanning}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition-all duration-200 cursor-pointer"
        >
          Start Planning
        </button>
      </div>
      <div className='mt-8 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mx-auto'>
        <div>
          <h1 className='font-bold text-xl mb-4'>Popular Destinations</h1>
        </div>

        <div className="flex flex-wrap justify-between gap-y-6">
          {[
            { name: "Delhi", image: "./gateway-bg.jpg" },
            { name: "Jaipur", image: "./jaipur-bg.jpg" },
            { name: "Mumbai", image: "./mumbai-bg.jpg" },
            { name: "Goa", image: "./goa-bg.jpg" }
          ].map((place) => (
            <Link
              to={`/plan/${place.name.toLowerCase()}`}
              key={place.name}
              className="block w-[48%]"
            >
              <div
                className={`h-40 rounded-lg overflow-hidden shadow-md relative bg-cover bg-center`}
                style={{ backgroundImage: `url(${place.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h1 className="text-white text-xl font-semibold">{place.name}</h1>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Planning
