// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Make sure these are set in your .env file:
// EXPO_PUBLIC_SUPABASE_URL=your-project-url
// EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single instance of the Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
