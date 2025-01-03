import React from 'react';

interface Props {
  selectedCity: string;
  selectedCountry: string;
  onCityChange: (city: string) => void;
  onCountryChange: (country: string) => void;
}

const LocationSection: React.FC<Props> = ({
  selectedCity,
  selectedCountry,
  onCityChange,
  onCountryChange
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-800">City / Province</span>
        <div className="relative">
          <select
            value={selectedCity}
            onChange={(e) => onCityChange(e.target.value)}
            className="appearance-none border border-slate-300 rounded-full p-3 pr-10"
          >
            <option>New York City, NY</option>
          </select>
          <img src="assets/image_a9e41175.png" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-800">Country</span>
        <div className="relative">
          <select
            value={selectedCountry}
            onChange={(e) => onCountryChange(e.target.value)}
            className="appearance-none border border-slate-300 rounded-full p-3 pl-10 pr-10"
          >
            <option>United Kingdom</option>
          </select>
          <img src="assets/image_732a6140.png" alt="" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <img src="assets/image_b09dd347.png" alt="" className="absolute right-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};

export default LocationSection;