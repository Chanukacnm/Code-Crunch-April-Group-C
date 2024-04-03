import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gxrmpsyehmarauomhxhu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cm1wc3llaG1hcmF1b21oeGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIxMzk0MzMsImV4cCI6MjAyNzcxNTQzM30.vpxzM3Gf2ciqATQl4B6K6fYjpY04gj-_2itcYWodr7k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;