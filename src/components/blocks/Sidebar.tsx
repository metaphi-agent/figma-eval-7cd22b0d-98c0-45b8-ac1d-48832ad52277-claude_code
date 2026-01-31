import React, { useState } from 'react';
import { Checkbox } from '../ui/Checkbox';

interface SidebarProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  types: string[];
  capacity: string[];
  maxPrice: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    types: ['Sport', 'SUV'],
    capacity: ['2 Person', '8 or More'],
    maxPrice: 100
  });

  const handleTypeChange = (type: string) => {
    const newTypes = filters.types.includes(type)
      ? filters.types.filter(t => t !== type)
      : [...filters.types, type];
    const newFilters = { ...filters, types: newTypes };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleCapacityChange = (capacity: string) => {
    const newCapacity = filters.capacity.includes(capacity)
      ? filters.capacity.filter(c => c !== capacity)
      : [...filters.capacity, capacity];
    const newFilters = { ...filters, capacity: newCapacity };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handlePriceChange = (price: number) => {
    const newFilters = { ...filters, maxPrice: price };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const carTypes = [
    { label: 'Sport', count: 10 },
    { label: 'SUV', count: 12 },
    { label: 'MPV', count: 16 },
    { label: 'Sedan', count: 20 },
    { label: 'Coupe', count: 14 },
    { label: 'Hatchback', count: 14 }
  ];

  const capacities = [
    { label: '2 Person', count: 10 },
    { label: '4 Person', count: 14 },
    { label: '6 Person', count: 12 },
    { label: '8 or More', count: 16 }
  ];

  return (
    <aside className="w-[360px] shrink-0 bg-white h-fit sticky top-[124px]">
      <div className="p-8">
        {/* Type Filter */}
        <div className="mb-14">
          <h3 className="text-xs font-semibold text-secondary-300 tracking-wider mb-7">TYPE</h3>
          <div className="space-y-8">
            {carTypes.map((type) => (
              <Checkbox
                key={type.label}
                label={type.label}
                count={type.count}
                checked={filters.types.includes(type.label)}
                onChange={() => handleTypeChange(type.label)}
              />
            ))}
          </div>
        </div>

        {/* Capacity Filter */}
        <div className="mb-14">
          <h3 className="text-xs font-semibold text-secondary-300 tracking-wider mb-7">CAPACITY</h3>
          <div className="space-y-8">
            {capacities.map((capacity) => (
              <Checkbox
                key={capacity.label}
                label={capacity.label}
                count={capacity.count}
                checked={filters.capacity.includes(capacity.label)}
                onChange={() => handleCapacityChange(capacity.label)}
              />
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-xs font-semibold text-secondary-300 tracking-wider mb-7">PRICE</h3>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="150"
              value={filters.maxPrice}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full h-3 bg-secondary-200 rounded-full appearance-none cursor-pointer accent-primary-500"
              style={{
                background: `linear-gradient(to right, #3563E9 0%, #3563E9 ${(filters.maxPrice / 150) * 100}%, #C3D4E9 ${(filters.maxPrice / 150) * 100}%, #C3D4E9 100%)`
              }}
            />
            <p className="mt-3 text-xl font-semibold text-secondary-400">
              Max. ${filters.maxPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
