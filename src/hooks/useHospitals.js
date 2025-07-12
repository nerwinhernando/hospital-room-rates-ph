import { useState, useEffect } from 'react'
import { hospitalService } from '@/lib/hospitalService'

export function useHospitals(filters = {}) {
  const [hospitals, setHospitals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchHospitals()
  }, [filters])

  const fetchHospitals = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await hospitalService.getHospitals(filters)
      
      // Transform data for component use
      const transformedData = data.map(hospital => ({
        id: hospital.id,
        name: hospital.name,
        region: hospital.regions?.name || 'Unknown Region',
        city: hospital.city,
        address: hospital.address,
        phone: hospital.phone,
        rating: hospital.rating,
        website: hospital.website,
        description: hospital.description,
        rooms: (hospital.rooms || []).map(room => ({
          id: room.id,
          type: room.room_types?.name || 'Unknown Type',
          name: room.name,
          price: room.price,
          amenities: Array.isArray(room.amenities) 
            ? room.amenities 
            : JSON.parse(room.amenities || '[]'),
          description: room.description
        }))
      }))
      
      setHospitals(transformedData)
    } catch (err) {
      console.error('Error fetching hospitals:', err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const refetch = () => {
    fetchHospitals()
  }

  return { hospitals, loading, error, refetch }
}

export function useRegions() {
  const [regions, setRegions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRegions()
  }, [])

  const fetchRegions = async () => {
    try {
      setLoading(true)
      const data = await hospitalService.getRegions()
      setRegions(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { regions, loading, error }
}

export function useRoomTypes() {
  const [roomTypes, setRoomTypes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRoomTypes()
  }, [])

  const fetchRoomTypes = async () => {
    try {
      setLoading(true)
      const data = await hospitalService.getRoomTypes()
      setRoomTypes(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { roomTypes, loading, error }
}
