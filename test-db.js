// This script tests the connection to the Supabase database by fetching data from the 'regions' table.

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  console.log('Testing Supabase connection...')
  console.log('URL:', supabaseUrl)
  console.log('Key:', supabaseAnonKey ? 'Present' : 'Missing')
  
  try {
    // Test 1: Get regions
    const { data: regions, error: regionsError } = await supabase
      .from('regions')
      .select('*')
      .limit(5)
    
    if (regionsError) {
      console.error('Regions Error:', regionsError)
    } else {
      console.log('✅ Regions found:', regions.length)
      console.log('Sample regions:', regions.map(r => r.name))
    }

    // Test 2: Get hospitals
    const { data: hospitals, error: hospitalsError } = await supabase
      .from('hospitals')
      .select(`
        *,
        regions(name)
      `)
      .limit(3)
    
    if (hospitalsError) {
      console.error('Hospitals Error:', hospitalsError)
    } else {
      console.log('✅ Hospitals found:', hospitals.length)
      hospitals.forEach(h => {
        console.log(`- ${h.name} (${h.regions.name})`)
      })
    }

    // Test 3: Get rooms with pricing
    const { data: rooms, error: roomsError } = await supabase
      .from('rooms')
      .select(`
        *,
        hospitals(name),
        room_types(name)
      `)
      .limit(5)
    
    if (roomsError) {
      console.error('Rooms Error:', roomsError)
    } else {
      console.log('✅ Rooms found:', rooms.length)
      rooms.forEach(r => {
        console.log(`- ${r.hospitals.name}: ${r.room_types.name} - ₱${r.price}`)
      })
    }

  } catch (error) {
    console.error('Connection failed:', error.message)
  }
}

testConnection()
