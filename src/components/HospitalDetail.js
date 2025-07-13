'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Star, Globe, ArrowLeft, Loader2, AlertCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const DataSourceLegend = () => (
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
    <h3 className="text-sm font-medium text-blue-900 mb-2">Data Source Legend:</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          ✓ User Verified
        </span>
        <span className="text-gray-600">Submitted by real users</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          ⚠ Sample Data
        </span>
        <span className="text-gray-600">Demo/placeholder rates</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          ✓ Admin Verified
        </span>
        <span className="text-gray-600">Officially confirmed rates</span>
      </div>
    </div>
  </div>
);

export default function HospitalDetail({ hospitalId, onBack }) {
  const [hospital, setHospital] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchHospitalDetail()
  }, [hospitalId])

  const fetchHospitalDetail = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('hospitals')
        .select(`
          *,
          regions(name, provinces),
          rooms(
            *,
            room_types(name, description)
          ),
          reviews(
            id,
            rating,
            title,
            comment,
            user_name,
            created_at
          )
        `)
        .eq('id', hospitalId)
        .eq('is_active', true)
        .single()

      if (error) throw error
      setHospital(data)
    } catch (err) {
      console.error('Error fetching hospital details:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  const parseAmenities = (amenities) => {
    if (Array.isArray(amenities)) return amenities
    if (typeof amenities === 'string') {
      try {
        return JSON.parse(amenities)
      } catch {
        return []
      }
    }
    return []
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="text-gray-600">Loading hospital details...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Hospital</h2>
          <div className="text-red-600 mb-4">{error}</div>
          <button 
            onClick={onBack} 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  if (!hospital) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600 mb-4">Hospital not found</div>
          <button 
            onClick={onBack} 
            className="text-blue-600 hover:text-blue-800"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Search Results
        </button>

        {/* Hospital Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{hospital.name}</h1>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-600">{hospital.city}, {hospital.regions?.name}</span>
                </div>
                {hospital.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">{hospital.phone}</span>
                  </div>
                )}
                {hospital.website && (
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-gray-400" />
                    <a 
                      href={hospital.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1 bg-gray-50 px-4 py-2 rounded-lg">
              {renderStars(hospital.rating)}
              <span className="text-lg font-semibold ml-2">{hospital.rating}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="text-gray-700 mb-4">{hospital.address}</div>
            {hospital.description && (
              <div className="text-gray-600 italic bg-blue-50 p-4 rounded-lg">
                {hospital.description}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rooms */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rooms & Rates</h2>

              {/* ADD DATA SOURCE LEGEND HERE */}
              <DataSourceLegend />

              {hospital.rooms && hospital.rooms.length > 0 ? (
                <div className="space-y-4">
                  {hospital.rooms
                    .filter(room => room.is_available)
                    .map((room) => (
                    <div key={room.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-lg">{room.name}</h3>
                          <div className="text-sm text-blue-600 font-medium mb-2">
                            {room.room_types?.name}
                          </div>
                          
                          {room.description && (
                            <div className="text-sm text-gray-600 mb-3">{room.description}</div>
                          )}
                          
                          <div className="text-sm text-gray-600">
                            <strong>Capacity:</strong> {room.capacity || 1} guest(s)
                          </div>
                          
                          {room.amenities && (
                            <div className="mt-2">
                              <div className="text-sm font-medium text-gray-700 mb-1">Amenities:</div>
                              <div className="flex flex-wrap gap-1">
                                {parseAmenities(room.amenities).map((amenity, index) => (
                                  <span 
                                    key={index}
                                    className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                                  >
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="text-right">
                          <div className="font-bold text-2xl text-blue-600">{formatPrice(room.price)}</div>
                          <div className="text-sm text-gray-500">per night</div>
                          <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                            Contact Hospital
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 text-center py-8">
                  No room information available
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Information</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-medium text-gray-700">Location</div>
                  <div className="text-sm text-gray-600">{hospital.city}, {hospital.regions?.name}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Rating</div>
                  <div className="flex items-center gap-1">
                    {renderStars(hospital.rating)}
                    <span className="text-sm text-gray-600 ml-1">({hospital.rating}/5)</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700">Total Rooms</div>
                  <div className="text-sm text-gray-600">{hospital.rooms?.length || 0} room types</div>
                </div>
                {hospital.latitude && hospital.longitude && (
                  <div>
                    <div className="text-sm font-medium text-gray-700">Coordinates</div>
                    <div className="text-sm text-gray-600">
                      {hospital.latitude.toFixed(4)}, {hospital.longitude.toFixed(4)}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {hospital.phone && (
                  <div>
                    <div className="text-sm font-medium text-gray-700">Phone</div>
                    <a href={`tel:${hospital.phone}`} className="text-sm text-blue-600 hover:text-blue-800">
                      {hospital.phone}
                    </a>
                  </div>
                )}
                {hospital.email && (
                  <div>
                    <div className="text-sm font-medium text-gray-700">Email</div>
                    <a href={`mailto:${hospital.email}`} className="text-sm text-blue-600 hover:text-blue-800">
                      {hospital.email}
                    </a>
                  </div>
                )}
                <div>
                  <div className="text-sm font-medium text-gray-700">Address</div>
                  <div className="text-sm text-gray-600">{hospital.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        {hospital.reviews && hospital.reviews.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
            <div className="space-y-4">
              {hospital.reviews
                .filter(review => review.is_verified)
                .slice(0, 5)
                .map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium text-gray-900">{review.user_name}</div>
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(review.created_at).toLocaleDateString('en-PH', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  {review.title && (
                    <div className="font-medium text-gray-900 mb-1">{review.title}</div>
                  )}
                  <div className="text-gray-600">{review.comment}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
