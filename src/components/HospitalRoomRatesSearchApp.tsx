'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, MapPin, Phone, Star, Filter, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Import the HospitalDetail component
const HospitalDetail = React.lazy(() => import('./HospitalDetail'));

const HospitalSearchApp = () => {
  // State for UI
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  
  // State for navigation
  const [selectedHospitalId, setSelectedHospitalId] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState(false);
  
  // State for data
  type HospitalRoom = {
    type: string;
    name: string;
    price: number;
    amenities: string[];
  };

  type Hospital = {
    id: number;
    name: string;
    region: string;
    city: string;
    address: string;
    phone: string;
    rating: number;
    website: string;
    description: string;
    rooms: HospitalRoom[];
  };

  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [regions, setRegions] = useState<{ id: number; name: string }[]>([]);
  const [roomTypes, setRoomTypes] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch regions on component mount
  useEffect(() => {
    fetchRegions();
  }, []);

  // Fetch room types on component mount
  useEffect(() => {
    fetchRoomTypes();
  }, []);

  // Fetch hospitals when filters change
  useEffect(() => {
    fetchHospitals();
  }, [selectedRegion, selectedRoomType, priceRange]);

  const fetchRegions = async () => {
    try {
      const { data, error } = await supabase
        .from('regions')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setRegions(data || []);
    } catch (err) {
      console.error('Error fetching regions:', err);
      setError('Failed to load regions');
    }
  };

  const fetchRoomTypes = async () => {
    try {
      const { data, error } = await supabase
        .from('room_types')
        .select('id, name')
        .order('name');

      if (error) throw error;
      setRoomTypes(data || []);
    } catch (err) {
      console.error('Error fetching room types:', err);
      setError('Failed to load room types');
    }
  };

  const fetchHospitals = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('hospitals')
        .select(`
          *,
          regions(name),
          rooms(
            id,
            name,
            price,
            amenities,
            room_types(name)
          )
        `)
        .eq('is_active', true);

      // Apply region filter
      if (selectedRegion) {
        const region = regions.find(r => r.name === selectedRegion);
        if (region) {
          query = query.eq('region_id', region.id);
        }
      }

      const { data, error } = await query.order('rating', { ascending: false });

      if (error) throw error;

      // Process the data to match our component structure
      const processedHospitals = (data || []).map(hospital => ({
        id: hospital.id,
        name: hospital.name,
        region: hospital.regions?.name || 'Unknown Region',
        city: hospital.city,
        address: hospital.address,
        phone: hospital.phone,
        rating: hospital.rating,
        website: hospital.website,
        description: hospital.description,
        rooms: (hospital.rooms || []).map((room: { room_types: { name: string; }; name: string; price: number; amenities: string[]; }) => ({
          type: room.room_types?.name || 'Unknown Type',
          name: room.name,
          price: room.price,
          amenities: Array.isArray(room.amenities) ? room.amenities : JSON.parse(room.amenities || '[]')
        }))
      }));

      setHospitals(processedHospitals);
    } catch (err) {
      console.error('Error fetching hospitals:', err);
      setError('Failed to load hospitals');
    } finally {
      setLoading(false);
    }
  };

  // Filter hospitals based on search term and room type/price
  const filteredHospitals = useMemo(() => {
    return hospitals.filter(hospital => {
      const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hospital.city.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRoomType = !selectedRoomType || hospital.rooms.some(room => room.type === selectedRoomType);
      
      const matchesPrice = !selectedRoomType || hospital.rooms.some(room => 
        room.type === selectedRoomType && room.price >= priceRange[0] && room.price <= priceRange[1]
      );
      
      return matchesSearch && matchesRoomType && matchesPrice;
    });
  }, [hospitals, searchTerm, selectedRoomType, priceRange]);

  const formatPrice = (price: string | number | bigint) => {
    const numericPrice = typeof price === 'string' ? Number(price) : price;
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numericPrice);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleRefresh = () => {
    setError(null);
    fetchHospitals();
    fetchRegions();
    fetchRoomTypes();
  };

  const handleHospitalClick = (hospitalId: number) => {
    setSelectedHospitalId(hospitalId);
    setShowDetail(true);
  };

  const handleBackToSearch = () => {
    setShowDetail(false);
    setSelectedHospitalId(null);
  };

  // If showing hospital detail, render HospitalDetail component
  if (showDetail && selectedHospitalId) {
    return (
      <HospitalDetail 
        hospitalId={selectedHospitalId} 
        onBack={handleBackToSearch}
      />
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connection Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={handleRefresh}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Philippines Hospital Room Rates Search</h1>
          <p className="text-gray-600 mt-2">Find hospitals and compare room rates across the Philippines</p>
          {loading && (
            <div className="flex items-center mt-2 text-blue-600">
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Loading hospital data...
            </div>
          )}
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
                  disabled={loading}
                >
                  <option value="">All Regions</option>
                  {regions.map(region => (
                    <option key={region.id} value={region.name}>{region.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select
                  value={selectedRoomType}
                  onChange={(e) => setSelectedRoomType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={loading}
                >
                  <option value="">All Room Types</option>
                  {roomTypes.map(type => (
                    <option key={type.id} value={type.name}>{type.name}</option>
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
                    disabled={loading}
                  />
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1"
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading hospitals...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredHospitals.map(hospital => (
              <div 
                key={hospital.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleHospitalClick(hospital.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        {hospital.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{hospital.city}, {hospital.region}</span>
                      </div>
                      {hospital.phone && (
                        <div className="flex items-center gap-2 mt-1">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{hospital.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(hospital.rating)}
                      <span className="text-sm text-gray-600 ml-1">{hospital.rating}</span>
                    </div>
                  </div>

                  {hospital.address && (
                    <div className="text-sm text-gray-600 mb-4">{hospital.address}</div>
                  )}

                  {hospital.description && (
                    <div className="text-sm text-gray-700 mb-4 italic">{hospital.description}</div>
                  )}

                  {hospital.website && (
                    <div className="mb-4">
                      <a 
                        href={hospital.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm underline"
                        onClick={(e) => e.stopPropagation()} // Prevent triggering hospital click
                      >
                        Visit Website
                      </a>
                    </div>
                  )}

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Room Rates</h4>
                    {hospital.rooms.length > 0 ? (
                      <div className="space-y-3">
                        {hospital.rooms.slice(0, 3).map((room, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div className="flex-1">
                              <div className="font-medium text-gray-900">{room.name || room.type}</div>
                              <div className="text-sm text-gray-600">
                                {room.amenities.length > 0 ? room.amenities.slice(0, 3).join(', ') : 'No amenities listed'}
                                {room.amenities.length > 3 && '...'}
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-semibold text-blue-600">{formatPrice(room.price)}</div>
                              <div className="text-sm text-gray-500">per night</div>
                            </div>
                          </div>
                        ))}
                        {hospital.rooms.length > 3 && (
                          <div className="text-center text-blue-600 text-sm font-medium">
                            +{hospital.rooms.length - 3} more rooms - Click to view all
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-500 text-sm">No room information available</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No hospitals found matching your criteria.</div>
            <div className="text-gray-400 mt-2">Try adjusting your search terms or filters.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('');
                setSelectedRoomType('');
                setPriceRange([0, 50000]);
              }}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Statistics */}
        {!loading && filteredHospitals.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{filteredHospitals.length}</div>
                <div className="text-sm text-gray-600">Hospitals Found</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {filteredHospitals.reduce((sum, h) => sum + h.rooms.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Available Rooms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(filteredHospitals.reduce((sum, h) => sum + h.rating, 0) / filteredHospitals.length * 10) / 10}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {formatPrice(
                    filteredHospitals
                      .flatMap(h => h.rooms)
                      .reduce((sum, r, _, arr) => sum + r.price / arr.length, 0)
                  )}
                </div>
                <div className="text-sm text-gray-600">Average Price</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalSearchApp;
