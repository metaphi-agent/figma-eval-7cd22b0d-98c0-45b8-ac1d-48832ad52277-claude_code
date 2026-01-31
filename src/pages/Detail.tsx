import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/blocks/Header';
import { Footer } from '../components/blocks/Footer';
import { Sidebar } from '../components/blocks/Sidebar';
import { CarCard } from '../components/blocks/CarCard';
import { Button } from '../components/ui/Button';
import { allCars, popularCars, recommendationCars } from '../data/cars';

export const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const car = allCars.find((c) => c.id === id) || allCars[1];
  const [selectedImage, setSelectedImage] = useState(0);

  const carImages = [car.image, car.image, car.image];

  const reviews = [
    {
      id: 1,
      name: 'Alex Stanton',
      role: 'CEO at Bukalapak',
      date: '21 July 2022',
      rating: 4,
      comment: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    },
    {
      id: 2,
      name: 'Skylar Dias',
      role: 'CEO at Amazon',
      date: '20 July 2022',
      rating: 4,
      comment: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-bg-primary">
          <div className="p-8">
            {/* Car Detail Section */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              {/* Car Images */}
              <div className="flex-1">
                <div className="bg-primary-500 rounded-[10px] p-6 mb-6 relative overflow-hidden">
                  {/* Decorative circles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full border-[10px] border-white/6"
                        style={{
                          width: `${50 + i * 125}px`,
                          height: `${50 + i * 125}px`,
                          right: `${-160 - i * 62}px`,
                          top: `${-60 - i * 62}px`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-[32px] font-semibold text-white leading-tight mb-4">
                      Sports car with the best design and acceleration
                    </h2>
                    <p className="text-base text-white/80 mb-8">
                      Safety and comfort while driving a futuristic and elegant sports car
                    </p>
                  </div>
                  <img
                    src={carImages[selectedImage]}
                    alt={car.name}
                    className="w-full max-w-md mx-auto object-contain relative z-10"
                  />
                </div>
                <div className="flex gap-6">
                  {carImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-[148px] h-[124px] rounded-[10px] overflow-hidden border-2 ${
                        selectedImage === index ? 'border-primary-500' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Car Info */}
              <div className="w-full lg:w-[492px] bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-start mb-2">
                  <h1 className="text-[32px] font-bold text-secondary-500">{car.name}</h1>
                  <button className="text-error">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-warning">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-secondary-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  </div>
                  <span className="text-sm text-secondary-300">440+ Reviewer</span>
                </div>
                <p className="text-secondary-300 mb-8 leading-relaxed">
                  NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                </p>
                <div className="grid grid-cols-2 gap-x-11 gap-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-secondary-300">Type Car</span>
                    <span className="font-semibold text-secondary-400">{car.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-300">Capacity</span>
                    <span className="font-semibold text-secondary-400">{car.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-300">Steering</span>
                    <span className="font-semibold text-secondary-400">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary-300">Gasoline</span>
                    <span className="font-semibold text-secondary-400">{car.gasoline}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[28px] font-bold text-secondary-500">
                      ${car.price.toFixed(2)}/
                    </span>
                    <span className="text-secondary-300">days</span>
                    {car.originalPrice && (
                      <p className="text-base text-secondary-300 line-through">
                        ${car.originalPrice.toFixed(2)}
                      </p>
                    )}
                  </div>
                  <Link to={`/payment?car=${car.id}`}>
                    <Button size="lg">Rent Now</Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-[10px] p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-semibold text-secondary-500">Reviews</h2>
                <span className="px-3 py-1 bg-primary-500 text-white text-sm font-bold rounded">13</span>
              </div>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-4">
                    <div className="w-14 h-14 rounded-full bg-secondary-200 shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-secondary-500">{review.name}</h3>
                          <p className="text-sm text-secondary-300">{review.role}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-secondary-300 mb-1">{review.date}</p>
                          <div className="flex text-warning">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-secondary-300 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-secondary-300 flex items-center gap-2 mx-auto">
                Show All <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>

            {/* Recent Cars */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-base font-semibold text-secondary-300">Recent Car</h2>
                <Link to="/category" className="text-base font-semibold text-primary-500 hover:underline">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {popularCars.slice(0, 3).map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </section>

            {/* Recommendation Cars */}
            <section>
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-base font-semibold text-secondary-300">Recomendation Car</h2>
                <Link to="/category" className="text-base font-semibold text-primary-500 hover:underline">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {recommendationCars.slice(0, 3).map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};
