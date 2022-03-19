import { createClient } from 'supabase'

const supabaseUrl = Deno.env.get('SUPABASE_URL') as string
const supabaseKey = Deno.env.get('SUPABASE_KEY') as string
export default createClient(supabaseUrl, supabaseKey)
