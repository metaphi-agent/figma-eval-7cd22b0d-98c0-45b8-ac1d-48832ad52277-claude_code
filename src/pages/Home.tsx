import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/blocks/Header';
import { Footer } from '../components/blocks/Footer';
import { HeroBanner } from '../components/blocks/HeroBanner';
import { SearchFilter } from '../components/blocks/SearchFilter';
import { CarCard } from '../components/blocks/CarCard';
import { Button } from '../components/ui/Button';
import { popularCars, recommendationCars } from '../data/cars';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-bg-primary">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-8">
          {/* Hero Banners */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <HeroBanner
              variant="light-blue"
              title="The Best Platform for Car Rental"
              subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
            />
            <HeroBanner
              variant="blue"
              title="Easy way to rent a car at a low price"
              subtitle="Providing cheap car rental services and safe and comfortable facilities."
            />
          </div>

          {/* Search Filter */}
          <div className="mb-9">
            <SearchFilter />
          </div>

          {/* Popular Cars */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-base font-semibold text-secondary-300">Popular Car</h2>
              <Link to="/category" className="text-base font-semibold text-primary-500 hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {popularCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </section>

          {/* Recommendation Cars */}
          <section className="mb-8">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-base font-semibold text-secondary-300">Recomendation Car</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {recommendationCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </section>

          {/* Show More */}
          <div className="flex justify-center items-center gap-4 py-6">
            <Link to="/category">
              <Button>Show more car</Button>
            </Link>
            <span className="text-sm font-medium text-secondary-300">120 Car</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
