// accessible in the link: http://localhost:3000/api/test-db2
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test regions
    const { data: regions, error: regionsError } = await supabase
      .from('regions')
      .select('*')
      .limit(5)

    if (regionsError) {
      console.error('Regions Error:', regionsError)
      return Response.json({ error: regionsError.message }, { status: 500 })
    }

    // Test hospitals
    const { data: hospitals, error: hospitalsError } = await supabase
      .from('hospitals')
      .select(`
        name,
        city,
        rating,
        regions(name)
      `)
      .limit(3)

    if (hospitalsError) {
      console.error('Hospitals Error:', hospitalsError)
      return Response.json({ error: hospitalsError.message }, { status: 500 })
    }

    // Test rooms
    const { data: rooms, error: roomsError } = await supabase
      .from('rooms')
      .select(`
        price,
        hospitals(name),
        room_types(name)
      `)
      .limit(5)

    // Just to prevent the unused variable warning
    if (roomsError) {
      console.log('Rooms Error:', roomsError);
    }

    return Response.json({
      success: true,
      message: 'Database connection successful!',
      data: {
        regionsCount: regions.length,
        hospitalsCount: hospitals.length,
        roomsCount: rooms?.length || 0,
        sampleRegions: regions.map(r => r.name),
        sampleHospitals: hospitals.map(h => ({
          name: h.name,
          city: h.city,
          region: h.regions?.name,
          rating: h.rating
        })),
        sampleRooms: rooms?.map(r => ({
          hospital: r.hospitals?.name,
          type: r.room_types?.name,
          price: r.price
        })) || []
      }
    })
  } catch (error) {
    console.error('Database test failed:', error)
    return Response.json({ 
      error: error.message,
      success: false 
    }, { status: 500 })
  }
}
