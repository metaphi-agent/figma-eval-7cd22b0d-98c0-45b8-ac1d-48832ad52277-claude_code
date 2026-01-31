import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch?: (pickup: SearchData, dropoff: SearchData) => void;
}

interface SearchData {
  location: string;
  date: string;
  time: string;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [pickup, setPickup] = useState<SearchData>({ location: '', date: '', time: '' });
  const [dropoff, setDropoff] = useState<SearchData>({ location: '', date: '', time: '' });

  const handleSwap = () => {
    const temp = pickup;
    setPickup(dropoff);
    setDropoff(temp);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
      {/* Pick-Up */}
      <div className="flex-1 w-full bg-white rounded-[10px] p-4 lg:p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full border-4 border-info-500 bg-info-500/30" />
          <span className="text-base font-semibold text-secondary-500">Pick - Up</span>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:gap-8">
          <div className="border-r border-secondary-200/40 pr-4">
            <label className="block text-base font-bold text-secondary-500 mb-2">Locations</label>
            <select
              className="w-full text-xs text-secondary-300 bg-transparent focus:outline-none cursor-pointer"
              value={pickup.location}
              onChange={(e) => setPickup({ ...pickup, location: e.target.value })}
            >
              <option value="">Select your city</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
            </select>
          </div>
          <div className="border-r border-secondary-200/40 pr-4">
            <label className="block text-base font-bold text-secondary-500 mb-2">Date</label>
            <select
              className="w-full text-xs text-secondary-300 bg-transparent focus:outline-none cursor-pointer"
              value={pickup.date}
              onChange={(e) => setPickup({ ...pickup, date: e.target.value })}
            >
              <option value="">Select your date</option>
              <option value="2024-01-15">Jan 15, 2024</option>
              <option value="2024-01-16">Jan 16, 2024</option>
              <option value="2024-01-17">Jan 17, 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-bold text-secondary-500 mb-2">Time</label>
            <select
              className="w-full text-xs text-secondary-300 bg-transparent focus:outline-none cursor-pointer"
              value={pickup.time}
              onChange={(e) => setPickup({ ...pickup, time: e.target.value })}
            >
              <option value="">Select your time</option>
              <option value="08:00">08:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button
        onClick={handleSwap}
        className="w-[60px] h-[60px] bg-primary-500 rounded-[10px] flex items-center justify-center hover:bg-primary-600 transition-colors shrink-0 shadow-lg"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Drop-Off */}
      <div className="flex-1 w-full bg-white rounded-[10px] p-4 lg:p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full border-4 border-info-500 bg-info-500/30" />
          <span className="text-base font-semibold text-secondary-500">Drop - Off</span>
        </div>
        <div className="grid grid-cols-3 gap-4 lg:gap-8">
          <div className="border-r border-secondary-200/40 pr-4">
            <label className="block text-base font-bold text-secondary-500 mb-2">Locations</label>
            <select
              className="w-full text-xs text-secondary-300 bg-transparent focus:outline-none cursor-pointer"
              value={dropoff.location}
              onChange={(e) => setDropoff({ ...dropoff, location: e.target.value })}
            >
              <option value="">Select your city</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
            </select>
          </div>
          <div className="border-r border-secondary-200/40 pr-4">
            <label className="block text-base font-bold text-secondary-500 mb-2">Date</label>
            <select
              className="w-full text-xs text-secondary-300 bg-transparent focus:outline-none cursor-pointer"
              value={dropoff.date}
              onChange={(e) => setDropoff({ ...dropoff, date: e.target.value })}
            >
              <option value="">Select your date</option>
              <option value="2024-01-15">Jan 15, 2024</option>
              <option value="2024-01-16">Jan 16, 2024</option>
              <option value="2024-01-17">Jan 17, 2024</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-bold text-secondary-500 mb-2">Time</label>
            <select
              className="w-full text-xs text-secondary-300 bg-transparent focus:outline-none cursor-pointer"
              value={dropoff.time}
              onChange={(e) => setDropoff({ ...dropoff, time: e.target.value })}
            >
              <option value="">Select your time</option>
              <option value="08:00">08:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="14:00">02:00 PM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
