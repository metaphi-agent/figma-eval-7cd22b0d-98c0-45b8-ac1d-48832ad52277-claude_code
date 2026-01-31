import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/blocks/Header';
import { Footer } from '../components/blocks/Footer';
import { SearchFilter } from '../components/blocks/SearchFilter';
import { Sidebar } from '../components/blocks/Sidebar';
import { CarCard } from '../components/blocks/CarCard';
import { Button } from '../components/ui/Button';
import { allCars } from '../data/cars';

export const Category: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-bg-primary">
          <div className="p-8">
            {/* Search Filter */}
            <div className="mb-8">
              <SearchFilter />
            </div>

            {/* Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8">
              {allCars.slice(0, 9).map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            {/* Show More */}
            <div className="flex justify-center items-center gap-4 py-6">
              <Button>Show more car</Button>
              <span className="text-sm font-medium text-secondary-300">120 Car</span>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
