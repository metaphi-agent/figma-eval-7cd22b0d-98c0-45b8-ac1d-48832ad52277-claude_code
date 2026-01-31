import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

interface HeroBannerProps {
  variant?: 'blue' | 'light-blue';
  title: string;
  subtitle: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  variant = 'light-blue',
  title,
  subtitle
}) => {
  const bgColor = variant === 'blue' ? 'bg-primary-500' : 'bg-info-500';

  return (
    <div className={`${bgColor} rounded-[10px] p-6 relative overflow-hidden`}>
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

      <div className="relative z-10 max-w-[284px]">
        <h2 className="text-[32px] font-semibold text-white leading-tight mb-4">
          {title}
        </h2>
        <p className="text-base text-white/80 mb-5 leading-relaxed">
          {subtitle}
        </p>
        <Link to="/category">
          <Button
            variant="primary"
            className={variant === 'blue' ? 'bg-primary-500 hover:bg-primary-600' : ''}
          >
            Rental Car
          </Button>
        </Link>
      </div>

      {/* Car Image */}
      <div className="absolute right-4 bottom-0">
        <img
          src="./assets/images/hero-car.png"
          alt="Car"
          className="w-[340px] h-auto object-contain"
        />
      </div>
    </div>
  );
};
