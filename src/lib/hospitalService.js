import { supabase } from './supabase'

export const hospitalService = {
  // Get all regions
  async getRegions() {
    const { data, error } = await supabase
      .from('regions')
      .select('*')
      .order('name')
    
    if (error) throw error
    return data
  },

  // Get all room types
  async getRoomTypes() {
    const { data, error } = await supabase
      .from('room_types')
      .select('*')
      .order('name')
    
    if (error) throw error
    return data
  },

  // Get hospitals with filters
  async getHospitals(filters = {}) {
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
          description,
          room_types(name)
        )
      `)
      .eq('is_active', true)

    // Apply filters
    if (filters.regionId) {
      query = query.eq('region_id', filters.regionId)
    }

    if (filters.city) {
      query = query.ilike('city', `%${filters.city}%`)
    }

    if (filters.name) {
      query = query.ilike('name', `%${filters.name}%`)
    }

    const { data, error } = await query.order('rating', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Search hospitals by text
  async searchHospitals(searchTerm) {
    const { data, error } = await supabase
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
      .eq('is_active', true)
      .or(`name.ilike.%${searchTerm}%,city.ilike.%${searchTerm}%`)
      .order('rating', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Get rooms by price range
  async getRoomsByPriceRange(minPrice, maxPrice, roomType = null) {
    let query = supabase
      .from('rooms')
      .select(`
        *,
        hospitals(name, city, rating),
        room_types(name)
      `)
      .eq('is_available', true)
      .gte('price', minPrice)
      .lte('price', maxPrice)

    if (roomType) {
      query = query.eq('room_types.name', roomType)
    }

    const { data, error } = await query.order('price')
    
    if (error) throw error
    return data
  },

  // Get hospital by ID with full details
  async getHospitalById(id) {
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
      .eq('id', id)
      .eq('is_active', true)
      .single()
    
    if (error) throw error
    return data
  },

  // Add a review
  async addReview(hospitalId, review) {
    const { data, error } = await supabase
      .from('reviews')
      .insert({
        hospital_id: hospitalId,
        user_name: review.userName,
        user_email: review.userEmail,
        rating: review.rating,
        title: review.title,
        comment: review.comment,
        is_verified: false
      })
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Get amenities
  async getAmenities() {
    const { data, error } = await supabase
      .from('amenities')
      .select('*')
      .order('category', 'name')
    
    if (error) throw error
    return data
  }
}
