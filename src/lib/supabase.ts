import { createClient } from '@supabase/supabase-js'
import type { Database, Tables, TablesInsert } from '@/schema'

const supabaseUrl = 'https://cqefrvjfoefkpxsyfasn.supabase.co'
const anonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZWZydmpmb2Vma3B4c3lmYXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NjU4NDAsImV4cCI6MjA3NzM0MTg0MH0.Dz9uFG7Q0Pd_eAxukQhoegB1klDhUthW7g51pRVRz04'

export const supabase = createClient<Database>(supabaseUrl, anonKey)

interface BookingData {
  duration: '30min' | '60min' | null
  service: string
  date: string
  time: string
  name: string
  email: string
  whatsapp: string
  message: string
  paymentReference?: string
  paymentStatus?: 'cancelled' | 'successful' | 'failed'
}

export async function insertBooking(
  bookingData: BookingData,
): Promise<Tables<'bookings'>> {
  const insertData: TablesInsert<'bookings'> = {
    date: bookingData.date,
    duration: bookingData.duration,
    email: bookingData.email,
    message: bookingData.message,
    name: bookingData.name,
    payment_reference: bookingData.paymentReference,
    payment_status: bookingData.paymentStatus,
    service: bookingData.service,
    time: bookingData.time,
    whatsapp: bookingData.whatsapp,
  }

  const { data, error } = await supabase
    .from('bookings')
    .insert(insertData)
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to insert booking: ${error.message}`)
  }

  return data
}

export async function fetchBookedSlots(date: string): Promise<Array<string>> {
  const { data, error } = await supabase
    .from('bookings')
    .select('time')
    .eq('date', date)
    .eq('payment_status', 'successful')

  if (error) {
    throw new Error(`Failed to fetch booked slots: ${error.message}`)
  }

  return data.map((booking) => booking.time)
}
