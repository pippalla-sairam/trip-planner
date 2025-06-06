import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import destinations from "../data/destinations";

const Plan = () => {
  const { destination } = useParams();
  const [weather, setWeather] = useState(null);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [selectedDays, setSelectedDays] = useState(1);
  const destinationData = destinations[destination?.toLowerCase()];

  const getWeatherEmoji = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear': return '☀️';
      case 'clouds': return '☁️';
      case 'rain': return '🌧️';
      case 'thunderstorm': return '⛈️';
      case 'snow': return '❄️';
      case 'mist': return '🌫️';
      default: return '🌍';
    }
  };

  const handleDaysChange = (e) => {
    setSelectedDays(e.target.value);
  };

  const renderTabContent = () => {
    if (activeTab === 'itinerary') {
      const days = selectedDays === 'select' ? destinationData.itinerary : destinationData.itinerary.slice(0, parseInt(selectedDays));
      return (
        <div className="space-y-8">
          {days.map((day) => (
            <div key={day.day} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-500 mb-2">Day {day.day}</h3>
              <div className="space-y-1">
                <p className="text-amber-500 font-semibold">Morning</p>
                <p>{day.morning}</p>
                <p className="text-amber-500 font-semibold">Afternoon</p>
                <p>{day.afternoon}</p>
                <p className="text-amber-500 font-semibold">Evening</p>
                <p>{day.evening}</p>
              </div>
              <div className="m-4">
                <hr className="border-t border-gray-300" />
              </div>
              <div className="mt-2">
                <p><span className="font-semibold">Stay at:</span> {day.stay}</p>
                <p><span className="font-semibold">Eat at:</span> {day.food}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'accommodations') {
      return (
        <div className="space-y-4">
          {destinationData.accommodations.map((acc, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-500 mb-2">{acc.name}</h3>
              <p><strong>Address:</strong> {acc.address}</p>
              <p><strong>Rating:</strong> {acc.rating}⭐</p>
              <p><strong>Budget:</strong> {acc.budget} per night</p>
              <p>{acc.description}</p>
            </div>
          ))}
        </div>
      );
    }

    if (activeTab === 'food') {
      return (
        <div className="space-y-4">
          {destinationData.restaurants.map((res, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-blue-500 mb-2">{res.name}</h3>
              <p><strong>Address:</strong> {res.address}</p>
              <p><strong>Rating:</strong> {res.rating}⭐</p>
              <p>{res.description}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    const fetchWeather = async () => {
      if (!destinationData) return;
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${destinationData.name}&appid=${apiKey}&units=metric`
        );
        const data = response.data;
        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].main,
          emoji: getWeatherEmoji(data.weather[0].main),
          humidity: data.main.humidity,
          wind: data.wind.speed,
        });
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      }
    };

    fetchWeather();
  }, [destinationData]);


  if (!destinationData) {
    return (
      <div className="mt-5 px-4 sm:px-8 md:px-12 py-6">
        <Link
          to="/destinations"
          className="text-sm font-semibold border-2 border-gray-200 px-4 py-2 rounded-lg inline-block"
        >
          ← Back to Destinations
        </Link>

        <div className="mt-4 text-center text-red-600 text-lg sm:text-xl">
          Destination "{destination}" not found.
        </div>
      </div>

    );
  }

  return (
    <div className="mt-5 px-4 sm:px-8 md:px-10 lg:px-12 py-6">
      <Link
        to="/destinations"
        className="text-sm font-semibold border-2 border-gray-200 p-2 rounded-lg inline-block"
      >
        ← Back to Destinations
      </Link>

      <div className="flex flex-col lg:flex-row gap-10 mt-6">
        <div className="w-full lg:w-[65%]">
          <h1 className="text-2xl sm:text-3xl text-blue-600 font-bold mt-6">{destinationData.name}</h1>
          <p className="text-gray-600 text-base sm:text-lg">
            {destinationData.name}, {destinationData.country}
          </p>
          <p className="text-gray-600 mt-4 mb-5 text-sm sm:text-base">{destinationData.description}</p>

          <div className="relative h-60 sm:h-80 md:h-[44vh] w-full mb-8 rounded-lg overflow-hidden shadow-md">
            <img
              src={destinationData.image}
              alt={`${destinationData.name} Image`}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-5 text-white drop-shadow-md">
              <h1 className="text-lg sm:text-2xl font-bold">{destinationData.name}</h1>
              <div className="text-sm sm:text-lg">
                <span>{destinationData.name}, </span>
                <span>{destinationData.country}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl text-green-700 font-bold mb-2">Plan Your Trip</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Select how many days you'd like to spend in {destinationData.name} and we'll create a suggested itinerary for you.
            </p>

            <div className="mb-6">
              <p className="text-sm sm:text-md font-semibold text-gray-600 mb-1">Number of days:</p>
              <select
                name="days"
                id="days"
                value={selectedDays}
                onChange={handleDaysChange}
                className="border-2 border-gray-300 rounded-md px-4 py-2 w-full sm:w-[50%] md:w-[30%] lg:w-[25%]"
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'day' : 'days'}</option>
                ))}
              </select>
            </div>

            <div className="flex justify-center mb-6">
              <div className="w-full sm:w-auto flex justify-center sm:inline-flex border border-gray-300 rounded-md overflow-hidden">
                {['itinerary', 'accommodations', 'food'].map((tab, index) => (
                  <button
                    key={tab}
                    className={`cursor-pointer w-full sm:w-auto px-6 py-3 text-sm font-semibold transition-colors duration-200 
          ${activeTab === tab ? 'bg-white text-gray-800' : 'bg-gray-200 text-gray-600'} 
          ${index < 2 ? 'sm:border-r sm:border-gray-300' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>


            {renderTabContent()}
          </div>
        </div>

        <div className="w-full lg:w-[35%] mt-5">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4">Weather Information</h1>

          {weather ? (
            <div className="border-2 border-gray-100 rounded-lg p-5 sm:p-6 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-base sm:text-lg font-bold">{destinationData.name} Weather</p>
                  <p className="text-2xl sm:text-3xl font-bold">{weather.temp}°C</p>
                  <p className="text-gray-500 text-sm">{weather.description}</p>
                  <div className="flex gap-10 sm:gap-20 mt-4 text-sm">
                    <div>
                      <p className="text-gray-500">Humidity</p>
                      <p className="font-bold">{weather.humidity}%</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Wind</p>
                      <p className="font-bold">{weather.wind} km/h</p>
                    </div>
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl">{weather.emoji}</div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 mb-6">Fetching weather data...</p>
          )}

          {destinationData.pointsOfInterest && (
            <div className="border-2 border-gray-100 rounded-lg p-5 sm:p-6 shadow-lg mt-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Points of Interest</h2>
              <div className="space-y-4 pr-1 sm:pr-2">
                {destinationData.pointsOfInterest.map((poi, index) => (
                  <div
                    key={index}
                    className="flex gap-3 items-start p-2 rounded-md shadow-sm bg-white"
                  >
                    <img
                      src={poi.image}
                      alt={poi.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{poi.name}</p>
                      <p className="text-xs text-gray-500">{poi.category}</p>
                      <p className="text-xs sm:text-sm">{poi.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>

  );
};

export default Plan;
