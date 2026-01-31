export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  gasoline: string;
  transmission: string;
  capacity: string;
  price: number;
  originalPrice?: number;
  isFavorite: boolean;
}

export const popularCars: Car[] = [
  {
    id: '1',
    name: 'Koenigsegg',
    type: 'Sport',
    image: './assets/images/car-koenigsegg.png',
    gasoline: '90L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 99.00,
    isFavorite: true
  },
  {
    id: '2',
    name: 'Nissan GT - R',
    type: 'Sport',
    image: './assets/images/car-nissan-gtr.png',
    gasoline: '80L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 80.00,
    originalPrice: 100.00,
    isFavorite: false
  },
  {
    id: '3',
    name: 'Rolls - Royce',
    type: 'Sedan',
    image: './assets/images/car-rolls-royce.png',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 96.00,
    isFavorite: false
  },
  {
    id: '4',
    name: 'Nissan GT - R',
    type: 'Sport',
    image: './assets/images/car-nissan-gtr-2.png',
    gasoline: '80L',
    transmission: 'Manual',
    capacity: '2 People',
    price: 80.00,
    originalPrice: 100.00,
    isFavorite: false
  }
];

export const recommendationCars: Car[] = [
  {
    id: '5',
    name: 'All New Rush',
    type: 'SUV',
    image: './assets/images/car-nissan-gtr.png',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 72.00,
    originalPrice: 80.00,
    isFavorite: false
  },
  {
    id: '6',
    name: 'CR - V',
    type: 'SUV',
    image: './assets/images/car-rolls-royce.png',
    gasoline: '80L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 80.00,
    isFavorite: true
  },
  {
    id: '7',
    name: 'All New Terios',
    type: 'SUV',
    image: './assets/images/car-nissan-gtr-2.png',
    gasoline: '90L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 74.00,
    isFavorite: false
  },
  {
    id: '8',
    name: 'CR - V',
    type: 'SUV',
    image: './assets/images/car-koenigsegg.png',
    gasoline: '80L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 80.00,
    isFavorite: true
  },
  {
    id: '9',
    name: 'MG ZX Exclusice',
    type: 'Hatchback',
    image: './assets/images/car-nissan-gtr.png',
    gasoline: '70L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 76.00,
    originalPrice: 80.00,
    isFavorite: true
  },
  {
    id: '10',
    name: 'New MG ZS',
    type: 'SUV',
    image: './assets/images/car-rolls-royce.png',
    gasoline: '80L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 80.00,
    isFavorite: false
  },
  {
    id: '11',
    name: 'MG ZX Excite',
    type: 'Hatchback',
    image: './assets/images/car-koenigsegg.png',
    gasoline: '90L',
    transmission: 'Manual',
    capacity: '4 People',
    price: 74.00,
    isFavorite: true
  },
  {
    id: '12',
    name: 'New MG ZS',
    type: 'SUV',
    image: './assets/images/car-nissan-gtr-2.png',
    gasoline: '80L',
    transmission: 'Manual',
    capacity: '6 People',
    price: 80.00,
    isFavorite: false
  }
];

export const allCars = [...popularCars, ...recommendationCars];
