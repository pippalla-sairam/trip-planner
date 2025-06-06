import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="h-[80vh] bg-cover bg-center flex items-center justify-start overflow-hidden bg-[url('/taj-bg.jpg')]">
                <div className="relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 text-amber-50 max-w-screen-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
                        Discover the Beauty and Culture of India
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mb-6 max-w-xl">
                        Plan your perfect trip through India's most beautiful destinations with our personalized trip planner.
                    </p>
                    <div className="flex  gap-3 sm:gap-4">
                        <Link to="/destinations">
                            <button className="bg-amber-500 rounded-lg px-4 py-2 hover:bg-amber-400 transition cursor-pointer sm:w-auto">
                                Browse Destinations
                            </button>
                        </Link>
                        <Link to="/planning">
                            <button className="rounded-lg px-4 py-2 text-amber-50 border-2 border-white hover:bg-gray-400 hover:text-black transition cursor-pointer sm:w-auto">
                                Plan Your Trip
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='mt-12 px-4 sm:px-8'>
                <div className='text-center space-y-2'>
                    <h1 className='font-bold text-2xl sm:text-3xl text-blue-600'>Featured Destinations</h1>
                    <p className='font-light text-sm sm:text-md'>
                        Explore these popular Indian destinations to start your journey
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    <Link to="/plan/delhi">
                        <div className="rounded-xl overflow-hidden shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <div className="relative h-64 bg-[url('/gateway-bg.jpg')] bg-cover bg-center">
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h1 className="text-white text-xl font-semibold">Delhi</h1>
                                    <p className="text-white text-sm">Delhi</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 text-sm mb-4">
                                    India's capital territory, a massive metropolitan area in the country's north. Delhi is known for its heritage buildings, ancient monuments, and being the political hub of India.
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="text-green-600 font-semibold">Best time: October-March</p>
                                    <p className="text-orange-500 font-semibold cursor-pointer">Explore →</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to={`/plan/jaipur`}>
                        <div className="rounded-xl overflow-hidden shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <div className="relative h-64 bg-[url('/jaipur-bg.jpg')] bg-cover bg-center">
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h1 className="text-white text-xl font-semibold">Jaipur</h1>
                                    <p className="text-white text-sm">Rajasthan</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 text-sm mb-4">
                                    Known as the 'Pink City', Jaipur is the capital of Rajasthan and renowned for its stunning architecture and vibrant culture.
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="text-green-600 font-semibold">Best time: October-March</p>
                                    <p className="text-orange-500 font-semibold cursor-pointer">Explore →</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/plan/mumbai">
                        <div className="rounded-xl overflow-hidden shadow-lg bg-white transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                            <div className="relative h-64 bg-[url('/mumbai-bg.jpg')] bg-cover bg-center">
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h1 className="text-white text-xl font-semibold">Mumbai</h1>
                                    <p className="text-white text-sm">Maharashtra</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-700 text-sm mb-4">
                                    Mumbai, India's financial center, is known for its colonial architecture, Bollywood, and vibrant street life.
                                </p>
                                <div className="flex justify-between items-center">
                                    <p className="text-green-600 font-semibold">Best time: October-February</p>
                                    <p className="text-orange-500 font-semibold cursor-pointer">Explore →</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className='mt-10 flex justify-center'>
                    <Link to="/destinations">
                        <button className='bg-green-700 hover:bg-green-600 px-6 py-3 text-white rounded-lg cursor-pointer'>
                            View all Destinations
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-28">
                <div className="text-center space-y-2">
                    <h1 className="font-bold text-3xl text-blue-600">How Our Trip Planner Works</h1>
                    <p className="font-light text-md">Plan your perfect Indian adventure in just a few simple steps</p>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-12 px-4">
                    <div className="flex flex-col items-center max-w-[250px] text-center">
                        <div className="bg-orange-100 text-orange-700 font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            1
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Choose a Destination</h2>
                        <p className="text-sm text-gray-600">
                            Browse through our curated list of Indian destinations and select the one that catches your eye.
                        </p>
                    </div>

                    <div className="flex flex-col items-center max-w-[250px] text-center">
                        <div className="bg-green-100 text-green-700 font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            2
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Set Your Trip Duration</h2>
                        <p className="text-sm text-gray-600">
                            Tell us how many days you plan to stay, and we'll create a customized itinerary for you.
                        </p>
                    </div>

                    <div className="flex flex-col items-center max-w-[250px] text-center">
                        <div className="bg-blue-100 text-blue-700 font-bold text-xl rounded-full w-16 h-16 flex items-center justify-center mb-4">
                            3
                        </div>
                        <h2 className="text-lg font-semibold mb-2">Get Your Perfect Itinerary</h2>
                        <p className="text-sm text-gray-600">
                            Receive a day-by-day plan including attractions, accommodations, and food recommendations.
                        </p>
                    </div>
                </div>

                <div className="mt-14 flex justify-center">
                    <Link to="/planning">
                        <button className="bg-blue-700 hover:bg-blue-600 text-white cursor-pointer px-6 py-3 rounded-lg shadow-md transition duration-300">
                            Start Planning Now
                        </button>
                    </Link>
                </div>
            </div>

            <div className="bg-[#111827] px-6 md:px-16 py-12 mt-20">
                <div className="flex flex-col md:flex-row justify-between text-white gap-10">
                    <div className="md:w-1/3 space-y-3">
                        <h1 className="text-xl font-bold">India Trip Planner</h1>
                        <p className="text-gray-400">
                            Your perfect companion for planning an unforgettable journey through the diverse landscapes of India.
                        </p>
                    </div>

                    <div className="flex  gap-10 md:pr-20">
                        <div className="space-y-4">
                            <h2 className="font-bold text-white">Quick Links</h2>
                            <div className="text-gray-400 flex flex-col space-y-2">
                                <Link to="/" className="hover:text-white">Home</Link>
                                <Link to="/destinations" className="hover:text-white">Destinations</Link>
                                <Link to="/planning" className="hover:text-white">Trip Planner</Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-bold text-white">Top Destinations</h2>
                            <div className="text-gray-400 flex flex-col space-y-2">
                                <Link to="/plan/delhi" className="hover:text-white">Delhi</Link>
                                <Link to="/plan/jaipur" className="hover:text-white">Jaipur</Link>
                                <Link to="/plan/mumbai" className="hover:text-white">Mumbai</Link>
                                <Link to="/plan/goa" className="hover:text-white">Goa</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-800"></div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    © 2025 India Trip Planner. All rights reserved.
                </div>
            </div>


        </div>
    )
}

export default Home
