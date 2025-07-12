'use client'

import React, { useState, useEffect } from 'react'
import { MapPin, Phone, Star, Globe, ArrowLeft } from 'lucide-react'
import { hospitalService } from '@/lib/hospitalService'

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
      const data = await hospitalService.getHospitalById(hospitalId)
      setHospital(data)
    } catch (err) {
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

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600">Error: {error}</div>
        <button onClick={onBack} className="mt-4 text-blue-600 hover:text-blue-800">
          Go Back
        </button>
      </div>
    )
  }

  if (!hospital) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-600">Hospital not found</div>
        <button onClick={onBack} className="mt-4 text-blue-600 hover:text-blue-800">
          Go Back
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Search Results
      </button>

      {/* Hospital Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{hospital.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600">{hospital.city}, {hospital.regions?.name}</span>
            </div>
            {hospital.phone && (
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">{hospital.phone}</span>
              </div>
            )}
            {hospital.website && (
              <div className="flex items-center gap-2 mt-1">
                <Globe className="w-5 h-5 text-gray-400" />
                <a href={hospital.website} target="_blank" rel="noopener noreferrer" 
                   className="text-blue-600 hover:text-blue-800">
                  Visit Website
                </a>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1">
            {renderStars(hospital.rating)}
            <span className="text-lg font-semibold ml-2">{hospital.rating}</span>
          </div>
        </div>

        <div className="text-gray-700 mb-4">{hospital.address}</div>
        
        {hospital.description && (
          <div className="text-gray-600 italic">{hospital.description}</div>
        )}
      </div>

      {/* Rooms */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Rooms</h2>
        {hospital.rooms && hospital.rooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hospital.rooms.map((room) => (
              <div key={room.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{room.name}</h3>
                    <div className="text-sm text-gray-600">{room.room_types?.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600">{formatPrice(room.price)}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                
                {room.description && (
                  <div className="text-sm text-gray-600 mb-2">{room.description}</div>
                )}
                
                {room.amenities && (
                  <div className="text-sm text-gray-600">
                    <strong>Amenities:</strong> {
                      Array.isArray(room.amenities) 
                        ? room.amenities.join(', ')
                        : JSON.parse(room.amenities || '[]').join(', ')
                    }
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">No room information available</div>
        )}
      </div>

      {/* Reviews */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Patient Reviews</h2>
        {hospital.reviews && hospital.reviews.length > 0 ? (
          <div className="space-y-4">
            {hospital.reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-medium text-gray-900">{review.user_name}</div>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>
                </div>
                {review.title && (
                  <div className="font-medium text-gray-900 mb-1">{review.title}</div>
                )}
                <div className="text-gray-600">{review.comment}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-500">No reviews available</div>
        )}
      </div>
    </div>
  )
}
