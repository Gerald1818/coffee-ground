import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dwnhejmccuujmqbkswqw.supabase.co';
const supabaseAnonKey = 'sb_publishable_nJOF_Xt4q0mwW2l9YbjlZw_bzaZHfSU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);