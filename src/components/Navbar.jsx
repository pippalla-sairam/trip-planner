import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-amber-500 p-5 md:px-20 text-amber-50">
            <div className="flex items-center justify-between flex-wrap gap-4">
                <Link to="/" className="text-2xl font-bold whitespace-nowrap">Trip Planner</Link>

                <div className="flex gap-5 text-lg flex-wrap justify-end">
                    <Link to="/" className="hover:text-amber-300">Home</Link>
                    <Link to="/destinations" className="hover:text-amber-300">Destinations</Link>
                    <Link to="/planning" className="hover:text-amber-300">Plan Your Trip</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
