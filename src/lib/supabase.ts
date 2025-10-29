import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/schema'

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL
const anonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, anonKey)
