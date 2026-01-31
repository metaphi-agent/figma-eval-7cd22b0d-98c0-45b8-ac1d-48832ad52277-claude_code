import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/blocks/Header';
import { allCars } from '../data/cars';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'home', active: true },
  { id: 'car-rent', label: 'Car Rent', icon: 'car' },
  { id: 'insight', label: 'Insight', icon: 'chart' },
  { id: 'reimburse', label: 'Reimburse', icon: 'wallet' },
  { id: 'inbox', label: 'Inbox', icon: 'inbox' },
  { id: 'calendar', label: 'Calender', icon: 'calendar' },
];

const preferenceItems = [
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'help', label: 'Help & Center', icon: 'help' },
  { id: 'dark-mode', label: 'Dark Mode', icon: 'moon', hasToggle: true },
];

const transactions = [
  { id: 1, name: 'Nissan GT - R', type: 'Sport Car', date: '20 July', price: 80.00, image: './assets/images/car-nissan-gtr.png' },
  { id: 2, name: 'Koenigsegg', type: 'Sport Car', date: '19 July', price: 99.00, image: './assets/images/car-koenigsegg.png' },
  { id: 3, name: 'Rolls - Royce', type: 'Sport Car', date: '18 July', price: 96.00, image: './assets/images/car-rolls-royce.png' },
  { id: 4, name: 'CR - V', type: 'SUV', date: '17 July', price: 80.00, image: './assets/images/car-nissan-gtr-2.png' },
];

const chartData = [
  { label: 'Sport Car', value: 17439, color: '#1A202C' },
  { label: 'SUV', value: 9478, color: '#3563E9' },
  { label: 'Coupe', value: 18197, color: '#3563E9' },
  { label: 'Hatchback', value: 12510, color: '#54A6FF' },
  { label: 'MPV', value: 14406, color: '#90A3BF' },
];

