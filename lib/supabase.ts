/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cwmyydixjzvujcrlndma.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3bXl5ZGl4anp2dWpjcmxuZG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMzcyOTMsImV4cCI6MjA0NTYxMzI5M30.ACvV5h-2Oc17C2JgTHfmtb2EGKN8yYV1D4wMUZsvcvU";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
