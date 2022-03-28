import { PostgrestQueryBuilder } from '@supabase/postgrest-js';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export function getQueryBuilder<T>(tableName: string) {
  return supabase.from(tableName) as unknown as PostgrestQueryBuilder<T>;
}
