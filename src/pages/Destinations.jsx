import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import destinationsData from '../data/destinationsData';

const Destinations = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const uniqueTypes = ["All Types", ...Array.from(new Set(destinationsData.map(dest => dest.type)))];

  const filteredDestinations = destinationsData.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesType =
      selectedType === 'All Types' || dest.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="mb-10 mx-4 sm:mx-10 md:mx-20">
      <div className="mt-6 mx-auto w-full md:w-[70vw] lg:w-[50vw] rounded-lg p-6 flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl md:text-4xl text-amber-500 font-bold">
          Discover India's Beautiful Destinations
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore a variety of destinations across India, from historic monuments to pristine beaches and spiritual retreats.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-6">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Destinations..."
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full sm:w-[70%] focus:outline-none focus:ring-2 focus:ring-amber-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          name="type"
          id="type"
          className="border-2 border-gray-300 rounded-md px-4 py-2 w-full sm:w-[30%] focus:outline-none focus:ring-2 focus:ring-amber-500"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredDestinations.map((dest) => (
          <Link key={dest.id} to={`/plan/${dest.name.toLowerCase()}`}>
            <div className="rounded-xl overflow-hidden shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${dest.image})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h1 className="text-white text-xl font-semibold">{dest.name}</h1>
                  <p className="text-white text-sm">{dest.name}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-4">{dest.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-semibold">
                    Best time: {dest.bestTime}
                  </p>
                  <p className="text-orange-500 font-semibold cursor-pointer">
                    Explore →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {filteredDestinations.length === 0 && (
          <p className="col-span-full text-center text-gray-500 mt-6">
            No destinations found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Destinations;
