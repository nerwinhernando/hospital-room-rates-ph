import { supabase } from '../../../lib/supabase'

export async function GET() {
  try {
    const { data: regions, error } = await supabase
      .from('regions')
      .select('*')
      .limit(5)

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    const { data: hospitals } = await supabase
      .from('hospitals')
      .select('name, city, rating')
      .limit(3)

    return Response.json({
      success: true,
      regions: regions.length,
      hospitals: hospitals?.length || 0,
      sampleData: { regions: regions.slice(0, 2), hospitals }
    })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}