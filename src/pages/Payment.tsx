import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/blocks/Header';
import { Footer } from '../components/blocks/Footer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { allCars } from '../data/cars';

export const Payment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get('car') || '2';
  const car = allCars.find((c) => c.id === carId) || allCars[1];

  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffLocation: '',
    dropoffDate: '',
    dropoffTime: '',
    cardNumber: '',
    expiry: '',
    cardHolder: '',
    cvc: '',
    promoCode: ''
  });

  const [agreements, setAgreements] = useState({
    marketing: false,
    terms: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-bg-primary">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Forms */}
            <div className="flex-1 space-y-8">
              {/* Billing Info */}
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-secondary-500">Billing Info</h2>
                    <p className="text-sm text-secondary-300">Please enter your billing info</p>
                  </div>
                  <span className="text-sm text-secondary-300">Step 1 of 4</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <Input
                    label="Address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                  <Input
                    label="Town / City"
                    placeholder="Town or city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </div>
              </div>

              {/* Rental Info */}
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-secondary-500">Rental Info</h2>
                    <p className="text-sm text-secondary-300">Please select your rental date</p>
                  </div>
                  <span className="text-sm text-secondary-300">Step 2 of 4</span>
                </div>

                {/* Pick-Up */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 rounded-full border-4 border-info-500 bg-info-500/30" />
                    <span className="text-base font-semibold text-secondary-500">Pick - Up</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Locations"
                      placeholder="Select your city"
                      value={formData.pickupLocation}
                      onChange={(e) => handleInputChange('pickupLocation', e.target.value)}
                    />
                    <Input
                      label="Date"
                      placeholder="Select your date"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                    />
                  </div>
                  <div className="mt-6 md:w-1/2 md:pr-3">
                    <Input
                      label="Time"
                      placeholder="Select your time"
                      type="time"
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                    />
                  </div>
                </div>

                {/* Drop-Off */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 rounded-full border-4 border-info-500 bg-info-500/30" />
                    <span className="text-base font-semibold text-secondary-500">Drop - Off</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Locations"
                      placeholder="Select your city"
                      value={formData.dropoffLocation}
                      onChange={(e) => handleInputChange('dropoffLocation', e.target.value)}
                    />
                    <Input
                      label="Date"
                      placeholder="Select your date"
                      type="date"
                      value={formData.dropoffDate}
                      onChange={(e) => handleInputChange('dropoffDate', e.target.value)}
                    />
                  </div>
                  <div className="mt-6 md:w-1/2 md:pr-3">
                    <Input
                      label="Time"
                      placeholder="Select your time"
                      type="time"
                      value={formData.dropoffTime}
                      onChange={(e) => handleInputChange('dropoffTime', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-secondary-500">Payment Method</h2>
                    <p className="text-sm text-secondary-300">Please enter your payment method</p>
                  </div>
                  <span className="text-sm text-secondary-300">Step 3 of 4</span>
                </div>

                {/* Credit Card */}
                <div className="bg-bg-primary rounded-[10px] p-6 mb-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'credit'}
                        onChange={() => setPaymentMethod('credit')}
                        className="w-5 h-5 accent-primary-500"
                      />
                      <span className="text-base font-semibold text-secondary-500">Credit Card</span>
                    </div>
                    <div className="flex gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
                    </div>
                  </label>
                  {paymentMethod === 'credit' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <Input
                        label="Card Number"
                        placeholder="Card number"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      />
                      <Input
                        label="Expration Date"
                        placeholder="DD / MM / YY"
                        value={formData.expiry}
                        onChange={(e) => handleInputChange('expiry', e.target.value)}
                      />
                      <Input
                        label="Card Holder"
                        placeholder="Card holder"
                        value={formData.cardHolder}
                        onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                      />
                      <Input
                        label="CVC"
                        placeholder="CVC"
                        value={formData.cvc}
                        onChange={(e) => handleInputChange('cvc', e.target.value)}
                      />
                    </div>
                  )}
                </div>

                {/* PayPal */}
                <div className="bg-bg-primary rounded-[10px] p-6 mb-4">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'paypal'}
                        onChange={() => setPaymentMethod('paypal')}
                        className="w-5 h-5 accent-primary-500"
                      />
                      <span className="text-base font-semibold text-secondary-500">PayPal</span>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
                  </label>
                </div>

                {/* Bitcoin */}
                <div className="bg-bg-primary rounded-[10px] p-6">
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'bitcoin'}
                        onChange={() => setPaymentMethod('bitcoin')}
                        className="w-5 h-5 accent-primary-500"
                      />
                      <span className="text-base font-semibold text-secondary-500">Bitcoin</span>
                    </div>
                    <span className="text-lg font-bold text-warning">Bitcoin</span>
                  </label>
                </div>
              </div>

              {/* Confirmation */}
              <div className="bg-white rounded-[10px] p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-secondary-500">Confirmation</h2>
                    <p className="text-sm text-secondary-300">We are getting to the end. Just few clicks and your rental is ready!</p>
                  </div>
                  <span className="text-sm text-secondary-300">Step 4 of 4</span>
                </div>

                <div className="space-y-6">
                  <label className="flex items-start gap-4 p-4 bg-bg-primary rounded-[10px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.marketing}
                      onChange={(e) => setAgreements({ ...agreements, marketing: e.target.checked })}
                      className="w-6 h-6 mt-0.5 accent-primary-500"
                    />
                    <span className="text-base font-semibold text-secondary-400">
                      I agree with sending an Marketing and newsletter emails. No spam, promissed!
                    </span>
                  </label>
                  <label className="flex items-start gap-4 p-4 bg-bg-primary rounded-[10px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreements.terms}
                      onChange={(e) => setAgreements({ ...agreements, terms: e.target.checked })}
                      className="w-6 h-6 mt-0.5 accent-primary-500"
                    />
                    <span className="text-base font-semibold text-secondary-400">
                      I agree with our terms and conditions and privacy policy.
                    </span>
                  </label>
                </div>

                <Button className="mt-8" size="lg">Rent Now</Button>

                <div className="mt-8 flex items-start gap-4">
                  <svg className="w-8 h-8 text-secondary-300" fill="none" viewBox="0 0 32 32" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-base font-semibold text-secondary-500">All your data are safe</h3>
                    <p className="text-sm text-secondary-300">We are using the most advanced security to provide you the best experience ever.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Rental Summary */}
            <div className="w-full lg:w-[492px]">
              <div className="bg-white rounded-[10px] p-6 sticky top-[140px]">
                <h2 className="text-xl font-bold text-secondary-500 mb-1">Rental Summary</h2>
                <p className="text-sm text-secondary-300 mb-8">
                  Prices may change depending on the length of the rental and the price of your rental car.
                </p>

                {/* Car Info */}
                <div className="flex gap-4 mb-8">
                  <div className="w-[132px] h-[108px] bg-primary-500 rounded-[10px] flex items-center justify-center p-4">
                    <img src={car.image} alt={car.name} className="w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-[32px] font-bold text-secondary-500">{car.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-warning">
                        {[...Array(4)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-secondary-300">440+ Reviewer</span>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-secondary-200/40 pt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-base text-secondary-300">Subtotal</span>
                    <span className="text-base font-semibold text-secondary-500">${car.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base text-secondary-300">Tax</span>
                    <span className="text-base font-semibold text-secondary-500">$0</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mt-8 flex items-center gap-4 bg-bg-primary rounded-[10px] p-4">
                  <input
                    type="text"
                    placeholder="Apply promo code"
                    className="flex-1 bg-transparent text-sm placeholder:text-secondary-300 focus:outline-none"
                    value={formData.promoCode}
                    onChange={(e) => handleInputChange('promoCode', e.target.value)}
                  />
                  <button className="text-base font-semibold text-secondary-500 hover:text-primary-500">
                    Apply now
                  </button>
                </div>

                {/* Total */}
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500">Total Rental Price</h3>
                    <p className="text-sm text-secondary-300">Overall price and includes rental discount</p>
                  </div>
                  <span className="text-[32px] font-bold text-secondary-500">${car.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
