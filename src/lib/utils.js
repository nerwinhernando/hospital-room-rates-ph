// Format currency for Philippines
export const formatPHP = (amount) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

// Format date for Philippines
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Safely parse JSON amenities
export const parseAmenities = (amenities) => {
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

// Calculate average rating
export const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.round((sum / reviews.length) * 10) / 10
}

// Filter hospitals by criteria
export const filterHospitals = (hospitals, filters) => {
  return hospitals.filter(hospital => {
    const matchesSearch = !filters.search || 
      hospital.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      hospital.city.toLowerCase().includes(filters.search.toLowerCase())
    
    const matchesRegion = !filters.region || hospital.region === filters.region
    
    const matchesRoomType = !filters.roomType || 
      hospital.rooms.some(room => room.type === filters.roomType)
    
    const matchesPrice = !filters.roomType || 
      hospital.rooms.some(room => 
        room.type === filters.roomType && 
        room.price >= filters.minPrice && 
        room.price <= filters.maxPrice
      )
    
    return matchesSearch && matchesRegion && matchesRoomType && matchesPrice
  })
}