export const Dashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const car = allCars[1];

  const totalRentals = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[286px] bg-white shrink-0 flex flex-col">
          <div className="p-6 flex-1">
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-secondary-300 tracking-wider mb-4">MAIN MENU</h3>
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      item.active
                        ? 'bg-primary-500 text-white'
                        : 'text-secondary-300 hover:bg-secondary-100 hover:text-secondary-500'
                    }`}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon === 'home' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                      {item.icon === 'car' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 4H5a2 2 0 00-2 2v4a2 2 0 002 2h1v4a2 2 0 002 2h8a2 2 0 002-2v-4h1a2 2 0 002-2V6a2 2 0 00-2-2zM5 8h14M9 16v-4m6 4v-4" />}
                      {item.icon === 'chart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                      {item.icon === 'wallet' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />}
                      {item.icon === 'inbox' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />}
                      {item.icon === 'calendar' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                    </svg>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-secondary-300 tracking-wider mb-4">PREFERENCES</h3>
              <nav className="space-y-1">
                {preferenceItems.map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-secondary-300 hover:bg-secondary-100 hover:text-secondary-500 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {item.icon === 'settings' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                        {item.icon === 'help' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                        {item.icon === 'moon' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />}
                      </svg>
                      {item.label}
                    </div>
                    {item.hasToggle && (
                      <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`w-11 h-6 rounded-full transition-colors ${darkMode ? 'bg-primary-500' : 'bg-secondary-200'}`}
                      >
                        <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${darkMode ? 'translate-x-5' : 'translate-x-0.5'}`} />
                      </button>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <div className="p-6 border-t border-secondary-200/40">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-secondary-300 hover:bg-secondary-100 hover:text-secondary-500 transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Log Out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-bg-primary p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Details Rental */}
            <div className="bg-white rounded-[10px] p-6">
              <h2 className="text-xl font-bold text-secondary-500 mb-6">Details Rental</h2>

              {/* Map */}
              <div className="bg-primary-100 rounded-[10px] h-[272px] mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full text-primary-500/20" fill="none" viewBox="0 0 400 300">
                    <path d="M50 150 L150 100 L200 180 L280 80 L350 150" stroke="currentColor" strokeWidth="3" strokeDasharray="8 4" />
                    <circle cx="50" cy="150" r="8" fill="#3563E9" />
                    <circle cx="350" cy="150" r="8" fill="#3563E9" />
                    <path d="M190 170 L210 170 L200 190 Z" fill="#3563E9" />
                  </svg>
                </div>
              </div>

              {/* Car Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-[132px] h-[72px] bg-primary-500 rounded-[10px] flex items-center justify-center p-2">
                  <img src={car.image} alt={car.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-500">{car.name}</h3>
                  <p className="text-sm text-secondary-300">{car.type}</p>
                </div>
                <span className="ml-auto text-sm text-secondary-300">#9761</span>
              </div>

              {/* Pick-Up */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-4 border-info-500 bg-info-500/30" />
                  <span className="text-base font-semibold text-secondary-500">Pick - Up</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-base font-bold text-secondary-500 mb-1">Locations</p>
                    <p className="text-sm text-secondary-300">Kota Semarang</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-secondary-500 mb-1">Date</p>
                    <p className="text-sm text-secondary-300">20 July 2022</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-secondary-500 mb-1">Time</p>
                    <p className="text-sm text-secondary-300">07.00</p>
                  </div>
                </div>
              </div>

              {/* Drop-Off */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-4 h-4 rounded-full border-4 border-info-500 bg-info-500/30" />
                  <span className="text-base font-semibold text-secondary-500">Drop - Off</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-base font-bold text-secondary-500 mb-1">Locations</p>
                    <p className="text-sm text-secondary-300">Kota Semarang</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-secondary-500 mb-1">Date</p>
                    <p className="text-sm text-secondary-300">21 July 2022</p>
                  </div>
                  <div>
                    <p className="text-base font-bold text-secondary-500 mb-1">Time</p>
                    <p className="text-sm text-secondary-300">01.00</p>
                  </div>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t border-secondary-200/40 pt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-secondary-500">Total Rental Price</h3>
                  <p className="text-sm text-secondary-300">Overall price and includes rental discount</p>
                </div>
                <span className="text-[32px] font-bold text-secondary-500">$80.00</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Top 5 Car Rental */}
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-secondary-500">Top 5 Car Rental</h2>
                  <button className="text-secondary-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center gap-8">
                  {/* Donut Chart */}
                  <div className="relative w-[220px] h-[220px]">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      {(() => {
                        let cumulative = 0;
                        return chartData.map((item, index) => {
                          const percentage = (item.value / totalRentals) * 100;
                          const strokeDasharray = `${percentage} ${100 - percentage}`;
                          const strokeDashoffset = -cumulative;
                          cumulative += percentage;
                          return (
                            <circle
                              key={item.label}
                              cx="50"
                              cy="50"
                              r="35"
                              fill="transparent"
                              stroke={item.color}
                              strokeWidth="20"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                              className="transition-all duration-500"
                            />
                          );
                        });
                      })()}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-secondary-500">{totalRentals.toLocaleString()}</span>
                      <span className="text-sm text-secondary-300">Rental Car</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="space-y-3">
                    {chartData.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-8">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm text-secondary-400">{item.label}</span>
                        </div>
                        <span className="text-sm font-semibold text-secondary-500">{item.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-secondary-500">Recent Transaction</h2>
                  <Link to="#" className="text-sm font-semibold text-primary-500 hover:underline">View All</Link>
                </div>

                <div className="space-y-6">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center gap-4">
                      <div className="w-[132px] h-[72px] bg-primary-100 rounded-[10px] flex items-center justify-center p-2">
                        <img src={transaction.image} alt={transaction.name} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-secondary-500">{transaction.name}</h3>
                        <p className="text-sm text-secondary-300">{transaction.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-secondary-300">{transaction.date}</p>
                        <p className="text-base font-bold text-secondary-500">${transaction.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
