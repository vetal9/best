import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fzyubdjcwojfzbsdjogc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6eXViZGpjd29qZnpic2Rqb2djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MTM1ODAsImV4cCI6MjA4OTA4OTU4MH0.KkjpCqZ6Zpdfqxlnx5QSNDFPulYefWtm7ClqlQGrmuI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper functions to match the old base44 API style
export const MoveRequest = {
  async list(orderBy = '-created_date', limit = 200) {
    const column = orderBy.startsWith('-') ? orderBy.slice(1) : orderBy;
    const ascending = !orderBy.startsWith('-');
    const { data, error } = await supabase
      .from('move_requests')
      .select('*')
      .order(column, { ascending })
      .limit(limit);
    if (error) throw error;
    return data || [];
  },

  async create(record) {
    const { data, error } = await supabase
      .from('move_requests')
      .insert([{ ...record, updated_date: new Date().toISOString() }])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase
      .from('move_requests')
      .update({ ...updates, updated_date: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async delete(id) {
    const { error } = await supabase
      .from('move_requests')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },
};