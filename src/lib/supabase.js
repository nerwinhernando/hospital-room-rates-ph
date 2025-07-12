import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// const supabaseUrl = 'https://vfawzjsvmuzeagdoryuf.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
// const supabase = createClient(supabaseUrl, supabaseKey)