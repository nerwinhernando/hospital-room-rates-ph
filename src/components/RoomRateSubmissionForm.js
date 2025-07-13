'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  // MapPin, 
  DollarSign, 
  Users, 
  Bed, 
  Plus, 
  Minus, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Star,
  Calendar,
  User,
  // Mail,
  // Phone,
  ArrowLeft
} from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

const RoomRateSubmissionForm = ({ onClose }) => {
  const router = useRouter();
  
  // Form state
  const [selectedHospital, setSelectedHospital] = useState('');
  const [submitterInfo, setSubmitterInfo] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: '', // patient, visitor, staff, etc.
  });
  
  const [roomEntries, setRoomEntries] = useState([{
    id: Date.now(),
    roomType: '',
    roomName: '',
    price: '',
    capacity: 1,
    amenities: [],
    description: '',
    dateStayed: '',
    rating: 5
  }]);

  // Data state
  const [hospitals, setHospitals] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [availableAmenities, setAvailableAmenities] = useState([]);
  
  // UI state
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const relationshipOptions = [
    { value: 'patient', label: 'Patient' },
    { value: 'visitor', label: 'Patient Visitor/Family' },
    { value: 'staff', label: 'Hospital Staff' },
    { value: 'researcher', label: 'Healthcare Researcher' },
    { value: 'other', label: 'Other' }
  ];

  // Load initial data
  useEffect(() => {
    loadFormData();
  }, []);

  const loadFormData = async () => {
    try {
      setLoading(true);
      
      // Load hospitals
      const { data: hospitalsData, error: hospitalsError } = await supabase
        .from('hospitals')
        .select(`
          id,
          name,
          city,
          regions(name)
        `)
        .eq('is_active', true)
        .order('name');

      if (hospitalsError) throw hospitalsError;

      // Load room types
      const { data: roomTypesData, error: roomTypesError } = await supabase
        .from('room_types')
        .select('*')
        .order('name');

      if (roomTypesError) throw roomTypesError;

      // Load amenities
      const { data: amenitiesData, error: amenitiesError } = await supabase
        .from('amenities')
        .select('*')
        .order('category', 'name');

      if (amenitiesError) throw amenitiesError;

      setHospitals(hospitalsData || []);
      setRoomTypes(roomTypesData || []);
      setAvailableAmenities(amenitiesData || []);
      
    } catch (err) {
      console.error('Error loading form data:', err);
      setError('Failed to load form data. Please refresh and try again.');
    } finally {
      setLoading(false);
    }
  };

  const addRoomEntry = () => {
    setRoomEntries([...roomEntries, {
      id: Date.now(),
      roomType: '',
      roomName: '',
      price: '',
      capacity: 1,
      amenities: [],
      description: '',
      dateStayed: '',
      rating: 5
    }]);
  };

  const removeRoomEntry = (id) => {
    if (roomEntries.length > 1) {
      setRoomEntries(roomEntries.filter(entry => entry.id !== id));
    }
  };

  const updateRoomEntry = (id, field, value) => {
    setRoomEntries(roomEntries.map(entry => 
      entry.id === id ? { ...entry, [field]: value } : entry
    ));
  };

  const toggleAmenity = (roomId, amenity) => {
    setRoomEntries(roomEntries.map(entry => {
      if (entry.id === roomId) {
        const amenities = entry.amenities.includes(amenity)
          ? entry.amenities.filter(a => a !== amenity)
          : [...entry.amenities, amenity];
        return { ...entry, amenities };
      }
      return entry;
    }));
  };

  const formatPrice = (price) => {
    const numPrice = parseFloat(price);
    if (isNaN(numPrice)) return '';
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(numPrice);
  };

  const validateForm = () => {
    // Check submitter info
    if (!submitterInfo.name || !submitterInfo.email || !submitterInfo.relationship) {
      setError('Please fill in all required personal information.');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(submitterInfo.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Check hospital selection
    if (!selectedHospital) {
      setError('Please select a hospital.');
      return false;
    }

    // Check room entries
    for (const entry of roomEntries) {
      if (!entry.roomType || !entry.price) {
        setError('Please fill in room type and price for all room entries.');
        return false;
      }
      if (parseFloat(entry.price) <= 0) {
        setError('Room prices must be greater than 0.');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setSubmitting(true);
      setError(null);

      // Create submission record
      const submissionData = {
        hospital_id: parseInt(selectedHospital),
        submitter_name: submitterInfo.name,
        submitter_email: submitterInfo.email,
        submitter_phone: submitterInfo.phone || null,
        submitter_relationship: submitterInfo.relationship,
        room_entries: roomEntries.map(entry => ({
          room_type: entry.roomType,
          room_name: entry.roomName || null,
          price: parseFloat(entry.price),
          capacity: entry.capacity,
          amenities: entry.amenities,
          description: entry.description || null,
          date_stayed: entry.dateStayed || null,
          rating: entry.rating
        })),
        status: 'pending'
      };

      const { error: submitError } = await supabase
        .from('room_rate_submissions')
        .insert(submissionData);

      if (submitError) throw submitError;

      setSubmitted(true);
      
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit room rate information. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedHospital('');
    setSubmitterInfo({ name: '', email: '', phone: '', relationship: '' });
    setRoomEntries([{
      id: Date.now(),
      roomType: '',
      roomName: '',
      price: '',
      capacity: 1,
      amenities: [],
      description: '',
      dateStayed: '',
      rating: 5
    }]);
    setSubmitted(false);
    setError(null);
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="text-gray-600">Loading form...</span>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Submission Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contributing hospital room rate information. Your submission will be reviewed and added to our database.
          </p>
          <div className="flex flex-col gap-3 justify-center">
            <button onClick={resetForm}>
              Submit Another Entry
            </button>
            <button
              onClick={handleBackToHome}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Hospital Search
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Submit Hospital Room Rates</h1>
              <p className="text-gray-600">
                Help others by sharing accurate room rate information from Philippine hospitals. 
                Your contributions help patients make informed decisions about their healthcare.
              </p>
            </div>
            <div className="flex gap-2">
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 p-2"
                  title="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {!onClose && (
                <button
                  onClick={handleBackToHome}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  title="Back to Hospital Search"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back to Search</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={submitterInfo.name}
                  onChange={(e) => setSubmitterInfo({...submitterInfo, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={submitterInfo.email}
                  onChange={(e) => setSubmitterInfo({...submitterInfo, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={submitterInfo.phone}
                  onChange={(e) => setSubmitterInfo({...submitterInfo, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Relationship to Hospital *
                </label>
                <select
                  value={submitterInfo.relationship}
                  onChange={(e) => setSubmitterInfo({...submitterInfo, relationship: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select relationship</option>
                  {relationshipOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Hospital Selection */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Select Hospital
            </h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital *
              </label>
              <select
                value={selectedHospital}
                onChange={(e) => setSelectedHospital(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a hospital</option>
                {hospitals.map(hospital => (
                  <option key={hospital.id} value={hospital.id}>
                    {hospital.name} - {hospital.city}, {hospital.regions?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Room Rate Entries */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Bed className="w-5 h-5" />
                Room Rate Information
              </h2>
              <button
                type="button"
                onClick={addRoomEntry}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Room
              </button>
            </div>

            <div className="space-y-6">
              {roomEntries.map((entry, index) => (
                <div key={entry.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Room {index + 1}</h3>
                    {roomEntries.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeRoomEntry(entry.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Room Type *
                      </label>
                      <select
                        value={entry.roomType}
                        onChange={(e) => updateRoomEntry(entry.id, 'roomType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select room type</option>
                        {roomTypes.map(type => (
                          <option key={type.id} value={type.name}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Room Name/Number
                      </label>
                      <input
                        type="text"
                        value={entry.roomName}
                        onChange={(e) => updateRoomEntry(entry.id, 'roomName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Room 201, VIP Suite A"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price per Night (PHP) *
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="number"
                          value={entry.price}
                          onChange={(e) => updateRoomEntry(entry.id, 'price', e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="0"
                          min="0"
                          step="100"
                        />
                      </div>
                      {entry.price && (
                        <div className="text-sm text-blue-600 mt-1">
                          {formatPrice(entry.price)}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Room Capacity
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="number"
                          value={entry.capacity}
                          onChange={(e) => updateRoomEntry(entry.id, 'capacity', parseInt(e.target.value) || 1)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          min="1"
                          max="10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Stay
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                          type="date"
                          value={entry.dateStayed}
                          onChange={(e) => updateRoomEntry(entry.id, 'dateStayed', e.target.value)}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Overall Rating
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(rating => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => updateRoomEntry(entry.id, 'rating', rating)}
                            className={`p-1 ${rating <= entry.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            <Star className="w-5 h-5 fill-current" />
                          </button>
                        ))}
                        <span className="text-sm text-gray-600 ml-2">{entry.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Room Description
                    </label>
                    <textarea
                      value={entry.description}
                      onChange={(e) => updateRoomEntry(entry.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Describe the room condition, cleanliness, view, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Room Amenities
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {availableAmenities.map(amenity => (
                        <label key={amenity.id} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={entry.amenities.includes(amenity.name)}
                            onChange={() => toggleAmenity(entry.id, amenity.name)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-gray-700">{amenity.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="text-sm text-gray-600">
                By submitting, you confirm that the information provided is accurate to the best of your knowledge.
              </div>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {submitting ? 'Submitting...' : 'Submit Room Rates'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomRateSubmissionForm;