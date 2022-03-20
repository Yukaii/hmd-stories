import { createClient } from 'supabase'
import { PostgrestQueryBuilder } from '@supabase/postgrest-js'

const supabaseUrl = Deno.env.get('SUPABASE_URL') as string
const supabaseKey = Deno.env.get('SUPABASE_KEY') as string

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

export function getQueryBuilder<T> (tableName: string) {
  return supabase.from(tableName) as unknown as PostgrestQueryBuilder<T>
}
