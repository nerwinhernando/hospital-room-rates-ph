'use client';

import React, { useState, useMemo } from 'react';
import { Search, MapPin, Phone, Star, Filter } from 'lucide-react';

const HospitalRoomRatesSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  // Sample hospital data
  const hospitals = [
    {
      id: 1,
      name: "Makati Medical Center",
      region: "National Capital Region",
      city: "Makati City",
      address: "2 Amorsolo Street, Legaspi Village, Makati City",
      phone: "(02) 8888-8999",
      rating: 4.5,
      rooms: [
        { type: "Standard Room", price: 8000, amenities: ["AC", "TV", "Private Bath"] },
        { type: "Deluxe Room", price: 12000, amenities: ["AC", "TV", "Private Bath", "Sofa"] },
        { type: "Suite", price: 25000, amenities: ["AC", "TV", "Private Bath", "Living Area", "Kitchenette"] },
        { type: "ICU", price: 15000, amenities: ["24/7 Monitoring", "Ventilator Ready"] }
      ]
    },
    {
      id: 2,
      name: "St. Luke's Medical Center",
      region: "National Capital Region",
      city: "Quezon City",
      address: "279 E. Rodriguez Sr. Avenue, Quezon City",
      phone: "(02) 8723-0101",
      rating: 4.7,
      rooms: [
        { type: "Standard Room", price: 9000, amenities: ["AC", "TV", "Private Bath"] },
        { type: "Deluxe Room", price: 14000, amenities: ["AC", "TV", "Private Bath", "Sofa", "Refrigerator"] },
        { type: "Suite", price: 30000, amenities: ["AC", "TV", "Private Bath", "Living Area", "Kitchenette", "Balcony"] },
        { type: "ICU", price: 18000, amenities: ["24/7 Monitoring", "Ventilator Ready", "Specialized Equipment"] }
      ]
    },
    {
      id: 3,
      name: "Cebu Doctors' University Hospital",
      region: "Central Visayas",
      city: "Cebu City",
      address: "Larrazabal Avenue, Cebu City",
      phone: "(032) 255-5555",
      rating: 4.3,
      rooms: [
        { type: "Standard Room", price: 6000, amenities: ["AC", "TV", "Private Bath"] },
        { type: "Deluxe Room", price: 9000, amenities: ["AC", "TV", "Private Bath", "Sofa"] },
        { type: "Suite", price: 18000, amenities: ["AC", "TV", "Private Bath", "Living Area"] },
        { type: "ICU", price: 12000, amenities: ["24/7 Monitoring", "Ventilator Ready"] }
      ]
    },
    {
      id: 4,
      name: "Davao Medical School Foundation Hospital",
      region: "Davao Region",
      city: "Davao City",
      address: "Bajada, Davao City",
      phone: "(082) 227-2731",
      rating: 4.2,
      rooms: [
        { type: "Standard Room", price: 5500, amenities: ["AC", "TV", "Private Bath"] },
        { type: "Deluxe Room", price: 8000, amenities: ["AC", "TV", "Private Bath", "Sofa"] },
        { type: "Suite", price: 15000, amenities: ["AC", "TV", "Private Bath", "Living Area"] },
        { type: "ICU", price: 10000, amenities: ["24/7 Monitoring", "Ventilator Ready"] }
      ]
    },
    {
      id: 5,
      name: "Northern Mindanao Medical Center",
      region: "Northern Mindanao",
      city: "Cagayan de Oro City",
      address: "J.R. Borja Street, Cagayan de Oro City",
      phone: "(088) 857-3333",
      rating: 4.0,
      rooms: [
        { type: "Standard Room", price: 4500, amenities: ["AC", "TV", "Shared Bath"] },
        { type: "Deluxe Room", price: 7000, amenities: ["AC", "TV", "Private Bath", "Sofa"] },
        { type: "Suite", price: 12000, amenities: ["AC", "TV", "Private Bath", "Living Area"] },
        { type: "ICU", price: 8000, amenities: ["24/7 Monitoring", "Ventilator Ready"] }
      ]
    },
    {
      id: 6,
      name: "Baguio General Hospital",
      region: "Cordillera Administrative Region",
      city: "Baguio City",
      address: "Governor Pack Road, Baguio City",
      phone: "(074) 442-4216",
      rating: 4.1,
      rooms: [
        { type: "Standard Room", price: 5000, amenities: ["AC", "TV", "Private Bath"] },
        { type: "Deluxe Room", price: 7500, amenities: ["AC", "TV", "Private Bath", "Sofa"] },
        { type: "Suite", price: 14000, amenities: ["AC", "TV", "Private Bath", "Living Area"] },
        { type: "ICU", price: 9000, amenities: ["24/7 Monitoring", "Ventilator Ready"] }
      ]
    }
  ];

  const regions = [
    "National Capital Region",
    "Central Visayas",
    "Davao Region",
    "Northern Mindanao",
    "Cordillera Administrative Region",
    "Ilocos Region",
    "Cagayan Valley",
    "Central Luzon",
    "CALABARZON",
    "MIMAROPA",
    "Bicol Region",
    "Western Visayas",
    "Eastern Visayas",
    "Zamboanga Peninsula",
    "SOCCSKSARGEN",
    "Caraga",
    "BARMM"
  ];

  const roomTypes = ["Standard Room", "Deluxe Room", "Suite", "ICU"];

  const filteredHospitals = useMemo(() => {
    return hospitals.filter(hospital => {
      const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hospital.city.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = !selectedRegion || hospital.region === selectedRegion;
      const matchesRoomType = !selectedRoomType || hospital.rooms.some(room => room.type === selectedRoomType);
      const matchesPrice = !selectedRoomType || hospital.rooms.some(room => 
        room.type === selectedRoomType && room.price >= priceRange[0] && room.price <= priceRange[1]
      );
      
      return matchesSearch && matchesRegion && matchesRoomType && matchesPrice;
    });
  }, [searchTerm, selectedRegion, selectedRoomType, priceRange]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Philippines Hospital Room Rates Search</h1>
          <p className="text-gray-600 mt-2">Find hospitals and compare room rates across the Philippines</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search hospitals by name or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4"
          >
            <Filter className="w-4 h-4" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Regions</option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select
                  value={selectedRoomType}
                  onChange={(e) => setSelectedRoomType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Room Types</option>
                  {roomTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                </label>
                <div className="flex gap-2">
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredHospitals.map(hospital => (
            <div key={hospital.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{hospital.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{hospital.city}, {hospital.region}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{hospital.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(hospital.rating)}
                    <span className="text-sm text-gray-600 ml-1">{hospital.rating}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">{hospital.address}</div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Room Rates</h4>
                  <div className="space-y-3">
                    {hospital.rooms.map((room, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{room.type}</div>
                          <div className="text-sm text-gray-600">
                            {room.amenities.join(', ')}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold text-blue-600">{formatPrice(room.price)}</div>
                          <div className="text-sm text-gray-500">per night</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No hospitals found matching your criteria.</div>
            <div className="text-gray-400 mt-2">Try adjusting your search terms or filters.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalRoomRatesSearchApp;